#pragma once

#include "CoreMinimal.h"
#include "GameFramework/GameModeBase.h"
#include "H00GameMode.generated.h"

class AH00DemoDirector;

UCLASS()
class FANCHAOH00UE_API AH00GameMode : public AGameModeBase
{
    GENERATED_BODY()

public:
    AH00GameMode();
    virtual void BeginPlay() override;

    void ResetDemo();

private:
    void EnsureDemoPawn();

    UPROPERTY()
    TObjectPtr<AH00DemoDirector> Director;
};
