#pragma once

#include "CoreMinimal.h"
#include "GameFramework/Actor.h"
#include "MudflatDirector.generated.h"

class UAudioComponent;
class UMaterialInterface;
class UStaticMesh;
class UStaticMeshComponent;

UENUM()
enum class EMudflatPhase : uint8
{
    Intro,
    FamiliesLeave,
    Ignition,
    FirstSounding,
    Redirect,
    Done
};

UCLASS()
class MUDFLATDEMO_API AMudflatDirector : public AActor
{
    GENERATED_BODY()

public:
    AMudflatDirector();

    virtual void BeginPlay() override;
    virtual void Tick(float DeltaSeconds) override;

private:
    UStaticMeshComponent* AddMesh(AActor* InOwner, const TCHAR* MeshPath, const FVector& Location,
        const FVector& Scale, const FLinearColor& Color, bool bCollision = true, bool bApplyColor = true);
    void AddEffigy(const FVector& Location, float Yaw, bool bHero = false);
    void BuildScene();
    void BuildTower();
    void BuildFather();
    void BuildFamilies();
    void UpdateFamilies(float DeltaSeconds);
    void AnimateIgnition(float DeltaSeconds);
    void TriggerPulse();
    void ResetDemo();
    void PlayPulseSound();
    void ShowMessage(const FString& Message, const FColor& Color = FColor::White);
    bool IsPlayerNearActiveSource(float Radius) const;
    bool IsPlayerNearTower(float Radius) const;

    UPROPERTY()
    TObjectPtr<USceneComponent> Root;

    UPROPERTY()
    TArray<TObjectPtr<UStaticMeshComponent>> PressureProps;

    UPROPERTY()
    TArray<FVector> PressureBaseLocations;

    UPROPERTY()
    TArray<FVector> PressureBaseScales;

    UPROPERTY()
    TArray<TObjectPtr<UStaticMeshComponent>> DustProps;

    UPROPERTY()
    TArray<FVector> DustBaseLocations;

    UPROPERTY()
    TObjectPtr<AActor> Father;

    UPROPERTY()
    TArray<TObjectPtr<UStaticMeshComponent>> FatherParts;

    UPROPERTY()
    TArray<TObjectPtr<UStaticMeshComponent>> EffigyParts;

    UPROPERTY()
    TArray<FVector> EffigyPartBaseLocations;

    UPROPERTY()
    TArray<FRotator> EffigyPartBaseRotations;

    UPROPERTY()
    TArray<FVector> EffigyPartBaseScales;

    UPROPERTY()
    TArray<int32> EffigyGroupIndices;

    UPROPERTY()
    TArray<FVector> EffigyGroupCenters;

    UPROPERTY()
    TArray<TObjectPtr<AActor>> FamilySilhouettes;

    UPROPERTY()
    TArray<FVector> FamilyStartLocations;

    UPROPERTY()
    TArray<FVector> FamilyEndLocations;

    FVector ControlA;
    FVector ControlB;
    FVector ActiveSource;
    EMudflatPhase Phase = EMudflatPhase::Intro;
    float PhaseTime = 0.0f;
    float FatherRiseTime = 0.0f;
    bool bDeep = false;
    bool bBuilt = false;
    int32 PulseCount = 0;
    bool bAutoDemo = false;
    float AutoElapsed = 0.0f;
    bool bAutoAlarm2Triggered = false;
    bool bFatherAssetReady = false;
};
