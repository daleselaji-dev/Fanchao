using UnrealBuildTool;

public class FanchaoH00UEEditorTarget : TargetRules
{
    public FanchaoH00UEEditorTarget(TargetInfo Target) : base(Target)
    {
        Type = TargetType.Editor;
        DefaultBuildSettings = BuildSettingsVersion.V7;
        IncludeOrderVersion = EngineIncludeOrderVersion.Unreal5_8;
        ExtraModuleNames.Add("FanchaoH00UE");
    }
}
