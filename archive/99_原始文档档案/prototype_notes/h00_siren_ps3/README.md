# 《返潮》临海婚宴酒店 Siren-like PS3 实时 3D 原型

当前正式可玩原型。不是文字冒险，也不是背景图分支。

当前路线：雨夜停车场实际移动到装卸门 → 分区流送进入 W01 婚宴厅 → 绕开四张圆桌到扩声台切断主扩声 → 婚宴来客开始巡查、镜后席位恢复、v07 返程墙形变 → 穿墙进入 H00 前台 → 红电话、按住 `Q` 借视、抽出跨重力 214 钥匙、接通总机 → 员工后门进入 M01 四门客房短层 → 在镜前借视确认同一具身体 → 楼梯门返回同一停车场 → 用 214 打开面包车收束。

H00 与 W01 不同时常驻。每次过门保存同一局状态并卸载旧区，避免 H00 约 1.39GB、W01 约 683MB、返程墙约 235MB 的解码显存叠加。这个黑场换区是当前 PS3 风格分区流送策略，不是菜单分支。

## 运行

首次运行需要 Node.js；依赖已锁定为 Three.js 0.185.1。

macOS 可双击 `RUN_H00_SIREN.command`，或在项目根目录执行：

```bash
python3 -m http.server 4173 --bind 127.0.0.1
```

然后打开：

```text
http://127.0.0.1:4173/prototypes/h00_siren_ps3/
```

操作：`WASD` 移动，鼠标转向，`Shift` 跑，`E` 现场交互，按住 `Q` 借视。建议桌面 Chrome、全屏、戴耳机。

## 校验

```bash
node --test prototypes/h00_siren_ps3/tests/game_state.test.mjs
node --check prototypes/h00_siren_ps3/game.mjs
node --check prototypes/h00_siren_ps3/prelude.mjs
node --check prototypes/h00_siren_ps3/hotel_loop.mjs
```

浏览器实机证据位于 `output/playwright/HOTEL_LOOP_*.png`。外部、婚宴、前台、客房层和楼梯门返回已用真实输入连续验证；当前客房层仍是四门灰盒与黑色人影版本，M01 的完整身体连续体和最终照片现实资产尚未进入。
