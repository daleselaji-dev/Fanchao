#include "H00DemoDirector.h"

#include "Components/StaticMeshComponent.h"
#include "Components/TextRenderComponent.h"
#include "Components/PointLightComponent.h"
#include "Engine/Engine.h"
#include "Engine/PointLight.h"
#include "Engine/StaticMeshActor.h"
#include "EngineUtils.h"
#include "GameFramework/Character.h"
#include "H00Character.h"
#include "H00Returner.h"
#include "Kismet/GameplayStatics.h"
#include "Misc/CommandLine.h"
#include "TimerManager.h"
#include "UObject/ConstructorHelpers.h"

AH00DemoDirector::AH00DemoDirector()
{
    PrimaryActorTick.bCanEverTick = false;
    static ConstructorHelpers::FObjectFinder<UStaticMesh> Cube(TEXT("/Engine/BasicShapes/Cube.Cube"));
    if (Cube.Succeeded())
    {
        CubeMesh = Cube.Object;
    }
}

void AH00DemoDirector::BeginPlay()
{
    Super::BeginPlay();

    // Neutral work lights only make the graybox legible; lighting style is not under review yet.
    APointLight* HallLight = GetWorld()->SpawnActor<APointLight>(FVector(-750.0f, 0.0f, 850.0f), FRotator::ZeroRotator);
    UPointLightComponent* HallLightComponent = CastChecked<UPointLightComponent>(HallLight->GetLightComponent());
    HallLightComponent->SetIntensity(15000.0f);
    HallLightComponent->SetAttenuationRadius(3800.0f);
    HallLightComponent->SetLightColor(FLinearColor(1.0f, 0.92f, 0.80f));
    APointLight* BackstageLight = GetWorld()->SpawnActor<APointLight>(FVector(850.0f, 0.0f, 850.0f), FRotator::ZeroRotator);
    UPointLightComponent* BackstageLightComponent = CastChecked<UPointLightComponent>(BackstageLight->GetLightComponent());
    BackstageLightComponent->SetIntensity(15000.0f);
    BackstageLightComponent->SetAttenuationRadius(4200.0f);
    BackstageLightComponent->SetLightColor(FLinearColor(0.92f, 0.96f, 1.0f));

    // One continuous floor, then only functional partitions: A hall, B corridor, C archive,
    // D loading bay, and E wash-up room. No visual rule is encoded with colored route markers.
    SpawnBox(TEXT("Floor"), FVector(200.0f, 0.0f, -35.0f), FVector(31.0f, 18.0f, 0.35f));

    AStaticMeshActor* Hall = SpawnBox(TEXT("A_BanquetHall"), FVector(-1350.0f, 0.0f, 20.0f), FVector(7.0f, 7.0f, 0.20f));
    SpawnLabel(Hall, TEXT("A  BANQUET HALL"), FVector(-250.0f, 0.0f, 90.0f));
    SpawnBox(TEXT("A_Table_1"), FVector(-1500.0f, -280.0f, 45.0f), FVector(2.3f, 0.8f, 0.45f));
    SpawnBox(TEXT("A_Table_2"), FVector(-1160.0f, 260.0f, 45.0f), FVector(2.0f, 0.8f, 0.45f));
    SpawnBox(TEXT("A_ServiceDoorFrame"), FVector(-680.0f, -560.0f, 160.0f), FVector(0.15f, 1.1f, 2.1f));

    AStaticMeshActor* Corridor = SpawnBox(TEXT("B_ServiceCorridor"), FVector(220.0f, 0.0f, 20.0f), FVector(12.0f, 7.0f, 0.20f));
    SpawnLabel(Corridor, TEXT("B  SERVICE CORRIDOR"), FVector(-250.0f, 0.0f, 90.0f));
    // Tables preserve the longer open service line on the north side; low shelves create the short south aisle.
    SpawnBox(TEXT("B_ServiceCounter"), FVector(50.0f, 480.0f, 85.0f), FVector(5.8f, 0.7f, 0.85f));
    SpawnBox(TEXT("B_Shelf_1"), FVector(80.0f, -420.0f, 60.0f), FVector(3.4f, 0.48f, 0.60f));
    SpawnBox(TEXT("B_Shelf_2"), FVector(680.0f, -420.0f, 60.0f), FVector(2.3f, 0.48f, 0.60f));
    SpawnBox(TEXT("B_StorageRack"), FVector(870.0f, 180.0f, 120.0f), FVector(0.45f, 2.0f, 1.20f));

    AStaticMeshActor* ControlRoom = SpawnBox(TEXT("C_ArchiveRoom"), FVector(250.0f, 760.0f, 20.0f), FVector(3.4f, 2.4f, 0.20f));
    SpawnLabel(ControlRoom, TEXT("C  VIDEO ARCHIVE"), FVector(0.0f, 0.0f, 90.0f));
    ArchiveStation = SpawnBox(TEXT("C_RecPauseMachine"), FVector(250.0f, 760.0f, 85.0f), FVector(1.4f, 0.65f, 0.85f));
    SpawnLabel(ArchiveStation, TEXT("REC / PAUSE"), FVector(0.0f, -75.0f, 95.0f));
    ArchiveStatus = NewObject<UTextRenderComponent>(ArchiveStation, TEXT("ArchiveStatus"));
    ArchiveStatus->SetupAttachment(ArchiveStation->GetStaticMeshComponent());
    ArchiveStatus->SetRelativeLocation(FVector(0.0f, 75.0f, 125.0f));
    ArchiveStatus->SetWorldSize(26.0f);
    ArchiveStatus->SetHorizontalAlignment(EHTA_Center);
    ArchiveStatus->SetText(FText::FromString(TEXT("TAPE IN HAND")));
    ArchiveStatus->RegisterComponent();

    AStaticMeshActor* LoadingBay = SpawnBox(TEXT("D_LoadingBay"), FVector(1550.0f, 0.0f, 20.0f), FVector(2.8f, 3.5f, 0.20f));
    SpawnLabel(LoadingBay, TEXT("D  LOADING BAY"), FVector(0.0f, 0.0f, 90.0f));
    SpawnBox(TEXT("D_Crate_1"), FVector(1650.0f, 210.0f, 55.0f), FVector(0.65f, 0.65f, 0.55f));
    SpawnBox(TEXT("D_Crate_2"), FVector(1450.0f, -250.0f, 55.0f), FVector(0.65f, 0.65f, 0.55f));

    AStaticMeshActor* WashRoom = SpawnBox(TEXT("E_WashUp"), FVector(900.0f, -700.0f, 20.0f), FVector(3.5f, 2.5f, 0.20f));
    SpawnLabel(WashRoom, TEXT("E  WASH-UP"), FVector(0.0f, 0.0f, 90.0f));
    SpawnBox(TEXT("E_WashBench"), FVector(900.0f, -730.0f, 80.0f), FVector(1.9f, 0.55f, 0.80f));
    SpawnBox(TEXT("E_DishRack"), FVector(1130.0f, -600.0f, 115.0f), FVector(0.45f, 1.4f, 1.15f));

    Returner = GetWorld()->SpawnActor<AH00Returner>();
    Returner->SetRoute({
        FVector(1550.0f, 0.0f, 95.0f),
        FVector(850.0f, 0.0f, 95.0f),
        FVector(250.0f, 500.0f, 95.0f),
        FVector(900.0f, -560.0f, 95.0f),
        FVector(1550.0f, 0.0f, 95.0f)
    });

    UE_LOG(LogTemp, Display, TEXT("H00 | Scene built: A/B/C/D/E, archive station, returner route D-B-C-E-D."));
    Announce(TEXT("H00-R0 graybox: W A S D move | E archive at C | R reset"));

    // Explicit command-line test only. It exercises the same proximity-gated interaction
    // without changing the normal playable flow.
    if (FParse::Param(FCommandLine::Get(), TEXT("H00BehaviorTest")))
    {
        FTimerHandle BehaviorTestTimer;
        GetWorldTimerManager().SetTimer(BehaviorTestTimer, FTimerDelegate::CreateWeakLambda(this, [this]()
        {
            if (AH00Character* Player = Cast<AH00Character>(UGameplayStatics::GetPlayerCharacter(this, 0)))
            {
                Player->SetActorLocation(ArchiveStation->GetActorLocation() + FVector(120.0f, 0.0f, 0.0f));
                UE_LOG(LogTemp, Display, TEXT("H00 | Behavior test: exercising E interaction path at C."));
                TryArchive(Player);
                ResetDemo();
            }
        }), 1.0f, false);
    }
}

AH00DemoDirector* AH00DemoDirector::Find(const UObject* WorldContext)
{
    if (!WorldContext)
    {
        return nullptr;
    }
    UWorld* World = WorldContext->GetWorld();
    if (!World)
    {
        return nullptr;
    }
    for (TActorIterator<AH00DemoDirector> It(World); It; ++It)
    {
        return *It;
    }
    return nullptr;
}

FVector AH00DemoDirector::PlayerStartLocation()
{
    return FVector(-1500.0f, -80.0f, 95.0f);
}

void AH00DemoDirector::TryArchive(AH00Character* Player)
{
    if (!Player || !ArchiveStation)
    {
        return;
    }
    const float ArchiveDistance = FVector::Dist2D(Player->GetActorLocation(), ArchiveStation->GetActorLocation());
    UE_LOG(LogTemp, Display, TEXT("H00 | Archive interaction distance: %.1f."), ArchiveDistance);
    if (ArchiveDistance > 240.0f)
    {
        Announce(TEXT("Archive requires the REC / PAUSE station in C."));
        return;
    }
    if (bArchived)
    {
        Announce(TEXT("Tape already archived. Return to A by either service route."));
        return;
    }

    bArchived = true;
    ArchiveStatus->SetText(FText::FromString(TEXT("ARCHIVED")));
    UE_LOG(LogTemp, Display, TEXT("H00 | Archive state changed: COMPLETE."));
    Announce(TEXT("Archive complete. Choose the open service line or the short shelf aisle."));
}

void AH00DemoDirector::ResetDemo()
{
    bArchived = false;
    if (ArchiveStatus)
    {
        ArchiveStatus->SetText(FText::FromString(TEXT("TAPE IN HAND")));
    }
    if (Returner)
    {
        Returner->ResetRoute();
    }
    if (AH00Character* Player = Cast<AH00Character>(UGameplayStatics::GetPlayerCharacter(this, 0)))
    {
        Player->ResetToDemoStart();
    }
    UE_LOG(LogTemp, Display, TEXT("H00 | Reset: player, archive state, and returner route restored."));
    Announce(TEXT("RESET_REASON=MANUAL. Demo returned to 00 seconds."));
}

AStaticMeshActor* AH00DemoDirector::SpawnBox(const TCHAR* Name, const FVector& Location, const FVector& Scale)
{
    FActorSpawnParameters SpawnParameters;
    SpawnParameters.Name = FName(Name);
    AStaticMeshActor* Box = GetWorld()->SpawnActor<AStaticMeshActor>(Location, FRotator::ZeroRotator, SpawnParameters);
    Box->GetStaticMeshComponent()->SetStaticMesh(CubeMesh);
    Box->GetStaticMeshComponent()->SetWorldScale3D(Scale);
    return Box;
}

void AH00DemoDirector::SpawnLabel(AStaticMeshActor* Parent, const FString& Text, const FVector& Offset)
{
    UTextRenderComponent* Label = NewObject<UTextRenderComponent>(Parent);
    Label->SetupAttachment(Parent->GetStaticMeshComponent());
    Label->SetRelativeLocation(Offset);
    Label->SetWorldSize(34.0f);
    Label->SetHorizontalAlignment(EHTA_Center);
    Label->SetText(FText::FromString(Text));
    Label->RegisterComponent();
}

void AH00DemoDirector::Announce(const FString& Text) const
{
    if (GEngine)
    {
        GEngine->AddOnScreenDebugMessage(-1, 4.0f, FColor::White, Text);
    }
}
