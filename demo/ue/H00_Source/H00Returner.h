#pragma once

#include "CoreMinimal.h"
#include "GameFramework/Actor.h"
#include "H00Returner.generated.h"

class UCapsuleComponent;
class UStaticMeshComponent;

UCLASS()
class FANCHAOH00UE_API AH00Returner : public AActor
{
    GENERATED_BODY()

public:
    AH00Returner();
    virtual void Tick(float DeltaSeconds) override;

    void SetRoute(const TArray<FVector>& InRoute);
    void ResetRoute();

private:
    UPROPERTY(VisibleAnywhere)
    TObjectPtr<UCapsuleComponent> Capsule;

    UPROPERTY(VisibleAnywhere)
    TObjectPtr<UStaticMeshComponent> WorkBody;

    UPROPERTY()
    TArray<FVector> Route;

    int32 NextPoint = 1;
    float PauseRemaining = 0.0f;
};
