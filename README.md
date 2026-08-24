# 返潮（Fanchao）

> **潮来了，但水没有来；真正抵达陆地的是水深、压力、沉积、声学和时间留下的后果。**

2001 年前后中国北方沿海小镇的恐怖游戏项目。小镇没有被淹没，公共系统照常营业；但干燥的日常空间开始承受一个不可见的深度界面。恐怖不来自跳脸和追击，而来自动作、职责与位置被旧伤、压力和深度重新规定。

当前垂直切片：**H00-R0《婚宴后场：返席》**——玩家是婚宴后场临时录像/服务人员，任务是把婚宴录像带插回 C 房间卡座并按 `REC/PAUSE` 归档；一个「返席人」沿旧后勤路线 D→B→C门外→E→D 回返，不追逐、不推挤。

`demo/web/` 是可在浏览器直接游玩的第一人称实时 3D Demo（Three.js），画面与手感对标 PS3《死魂曲：血之诅咒》的低照度实机气质。行为灰盒 v1 保留在 `demo/web-graybox/`。

## 快速开始：打开 Demo

```bash
python3 -m http.server 8000
# 打开 http://localhost:8000/demo/web/
```

无构建、无外网依赖（Three.js 已 vendor）。操作：鼠标转向 · `WASD` 移动 · `E` 归档 · 按住 `Q` 借视 · `R` 复位 · `V` 标注 · `M` 声音。建议耳机。运行细节见 [demo/web/README.md](demo/web/README.md)。

先读这个：**[docs/demo-v1-walkthrough.md](docs/demo-v1-walkthrough.md)** —— 含空间闭环、节拍、完成门自检与实机截图。

```bash
npm test                 # 状态机 10 项
npm run e2e              # headless Chrome 实机通关（需本机 Chrome）
```

**UE 5.8 主线**：源码在 `demo/ue/H00_Source/`（需装有 UE 5.8 的机器；本云端未复跑）。

## 仓库结构

```text
docs/                        当前执行基线文档
  demo-v1-walkthrough.md     审阅指南（3D 升格点 + 死魂曲完成门）
  h00-r0-e2e-record.md       端到端实机验证记录
  demo-workflow-plan.md      Demo 工作流与可执行计划
  tech-route.md              技术路线
demo/
  web/                       H00-R0 第一人称实时 3D 最终 Demo（可玩）
  web-graybox/               行为灰盒 v1（历史参照）
  ue/H00_Source/             UE 5.8 独立工程源码
assets/screenshots/          灰盒节拍图 + final3d_*.jpg 实机截图
archive/                     交接包完整解压（只读历史层）
```

## 技术路线（一页结论）

- **本次可玩交付**：浏览器实时 3D（`demo/web`）。云端没有 Unreal，不以「等 UE」代替可玩切片。
- **后续正式资产落点**：H00 独立 **Unreal 5.8** 工程（路径 A），空间由 C++ 运行时生成。
- **历史冻结**：Mudflat 泥滩工程为技术证据不再叠加；灰盒 v1 只作行为合同参照。

## 实现状态（诚实标注）

| 项 | 状态 |
| --- | --- |
| Web 第一人称 3D Demo（行为合同 + 实时场景） | PASS（`npm test` 10/10；e2e 27/27，主路径 61.4s） |
| Web 行为灰盒 v1 | PASS（保留于 `demo/web-graybox/`） |
| 2001 底片 / 程序化材质 / 空间音频 | PASS（Web 管线内；零外链素材） |
| 程序化人形 + 侧向复眼证据 | PASS（Web 管线内；非照片级高模） |
| UE 5.8 可见画面 | 未在本环境复验（无 UE） |

相对 PS3《死魂曲》实机：气氛、灯光、颗粒与行为合同已立住；实体仍是程序化低模，正式角色/场景资产仍按 Gate 冻结。

## 核心禁止项（永久）

无可见海水 · 无潮湿水线 · 无蓝色水下滤镜 · 无海洋装饰宣布恐怖 · 无跳脸 · 无冲刺追击 · 无碰撞推回 · 无随机恐怖过场 · 无伪精确物理数值 · 瓷砖腰线变形不得作为唯一异常
