# 返潮（Fanchao）

2001 年，中国北方一座海边小镇。**潮来了，水没有来。** 被海送回来的人开始回家——干燥的婚宴厅里，一个穿旧蓝工装的男人背对你收拾桌子，动作熟练得让人安心；绕到侧面才看见，他没有正面。

与《死魂曲 / SIREN》同量级的民俗恐怖：单主角、章节制；画质目标不低于优秀 PS3 后期作品。

## 入口（只有这一套）

1. **[docs/game-design/](docs/game-design/README.md)** —— 现行设计宪法（世界、形象库、玩法、视觉、技术栈裁决、审定记录）。
2. **[docs/agent-playbook/](docs/agent-playbook/README.md)** —— 下一个 Agent 制作 Demo 的逐步执行手册（Three.js 3D 灰盒，Step 1—10，含资产占位策略与完成定义）。**注意：Demo 尚未制作，该手册是计划不是成果。**
3. **[docs/demo-v1-walkthrough.md](docs/demo-v1-walkthrough.md)** —— 已有 2D 行为灰盒的审阅指南（嵌截图）。

## 现在就能跑的东西

**H00-R0 Web 行为灰盒**（2D，行为合同回归基线，零依赖）：

```bash
python3 -m http.server 8000
# 打开 http://localhost:8000/demo/web/
```

`WASD` 移动 · `E` 归档 · `R` 复位 · `V` 标注层 · `M` 声音

## 技术栈（一页结论，详见 [06 文档](docs/game-design/06_技术栈与制作工作流.md)）

- **Demo 执行栈：Three.js（浏览器）**——云端 Agent 可完整执行、可玩、可截图；产出于 `demo/web3d/`（尚未创建）。
- **正式产品栈：Unreal Engine 5.8**——最终画质与垂直切片；起点是 `demo/ue/H00_Source/`，只在装有 UE 的本地开发机推进，云端 Agent 不领 UE 任务。

## 仓库结构

```text
docs/game-design/        现行设计宪法（唯一设定入口）
docs/agent-playbook/     Demo 生成手册（下一 Agent 从这里开始）
docs/demo-v1-walkthrough.md   2D 行为灰盒审阅指南
demo/web/                2D 行为灰盒（可玩，冻结维护）
demo/ue/H00_Source/      UE 5.8 参考源码（正式产品栈起点）
assets/                  地图/分镜/截图/概念帧/灰盒渲染（审阅材料）
tools/                   截图与图表生成脚本
返潮_项目设定与Demo交接包_2026-08-05.zip   历史材料（不再解压入库，冲突以 docs/game-design/ 为准）
```

## 实现状态（诚实标注）

| 项 | 状态 |
| --- | --- |
| 设计宪法 + Demo 生成手册 | 完成（本仓库） |
| 2D Web 行为灰盒（行为合同全项） | PASS（可运行、截图可复现） |
| Three.js 3D Demo（`demo/web3d/`） | **NOT RUN**（按 [playbook](docs/agent-playbook/README.md) 执行） |
| UE 5.8 编译 + 状态机 | PASS（2026-08-04 原开发机历史证据，未在云端复跑） |
| UE 可见画面 | FAIL → 待复验（本地开发机任务，不阻塞 Demo） |
| 正式资产 / 贴图 / 实录音频 | NOT RUN（按 Gate 冻结） |
