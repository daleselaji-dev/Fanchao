#include "H00Character.h"

#include "Camera/CameraComponent.h"
#include "Components/CapsuleComponent.h"
#include "Components/StaticMeshComponent.h"
#include "Engine/Engine.h"
#include "GameFramework/CharacterMovementComponent.h"
#include "GameFramework/SpringArmComponent.h"
#include "H00DemoDirector.h"
#include "H00GameMode.h"
#include "UObject/ConstructorHelpers.h"

AH00Character::AH00Character()
{
    GetCapsuleComponent()->InitCapsuleSize(42.0f, 92.0f);
    GetCharacterMovement()->MaxWalkSpeed = 360.0f;
    bUseControllerRotationYaw = false;
    GetCharacterMovement()->bOrientRotationToMovement = true;

    CameraBoom = CreateDefaultSubobject<USpringArmComponent>(TEXT("CameraBoom"));
    CameraBoom->SetupAttachment(GetRootComponent());
    CameraBoom->TargetArmLength = 430.0f;
    CameraBoom->bUsePawnControlRotation = true;
    CameraBoom->SetRelativeLocation(FVector(0.0f, 0.0f, 72.0f));

    FollowCamera = CreateDefaultSubobject<UCameraComponent>(TEXT("FollowCamera"));
    FollowCamera->SetupAttachment(CameraBoom, USpringArmComponent::SocketName);
    FollowCamera->bUsePawnControlRotation = false;

    WorkerBody = CreateDefaultSubobject<UStaticMeshComponent>(TEXT("WorkerBody"));
    WorkerBody->SetupAttachment(GetRootComponent());
    WorkerBody->SetCollisionEnabled(ECollisionEnabled::NoCollision);
    WorkerBody->SetRelativeLocation(FVector(0.0f, 0.0f, -28.0f));
    WorkerBody->SetRelativeScale3D(FVector(0.55f, 0.35f, 1.15f));
    static ConstructorHelpers::FObjectFinder<UStaticMesh> Cube(TEXT("/Engine/BasicShapes/Cube.Cube"));
    if (Cube.Succeeded())
    {
        WorkerBody->SetStaticMesh(Cube.Object);
    }
}

void AH00Character::BeginPlay()
{
    Super::BeginPlay();
    ResetToDemoStart();
}

void AH00Character::SetupPlayerInputComponent(UInputComponent* PlayerInputComponent)
{
    Super::SetupPlayerInputComponent(PlayerInputComponent);
    PlayerInputComponent->BindAxis(TEXT("MoveForward"), this, &AH00Character::MoveForward);
    PlayerInputComponent->BindAxis(TEXT("MoveRight"), this, &AH00Character::MoveRight);
    PlayerInputComponent->BindAxis(TEXT("Turn"), this, &APawn::AddControllerYawInput);
    PlayerInputComponent->BindAxis(TEXT("LookUp"), this, &APawn::AddControllerPitchInput);
    PlayerInputComponent->BindAction(TEXT("Interact"), IE_Pressed, this, &AH00Character::Interact);
    PlayerInputComponent->BindAction(TEXT("ResetDemo"), IE_Pressed, this, &AH00Character::ResetInput);
}

void AH00Character::ResetToDemoStart()
{
    SetActorLocation(AH00DemoDirector::PlayerStartLocation(), false, nullptr, ETeleportType::TeleportPhysics);
    SetActorRotation(FRotator(0.0f, 0.0f, 0.0f));
}

void AH00Character::MoveForward(float Value)
{
    if (Controller && !FMath::IsNearlyZero(Value))
    {
        AddMovementInput(FRotationMatrix(Controller->GetControlRotation()).GetUnitAxis(EAxis::X), Value);
    }
}

void AH00Character::MoveRight(float Value)
{
    if (Controller && !FMath::IsNearlyZero(Value))
    {
        AddMovementInput(FRotationMatrix(Controller->GetControlRotation()).GetUnitAxis(EAxis::Y), Value);
    }
}

void AH00Character::Interact()
{
    UE_LOG(LogTemp, Display, TEXT("H00 | Player requested archive interaction at %s."), *GetActorLocation().ToCompactString());
    if (AH00DemoDirector* Demo = AH00DemoDirector::Find(this))
    {
        Demo->TryArchive(this);
    }
}

void AH00Character::ResetInput()
{
    if (AH00GameMode* Mode = GetWorld()->GetAuthGameMode<AH00GameMode>())
    {
        Mode->ResetDemo();
    }
}
