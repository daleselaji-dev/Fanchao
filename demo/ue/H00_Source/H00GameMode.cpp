#include "H00GameMode.h"

#include "H00Character.h"
#include "H00DemoDirector.h"
#include "Engine/World.h"
#include "GameFramework/PlayerController.h"
#include "Kismet/GameplayStatics.h"
#include "TimerManager.h"

AH00GameMode::AH00GameMode()
{
    DefaultPawnClass = AH00Character::StaticClass();
}

void AH00GameMode::BeginPlay()
{
    Super::BeginPlay();
    Director = GetWorld()->SpawnActor<AH00DemoDirector>();

    // Entry is intentionally an empty runtime map and has no PlayerStart.
    // Give its first local controller an explicit H00 pawn and camera target.
    FTimerHandle SpawnTimer;
    GetWorldTimerManager().SetTimer(SpawnTimer, FTimerDelegate::CreateWeakLambda(this, [this]()
    {
        EnsureDemoPawn();
    }), 0.1f, false);
}

void AH00GameMode::EnsureDemoPawn()
{
    APlayerController* Controller = UGameplayStatics::GetPlayerController(this, 0);
    if (!Controller)
    {
        UE_LOG(LogTemp, Error, TEXT("H00 | No local player controller was available for the graybox."));
        return;
    }
    if (Cast<AH00Character>(Controller->GetPawn()))
    {
        UE_LOG(LogTemp, Display, TEXT("H00 | H00 player pawn already possessed."));
        return;
    }
    if (APawn* ExistingPawn = Controller->GetPawn())
    {
        ExistingPawn->Destroy();
    }
    RestartPlayerAtTransform(Controller, FTransform(FRotator::ZeroRotator, AH00DemoDirector::PlayerStartLocation()));
    UE_LOG(LogTemp, Display, TEXT("H00 | Explicit H00 player pawn spawned for Entry map."));
}

void AH00GameMode::ResetDemo()
{
    if (Director)
    {
        Director->ResetDemo();
    }
}
