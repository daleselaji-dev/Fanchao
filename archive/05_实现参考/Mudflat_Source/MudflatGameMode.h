#pragma once

#include "CoreMinimal.h"
#include "GameFramework/GameModeBase.h"
#include "MudflatGameMode.generated.h"

UCLASS()
class MUDFLATDEMO_API AMudflatGameMode : public AGameModeBase
{
    GENERATED_BODY()

public:
    AMudflatGameMode();

    virtual void BeginPlay() override;
};
