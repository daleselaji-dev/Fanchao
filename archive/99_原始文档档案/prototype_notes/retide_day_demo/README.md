# 《返潮》滩涂首日 Demo

这是可直接交付查看的浏览器版 60-90 秒核心切片，用于在 UE 资产制作完成前验证节拍、色彩和玩法逻辑。

## 运行

在项目根目录启动：

```powershell
python -m http.server 4175 --bind 127.0.0.1
```

打开：`http://127.0.0.1:4175/prototypes/retide_day_demo/`

## 操作

- 一号/二号警报箱：触发警报测深
- 第二次警报：改变无正面父亲路线
- 重置：回到滩涂送面开场

## 资产对照

| 资产 | 当前实现 | 正式替换 |
| --- | --- | --- |
| 归面 | Canvas 实例化几何 | UE StaticMesh 实例 |
| 无正面父亲 | Canvas 英雄占位 | Hunyuan3D/Antigravity GLB |
| 警报箱 | UE `h00_switchboard.glb` + Canvas 控件 | UE 可碰撞控制箱 |
| 警报塔电话 | UE `h00_red_phone.glb` | UE 塔内电话 |
| 深度柱 | Canvas 材质表现 | UE 灰尘、布料、门框受压 |
