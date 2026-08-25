# H00-R0「死魂曲升格轮」—— 验证记录

- 分支：`cursor/h00-r0-siren-ascension-7408`
- 环境：云端 Linux VM，无 GPU；headless Chrome（SwiftShader 软渲染）+ playwright-core；Node 20+
- 范围：在 PR #5 最终 3D Demo 基础上的玩法深化 + 美术/声景/后期升格 + Windows 便携包

## 本轮改动一览

### 玩法深化（合同层，全部有单测）

| 机制 | 合同 | 落点 |
| --- | --- | --- |
| 借视过载 | `JACK`：按住 Q 连续 3.5s 过载 → 3.0s 冷却（期间按住无效）→ 恢复；松手按 2 倍速回落。借视只裁决信号，**永不影响实体行为** | `contract.js` / `sim.js` |
| 实体圈数 | 返席人每完成一整圈 D→B→C门外→E→D，`entity.loops`+1 并发 `entity-loop` 事件；驱动宴厅衰变（灯光变暗、乐队漏音、闲置小动作变多） | `sim.js` / `main.js` |
| 表面裁决 | `surfaceAt(p)`：地毯 / 水磨石 / 水泥 / 压实沉积四分区，驱动分层脚步声 | `contract.js` / `audio.js` |
| 归档节拍 | 归档不再瞬间收手——先把带子送进画面中央的插带动画，CRT 才接管 | `player.js` |

### 美术升格（仍全程序化、零外链素材）

- **返席人**：方块低模 → 锥形肢体人形（髋摆/膝屈/躯干反旋/头部点头的步态权重，呼吸与闲置抽动，工作动作组：托盘/擦拭/洗涤/理箱/查验；复眼壳分离出壳沿；软体围裙）。
- **场景**：A 厅六臂铜圈吊灯 ×3（东侧半死）、北窗街灯、礼盒堆、话筒架、叠凳、倒椅、彩带纸屑、褪色相框；B 廊挂历、壁挂电话、挂外套、拖把桶；E 门 PVC 条帘（穿过时被拨开、弹簧回摆）；光柱尘埃粒子。
- **材质**：墙面/地面/复眼全面接 bumpMap（勾缝凹陷、砖面微鼓）；CRT 监看画面新增场同步撕裂与极远处不动的竖影。
- **后期**：halation 高光溢散、片门微晃（gate weave）、借视过载噪场爆开、空间压迫（实体近身且可见时暗角收紧 + 颗粒变重 + 极缓呼吸）、低处滤镜（中间调下压、阴影偏绿）。

### 声景（WebAudio 全程序化，禁水声词条持续生效）

- 分层脚步（地毯/水磨石/水泥/沉积 × 左右脚交替）；快速转身衣料摩擦；镇流器打火哒声（闪烁尖峰上升沿）。
- 乐队：归档后走带变慢半分、音准下漂；实体每回返一圈偶尔漏一个音（缺席比出错更响）。
- PVC 条帘拍打、远处卡车驶过、证据窗口屏息、实体呼吸声。

## 验证步骤与结果

### 1. 单元测试（纯逻辑，无浏览器）

```bash
cd demo/web && npm test
# tests 15 / pass 15 / fail 0
```

新增 `tests/gameplay.test.mjs` 5 项：借视过载→冷却→恢复全周期、借视不改变实体速度与模式、
实体圈数计数与事件、复位归零、表面裁决四分区（并断言地毯矩形与世界几何一致）。

### 2. 端到端实机通关（真实驱动 index.html，非回放）

```bash
cd demo/web && npm run e2e
# 27 项断言全过；主路径实机用时 61.4s ∈ [45,95]；运行时声源 26 个，无禁单项
```

### 3. 截图证据（本轮定妆照）

`assets/screenshots/ascension_*.jpg`，由 `tests/shot.mjs` 摆位实拍：

| 文件 | 内容 |
| --- | --- |
| `ascension_01_hall.jpg` | A 厅读场：吊灯、横幅、圆桌、地毯 |
| `ascension_02_corridor.jpg` | B 走廊：瓷砖高光、纵深、道具 |
| `ascension_03_low_lane.jpg` | 低处巷：沉积地面、低处滤镜 |
| `ascension_04_deck_crt.jpg` | C 房归档后 CRT 播放婚宴画面 |
| `ascension_05_evidence.jpg` | E/B 交界侧向证据窗口中的返席人 |
| `ascension_06_sightjack.jpg` | 借视 POV + 信号干扰后期 |
| `ascension_07_curtain.jpg` | 返席人穿过 E 门 PVC 条帘（背光半透） |

### 4. Windows 便携包

```bash
bash packaging/win/build.sh
# 产物：release/windows/Fanchao-H00R0-win-x64.zip（约 1.4MB）
```

- 壳：Neutralino v6.9.0（预编译多平台二进制 + resources.neu 资源包，Linux CI 上即可产出 Windows exe，无需 wine）。
- 验证：`file` 确认 `返潮-H00R0.exe` 为 `PE32+ executable (GUI) x86-64`；
  `@electron/asar list resources.neu` 确认游戏 18 个文件全部打入；
  用同一份 `resources.neu` 配 Linux 二进制以 `--mode=cloud`（仅起内置 HTTP 服务器）冒烟：
  `index.html`、`js/main.js`、`lib/three.module.min.js` 均 200 返回。
- 运行要求：Windows 10/11 x64（WebView2 系统自带；缺失时装 [WebView2 运行时](https://developer.microsoft.com/microsoft-edge/webview2/)）。
- 说明：exe 与 `resources.neu` 需在同一目录；包内附《启动说明.txt》。

## 红线自检（本轮未破）

无可见水/水声（声源注册表断言持续在测）· 无蓝滤镜（低处滤镜为灰绿中间调下压，非蓝）·
无跳脸 · 无追击（实体路线与速度合同未动，借视/圈数均不反向影响实体）· 无碰撞推回 ·
HUD 极简（仅角标与字幕）· 实体恒速（单测断言借视时速度不变）。
