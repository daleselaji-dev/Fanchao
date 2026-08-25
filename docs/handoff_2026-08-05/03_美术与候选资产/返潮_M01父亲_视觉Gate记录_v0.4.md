# 《返潮》M01“父亲”视觉 Gate 记录 v0.4

## 本轮状态

**REJECT。停止继续修可见 UE Mannequin，转入真实人形雕刻交接。**

本轮目标是验证 v0.7 的布尔封顶问题是否能通过“直接删除人体前壁窄区面 + 内置矿化底床”解决。结果证明：几何上的椭圆盾牌虽然被拆散，但语义仍是外挂板件；同时 UE Mannequin 本身无法承担普通父亲/沿海工人的最终轮廓。

## 产物

- v0.8 模型：[m01_father_real_base_embedded_fossil_candidate_v0.8.glb](G:\FanChao\FanChaoProject\视觉原型\返潮_v0.8\m01_father_real_base_embedded_fossil_candidate_v0.8.glb)
- v0.8 背面：[m01_father_real_base_v0.8_gate_01_rear.png](G:\FanChao\FanChaoProject\视觉原型\返潮_v0.8\m01_father_real_base_v0.8_gate_01_rear.png)
- v0.8 侧面：[m01_father_real_base_v0.8_gate_02_side.png](G:\FanChao\FanChaoProject\视觉原型\返潮_v0.8\m01_father_real_base_v0.8_gate_02_side.png)
- v0.8 正面：[m01_father_real_base_v0.8_gate_03_front.png](G:\FanChao\FanChaoProject\视觉原型\返潮_v0.8\m01_father_real_base_v0.8_gate_03_front.png)
- Gemini 候选脚本：[build_m01_father_real_human_handoff_v0.9_gemini.py](G:\FanChao\FanChaoProject\tools\blender\build_m01_father_real_human_handoff_v0.9_gemini.py)

## v0.8 Gate 观察

- 背面第一眼仍是英雄化/机械化 Mannequin，不是 2001 年中国沿海普通父亲。
- 侧面仍能看到独立竖直结构，读成挡板、面甲或胸甲；没有形成可相信的内凹剪影。
- 正面中央竖带过直、过完整，读成机械龙骨/图腾柱；8 个晶面像铆钉或独立贴片。
- 后脑椭圆体从背面暴露，产生头盔、雷达盘或昆虫器官误读。
- v0.8 只改变了 v0.7 的误读形状，没有改变“异常是外挂实体”的底层逻辑。

## A/B 审计结论

### Chat 端

Chat 端上传 v0.8 三视图后给出 **REJECT**：停止继续修可见 Mannequin，转真实人形雕刻。建议的最小结构是单一连续人体/工装网格，先建立普通中年工人的松弛体块和偏载，再从原体积内部削入窄、断裂、不对称的矿化缝带；晶面必须是同一底床上的浅切面，而不是悬浮零件。

### Antigravity / Gemini CLI

Gemini 生成了候选交接脚本，但静态检查发现：可见主体仍由立方体躯干和断开圆柱四肢组成，只在躯干单一面删除面形成矩形窗口，矿化底床与晶面仍是独立平面。Gemini 最终裁决为 **不应渲染、REJECT**，并确认唯一下一步是具备真实工人解剖轮廓的拓扑建模/雕刻交接。

## 冻结项

以下做法本轮起冻结，不再继续叠加：

1. 在 UE Mannequin 可见几何上继续修正中央结构。
2. 使用 Boolean、椭圆/竖直板件或中央直条表达前方异常。
3. 用独立漂浮晶面、后脑圆盘、机械分件替代石化器官。
4. 在模型 Gate 通过前制作贴图、材质表现或 UE 接入。

## 下一轮唯一入口

建立真实中年沿海工人连续人体/工装基底：普通松弛比例、左肩明确下沉、右脚拖后半步；然后在该基底上做真正的前壁内凹和同底床浅晶面。Mannequin 只可作为隐藏的身高/骨架参考，不得出现在可见交付物中。
