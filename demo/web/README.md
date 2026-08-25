# H00-R0 Web 行为灰盒

零依赖静态页面：直接用浏览器打开 `index.html`，或 `python3 -m http.server` 后访问。

- **验证范围（白名单）**：A/B/C/D/E 空间闭环、浅/低双路线、REC/PAUSE 归档（半径 2.4m=UE 240UU）、实体 D→B→C门外→E→D 匀速回返（1.5m/s）、让行不推回、E/B 交界侧向证据（每圈 ≤1 次、≤2 秒）、低处声学状态（变厚变远，无水声）、R 全局复位、UE 格式运行日志。
- **明确不验证**：时代底片、材质、灯光、镜头手感、正式声音、M01 造型——这些属于 UE 5.8 主线（`demo/ue`）的 Gate。
- **一致性**：行为数值对齐 `demo/ue/H00_Source`；两端行为分歧时以 Round 2 合同（交接包 zip 内 `02_当前Demo_H00-R0/原始评审/`，现行转写见 `docs/game-design/03_核心玩法.md` §3.1 基础层）为唯一裁判。
- **状态（2026-08-24 双栈裁决后）**：本 2D 灰盒冻结维护——只修 bug 不加功能，作为行为合同的回归基线保留；3D Demo 在 `demo/web3d/`（Three.js）按 `docs/agent-playbook/` 制作。

## 截图场景模式

URL 参数可复现任意状态用于文档截图（见 `applySceneParams`）：`px/py/pa` 玩家位姿、`ent` 实体航点进度、`entwork` 工作标签、`wait` 让行、`archived/crt` 归档态、`evidence` 侧向证据、`beat` 节拍高亮、`cams` 标注层、`bare` 只留画布、`freeze` 冻结模拟、`seedlog` 预填日志。批量生成见 `tools/capture_screenshots.py`。
