# H00-R0 最终 3D Demo —— 端到端实机验证记录

- 日期：2026-08-24
- 环境：云端 Linux VM，无 GPU；headless Chrome（`--use-angle=swiftshader` 软渲染）+ playwright-core 1.55
- 命令：`npm test`（状态机单测）与 `npm run e2e`（实机通关，浏览器内真实驱动 `demo/web/index.html`）
- 说明：e2e 不是回放脚本——它通过页面测试钩子逐帧驱动同一份游戏循环（输入 → sim 裁决 → 渲染 → 音频状态），沿主路径实际走完 A→B→C→B→A，途中断言行为合同并截图。截图仅是证据，断言才是验证。

## 单元测试（`node --test demo/web/tests/`）

10 项全过：归档半径与状态、实体路线不穿家具、让行（占道等待/恢复）、证据触发条件（低处+视线+距离）与每圈一次上限、证据时长 ≤2s、复位语义、低处声学状态、玩家碰撞不可穿墙、实体速度恒定。

```text
# tests 10
# pass 10
# fail 0
```

## 端到端实机通关（`node demo/web/tests/e2e.mjs`）

27 项断言全过，主路径实机用时 61.4 秒（合同区间 45–95 秒）：

```text
shot | 01_hall_read
PASS | A→服务门（3.6s）
PASS | 进走廊
shot | 02_corridor_listen
PASS | 浅处服务线西行
PASS | 从巷口下低处
PASS | 低处声学状态激活
shot | 03_lane_descend
PASS | 低处巷西行到 C 门
PASS | 过门槛坡进 C
PASS | 站到卡座前
shot | 04_deck_prompt
PASS | E 键归档成功（半径 2.4m 合同）
PASS | CRT 播放普通婚宴画面
shot | 05_crt_footage
PASS | 实体进 E 洗涤（等待 29.2s）
PASS | 出 C 下低处巷
PASS | 蹲守 E/B 交界西侧
PASS | 侧向证据触发（等待 5.8s）
shot | 06_evidence
PASS | 证据每圈至多一次
shot | 06b_jack
PASS | 从巷口上浅处
PASS | 返程走廊
PASS | 穿服务门回 A
PASS | 循环完成（A→B→C→B→A）
PASS | 主路径实机用时 61.4s ∈ [45,95]
shot | 07_back_hall
PASS | 让行：实体原地等待
PASS | 让行：实体绝不推动玩家
PASS | 让行事件已记录
shot | 08_yield
PASS | 运行时声源无禁单项（20 个已注册）
PASS | 复位：时钟/归档/完成态清零
PASS | 复位：玩家回出生点
PASS | 复位：实体回 D 起点

E2E 全部通过
```

## 截图证据

通关途中拍摄的十帧存于 `assets/screenshots/final3d_*.jpg`（开场静帧、宴会厅、走廊、低处巷、卡座、归档后 CRT、侧向证据、借视、返程、让行）。

## 迭代过程中的人工巡场

除自动化外，打磨三轮均用 `demo/web/tests/shot.mjs` 逐点位摆位巡场（A 厅四角、北墙窗、舞台、B 走廊两端、低处巷、C 卡座前、D 卸货口、E 洗涤台等 30+ 机位），发现并修复：CRT 动态纹理 mipmap 塌色、高光 8bit 剪裁（换半浮点 HDR 链路）、红布饱和糊块、瓷砖过新、窗户嵌墙不可见、E 台离墙缝隙、证据转头背对玩家、出生帧对墙等问题。
