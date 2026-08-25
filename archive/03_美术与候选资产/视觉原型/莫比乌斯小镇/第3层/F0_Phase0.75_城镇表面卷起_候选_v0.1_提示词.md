# F0 Phase 0.75 城镇表面卷起：生成提示词 v0.1

## 使用模式

- 工具：内置 ImageGen；
- 模式：基于 Phase 0.5 的精确物件编辑；
- 输入：`F0_Phase0.5_双海岸_候选_v0.1.png`；
- 输出：`F0_Phase0.75_城镇表面卷起_候选_v0.1.png`；
- 尝试：第 1 次因“道路坡道误读”淘汰，第 2 次有条件通过；
- 导出修正：生成原图为 1671×941，项目候选以机械横向归一化统一为 1672×941。

## 最终提示词

Use case: precise-object-edit

Asset type: corrected F0 Phase 0.75 environment keyframe for a high-end PS3-era coastal survival-horror game.

Input image: Image 1 is the approved Phase 0.5 edit target. Start from it directly; do not inherit any prior failed ramp-road interpretation.

Primary request: bend the ENTIRE DISTANT RIGHT-HAND COASTAL DISTRICT AND ITS SEA SHORE as one broad continuous inhabited ground surface rising toward the upper right. This must not look like a new road, bridge, freeway, embankment or ordinary hillside. The existing town fabric itself—many parallel roof courses, several pre-existing small streets, retaining walls, drainage lines, utility poles, harbor edge, breakwater and the visible gray sea band—must all curve together through one shared smooth 24-degree spatial arc. No single road may dominate the effect.

Exact spatial reading:

- Keep the foreground and middle of the town horizontal and unchanged up to the cold-store chimney, which acts as the stable hinge.
- From just right of the chimney, gradually rotate the whole distant harbor district upward. At the far-right edge, the shared town surface reaches high into the sky, and ordinary streets and roof rows are still visible across it.
- Preserve a clearly visible narrow band of the RIGHT-HAND SEA and its breakwater while it bends upward together with the harbor edge. The coexistence of rising sea, rising roofs and rising streets is the proof that this is not a hill or transport ramp.
- Preserve the SECOND LEFT-HAND SEA below the broadcast hill exactly as in Image 1.
- Move the blue aquarium dome only with its local harbor ground, moderately upward and somewhat left, preserving its exact silhouette, scale, blue material and identity. Do not duplicate it.
- The visible surface remains continuous from the central market roofs into the rising right district. There is no cut edge, underside, gap or floating slab.
- Do not add any new highway, broad empty road, bridge, tunnel, cliff, mountain or terraced megastructure. Use only dense existing small-town roofs and narrow service streets.

Absolute locks: exact 1672×941 crop, 35mm locked camera, broadcast tower and wooded hill, cold-store chimney and base, foreground shop, convex mirror and pole, complete foreground road and yellow line, every near pedestrian, stools, awnings, repair shed, scooter, bicycle, wet patches, foreground power poles and wires, overcast daylight, exposure, color and population density. The nearest 30 meters must look identical.

Avoid: a single giant ramp; elevated freeway; normal steep hill town; floating city; separated island; folded paper; collage; mirror image; fisheye; spiral tunnel; exposed soil section; dark underside; building foundations; giant architecture; waterfall; floodwater on streets; extra landmark; creature; ritual crowd; gore; red light; supernatural glow; heavier fog; dramatic color grade; text; border; watermark.

Style/medium: restrained photorealistic documentary image of an early-2000s Chinese coastal town after rain, dense ordinary construction, natural gray overcast, limited dynamic range, high-end PS3 survival-horror environment art. Make the spatial impossibility unmistakable only because the sea, streets, roofs and utilities all share one continuous impossible curve.
