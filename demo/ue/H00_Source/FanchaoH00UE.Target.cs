using UnrealBuildTool;

public class FanchaoH00UETarget : TargetRules
{
    public FanchaoH00UETarget(TargetInfo Target) : base(Target)
    {
        Type = TargetType.Game;
        DefaultBuildSettings = BuildSettingsVersion.V7;
        IncludeOrderVersion = EngineIncludeOrderVersion.Unreal5_8;
        ExtraModuleNames.Add("FanchaoH00UE");
    }
}
