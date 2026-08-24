#pragma once

#include "CoreMinimal.h"
#include "GameFramework/Actor.h"
#include "H00DemoDirector.generated.h"

class AH00Character;
class AH00Returner;
class AStaticMeshActor;
class UStaticMesh;
class UTextRenderComponent;

// PROTOTYPE ONLY: verifies the H00-R0 spatial and behavior contract before asset work begins.
UCLASS()
class FANCHAOH00UE_API AH00DemoDirector : public AActor
{
    GENERATED_BODY()

public:
    AH00DemoDirector();
    virtual void BeginPlay() override;

    static AH00DemoDirector* Find(const UObject* WorldContext);
    static FVector PlayerStartLocation();

    void TryArchive(AH00Character* Player);
    void ResetDemo();

private:
    AStaticMeshActor* SpawnBox(const TCHAR* Name, const FVector& Location, const FVector& Scale);
    void SpawnLabel(AStaticMeshActor* Parent, const FString& Text, const FVector& Offset);
    void Announce(const FString& Text) const;

    UPROPERTY()
    TObjectPtr<UStaticMesh> CubeMesh;

    UPROPERTY()
    TObjectPtr<AStaticMeshActor> ArchiveStation;

    UPROPERTY()
    TObjectPtr<UTextRenderComponent> ArchiveStatus;

    UPROPERTY()
    TObjectPtr<AH00Returner> Returner;

    bool bArchived = false;
};
