# F0 Phase 0.75 城镇背面压顶：生成提示词 v0.2

## 输入角色

- Image 1：`F0_Phase0_新市场正常视野_候选_v0.1.png`，**精确编辑母版**；近景、机位、天气与三地标身份以它为准。
- Image 2：`F0_Phase0.75_城镇表面卷起_候选_v0.1.png`，**空间意图参考**；只参考“同一港区连续卷起”，不要沿用通用半岛坡面造型。
- Image 3：用户认可的《返潮》表现形式板，**完成度与材质密度参考**；不沿用其中的群众仪式、病房、神像或室内题材。

## 执行提示词

Use case: precise-object-edit

Asset type: F0 V3 environment keyframe for a late-PS3-era Chinese coastal survival-horror game, 1672×941.

Primary request: edit Image 1 into one locked-camera impossible coastal-town vista. Keep the nearest market stop completely normal and unchanged. Starting just beyond the central cold-store chimney, make the SAME right-hand harbor district continue upward through low cloud, pass beyond vertical, and return as a heavy town surface across the upper-right sky. It is not a separate city, planet, hill or floating slab. The viewer must be able to trace the same narrow wet road, multiple roof rows, drainage channels, seawall, utility poles, wires and attached gray-green sea continuously from the normal ground into the overhead backside of the town.

Spatial construction:

- Preserve the complete lower 42 percent as ordinary ground under normal gravity.
- Use the chimney only as a quiet visual hinge. Do not create a mechanical axle or a sharp fold.
- Across the middle distance, gradually rotate at least two small service streets, five irregular rows of low early-2000s Chinese coastal houses, one concrete seawall and the utility network through one shared broad curvature.
- In the upper-right sky, show readable roof ridges, rear walls, drainpipes and street depth belonging to the same neighborhood. No black underside and no exposed terrain cross-section.
- Keep the sea attached to the curving seawall all the way overhead. Its small wind waves reorient with the local surface; it does not fall, drip or become a waterfall.
- Keep the left broadcast tower, central chimney and blue aquarium dome unique and in the same left-to-right identity order. The dome rotates only with its local harbor block. Do not duplicate or enlarge any landmark.
- Let the town surface enter a clear low cloud layer and become visible again against the cloud base; cloud must not conceal the geometric connection.

Absolute invariants from Image 1: exact camera and crop; upper-left convex bus mirror and sign; left market awnings; foreground people and stools; wet asphalt, yellow line and puddle placement; right repair stall, scooter and bicycle; foreground poles and wire routes; overcast exposure and limited dynamic range; zero ritual behavior. The nearest 30 meters must remain visually identical.

Regional art language: dense low self-built houses, patched gray tile and zinc roofs, blue tarpaulin, salt-bloomed concrete, narrow drainage, weathered ceramic tile, practical harbor utilities. Sparse ordinary residents continue daily activity without synchronized poses. Early-2000s Chinese coast after rain, restrained documentary texture density, materially specific and buildable, not a generic modern metropolis.

Lighting: cool gray overcast daylight after rain, readable 1.4km visibility, one soft cloud-filtered direction. The overhead town is only 1 to 1.5 stops darker than the ground and retains full roof, road, seawall and water separation. No supernatural glow.

Horror tone: quiet, oppressive and geographically impossible. The fear comes only from recognizing that the sky is occupied by the continuous backside of the same town and the same sea while the foreground remains physically ordinary.

Avoid: Inception-style clean city curl; skyscrapers; one giant ramp or highway; ordinary steep hill town; circular planet; floating city; separate island; folded paper; exposed soil slice; black slab underside; fisheye; camera roll; collage seam; mirrored image; duplicate landmark; waterfall; flood on the foreground road; organic flesh; shells covering every surface; uniform rust; shrine; statue; crowd formation; ritual; monster; gore; red lighting; VHS or film grain; heavy fog; dramatic HDR; bloom; depth of field; text; frame; watermark.

## 生成后只审四件事

1. 近景是否真的与 Phase 0 相同；
2. 道路、屋顶、海堤、海面和电线是否至少三类可连续追到头顶；
3. 是否仍能被“山城/坡道/浮岛”解释；
4. 是否出现用云、黑底或奇观遮掩连接的偷懒。

任何一项失败，只针对该项做一次编辑，不改天气、机位或人口密度。

