// 议程导演 —— 喜事轴时钟（迎宾→入席→上菜→敬酒→上头→送入洞房）
// 每次广播后全楼收网一档；玩家可拖延，不能取消。
import * as THREE from 'three';

const REGION_CALL = {
  '宴会厅': '东厅', '服务走廊': '走廊', '大堂': '大堂', '海洋馆连廊': '连廊', '员工连廊': '后廊',
};

export class Agenda {
  constructor(g) {
    this.g = g; // { scene,L,sys,wrist,player,audio,ui,crt,mc,waiters,guests,gazer,bride,post }
    this.beat = 0;
    this.noise = 0;
    this.noiseCooldown = 0;
    this.call = { active: false, waiter: null };
    this.escorting = false;
    this.grace = 0;
    this.finaleTimer = -1;
    this.cutT = 0;
    this.gateNoiseDone = false;
    this.lightMult = { hall: 1, corridor: 1, lobby: 1, aqua: 1, connector: 1 };
    this.hallColor = new THREE.Color(0xffc078);
    this.ended = false;
    this._pending = [];
  }

  after(sec, fn) { this._pending.push({ t: sec, fn }); }

  // ---------- 广播（含静默规则：收声→提示音→广播词→手势滞后） ----------
  announce(text, sylls, cardTitle = null, cardSub = '') {
    const { audio, ui, mc } = this.g;
    audio.hush(3);
    this.g.post.shock = 0.8;
    this.after(2.2, () => audio.paChime());
    this.after(3.4, () => {
      audio.broadcast(sylls, 104 + this.beat * 4);
      ui.subtitle('【广播】' + text, Math.max(3.5, sylls * 0.4));
      if (cardTitle) ui.card(cardTitle, cardSub);
      // 声先手后：司仪手势滞后（同步律——终局趋近 0）
      const lag = 1.4 * (1 - mc.sync);
      this.after(3.4 + lag, () => mc.gesture());
    });
    this.after(7.5, () => audio.unhush());
  }

  addNoise(v, silent = false) {
    if (this.beat < 2 || this.ended) return;
    this.noise = Math.min(1.6, this.noise + v);
    if (!silent && this.noise >= 1 && this.noiseCooldown <= 0 && !this.call.active && !this.escorting) {
      this.triggerCall(false);
    }
  }

  // ---------- 司仪点名（腕绳绷亮 → 寄挂保命） ----------
  triggerCall(scripted = false) {
    if (this.call.active || this.ended) return;
    const { audio, ui, waiters, player } = this.g;
    this.call.active = true;
    this.noise = 0;
    this.noiseCooldown = 26;
    audio.tension(1.8);
    const region = this.g.regionNameAt(player.pos) || '大堂';
    const rn = REGION_CALL[region] || region;
    this.after(1.2, () => {
      audio.broadcast(9, 96);
      ui.subtitle(`【广播】${rn}的这位来宾——请入席。`, 4);
    });
    ui.callHint(true);
    if (scripted) ui.objective('司仪点了你的名 —— 腕绳亮了。冲到任意<b>礼钩</b>前按 E，把腕绳<b>寄挂</b>上去！');
    // 最近的可见侍应转上你的绳
    let best = null, bd = 1e9;
    for (const w of waiters) {
      if (!w.visible) continue;
      const d = w.group.position.distanceTo(player.pos);
      if (d < bd) { bd = d; best = w; }
    }
    if (best) { best.startChase(); this.call.waiter = best; }
  }

  resolveCall() {
    const { audio, ui, wrist } = this.g;
    this.call.active = false;
    ui.callHint(false);
    wrist.shorten();
    audio.pluck(140, 0.5);
    audio.pluck(52, 0.4);
    if (this.call.waiter) { this.call.waiter.stopChase(this.g.sys); this.call.waiter = null; }
    ui.subtitle('腕绳寄挂上了。它又短了一截。', 3.5);
    if (this.beat === 3 && !this._doorCObjGiven) {
      this._doorCObjGiven = true;
      this.after(2, () => ui.objective('去西墙的<b>连廊门</b>——摘下拦门绳，进海洋馆连廊。'));
    }
  }

  // ---------- 引座（失败演出：您的位置在这边） ----------
  escort(waiter) {
    if (this.escorting || this.grace > 0 || this.ended) return;
    const { ui, player, audio } = this.g;
    this.escorting = true;
    this.call.active = false;
    ui.callHint(false);
    if (this.call.waiter) { this.call.waiter.stopChase(this.g.sys); this.call.waiter = null; }
    audio.thud(0.25);
    ui.fade(1, 0.5);
    ui.subtitle('「您的位置在这边。」', 4);
    this.after(1.6, () => {
      if (!this.escorting || this.ended) { ui.fade(0, 0.8); return; }
      player.teleport(-1.7, -10.2, 0);
      player.seated = true;
      // 押送的侍应回到席边站立
      waiter.group.position.set(-2.6, 0, -10.2);
      waiter.state = 'stand'; waiter.standTimer = 5;
      ui.fade(0, 0.8);
      ui.prompt('你被按进了一把空椅子。<b>长按 E</b> 站起来');
    });
  }

  standUp() {
    const { ui, player } = this.g;
    player.seated = false;
    this.escorting = false;
    this.grace = 7;
    ui.prompt('');
    ui.subtitle('趁他们没看着——走。', 3);
  }

  // ================= 六拍 =================
  start() {
    const { ui } = this.g;
    ui.fade(0, 2.5);
    this.beat = 1;
    ui.card('议程一 · 迎宾', '南方大酒店 · 2001年 秋');
    this.after(2.5, () => ui.subtitle('婚宴开始前，周絮拉着你的手腕系了根红绳："全乎人。别摘。"', 6));
    this.after(9, () => ui.subtitle('全场宾客的腕上都有一根。他们的都垂到地上，接进了同一张网。', 6));
    this.after(16, () => ui.objective('到<b>主桌</b>前听司仪报幕（WASD 移动 / 鼠标环顾）'));
    this.g.guests.layoutParty([[-6.5, -6], [6.5, -6], [-11, -9.5], [11, -9.5], [-6.5, -12.5], [6.5, -12.5], [-11, -3], [11, -3]]);
    this.g.audio.setLayer('murmur', 0.045, 3);
    this.g.audio.setLayer('roomtone', 0.05, 1);
    this.g.audio.motif(false);
  }

  _beat1到主桌() {
    this.beat = 1.5;
    const { ui, guests } = this.g;
    this.announce('各位来宾，欢迎光临周府喜宴。请各位来宾——入席。', 14, '议程二 · 入席');
    guests.turnTo(0, -18);
    this.after(8, () => ui.subtitle('周絮的母亲塞给你一张单子："乖，去后头帮拿喜糖。走廊直走就是。"', 6.5));
    this.after(15, () => ui.objective('从<b>东门</b>去服务走廊 —— 门被<b>拦门绳</b>拴着：对准红绳端头按 E <b>摘</b>下，再对准旁边的空钩按 E <b>挂</b>上'));
  }

  _beat2开席() {
    this.beat = 2;
    const { ui, waiters, sys, crt } = this.g;
    this.announce('吉时已到，喜宴——开席。', 10, '议程三 · 上菜');
    // 侍应上线：只沿红绳走
    waiters[0].setVisible(true);
    waiters[0].mountNearest(sys, new THREE.Vector3(24, 0, -6.2));
    waiters[1].setVisible(true);
    waiters[1].mountNearest(sys, new THREE.Vector3(38.2, 0, 6));
    crt.setFutureActive(['corridor']);
    this.after(6, () => ui.objective('穿过服务走廊去<b>大堂</b>。侍应只沿红绳滑——绳网就是他们的全部路线。可以<b>改挂红绳</b>改写它。'));
    this.after(12, () => ui.subtitle('传菜口的电视比现实早一档——它在播这条走廊接下来的绳网。', 6));
  }

  _beat3敬酒点火() {
    this.beat = 3;
    const { ui, audio, L, crt } = this.g;
    audio.hush(4.5);
    this.g.post.shock = 1.2;
    ui.subtitle('全楼的声音退潮式地收了——像海在吸气。', 5);
    this.after(4.5, () => {
      audio.paChime();
      this.after(1.2, () => {
        audio.broadcast(12, 100);
        ui.subtitle('【广播】有请新人，向各位来宾——敬酒。', 5);
        ui.card('议程四 · 敬酒', '返潮');
      });
    });
    this.after(7.5, () => {
      // 返潮点火：全楼状态切换
      audio.motif(true, 0.05);
      audio.setLayer('sea', 0.6, 4);
      audio.setLayer('murmur', 0.0, 2);
      audio.unhush(1);
      this.lightMult = { hall: 0.4, corridor: 0.55, lobby: 0.42, aqua: 0.8, connector: 0.8 };
      L.dyn.fog.density = 0.026;
      L.dyn.pits.forEach(p => p.visible = true);
      L.dyn.headlights.mat.opacity = 0.12;
      crt.setFutureActive(['lobby']);
      ui.subtitle('灯没灭。可大堂像一间被住了几十年的深海。地上有几块乌亮的凹坑——有什么东西从建筑里起身走了。', 8);
      this.g.post.shock = 1.0;
    });
    this.after(15, () => this.triggerCall(true));
  }

  _beat4上头() {
    this.beat = 4;
    const { ui, waiters, sys, crt } = this.g;
    this.announce('吉时已到，请全福人——上前。', 11, '议程五 · 上头');
    waiters[2].setVisible(true);
    waiters[2].mountNearest(sys, new THREE.Vector3(15, 0, 22));
    crt.setFutureActive(['aqua']);
    this.after(7, () => ui.objective('通过<b>检修闸</b>：闸门的红绳卡在错钩上。挂到高处<b>绞盘钩</b>＝慢而安静；挂到近处<b>卡扣钩</b>＝快但巨响——玻璃受不了巨响。'));
    this.after(14, () => this.g.ui.subtitle('售票台的电视里，这面玻璃已经陷进来了。它在等一个响。', 6));
  }

  _beat4b连廊() {
    this.beat = 4.5;
    const { ui, gazer } = this.g;
    ui.objective('沿<b>员工连廊</b>回宴会厅。');
    gazer.appearAt(-17.1, 8, null);
    ui.subtitle('连廊尽头站着个穿旧式礼服的女人。她腕上的红绳——是剪断的。', 6.5);
  }

  _beat5送入洞房() {
    this.beat = 5;
    const { ui, sys, L, crt, guests, bride, waiters, mc, audio } = this.g;
    mc.sync = 1;
    this.announce('送——入——洞——房——', 8, '议程六 · 送入洞房', '喜事不许退席');
    this.after(5, () => {
      // 宴会厅喉道化
      L.dyn.throat.visible = true;
      L.dyn.garlands.forEach((gl, i) => { gl.position.y = -1.4 - (i % 2) * 0.5; });
      this.lightMult.hall = 0.45;
      this.hallColor.setHex(0xff5838);
      L.dyn.fog.density = 0.03;
      crt.setStatic('T03', true);
      crt.setFutureActive([]);
      audio.setLayer('sea', 1.0, 3);
      guests.layoutFinale([0, -13.5]);
      bride.show(-0.9, -14.6, 0.6);
      // 收网：全楼红绳收拢成以主桌为中心的网
      sys.clearAllCords();
      sys.addCord('hW_wall', 'hStageR', { slack: 0.3 });
      sys.addCord('hE_wall', 'hStageL', { slack: 0.3 });
      sys.addCord('hW_free', 'hMainA', { slack: 0.4 });
      sys.addCord('hMainA', 'hMainB', { slack: 0.1, tag: 'seatlock', rideable: false });
      // 主桌烛光（终局唯一新增光源：盖头新娘可读）
      if (!this._candle) {
        this._candle = new THREE.PointLight(0xff9a50, 14, 9, 1.6);
        this._candle.position.set(0, 1.8, -13.5);
        this.g.scene.add(this._candle);
      }
      for (let i = 0; i < 3; i++) {
        waiters[i].setVisible(true);
        waiters[i].group.position.set(-6 + i * 6, 0, -6);
        waiters[i].mountNearest(sys, waiters[i].group.position);
      }
      this.g.gazer.appearAt(-5.5, -16.2, Math.atan2(2.1 - (-5.5), -13.5 - (-16.2)));
      this.finaleTimer = 110;
      ui.objective('主桌东侧的<b>上宾席</b>就是留给你的席位 —— 摘下捆席的红绳，到席前<b>长按 E 剪断你的腕绳</b>。回眸客盯着的方向就是那把椅子。');
      this.g.post.shock = 1.4;
    });
  }

  _cut() {
    if (this.ended) return;
    this.ended = true;
    const { ui, audio, mc, waiters, guests, L, crt } = this.g;
    this.finaleTimer = -1;
    this.call.active = false;
    this.call.waiter = null;
    ui.callHint(false);
    ui.timer(false);
    ui.prompt('');
    audio.snip();
    audio.hush(0.5);
    audio.setLayer('sea', 0.0, 6);
    mc.silenced = true;
    waiters.forEach(w => { w.state = 'stand'; w.standTimer = 1e9; });
    guests.turnTo(0, 8);
    crt.setStatic('T01', true); crt.setStatic('T02', true); crt.setStatic('T07', true);
    this.g.wrist.mat.color.setHex(0x2a2426);
    this.g.wrist.mat.emissive.setHex(0x000000);
    ui.subtitle('绳断的那一声之后——整栋楼第一次没有声音。司仪张着封死的口，广播里什么也没有。', 8);
    this.after(4, () => {
      audio.motif(true, 0.035);
      ui.subtitle('身后，红幕后面，有很长很长的东西极慢地松开了这栋楼。', 7);
      L.dyn.doorSOpen = true;
      L.dyn.doorSCollider.disabled = true;
      L.dyn.headlights.mat.opacity = 0.9;
      ui.objective('散场了 —— 从<b>正门</b>出去。');
    });
  }

  _goodEnd() {
    if (this._finished) return;
    this._finished = true;
    const { ui, audio } = this.g;
    ui.fade(1, 3);
    audio.setLayer('roomtone', 0, 2);
    this.after(3.2, () => {
      ui.end('散 场',
        '海雾里停着一排车，车灯全亮着。<br>没有人按喇叭。没有人催。<br><br>你腕上的绳头还在，剪断的。<br>和那个女人的一样。<br><br><span class="dim">《返潮 FANCHAO》——「喜宴」垂直切片 · 通关</span>',
        '再来一遍', () => location.reload());
    });
  }

  _badEnd() {
    if (this.ended) return;
    this.ended = true;
    const { ui, audio, L } = this.g;
    ui.timer(false);
    ui.fade(1, 1.2);
    audio.broadcast(6, 92);
    L.dyn.cardYou.mat.map = L.dyn.cardYou.flip;
    L.dyn.cardYou.mat.needsUpdate = true;
    this.after(1.6, () => {
      ui.end('您的位置在这边',
        '议程走完的时候，你还坐在席上。<br><br>侍应把你面前的桌牌轻轻翻了过来。<br>牌面上写的不是你的名字。<br><br><span class="red-big">「上　宾」</span>',
        '重来这一段', () => this._retryFinale());
    });
  }

  _retryFinale() {
    const { ui, player } = this.g;
    ui.hideEnd();
    this.ended = false;
    this._finished = false;
    player.seated = false;
    this.escorting = false;
    player.teleport(-13.8, -6, -Math.PI / 2);
    ui.fade(0, 1.5);
    this.beat = 4.9;
    this.after(0.8, () => this._beat5送入洞房());
  }

  // ================= 主更新 =================
  update(dt) {
    const g = this.g;
    const p = g.player.pos;
    // 延时队列
    for (let i = this._pending.length - 1; i >= 0; i--) {
      this._pending[i].t -= dt;
      if (this._pending[i].t <= 0) {
        const fn = this._pending[i].fn;
        this._pending.splice(i, 1);
        fn();
      }
    }
    this.noise = Math.max(0, this.noise - dt * 0.1);
    this.noiseCooldown = Math.max(0, this.noiseCooldown - dt);
    this.grace = Math.max(0, this.grace - dt);

    // —— 拍触发 ——
    if (this.beat === 1 && p.distanceTo(new THREE.Vector3(0, 0, -11.5)) < 3.4) this._beat1到主桌();
    else if (this.beat === 1.5 && p.x > 15.4) this._beat2开席();
    else if (this.beat === 2 && p.z > 14.5) this._beat3敬酒点火();
    else if (this.beat === 3 && p.x < 23.5 && p.z > 19) this._beat4上头();
    else if (this.beat === 4 && p.x < 2.5 && p.z > 19) this._beat4b连廊();
    else if (this.beat === 4.5 && p.x > -15 && p.z < 0 && p.z > -20) this._beat5送入洞房();
    else if (this.ended && this._doorOpen() && p.z > 5.5) this._goodEnd();

    // —— 点名进行时 ——
    if (this.call.active) {
      g.wrist.glow = 1;
      g.post.redPulse = 0.5 + Math.sin(performance.now() * 0.008) * 0.3;
      if (Math.floor(performance.now() / 800) !== this._hb) {
        this._hb = Math.floor(performance.now() / 800);
        g.audio.heartbeat();
      }
    }

    // —— 终局倒计时 ——
    if (this.finaleTimer > 0 && !this.ended) {
      this.finaleTimer -= dt;
      g.ui.timer(true, this.finaleTimer / 110);
      if (this.finaleTimer < 30 && !this._warn30) {
        this._warn30 = true;
        g.ui.subtitle('司仪的手势和广播已经完全同步了。快。', 4);
      }
      if (this.finaleTimer <= 0) {
        this.finaleTimer = -1;
        this._badEnd();
      }
    }

    // —— 灯光插值 ——
    for (const grp of Object.keys(g.L.lights)) {
      for (const l of g.L.lights[grp]) {
        const target = (l.userData.base ?? l.intensity) * (this.lightMult[grp] ?? 1);
        l.intensity += (target - l.intensity) * dt * 1.5;
        if (grp === 'hall' && this.beat >= 5) l.color.lerp(this.hallColor, dt * 0.8);
      }
    }
  }

  _doorOpen() { return !!this.g.L.dyn.doorSOpen; }
}
