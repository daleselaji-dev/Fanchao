# 《返潮》视觉原型审查与生图 Prompt v1

> 日期：2026-08-25
> 性质：对交接包内全部视觉原型的现状盘点、按新版核心（「返席」：海送回记错的亲人，小镇把它办成喜事）的重新审查、Demo 前仍缺的原型清单（按优先级），以及可直接用于生图的 Prompt 列表。
> 视觉宪法约束沿用：无蓝色水下滤镜、无泛紫霓虹 AI 风、无触手／外星器官／统一感染脸、每帧只有一个主异常、720p 缩图仍可读、色板以水泥雾灰／氧化青绿／旧工作服蓝／暖贝灰／警报红（≤5%）为基准，婚宴场景允许礼俗红大面积存在（红属于真实礼俗，不属于恐怖特效）。

---

## 1. 现有视觉原型盘点与新核心下的再判定

### 1.1 发布级目标帧

| 原型 | 原审查状态 | 新核心下的判定 |
| --- | --- | --- |
| H00A 前台正常态 | 通过，锁定基准 | **继续有效。** 千禧现实底片与新核心无冲突；作为「危机前值得怀念的正常」仍是全项目材质与机位标杆 |
| H00B 续住名单（气质验证） | PROVISIONAL PASS（人物过、跨重力钥匙未过） | **人物气质结论收编**（递喜糖、接电话的温度正是「白日潮镇」基准）；钥匙柜异常线随酒店方向整体**后置**——第一切片在婚宴后场，不在前台 |
| H00C 前台危机后 | 全景过、近景未过 | **降级为方法论证据。** 「人物消失式危机」与新核心相反——我们的危机态是人**过多且过于快乐**，不是无人。同机位记忆差分的方法保留 |
| H01A CRT 预现 | PROVISIONAL PASS | **工具保留、优先级下调。** CRT 预现降级为第三幕局部语法（提前播放「下一轮上菜」），不做第一钩子 |
| H01 雾顶大堂 v0.1–v0.3 | 方向过、帧未过 | **冻结。** 雾面切断大堂属于酒店垂直线，且「浮肿滑向肉墙」的失败结论仍有效；不再迭代 |
| H01 酒店发育器官 v0.6 | REVISE，识别度 4/10 | **维持归档**（核心框架已否决其上位权） |
| H01 古海前肢／湿拓大堂 | 编辑稿 | **归档。** 古海外壳可作远期海洋馆奇观候选，不进当前管线 |
| H02 晚班食堂海床 | 制作规格 | **备用场景保留**，优先级低于婚宴线 |
| M01 多房间连续体 | 气氛过、怪物不过 | **冻结。** 「身体被房间折叠」与待客者职责不符；走廊气氛构图可作后期参考 |

### 1.2 莫比乌斯小镇 F0 五阶段

Phase 0（正常视野）／0.25（方位迟滞）／0.5（双海岸）／0.75（背面压顶）／1（同一地点另一面）序列与失败归档（地标换序过强、道路坡道误读）**全部保留**。这是全包质量最高的系统性视觉实验，其「同机位微变、需要对照才察觉」的纪律正好是新核心镇尺度的呈现方式。唯一重标定：翻面后的镇区远景中应存在**唯一一处彻夜亮着暖红灯光的建筑群**（宴席所在），成为全镇尺度的视觉锚与导航目标。

### 1.3 M01 父亲资产线

视觉 Gate 记录 v0.1–v0.4、A/B 模型工作流、复眼代理规格全部有效——形体不变，职责重铸为「待客者」后**需要补的是动作与手势参考，不是新形体**。正式模型继续冻结至行为门通过（与交接包决策一致）。

### 1.4 灰盒渲染（H00-R0）

四张灰盒（俯视图、A→B、C 录像机、E→B）确认空间闭环可读。按重制总计划，这是 Round 3 的合格产物；千禧真实美术尚未开始，正好按新语义直接做「不肯散场」版底片，**不存在返工**。

---

## 2. Demo 前仍缺的视觉原型清单（按优先级）

| 优先 | 缺口 | 类型 | 验证什么 | 对应 Prompt |
| --- | --- | --- | --- | --- |
| P0 | W01 婚宴厅「不肯散场」危机态 | 场景·目标帧 | 新核心的 5 秒张力测试能否成图 | P-01 |
| P0 | W01 婚宴厅正常态（散席进行中，有人） | 场景·目标帧 | 危机态的对照基准；「值得失去的正常」 | P-02 |
| P0 | M01 待客者「请」的手势（背影+侧面反射） | 怪物·关键帧 | 待客职责能否不靠文字被读懂 | P-03 |
| P1 | B 后场走廊同高度深度证据 | 场景·近中景 | 干燥深度的材料语言在婚宴后场成立 | P-04 |
| P1 | 错误认领遭遇（敬酒·喊错名） | 人物·事件帧 | 「世人的恐怖」的人物表演基准 | P-05 |
| P1 | 空座证据近景（空位有重量·回收） | 道具·近景 | 看不见的宾客已入席 | P-06 |
| P2 | 玩家角色（返乡录像员）三视图 | 人物 | 普通、可信、有职业工具 | P-07 |
| P2 | 普通服务员 NPC（先可爱后可怖） | 人物 | 生活轨基准 | P-08 |
| P2 | 英雄道具组：录像机卡座／宴会推车／座位卡 | 道具 | 近景可信度与交互暗示 | P-09 |
| P2 | 地形：莫比乌斯镇夜景——全镇唯一亮着的宴席 | 地形·远景 | 镇尺度视觉锚 | P-10 |
| P3 | 海洋馆走廊对照（缸内真水／缸外深度） | 场景 | 第二场景反证框架 | P-11 |
| P3 | 「数人的母亲」概念（后续怪物） | 怪物 | 谱系纵深预研 | P-12 |
| P3 | 滩涂归面礼历史帧（民俗层插画） | 叙事插图 | 第二幕档案资产 | P-13 |

说明：地形类此前只有 F0 全镇视野序列（白日），怪物类只有 M01 一个成形方向——**怪物谱系与夜景地形是当前最大的类型空缺**，但按「先切片后扩展」纪律，P2/P3 不阻塞 Demo。

---

## 3. 生图 Prompt 列表

### 3.0 全局前缀（每条 Prompt 前置使用）

```text
Production target frame for RETIDE (返潮), a grounded 2001 Chinese coastal-town
survival horror game. Documentary photographic realism, as if shot on a wedding
videographer's camera or ordinary 35mm lens; NOT concept-art gloss. Real Chinese
seaside small-town architecture and props of 1999-2003: enamel bowls, thermos
flasks, CRT televisions, red polyester chair covers, white tablecloths, plastic
flowers, faux-marble columns, brass trim, handwritten ledgers. Restrained
PS3-era horror composition readable at 720p. Exactly ONE impossible thing per
frame; everything else stays believably ordinary. Practical light sources only.
NEGATIVE: no blue underwater filter, no purple/neon AI palette, no teal-orange
blockbuster grade, no tentacles, no coral or barnacle collage, no slime, no
gore, no monster face close-up, no floating debris, no fisheye, no VHS overlay,
no lens dirt, no text, no logo, no watermark.
```

（以下每条只写主体内容；实际使用时拼接全局前缀。）

### P-01 W01 婚宴厅·不肯散场（危机态主帧）

```text
16:9 wide shot from the service door of a Chinese wedding banquet hall, 2 a.m.
Half of the hall is already cleared: stacked chairs, folded tablecloths, a
service cart with dirty dishes. The other half is still mid-celebration: three
round tables fully set, warm tungsten light, guests toasting -- but every empty
chair has a full, untouched place setting and a filled glass of baijiu.
On the far wall, a large red double-happiness (囍) paper is pasted directly over
a long horizontal band of dry, compressed, decades-old pressure damage running
at one consistent height through wall, doorframe and cabinet legs.
The ONE impossible thing: the celebration should have ended hours ago and half
the seats are held for no one visible, yet service continues earnestly.
Mood: warm, festive, deeply wrong. No monster, no ghost silhouette, no fog.
```

对应恐怖母题：喜事化的灾变（5 秒张力测试的实拍版）。

### P-02 W01 婚宴厅·正常态（散席进行中）

```text
16:9 same camera position as the crisis frame: a Chinese wedding banquet hall
around 9 p.m., 2001. Wedding just ended, guests leaving, staff clearing tables,
a tired bride's mother packing leftover candy, one waiter stacking red chair
covers, a videographer's tripod bag leaning by the door. Warm, noisy, lived-in,
slightly kitschy and genuinely likeable. Every prop has a function. No anomaly
at all -- this frame must be worth losing.
```

对应：危机前底片，同机位记忆差分的基准。

### P-03 M01 待客者·「请」的手势

```text
16:9 medium-long shot in a banquet-hall service corridor. Camera sees the BACK
of an ordinary 2001 coastal father figure: faded blue work jacket, left
shoulder lowered by years of net-hauling, right foot half-dragging. He has
stopped mid-route beside a set table and raised one arm in the precise,
practiced gesture of a banquet host inviting a guest to sit -- palm open toward
an empty chair. He does not turn around. In the narrow side reflection of a
stainless-steel serving panel, where his face should be there is a single dry
fossilized compound-eye plate from forehead to chest, warm shell-bone color,
eyes closed. The ONE impossible thing is the reflection. His posture must read
as hospitality, never as attack.
```

对应：待客者职责重铸；沿用已确认的无正面父亲形体。

### P-04 B 后场走廊·同高度深度证据

```text
16:9 eye-level shot down a narrow banquet back-of-house corridor, fluorescent
work light. At one consistent height (about 90cm) below an invisible line,
every different material shows decades of deep-sea service while staying
completely dry: table legs slightly shortened and bowed under load, a steel
cabinet door edge thickened with its rubber seal squeezed out, wall paint
compressed pale, a hard thin sediment layer of receipts, fish scales and fabric
fibers packed against the skirting. Above the line everything is ordinary.
A service cart with clean dishes stands half in, half out of the zone.
No water, no wetness, no glow, no line painted on the wall -- the height is
only deducible from the shared material history.
```

对应：「潮来了但水没有来」的教科书帧（婚宴后场版）。

### P-05 错误认领·敬酒事件帧

```text
16:9 slightly over-shoulder shot at a round banquet table, warm light. An
elderly woman in festive dark-red clothes has grabbed the wrist of a young
outsider (the player, camera-side, mostly out of frame) and is pressing a full
glass into his hand, her face lit with overwhelming, tearful joy -- the joy of
welcoming back a son. Every other guest at the table has turned to applaud in
perfect unison, identical clap phase, identical smile intensity. One place at
the table is empty with a name card facing the camera. The ONE impossible
thing is the perfectly synchronized joy. No distorted faces, no black eyes --
everyone looks like a real, warm relative.
```

对应：「记错人」重铸后的「错误认领」；同步的喜悦是唯一异常。

### P-06 空座证据·近景

```text
4:3 close-up of one banquet chair at a set table. The red chair cover and seat
foam are visibly compressed under the weight of no one; the tablecloth in front
of the seat is dragged a few centimeters toward the chair; chopsticks have been
used and laid back slightly wrong; the full glass shows a fresh lip mark.
Everything is dry and ordinary. Shallow depth of field on the seat compression.
No transparent figure, no distortion, no glow.
```

对应：「空位有重量」的回收——看不见的宾客已入席。

### P-07 玩家角色·返乡录像员三视图

```text
Character sheet, front/side/back, neutral gray background, photoreal. A Chinese
man around 28, 2001: cheap dark work jacket over a sweater, jeans, worn leather
shoes, canvas camera bag with a shoulder-mounted Betacam-style video camera,
spare tape in jacket pocket, bus ticket sticking out. Tired but alert posture
of someone who left this town years ago. Ordinary face, no heroic styling.
```

### P-08 普通服务员 NPC·先可爱后可怖

```text
Two-panel frame, same waitress, same corridor. Panel A: a plump, kind-faced
banquet waitress in early-2000s uniform vest laughs while balancing four bowls,
a pencil behind her ear -- warm, funny, likeable. Panel B: same pose hours
later, same smile held exactly, carefully ladling soup into a bowl at a fully
set table whose chair is empty and compressed. Nothing about her body is
monstrous; only her earnestness has outlived its object.
```

### P-09 英雄道具组

```text
Three separate prop studies on neutral background, photoreal, PS3-era
polycount-friendly silhouettes: (1) a 2001 Chinese banquet-hall VHS archive
deck with REC/PAUSE buttons, cassette half-inserted, handwritten labels;
(2) a stainless banquet service cart, worn wheels, stacked enamel plates,
one wheel squeaking-bent; (3) a red paper seat card holder with a handwritten
name card, second blank card tucked behind it. Visible wear where hands touch.
```

### P-10 地形·全镇唯一亮着的宴席（莫比乌斯夜景）

```text
21:9 elevated night view of a small Chinese coastal town, 2001, from the
inland road. The whole town is dark and fog-dimmed: gray cement housing
blocks, cold storage plant, radio tower with one red lamp, dry tidal flat
beyond. Exactly ONE building complex glows warm festive red-gold -- the
wedding hotel, every window lit, faint strings of red lanterns -- like a
single ember in a dead hearth. The road in the foreground curves toward the
viewer but visibly re-curves toward the hotel in the far distance.
No monsters, no sea, no neon. The single warm light source is the anomaly.
```

对应：镇尺度视觉锚；莫比乌斯「所有路回到宴席」的远景表达。

### P-11 海洋馆走廊对照

```text
16:9 shot down an aquarium public corridor, daylight. Inside the tank: clean,
correct seawater, healthy fish, normal caustics. Outside the glass, the dry
public corridor shows deep-sea service history at one consistent height:
bench legs bowed, floor tiles compressed pale, handrail bent inward, a dry
sediment line against the tank base. A worker calmly squeegees the glass.
The ONE impossible thing: the water is on the wrong side of the depth.
```

### P-12 「数人的母亲」概念（P3 预研）

```text
16:9 banquet table seen from one end. A middle-aged woman in festive clothes
stands counting seats with a pointing finger, mid-gesture, mouth open on a
number. Every guest she has already counted sits perfectly still with hands
in lap; the uncounted ones are still moving naturally, mid-conversation. Her
counting finger and forearm show fine dry salt-crystal jointing like a tally
stick. No face distortion. The frozen/unfrozen split along her count is the
single impossible thing.
```

### P-13 滩涂归面礼·历史帧（民俗插画）

```text
16:9 dusk shot of a wide dry tidal flat, 1980s China. A small family group
walks away from the camera toward offshore wooden stakes, carrying a rough
human-shaped effigy of sea mud, shell ash and old clothes. The figure's face
is deliberately left blank and unfinished. No one looks back. Cold gray-green
flat, bone-warm effigy, one distant warning tower. Documentary, respectful,
no horror staging -- this is the ritual done CORRECTLY.
```

---

## 4. 生成与审查纪律（沿用交接包决策）

1. 每条 Prompt 单独一轮，一轮只回答一个问题；生成结果落盘 `视觉原型/返潮_v0.9+/`，附 brief、提示词、审查与 PASS/FAIL。
2. 审查首问固定为：**遮住标题与说明，测试者能否说出本帧唯一的不可能？** P-01/P-05/P-10 追加新核心问题：能否说出「在办喜事，但不该办」？
3. 任何通过帧只升格为 CANDIDATE；进入 UE 资产线前仍须过形体／行为 Gate。
4. 婚宴红大面积出现时，检查它是否始终属于真实礼俗物件（椅套、喜字、灯笼、绸带）；红色一旦脱离礼俗载体漂浮成「气氛色」，判 FAIL。
5. 所有人物帧禁止统一怪脸：异常只允许出现在同步性、目的错误或单一反射证据上。
