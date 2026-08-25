# 《返潮》F0 莫比乌斯连续步行技术样片

这是新的空间算法验证工程，不是酒店、车站或泵房章节，也不是美术灰盒候选。

当前第一步只锁定：

- 270m 单向闭合路线；
- `fold_phase` 只由实际前进距离推进；
- 一周结束时 `route_parity` 从 0 变为 1；
- 0—30m 近景不进入变形；
- 海、海堤、道路、屋顶和电线调用同一个连续表面函数；
- Phase 0—0.75 保持广播塔—烟囱—穹顶，Phase 1 变为穹顶—烟囱—广播塔。

运行测试：

```bash
npm test
npm run check
```

浏览器运行：

```bash
cd /Users/dalese/Documents/恐怖游戏
python3 -m http.server 4174 --bind 127.0.0.1
```

打开：

- `http://127.0.0.1:4174/prototypes/f0_mobius_walk/`
- `http://127.0.0.1:4174/prototypes/f0_mobius_walk/?automation=1&walk=1`（完整路线审查；持续模拟 W，不跳相位）；
- `http://127.0.0.1:4174/prototypes/f0_mobius_walk/?automation=1&capture=1&phase=0.75`

性能诊断参数（只用于自动审查，不能作为视觉版本）：

- `profile=full|coast_off|town_off|props_off`：负载 A/B；
- `profile=scene_off`：0 calls / 0 triangles 的宿主 RAF 基线；
- `body.dataset.frameReport`：同时输出原始 RAF `overall` / `beats` 与场景工作时间 `work` / `workByBeat`。

当前浏览器实测记录：

- 1280x720 Chrome headless；
- Phase 0.5：`60 fps · 22 calls · 4k tri`；
- Phase 0.75：`60 fps · 22 calls · 4k tri`；
- Phase 1：`58 fps · 21 calls · 4k tri`；
- 控制台无报错；
- 截图证据：`output/playwright/F0_mobius_walk_phase075_instanced_v0.2.png`、`output/playwright/F0_mobius_walk_phase1_instanced_v0.2.png`。

完整路线审查（2026-07-20）：

- 修正了自动前进首帧可能产生负时间差并中止动画循环的问题；
- 真实帧循环从 0.374m 连续推进到 270m，实测 137.737s，终点 `fold_phase=1`、`route_parity=1`，没有门、黑场或 URL 切换；
- 路线建筑净空已扩到 24m，消除了 94—150m 路段的大面积穿入式遮挡；
- **视觉路线仍判失败**：净空后的 135m“双海岸”和 202.5m“城镇表面卷起”缺少足够的可见世界证据，不能用终点成立替代中途成立；
- 完整记录：`返潮_莫比乌斯小镇_F0连续路线体验审查_v0.1.md`；下一版视野接口：`world_data/retide_f0_route_vistas_v0.1.json`。

连续路线复审 v0.2（同日）：

- 已用路线参数化镇面取代固定世界 X 轴卷曲；玩家周围 30m 水平，前方镇面围绕道路切线翻起；
- 同一张连续海面在 135m 形成左侧内湾与右侧外海；202.5m 的支路、屋顶、海堤、海面和电线共享可见卷曲；
- 当前代码在无 HUD、真实帧循环中 124.513s 走完 270m，终点 `route_parity=1`，控制台无错误；
- 内部视觉复审由失败提升为“候选可读”，但外部盲读未做；
- 海面已经从覆盖全镇的透明矩形改为沿真实岸线生成的物理条带；两岸在镇面下方由不可见深水接缝连接，仍是一个连续拓扑对象；
- Phase 0.75 当前为 `29 calls / 16,276 triangles`，场景更新加渲染工作时间 `p95=1.4ms`；
- 同一内嵌浏览器的 `scene_off` 空场 RAF `p95=33.7ms`，因此当前宿主不能判定 30fps 通过或失败；端到端门保留到独立前台 Chrome/GPU 环境复核；
- 最新结论：`返潮_莫比乌斯小镇_F0连续路线体验复审_v0.2.md`。

实现边界：

- 楼群、服务路、海堤和电线杆已经改为 InstancedMesh，仍通过同一个 `surfaceSample` 写入翻面矩阵；
- 这是空间算法与性能样片，不是美术候选；
- 依赖只复用相邻 `h00_siren_ps3` 已锁定的 Three.js 0.185.1，不复用其游戏内容。

## F0 首轮美术构建切片（2026-07-20）

当前运行时已加入程序化湿沥青、盐析水泥、陶瓷墙面、灰瓦、锌皮与篷布材质；低层建筑增加窗格、平屋顶压边与四坡屋顶；F0 固定近景增加市场与修理摊构件；V2 增加稀疏渔棚和两侧作业船代理；V3 背面与正面共享表面细节。

这仍是构建切片，不是美术候选。当前审查图：

- `output/playwright/F0_art_slice_phase0_v0.5.jpg`；
- `output/playwright/F0_art_slice_phase05_v0.5.jpg`；
- `output/playwright/F0_art_slice_phase075_v0.5.jpg`；
- `output/playwright/F0_art_slice_phase1_v0.5.jpg`。

闭合海岸曾以高于道路的深度覆盖 F0，导致 Phase 0/1 近景亮度随海岸权重改变。现在由 `F0_SURFACE_LEVELS` 固定 `coast < town < road`，并加入自动测试。

第二轮为路线住宅加入随拓扑变形的阳台、雨棚、水箱、空调、通风筒和天线组合；F0 增加贴墙市场牌与两种实用光；V2 增加泊船柱、排水口和靠近岸线的作业船。

第三轮加入住宅 L 形侧翼、六级实体外梯与排水立管；渔船改为收尖船体并增加桅杆和网卷；V2 两侧形成低阶海堤—泊船柱—缆绳连续链。

Phase 0.75 当前约 `276 calls / 33,316 triangles`，场景工作时间 `p95=4.7ms`。完整复审：`返潮_莫比乌斯小镇_F0首轮美术切片复审_v0.1.md`；资产接口：`world_data/retide_f0_art_slice_manifest_v0.1.json`。
