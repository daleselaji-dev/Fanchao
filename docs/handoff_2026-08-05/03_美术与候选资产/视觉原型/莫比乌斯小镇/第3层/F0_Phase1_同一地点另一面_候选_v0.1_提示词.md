# F0 Phase 1 同一地点的另一面：生成提示词 v0.1

## 使用模式

- 工具：内置 ImageGen；
- 模式：双源精确物件编辑；
- Image 1：Phase 0 正常母版，负责锁定相机、前景、天气和水平地平线；
- Image 2：Phase 0.75，负责提供连续翻面的前态证据；
- 输出：`F0_Phase1_同一地点另一面_候选_v0.1.png`；
- 生成次数：1 次，通过后停止。

## 最终提示词

Use case: precise-object-edit

Asset type: F0 Phase 1 final parity-flipped environment keyframe for a high-end PS3-era coastal survival-horror game.

Input images:

- Image 1 is the immutable Phase 0 camera/foreground master. Use its exact camera, crop, foreground geometry, people, weather, exposure and calm level horizon as the final visual base.
- Image 2 is the Phase 0.75 continuity reference. Use it only to understand that the same town surface has completed a continuous turn. Do not copy its raised right-hand curve into the final image.

Primary request: show the exact same viewpoint after the Möbius turn has completed. The scene is calm, level and documentary-real again, but the distant town has reached parity 1. Change ONLY the midground-to-horizon spatial ownership so the three unique landmarks now read left-to-right as: BLUE AQUARIUM DOME — COLD-STORE CHIMNEY — BROADCAST TOWER. The sea is now on the former inland/left side, while the former right-side harbor has become continuous inland town and a low ridge. This must not be a mirrored photograph.

Exact final layout at 1672-pixel width:

1. Blue aquarium dome: relocate the single existing blue dome to approximately x=520–610, on a modest waterfront structure left of the chimney. Preserve its blue material, silhouette, proportions and apparent scale. Remove the old right-side dome completely; exactly one dome exists.
2. Cold-store chimney: keep the single chimney and industrial base near the central bearing, approximately x=920–990, with the same silhouette, scale and vertical orientation.
3. Broadcast tower: relocate the single lattice broadcast tower to approximately x=1260–1360, on a low inland ridge right of the chimney. Preserve its exact lattice identity, height and scale. Remove the old left-side tower completely; exactly one broadcast tower exists.
4. Coast: create one calm level sea interval behind the left-hand market/low waterfront, approximately x=250–650. Remove all open sea from the right-hand horizon. Replace the former right harbor water with dense ordinary service roofs, a road, utility poles and a low wooded inland ridge that connect normally to the central town.
5. Restore a nearly straight, level horizon and ordinary Euclidean perspective. No visible curling remains. The final frame should look plausible by itself and impossible only when compared with Phase 0.

Absolute locks from Image 1: exact 16:9 crop and 35mm camera; foreground shop and awnings; convex bus mirror, pole and sign; complete foreground asphalt, yellow line and wet patches; every near pedestrian and their handedness/pose; stools, umbrellas, repair shed, scooter and bicycle; foreground power poles and wire routing; local signs and text orientation; late-afternoon gray weather, exposure, materials, color balance and ordinary population density. Do not mirror, flip, rotate or rearrange the foreground. All letters, bodies, vehicles and shadows retain their original handedness.

Continuity constraints: reuse the same early-2000s Chinese coastal building language and density. Every relocated landmark remains attached to credible local ground and infrastructure. No duplicate landmark, teleportation effect, portal, seam, cut edge or transition glow. The camera has not moved.

Avoid: mirror image; reversed text; changed foreground people; new road foreground; fisheye; curved horizon; folded city; floating buildings; island collage; giant architecture; floodwater on streets; spiral; split screen; supernatural light; red grade; heavier fog; creature; ritual crowd; gore; doorway scare; title; labels; border; watermark.

Style/medium: restrained photorealistic documentary environment image, early-2000s Chinese coastal town after rain, natural overcast light, limited dynamic range and dense PS3-era survival-horror environmental detail. The horror is the quiet irreversible swap of sea/inland and landmark order, not an overt visual effect.
