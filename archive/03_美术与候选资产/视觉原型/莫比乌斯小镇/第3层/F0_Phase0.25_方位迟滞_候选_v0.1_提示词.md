# F0 Phase 0.25 方位迟滞：生成提示词 v0.1

## 使用模式

- 工具：内置 ImageGen；
- 模式：基于 Phase 0 母版的精确物件编辑；
- 输入：`F0_Phase0_新市场正常视野_候选_v0.1.png`；
- 输出：`F0_Phase0.25_方位迟滞_候选_v0.1.png`。

## 最终提示词

Use case: precise-object-edit

Asset type: conservative F0 Phase 0.25 environment keyframe.

Input image: Image 1 is the immutable Phase 0 master. Edit the smallest possible distant areas only. Do not reinterpret the scene.

Primary request: create an almost-identical comparison image. The three distant landmarks must stay in the SAME left-to-right order—broadcast tower, cold-store chimney, blue aquarium dome—and move only by a few dozen pixels. The effect should be impossible to notice without comparing against the master.

Exact edits at the original 1672-pixel width:

1. Broadcast tower: shift the complete distant tower silhouette approximately 35–45 pixels to the right while preserving its height, shape, scale and lighting.
2. Cold-store chimney: shift the complete chimney silhouette approximately 25–35 pixels to the left while preserving its height, shape, scale and smoke-free state.
3. Blue aquarium dome: shift the complete distant dome approximately 45–55 pixels to the left while preserving its blue material, scale and silhouette.
4. Keep the horizon level. Do not tilt, curve or split the coastline in this phase.

Absolute locks: camera position, crop, focal length, perspective, vanishing points, foreground road, yellow lane marking, bus-stop pole, shop awnings, repair shed, bicycle, pedestrians, local signs and text, power lines, wet patches, sky, cloud structure, light, weather, exposure, color, grain and population density. Do not add, remove, mirror or redesign anything. Do not change the left-to-right landmark order. No fisheye, dream effect, fog increase, supernatural glow, creature, ritual crowd, gore, doorway scare, color-grade change or decorative horror motif.

The result must look like the exact same restrained documentary photograph taken from a locked tripod a moment later; only a careful A/B comparison should reveal that the three distant bearings cannot all be correct.
