#include "MudflatDirector.h"

#include "Components/AudioComponent.h"
#include "Components/ExponentialHeightFogComponent.h"
#include "Components/PointLightComponent.h"
#include "Components/SceneComponent.h"
#include "Components/SkyLightComponent.h"
#include "Components/StaticMeshComponent.h"
#include "Engine/Engine.h"
#include "Camera/CameraActor.h"
#include "Camera/CameraComponent.h"
#include "Engine/DirectionalLight.h"
#include "Engine/SkyLight.h"
#include "Engine/ExponentialHeightFog.h"
#include "Engine/StaticMesh.h"
#include "Kismet/GameplayStatics.h"
#include "Materials/MaterialInstanceDynamic.h"
#include "Materials/MaterialInterface.h"
#include "Sound/SoundWaveProcedural.h"
#include "UObject/ConstructorHelpers.h"
#include "GameFramework/PlayerController.h"
#include "GameFramework/Pawn.h"
#include "InputCoreTypes.h"
#include "Misc/CommandLine.h"
#include "Misc/Parse.h"

#include <cmath>

namespace MudflatVisual
{
    const FLinearColor Cement(0.44f, 0.47f, 0.46f, 1.0f);
    const FLinearColor Teal(0.18f, 0.34f, 0.31f, 1.0f);
    const FLinearColor Mud(0.16f, 0.13f, 0.10f, 1.0f);
    const FLinearColor MudLight(0.30f, 0.28f, 0.22f, 1.0f);
    const FLinearColor Clay(0.55f, 0.42f, 0.28f, 1.0f);
    const FLinearColor Shell(0.72f, 0.68f, 0.56f, 1.0f);
    const FLinearColor WorkBlue(0.10f, 0.20f, 0.24f, 1.0f);
    const FLinearColor Warning(0.74f, 0.18f, 0.14f, 1.0f);
    const FLinearColor Mold(0.06f, 0.14f, 0.10f, 1.0f);
}

using namespace MudflatVisual;

AMudflatDirector::AMudflatDirector()
{
    PrimaryActorTick.bCanEverTick = true;
    Root = CreateDefaultSubobject<USceneComponent>(TEXT("Root"));
    RootComponent = Root;
    ControlA = FVector(-850.0f, -200.0f, 110.0f);
    ControlB = FVector(250.0f, 950.0f, 110.0f);
    ActiveSource = ControlA;
}

void AMudflatDirector::BeginPlay()
{
    Super::BeginPlay();
    BuildScene();
    BuildFamilies();
    // Review mode is explicit; a normal launch is a real player route.
    // The runtime verifier passes -RetideAutoDemo so it can deterministically capture the beats.
    bAutoDemo = FParse::Param(FCommandLine::Get(), TEXT("RetideAutoDemo"));
    UE_LOG(LogTemp, Display, TEXT("RETIDE_BEAT | MODE | %s"), bAutoDemo ? TEXT("AUTO_REVIEW") : TEXT("PLAYER_ROUTE"));

    // The migrated map can contain a stale PlayerStart from an earlier blockout.
    // Place the player on the mudflat and aim the first review toward Control A so
    // the standalone slice opens on readable work, not an empty sky/floor frame.
    if (APlayerController* PC = GetWorld()->GetFirstPlayerController())
    {
        if (APawn* Pawn = PC->GetPawn())
        {
            const FVector ReviewStart(-1100.0f, -450.0f, 96.0f);
            const FRotator ReviewFacing(0.0f, 47.0f, 0.0f);
            Pawn->SetActorLocation(ReviewStart);
            Pawn->SetActorRotation(ReviewFacing);
            PC->SetControlRotation(ReviewFacing);
            UE_LOG(LogTemp, Display, TEXT("RETIDE_BEAT | PLAYER_START | x=%.0f y=%.0f z=%.0f yaw=%.0f"),
                ReviewStart.X, ReviewStart.Y, ReviewStart.Z, ReviewFacing.Yaw);
        }

        if (FParse::Param(FCommandLine::Get(), TEXT("RetideCaptureFrame")))
        {
            const FVector CameraLocation = ControlA + FVector(-105.0f, -105.0f, 125.0f);
            const FVector CameraTarget = ControlA + FVector(0.0f, 0.0f, 110.0f);
            FActorSpawnParameters CameraParams;
            CameraParams.SpawnCollisionHandlingOverride = ESpawnActorCollisionHandlingMethod::AlwaysSpawn;
            if (ACameraActor* ReviewCamera = GetWorld()->SpawnActor<ACameraActor>(CameraLocation, FRotator::ZeroRotator, CameraParams))
            {
                ReviewCamera->SetActorRotation((CameraTarget - CameraLocation).Rotation());
                ReviewCamera->GetCameraComponent()->FieldOfView = 50.0f;
                ReviewCamera->GetCameraComponent()->PostProcessSettings.bOverride_AutoExposureBias = true;
                ReviewCamera->GetCameraComponent()->PostProcessSettings.AutoExposureBias = -0.5f;
                PC->SetViewTarget(ReviewCamera);
                UE_LOG(LogTemp, Display, TEXT("RETIDE_BEAT | CAPTURE_FRAME | target=control_a"));
            }
        }
    }

    if (APlayerController* PC = GetWorld()->GetFirstPlayerController())
    {
        EnableInput(PC);
        if (InputComponent)
        {
            InputComponent->BindKey(EKeys::E, IE_Pressed, this, &AMudflatDirector::TriggerPulse);
            InputComponent->BindKey(EKeys::R, IE_Pressed, this, &AMudflatDirector::ResetDemo);
        }
    }

    Phase = EMudflatPhase::Intro;
    PhaseTime = 0.0f;
    AutoElapsed = 0.0f;
    bAutoAlarm2Triggered = false;
    ShowMessage(TEXT("你是新来的海防警报值守员。检查第一个控制箱。"), FColor(220, 210, 175));
}

void AMudflatDirector::Tick(float DeltaSeconds)
{
    Super::Tick(DeltaSeconds);
    PhaseTime += DeltaSeconds;
    AutoElapsed += DeltaSeconds;

    if (bAutoDemo && !bAutoAlarm2Triggered && PulseCount == 1 &&
        Phase == EMudflatPhase::Redirect && AutoElapsed >= 35.0f)
    {
        bAutoAlarm2Triggered = true;
        TriggerPulse();
    }

    switch (Phase)
    {
    case EMudflatPhase::Intro:
        if (PhaseTime >= 8.0f)
        {
            Phase = EMudflatPhase::FamiliesLeave;
            PhaseTime = 0.0f;
            ShowMessage(TEXT("家属把归面留在滩涂，开始离开。"), FColor(185, 220, 180));
        }
        break;
    case EMudflatPhase::FamiliesLeave:
        UpdateFamilies(DeltaSeconds);
        if (PhaseTime >= 8.0f)
        {
            Phase = EMudflatPhase::Ignition;
            PhaseTime = 0.0f;
            ShowMessage(TEXT("最后一声音警报响起。潮水没有来。"), FColor(220, 120, 80));
            PlayPulseSound();
        }
        break;
    case EMudflatPhase::Ignition:
        AnimateIgnition(DeltaSeconds);
        if (PhaseTime >= 6.0f)
        {
            Phase = EMudflatPhase::FirstSounding;
            PhaseTime = 0.0f;
            bDeep = false;
            ShowMessage(TEXT("按 E 启动测试警报，用回声测深。"), FColor(220, 210, 175));
        }
        break;
    case EMudflatPhase::FirstSounding:
        if (bAutoDemo && PhaseTime >= 3.0f)
        {
            TriggerPulse();
        }
        break;
    case EMudflatPhase::Redirect:
        break;
    case EMudflatPhase::Done:
        break;
    }

    if (!bAutoDemo && Phase == EMudflatPhase::Redirect && PulseCount >= 2 && IsPlayerNearTower(520.0f))
    {
        Phase = EMudflatPhase::Done;
        ShowMessage(TEXT("你冲进警报塔，关上门。返潮在外面继续。"), FColor(220, 120, 80));
        UE_LOG(LogTemp, Display, TEXT("RETIDE_BEAT | PLAYER_FINISH | route=control_a-control_b-tower"));
    }


    const float PressureAlpha = bDeep ? 1.0f : 0.0f;
    for (int32 Index = 0; Index < PressureProps.Num(); ++Index)
    {
        if (UStaticMeshComponent* Prop = PressureProps[Index])
        {
            const FVector Base = PressureBaseLocations.IsValidIndex(Index)
                ? PressureBaseLocations[Index] : Prop->GetComponentLocation();
            const FVector BaseScale = PressureBaseScales.IsValidIndex(Index)
                ? PressureBaseScales[Index] : Prop->GetComponentScale();
            const float Side = Index % 2 == 0 ? -1.0f : 1.0f;
            const FVector Target = Base + FVector(Side * 34.0f * PressureAlpha, 0.0f, -5.0f * PressureAlpha);
            Prop->SetWorldLocation(FMath::VInterpTo(Prop->GetComponentLocation(), Target, DeltaSeconds, 8.0f));
            FVector TargetScale = BaseScale;
            TargetScale.Z *= (1.0f - 0.18f * PressureAlpha);
            Prop->SetWorldScale3D(FMath::VInterpTo(Prop->GetComponentScale(), TargetScale, DeltaSeconds, 8.0f));
        }
    }

    if (Father && bFatherAssetReady && !Father->IsHidden() && Phase != EMudflatPhase::Done)
    {
        if (Phase == EMudflatPhase::Redirect && FatherRiseTime < 2.0f)
        {
            FatherRiseTime += DeltaSeconds;
            const float Rise = FMath::Clamp(FatherRiseTime / 2.0f, 0.0f, 1.0f);
            const float RiseScale = FMath::Lerp(0.05f, 1.0f, Rise);
            Father->SetActorScale3D(FVector(RiseScale, RiseScale, RiseScale));
        }

        const FVector Current = Father->GetActorLocation();
        FVector ToTarget = ActiveSource - Current;
        ToTarget.Z = 0.0f;
        if (ToTarget.SizeSquared() > 2500.0f)
        {
            const FVector Step = ToTarget.GetSafeNormal() * DeltaSeconds * 120.0f;
            Father->SetActorLocation(Current + Step);
            Father->SetActorRotation(FRotator(0.0f, Step.Rotation().Yaw + 180.0f, 0.0f));
        }
    }

    if (bDeep)
    {
        for (int32 Index = 0; Index < DustProps.Num(); ++Index)
        {
            if (UStaticMeshComponent* Dust = DustProps[Index])
            {
                FVector Base = DustBaseLocations.IsValidIndex(Index)
                    ? DustBaseLocations[Index] : Dust->GetComponentLocation();
                FVector Current = Dust->GetComponentLocation();
                Current.Z -= DeltaSeconds * 220.0f;
                if (Current.Z < Base.Z - 180.0f)
                {
                    Current.Z = Base.Z;
                }
                Dust->SetWorldLocation(Current);
            }
        }
    }
}

UStaticMeshComponent* AMudflatDirector::AddMesh(AActor* InOwner, const TCHAR* MeshPath,
    const FVector& Location, const FVector& Scale, const FLinearColor& Color, bool bCollision, bool bApplyColor)
{
    if (!InOwner)
    {
        return nullptr;
    }

    UStaticMesh* Mesh = Cast<UStaticMesh>(StaticLoadObject(UStaticMesh::StaticClass(), nullptr, MeshPath));
    if (!Mesh)
    {
        return nullptr;
    }

    UStaticMeshComponent* Component = NewObject<UStaticMeshComponent>(InOwner);
    Component->SetStaticMesh(Mesh);
    Component->SetWorldLocation(Location);
    Component->SetWorldScale3D(Scale);
    Component->SetCollisionEnabled(bCollision ? ECollisionEnabled::QueryAndPhysics : ECollisionEnabled::NoCollision);
    Component->SetCollisionProfileName(bCollision ? TEXT("BlockAll") : TEXT("NoCollision"));

    if (bApplyColor)
    {
        if (UMaterialInterface* BaseMaterial = Cast<UMaterialInterface>(StaticLoadObject(
            UMaterialInterface::StaticClass(), nullptr, TEXT("/Engine/BasicShapes/BasicShapeMaterial.BasicShapeMaterial"))))
        {
            if (UMaterialInstanceDynamic* Material = UMaterialInstanceDynamic::Create(BaseMaterial, InOwner))
            {
                Material->SetVectorParameterValue(TEXT("Color"), Color);
                Component->SetMaterial(0, Material);
            }
        }
    }

    // Runtime-created meshes must follow their owning actor. Without this attach,
    // a family actor moved during FamiliesLeave while its visible parts stayed at
    // the original world locations, producing the floating-fragment look in review.
    if (USceneComponent* OwnerRoot = InOwner->GetRootComponent())
    {
        Component->AttachToComponent(OwnerRoot, FAttachmentTransformRules::KeepWorldTransform);
    }

    Component->RegisterComponent();
    return Component;
}

void AMudflatDirector::AddEffigy(const FVector& Location, float Yaw, bool bHero)
{
    const FRotator Rotation(0.0f, Yaw, 0.0f);
    const FString Label = bHero ? TEXT("HeroEffigy") : TEXT("Effigy");
    UStaticMeshComponent* Base = AddMesh(this, TEXT("/Engine/BasicShapes/Cube.Cube"),
        Location + FVector(0.0f, 0.0f, 24.0f), FVector(0.48f, 0.34f, 0.24f), MudLight);
    UStaticMeshComponent* Torso = AddMesh(this, TEXT("/Engine/BasicShapes/Cube.Cube"),
        Location + FVector(0.0f, 0.0f, 92.0f), FVector(0.30f, 0.23f, 0.58f), bHero ? WorkBlue : Clay);
    UStaticMeshComponent* Head = AddMesh(this, TEXT("/Engine/BasicShapes/Sphere.Sphere"),
        Location + FVector(0.0f, 0.0f, 178.0f), FVector(0.30f, 0.27f, 0.30f), Clay);

    if (Base)
    {
        Base->SetWorldRotation(Rotation);
    }
    if (Torso)
    {
        Torso->SetWorldRotation(Rotation);
    }
    if (Head)
    {
        Head->SetWorldRotation(Rotation);
    }

    if (!bHero)
    {
        const int32 GroupIndex = EffigyGroupCenters.Num();
        EffigyGroupCenters.Add(Location);
        UStaticMeshComponent* Parts[] = { Base, Torso, Head };
        for (UStaticMeshComponent* Part : Parts)
        {
            if (Part)
            {
                EffigyParts.Add(Part);
                EffigyPartBaseLocations.Add(Part->GetComponentLocation());
                EffigyPartBaseRotations.Add(Part->GetComponentRotation());
                EffigyPartBaseScales.Add(Part->GetComponentScale());
                EffigyGroupIndices.Add(GroupIndex);
            }
        }
        return;
    }

    UStaticMeshComponent* ShellMesh = AddMesh(this, TEXT("/Engine/BasicShapes/Cylinder.Cylinder"),
        Location + FVector(0.0f, -29.0f, 108.0f), FVector(0.52f, 0.12f, 0.72f), MudflatVisual::Shell);
    if (ShellMesh)
    {
        ShellMesh->SetWorldRotation(FRotator(90.0f, Yaw, 0.0f));
        FatherParts.Add(ShellMesh);
    }

    for (int32 Index = 0; Index < 7; ++Index)
    {
        const float Angle = -55.0f + Index * 18.0f;
        const float Rad = FMath::DegreesToRadians(Angle);
        const FVector EyeLocation = Location + FVector(0.0f, -48.0f + 16.0f * FMath::Cos(Rad), 115.0f + 42.0f * FMath::Sin(Rad));
        if (UStaticMeshComponent* Eye = AddMesh(this, TEXT("/Engine/BasicShapes/Sphere.Sphere"),
            EyeLocation, FVector(0.07f, 0.035f, 0.07f), FLinearColor(0.85f, 0.76f, 0.40f)))
        {
            FatherParts.Add(Eye);
        }
    }
}

void AMudflatDirector::BuildTower()
{
    const FVector TowerBase(0.0f, 1750.0f, 0.0f);
    for (int32 Index = 0; Index < 4; ++Index)
    {
        const float X = Index % 2 == 0 ? -220.0f : 220.0f;
        const float Y = Index < 2 ? -220.0f : 220.0f;
        AddMesh(this, TEXT("/Engine/BasicShapes/Cube.Cube"), TowerBase + FVector(X, Y, 420.0f),
            FVector(0.14f, 0.14f, 4.2f), MudflatVisual::Cement);
    }
    AddMesh(this, TEXT("/Engine/BasicShapes/Cube.Cube"), TowerBase + FVector(0, 0, 845),
        FVector(2.5f, 2.5f, 0.12f), MudflatVisual::Mold);
    AddMesh(this, TEXT("/Engine/BasicShapes/Cylinder.Cylinder"), TowerBase + FVector(0, 0, 960),
        FVector(0.42f, 0.42f, 0.26f), MudflatVisual::Warning, false);
    AddMesh(this, TEXT("/Engine/BasicShapes/Cube.Cube"), TowerBase + FVector(0, -300, 950),
        FVector(0.34f, 0.18f, 0.24f), MudflatVisual::Shell, false);
}

void AMudflatDirector::BuildFather()
{
    bFatherAssetReady = false;
    Father = GetWorld()->SpawnActor<AActor>(FVector(1100.0f, 420.0f, 0.0f), FRotator::ZeroRotator);
    if (!Father)
    {
        return;
    }

    USceneComponent* FatherRoot = NewObject<USceneComponent>(Father);
    Father->SetRootComponent(FatherRoot);
    FatherRoot->RegisterComponent();
    Father->SetActorHiddenInGame(true);

    // The temporary mannequin/blockout is intentionally not spawned here. The actor stays
    // hidden until a human worker mesh has passed the external three-view Gate and has been
    // imported into this explicit, replaceable slot.
    constexpr const TCHAR* ValidatedFatherPath =
        TEXT("/Game/Mudflat/Art/M01_Father_Validated/M01_Father_Body.M01_Father_Body");
    if (UStaticMeshComponent* Body = AddMesh(Father, ValidatedFatherPath,
        Father->GetActorLocation(), FVector(1.0f), MudflatVisual::WorkBlue, true, false))
    {
        if (FatherRoot)
        {
            // AddMesh keeps existing world-space behavior for the scene; the father body is
            // the one movable asset and must follow the actor's rise/scale animation.
            Body->AttachToComponent(FatherRoot, FAttachmentTransformRules::KeepWorldTransform);
        }
        bFatherAssetReady = true;
        UE_LOG(LogTemp, Display,
            TEXT("M01_FATHER_ASSET | validated body loaded | path=%s"), ValidatedFatherPath);
    }
    if (!bFatherAssetReady)
    {
        UE_LOG(LogTemp, Warning,
            TEXT("M01_FATHER_ASSET | reveal blocked; validated human body missing | expected=%s"),
            ValidatedFatherPath);
    }
}

void AMudflatDirector::BuildScene()
{
    if (bBuilt)
    {
        return;
    }
    bBuilt = true;

    FActorSpawnParameters LightParams;
    LightParams.SpawnCollisionHandlingOverride = ESpawnActorCollisionHandlingMethod::AlwaysSpawn;
    if (ADirectionalLight* Sun = GetWorld()->SpawnActor<ADirectionalLight>(FVector(0, 0, 1600), FRotator(-38, -25, 18), LightParams))
    {
        Sun->GetLightComponent()->SetIntensity(2.50f);
        Sun->GetLightComponent()->SetLightColor(FLinearColor(0.80f, 0.78f, 0.70f));
        Sun->GetLightComponent()->CastShadows = true;
    }
    if (AExponentialHeightFog* Fog = GetWorld()->SpawnActor<AExponentialHeightFog>(FVector(0, 0, 0), FRotator::ZeroRotator, LightParams))
    {
        // Keep the dry coastal air legible at the 1-2 km slice scale; the former
        // density flattened every material into a white-grey board.
        Fog->GetComponent()->SetFogDensity(0.0012f);
        Fog->GetComponent()->SetFogHeightFalloff(0.20f);
        Fog->GetComponent()->SetFogInscatteringColor(FLinearColor(0.17f, 0.21f, 0.21f));
    }
    if (ASkyLight* Sky = GetWorld()->SpawnActor<ASkyLight>(FVector(0, 0, 1200), FRotator::ZeroRotator, LightParams))
    {
        Sky->GetLightComponent()->SetIntensity(0.70f);
        Sky->GetLightComponent()->SetLightColor(FLinearColor(0.46f, 0.52f, 0.55f));
        Sky->GetLightComponent()->RecaptureSky();
    }

    AddMesh(this, TEXT("/Engine/BasicShapes/Cube.Cube"), FVector(0, 450, -30),
        FVector(28.0f, 28.0f, 0.30f), MudflatVisual::Mud);
    AddMesh(this, TEXT("/Engine/BasicShapes/Cube.Cube"), FVector(-1200, 950, 0),
        FVector(0.7f, 8.0f, 0.08f), MudflatVisual::MudLight, false);

    const FVector TowerBase(0.0f, 1750.0f, 0.0f);
    const FVector RedLights[] = {
        ControlA + FVector(0.0f, 0.0f, 130.0f),
        ControlB + FVector(0.0f, 0.0f, 130.0f),
        TowerBase + FVector(0.0f, 0.0f, 980.0f)
    };
    for (const FVector& RedLight : RedLights)
    {
        UPointLightComponent* AlarmLight = NewObject<UPointLightComponent>(this);
        AlarmLight->SetWorldLocation(RedLight);
        AlarmLight->SetIntensity(3200.0f);
        AlarmLight->SetLightColor(FLinearColor(1.0f, 0.22f, 0.18f));
        AlarmLight->SetAttenuationRadius(1100.0f);
        AlarmLight->AttachToComponent(Root, FAttachmentTransformRules::KeepWorldTransform);
        AlarmLight->RegisterComponent();
    }

    // A weak sodium work lamp keeps the 2001 control box readable without turning
    // the scene into a blue underwater effect. Alarm lights remain the only red event.
    if (UPointLightComponent* WorkLight = NewObject<UPointLightComponent>(this))
    {
        WorkLight->SetWorldLocation(ControlA + FVector(-220.0f, -180.0f, 360.0f));
        WorkLight->SetIntensity(2000.0f);
        WorkLight->SetLightColor(FLinearColor(1.0f, 0.72f, 0.46f));
        WorkLight->SetAttenuationRadius(650.0f);
        WorkLight->CastShadows = true;
        WorkLight->AttachToComponent(Root, FAttachmentTransformRules::KeepWorldTransform);
        WorkLight->RegisterComponent();
    }

    for (int32 Index = 0; Index < 14; ++Index)
    {
        const FVector DustOrigin = (Index % 2 == 0) ? ControlA : ControlB;
        const FVector Location = DustOrigin + FVector(-60.0f + (Index % 7) * 20.0f, -20.0f + (Index % 3) * 20.0f, 240.0f + (Index % 4) * 50.0f);
        if (UStaticMeshComponent* Dust = AddMesh(this, TEXT("/Engine/BasicShapes/Sphere.Sphere"),
            Location, FVector(0.035f, 0.035f, 0.035f), MudflatVisual::Shell, false))
        {
            Dust->SetVisibility(false);
            DustProps.Add(Dust);
            DustBaseLocations.Add(Location);
        }
    }

    for (int32 Index = 0; Index < 8; ++Index)
    {
        const float X = -1050.0f + (Index % 4) * 700.0f;
        const float Y = 350.0f + (Index / 4) * 420.0f;
        AddEffigy(FVector(X, Y, 0), 180.0f, false);
    }

    // Imported 2001 switchboard parts share one GLB-local origin. Keep every piece
    // at the same world origin; separating the upper shell made the first render
    // read as floating black fragments instead of a working control box.
    const auto AddSwitchboard = [this](const FVector& Center)
    {
        const TCHAR* Parts[] = {
            TEXT("/Game/Mudflat/Art/h00_switchboard/StaticMeshes/Switchboard_LowerShell.Switchboard_LowerShell"),
            TEXT("/Game/Mudflat/Art/h00_switchboard/StaticMeshes/Switchboard_UpperShell.Switchboard_UpperShell"),
            TEXT("/Game/Mudflat/Art/h00_switchboard/StaticMeshes/Switchboard_CaseSeam.Switchboard_CaseSeam"),
            TEXT("/Game/Mudflat/Art/h00_switchboard/StaticMeshes/Switchboard_CallDisplayBezel.Switchboard_CallDisplayBezel"),
            TEXT("/Game/Mudflat/Art/h00_switchboard/StaticMeshes/Switchboard_CallDisplayGlass.Switchboard_CallDisplayGlass"),
            TEXT("/Game/Mudflat/Art/h00_switchboard/StaticMeshes/Switchboard_CallDisplayText.Switchboard_CallDisplayText"),
            TEXT("/Game/Mudflat/Art/h00_switchboard/StaticMeshes/Switchboard_FunctionKey_0.Switchboard_FunctionKey_0"),
            TEXT("/Game/Mudflat/Art/h00_switchboard/StaticMeshes/Switchboard_FunctionKey_1.Switchboard_FunctionKey_1"),
            TEXT("/Game/Mudflat/Art/h00_switchboard/StaticMeshes/Switchboard_FunctionKey_2.Switchboard_FunctionKey_2"),
            TEXT("/Game/Mudflat/Art/h00_switchboard/StaticMeshes/Switchboard_FunctionKey_3.Switchboard_FunctionKey_3")
        };
        for (const TCHAR* Part : Parts)
        {
            if (UStaticMeshComponent* Component = AddMesh(this, Part, Center,
                FVector(0.75f), MudflatVisual::Cement, false, false))
            {
                // The GLB's readable face is +Y; the slice approaches from -Y.
                Component->SetWorldRotation(FRotator(0.0f, 180.0f, 0.0f));
            }
        }
    };
    AddSwitchboard(ControlA + FVector(0.0f, 0.0f, 110.0f));
    AddSwitchboard(ControlB + FVector(0.0f, 0.0f, 110.0f));

    for (int32 Index = 0; Index < 6; ++Index)
    {
        const FVector Location = ControlA + FVector(-500.0f + (Index % 6) * 200.0f,
            140.0f + (Index / 6) * 45.0f, 6.0f);
        if (UStaticMeshComponent* Prop = AddMesh(this, TEXT("/Engine/BasicShapes/Cube.Cube"),
            Location, FVector(0.90f, 0.06f, 0.03f), MudflatVisual::Shell, false))
        {
            PressureProps.Add(Prop);
            PressureBaseLocations.Add(Location);
            PressureBaseScales.Add(Prop->GetComponentScale());
        }
    }

    BuildTower();
    const FVector PhoneCenter(0.0f, 1450.0f, 900.0f);
    const TCHAR* PhoneParts[] = {
        TEXT("/Game/Mudflat/Art/h00_red_phone/StaticMeshes/Phone_LowerShell.Phone_LowerShell"),
        TEXT("/Game/Mudflat/Art/h00_red_phone/StaticMeshes/Phone_UpperShell.Phone_UpperShell"),
        TEXT("/Game/Mudflat/Art/h00_red_phone/StaticMeshes/Phone_Handset_Grip.Phone_Handset_Grip"),
        TEXT("/Game/Mudflat/Art/h00_red_phone/StaticMeshes/Phone_Handset_Cap_+1.Phone_Handset_Cap_+1"),
        TEXT("/Game/Mudflat/Art/h00_red_phone/StaticMeshes/Phone_Handset_Cap_-1.Phone_Handset_Cap_-1"),
        TEXT("/Game/Mudflat/Art/h00_red_phone/StaticMeshes/Phone_ShellSeam.Phone_ShellSeam"),
        TEXT("/Game/Mudflat/Art/h00_red_phone/StaticMeshes/Phone_CoiledCord.Phone_CoiledCord")
    };
    for (const TCHAR* Part : PhoneParts)
    {
        AddMesh(this, Part, PhoneCenter, FVector(0.6f), MudflatVisual::Warning, false, false);
    }
    BuildFather();
}

void AMudflatDirector::BuildFamilies()
{
    const FVector StartA(-1050.0f, 250.0f, 0.0f);
    const FVector EndA(-350.0f, 1400.0f, 0.0f);
    for (int32 Index = 0; Index < 4; ++Index)
    {
        AActor* Family = GetWorld()->SpawnActor<AActor>(FVector::ZeroVector, FRotator::ZeroRotator);
        if (!Family)
        {
            continue;
        }

        USceneComponent* FamilyRoot = NewObject<USceneComponent>(Family);
        Family->SetRootComponent(FamilyRoot);
        FamilyRoot->RegisterComponent();

        const FVector Start = StartA + FVector(Index * 160.0f, -80.0f + Index * 40.0f, 0.0f);
        const FVector End = EndA + FVector(Index * 120.0f, -60.0f + Index * 30.0f, 0.0f);
        AddMesh(Family, TEXT("/Engine/BasicShapes/Cylinder.Cylinder"), Start + FVector(0, 0, 80),
            FVector(0.22f, 0.22f, 0.80f), MudflatVisual::WorkBlue, false);
        AddMesh(Family, TEXT("/Engine/BasicShapes/Sphere.Sphere"), Start + FVector(0, 0, 175),
            FVector(0.20f, 0.20f, 0.20f), MudflatVisual::MudLight, false);

        FamilySilhouettes.Add(Family);
        FamilyStartLocations.Add(Start);
        FamilyEndLocations.Add(End);
    }
}

void AMudflatDirector::UpdateFamilies(float DeltaSeconds)
{
    const float Alpha = FMath::Clamp(PhaseTime / 8.0f, 0.0f, 1.0f);
    for (int32 Index = 0; Index < FamilySilhouettes.Num(); ++Index)
    {
        AActor* Silhouette = FamilySilhouettes[Index];
        if (!Silhouette)
        {
            continue;
        }
        const FVector Start = FamilyStartLocations[Index];
        const FVector End = FamilyEndLocations[Index];
        Silhouette->SetActorLocation(FMath::Lerp(Start, End, Alpha));
        const float Fade = FMath::Clamp((Alpha - 0.7f) / 0.3f, 0.0f, 1.0f);
        Silhouette->SetActorScale3D(FVector(1.0f - 0.5f * Fade));
    }
}

void AMudflatDirector::AnimateIgnition(float DeltaSeconds)
{
    const float Alpha = FMath::Clamp(PhaseTime / 6.0f, 0.0f, 1.0f);
    const float YawDelta = FMath::InterpEaseOut(0.0f, -90.0f, Alpha, 2.0f);
    const float Press = FMath::InterpEaseIn(0.0f, 0.35f, Alpha, 1.5f);
    for (int32 Index = 0; Index < EffigyParts.Num(); ++Index)
    {
        UStaticMeshComponent* Part = EffigyParts[Index];
        if (!Part)
        {
            continue;
        }
        const int32 Group = EffigyGroupIndices[Index];
        const FVector Center = EffigyGroupCenters[Group];
        const FVector BaseLoc = EffigyPartBaseLocations[Index];
        const FRotator BaseRot = EffigyPartBaseRotations[Index];
        const FVector BaseScale = EffigyPartBaseScales[Index];
        const FVector Offset = BaseLoc - Center;
        const float Rad = FMath::DegreesToRadians(YawDelta);
        const float Cos = FMath::Cos(Rad);
        const float Sin = FMath::Sin(Rad);
        const FVector Rotated(Offset.X * Cos - Offset.Y * Sin, Offset.X * Sin + Offset.Y * Cos, Offset.Z);
        Part->SetWorldLocation(Center + Rotated + FVector(0.0f, 0.0f, -Press * 40.0f));
        Part->SetWorldRotation(BaseRot + FRotator(0.0f, YawDelta, 0.0f));
        Part->SetWorldScale3D(FVector(BaseScale.X, BaseScale.Y, BaseScale.Z * (1.0f - Press)));
    }
}

void AMudflatDirector::TriggerPulse()
{
    if (!bBuilt)
    {
        return;
    }

    if (!bAutoDemo && (Phase == EMudflatPhase::FirstSounding || Phase == EMudflatPhase::Redirect) &&
        !IsPlayerNearActiveSource(520.0f))
    {
        ShowMessage(TEXT("靠近正在发出回声的控制箱。"), FColor(220, 210, 175));
        UE_LOG(LogTemp, Display, TEXT("RETIDE_BEAT | INPUT_REJECTED | reason=outside_active_control_box"));
        return;
    }

    ++PulseCount;
    PlayPulseSound();

        if (Phase == EMudflatPhase::FirstSounding)
        {
            bDeep = true;
            ActiveSource = ControlA;
        Phase = EMudflatPhase::Redirect;
        PhaseTime = 0.0f;
            FatherRiseTime = 0.0f;
            for (UStaticMeshComponent* Dust : DustProps)
            {
                if (Dust)
                {
                    Dust->SetVisibility(true);
                }
            }
        if (Father && bFatherAssetReady)
        {
            Father->SetActorHiddenInGame(false);
            Father->SetActorScale3D(FVector(0.05f, 0.05f, 0.05f));
        }
        else
        {
            UE_LOG(LogTemp, Warning,
                TEXT("M01_FATHER_ASSET | AUTO_ALARM_1 reveal blocked; Gate-approved body is not present"));
            ShowMessage(TEXT("M01 father asset is not Gate-approved yet; reveal blocked."), FColor(240, 180, 80));
        }
        ShowMessage(TEXT("警报 #1  回声拖长，干燥空间正在下沉。"), FColor(220, 120, 80));
        if (bAutoDemo)
        {
            UE_LOG(LogTemp, Display, TEXT("RETIDE_BEAT | AUTO_ALARM_1 | elapsed=%.2f | source=A"), AutoElapsed);
        }
    }
    else if (Phase == EMudflatPhase::Redirect)
    {
        ActiveSource = (ActiveSource == ControlA) ? ControlB : ControlA;
        const FString State = ActiveSource == ControlB
            ? TEXT("警报 #2  第二个控制箱把返潮者引向另一侧。")
            : TEXT("警报 #2  它又转向第一个控制箱。");
        ShowMessage(*State, FColor(220, 120, 80));
        if (bAutoDemo)
        {
            const TCHAR* SourceName = ActiveSource == ControlB ? TEXT("B") : TEXT("A");
            UE_LOG(LogTemp, Display, TEXT("RETIDE_BEAT | AUTO_ALARM_2 | elapsed=%.2f | source=%s | pulse=%d"),
                AutoElapsed, SourceName, PulseCount);
        }

        ShowMessage(TEXT("第二个控制箱已经改向。去警报塔。"), FColor(220, 120, 80));
    }
    else
    {
        ShowMessage(TEXT("现在还不是测深的时候。"), FColor(220, 210, 175));
    }
}

bool AMudflatDirector::IsPlayerNearActiveSource(float Radius) const
{
    if (const APlayerController* PC = GetWorld()->GetFirstPlayerController())
    {
        if (const APawn* Pawn = PC->GetPawn())
        {
            return FVector::Dist2D(Pawn->GetActorLocation(), ActiveSource) <= Radius;
        }
    }
    return false;
}

bool AMudflatDirector::IsPlayerNearTower(float Radius) const
{
    const FVector TowerCenter(0.0f, 1750.0f, 0.0f);
    if (const APlayerController* PC = GetWorld()->GetFirstPlayerController())
    {
        if (const APawn* Pawn = PC->GetPawn())
        {
            return FVector::Dist2D(Pawn->GetActorLocation(), TowerCenter) <= Radius;
        }
    }
    return false;
}

void AMudflatDirector::ResetDemo()
{
    UGameplayStatics::OpenLevel(this, FName(*GetWorld()->GetName()));
}

void AMudflatDirector::PlayPulseSound()
{
    USoundWaveProcedural* Wave = NewObject<USoundWaveProcedural>(this);
    if (!Wave)
    {
        return;
    }

    constexpr int32 SampleRate = 48000;
    constexpr float Duration = 0.75f;
    const int32 SampleCount = static_cast<int32>(SampleRate * Duration);
    TArray<int16> Samples;
    Samples.SetNumUninitialized(SampleCount);
    for (int32 Index = 0; Index < SampleCount; ++Index)
    {
        const float Time = static_cast<float>(Index) / SampleRate;
        const float Envelope = FMath::Clamp(1.0f - Time / Duration, 0.0f, 1.0f);
        const float Tone = FMath::Sin(2.0f * PI * (bDeep ? 180.0f : 310.0f) * Time);
        Samples[Index] = static_cast<int16>(Tone * Envelope * 12000.0f);
    }

    Wave->SetSampleRate(SampleRate);
    Wave->NumChannels = 1;
    Wave->Duration = Duration;
    Wave->QueueAudio(reinterpret_cast<const uint8*>(Samples.GetData()), Samples.Num() * sizeof(int16));

    UAudioComponent* Audio = NewObject<UAudioComponent>(this);
    Audio->SetSound(Wave);
    Audio->SetWorldLocation(ActiveSource);
    Audio->RegisterComponent();
    Audio->Play();
}

void AMudflatDirector::ShowMessage(const FString& Message, const FColor& Color)
{
    UE_LOG(LogTemp, Display, TEXT("RETIDE_BEAT | %s"), *Message);
    if (GEngine)
    {
        GEngine->AddOnScreenDebugMessage(-1, 4.0f, Color, Message);
    }
}
