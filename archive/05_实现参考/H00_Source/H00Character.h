#pragma once

#include "CoreMinimal.h"
#include "GameFramework/Character.h"
#include "H00Character.generated.h"

class UCameraComponent;
class USpringArmComponent;
class UStaticMeshComponent;

UCLASS()
class FANCHAOH00UE_API AH00Character : public ACharacter
{
    GENERATED_BODY()

public:
    AH00Character();
    virtual void BeginPlay() override;
    virtual void SetupPlayerInputComponent(UInputComponent* PlayerInputComponent) override;

    void ResetToDemoStart();

private:
    void MoveForward(float Value);
    void MoveRight(float Value);
    void Interact();
    void ResetInput();

    UPROPERTY(VisibleAnywhere)
    TObjectPtr<USpringArmComponent> CameraBoom;

    UPROPERTY(VisibleAnywhere)
    TObjectPtr<UCameraComponent> FollowCamera;

    UPROPERTY(VisibleAnywhere)
    TObjectPtr<UStaticMeshComponent> WorkerBody;
};
