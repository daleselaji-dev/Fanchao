#include "H00Returner.h"

#include "Components/CapsuleComponent.h"
#include "Components/StaticMeshComponent.h"
#include "UObject/ConstructorHelpers.h"

AH00Returner::AH00Returner()
{
    PrimaryActorTick.bCanEverTick = true;
    Capsule = CreateDefaultSubobject<UCapsuleComponent>(TEXT("Capsule"));
    Capsule->InitCapsuleSize(38.0f, 88.0f);
    SetRootComponent(Capsule);

    WorkBody = CreateDefaultSubobject<UStaticMeshComponent>(TEXT("WorkBody"));
    WorkBody->SetupAttachment(Capsule);
    WorkBody->SetCollisionEnabled(ECollisionEnabled::NoCollision);
    WorkBody->SetRelativeLocation(FVector(0.0f, 0.0f, -30.0f));
    WorkBody->SetRelativeScale3D(FVector(0.50f, 0.33f, 1.10f));
    static ConstructorHelpers::FObjectFinder<UStaticMesh> Cube(TEXT("/Engine/BasicShapes/Cube.Cube"));
    if (Cube.Succeeded())
    {
        WorkBody->SetStaticMesh(Cube.Object);
    }
}

void AH00Returner::SetRoute(const TArray<FVector>& InRoute)
{
    Route = InRoute;
    ResetRoute();
}

void AH00Returner::ResetRoute()
{
    NextPoint = 1;
    PauseRemaining = 1.0f;
    if (!Route.IsEmpty())
    {
        SetActorLocation(Route[0], false, nullptr, ETeleportType::TeleportPhysics);
    }
}

void AH00Returner::Tick(float DeltaSeconds)
{
    Super::Tick(DeltaSeconds);
    if (Route.Num() < 2)
    {
        return;
    }
    if (PauseRemaining > 0.0f)
    {
        PauseRemaining -= DeltaSeconds;
        return;
    }

    const FVector Target = Route[NextPoint];
    const FVector Offset = Target - GetActorLocation();
    const float Distance = Offset.Size2D();
    if (Distance < 18.0f)
    {
        SetActorLocation(Target);
        NextPoint = (NextPoint + 1) % Route.Num();
        PauseRemaining = 1.4f;
        UE_LOG(LogTemp, Display, TEXT("H00 | Returner reached route point %d."), (NextPoint + Route.Num() - 1) % Route.Num());
        return;
    }

    const FVector Direction = Offset.GetSafeNormal2D();
    SetActorLocation(GetActorLocation() + Direction * 150.0f * DeltaSeconds, true);
    SetActorRotation(Direction.Rotation());
}
