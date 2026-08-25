"use strict";
/*
 * 返潮 H00-R0 —— 空间音频总线（全程序化合成，零素材）
 * 原则：声音先于画面；现实声音先成为旋律；异常是错位不是音刺。
 * 禁单（合同 + 测试双重断言）：无水声、无雨、无滴落、无海浪、无警笛、无怪物主题。
 * E 是洗涤间，但你听不到一滴水 —— 这是设计，不是缺失。
 */
import { BANNED_SOUND_PATTERN, losClear, roomOf } from "./contract.js";
import { SOUND_MANIFEST } from "./audio-manifest.js";

export function createAudio() {
  const A = {
    ctx: null,
    registry: [],       // 运行时注册表（测试断言用）
    started: false,
    muted: false,
    master: null,
    world: null,        // 世界总线（借视时压低）
    music: null,
  };

  function register(id) {
    if (!SOUND_MANIFEST.includes(id)) throw new Error(`未登记的声源 id: ${id}`);
    if (BANNED_SOUND_PATTERN.test(id)) throw new Error(`声源命中禁单: ${id}`);
    if (!A.registry.includes(id)) A.registry.push(id);
  }

  // 噪声缓冲（棕/白），只生成一次
  let brownBuf = null, whiteBuf = null;
  function makeNoise(ctx) {
    const len = ctx.sampleRate * 2;
    brownBuf = ctx.createBuffer(1, len, ctx.sampleRate);
    let last = 0;
    const b = brownBuf.getChannelData(0);
    for (let i = 0; i < len; i++) {
      last = (last + (Math.random() * 2 - 1) * 0.02) / 1.02;
      b[i] = last * 3.2;
    }
    whiteBuf = ctx.createBuffer(1, len, ctx.sampleRate);
    const w = whiteBuf.getChannelData(0);
    for (let i = 0; i < len; i++) w[i] = Math.random() * 2 - 1;
  }

  function panner(ctx, x, y, z, ref = 2, rolloff = 1.4) {
    const p = ctx.createPanner();
    p.panningModel = "HRTF";
    p.distanceModel = "inverse";
    p.refDistance = ref;
    p.rolloffFactor = rolloff;
    p.positionX.value = x; p.positionY.value = y; p.positionZ.value = z;
    return p;
  }

  // ---------------- 启动 ----------------
  const sources = {};
  function start() {
    if (A.started) return;
    let ctx;
    try { ctx = new (window.AudioContext || window.webkitAudioContext)(); }
    catch (e) { return; }
    A.ctx = ctx;
    A.started = true;
    makeNoise(ctx);

    A.master = ctx.createGain();
    A.master.gain.value = 1.0;
    const comp = ctx.createDynamicsCompressor();
    comp.threshold.value = -18; comp.ratio.value = 3; comp.knee.value = 12;
    A.master.connect(comp).connect(ctx.destination);
    A.world = ctx.createGain();
    A.world.connect(A.master);

    // ---- A 厅伴奏（电子琴走场循环，声源在西北音箱堆）----
    {
      register("band-organ"); register("band-pad");
      const bus = ctx.createGain();
      bus.gain.value = 0.0;
      A.musicThick = ctx.createBiquadFilter();   // 低处“变厚”：低架提升
      A.musicThick.type = "lowshelf";
      A.musicThick.frequency.value = 210;
      A.musicThick.gain.value = 0;
      A.musicLP = ctx.createBiquadFilter();
      A.musicLP.type = "lowpass";
      A.musicLP.frequency.value = 4200;
      const pan = panner(ctx, 3.2, 1.4, 2.4, 3.0, 1.15);
      bus.connect(A.musicThick).connect(A.musicLP).connect(pan).connect(A.world);
      A.music = bus;
      sources.band = { bus, nextNote: ctx.currentTime + 0.3, step: 0 };
    }

    // ---- 日光灯嗡声（每根亮管一个点源）----
    register("hum-fluoro");
    sources.hums = [];
    const humAt = (x, y, z, level) => {
      const osc = ctx.createOscillator();
      osc.type = "sawtooth"; osc.frequency.value = 100;
      const f = ctx.createBiquadFilter();
      f.type = "bandpass"; f.frequency.value = 300; f.Q.value = 1.4;
      const g = ctx.createGain(); g.gain.value = level;
      const p = panner(ctx, x, y, z, 1.2, 2.2);
      osc.connect(f).connect(g).connect(p).connect(A.world);
      osc.start();
      sources.hums.push({ g, base: level });
      return g;
    };
    humAt(6.5, 2.8, 12.1, 0.016);
    humAt(13, 2.8, 12.1, 0.016);
    humAt(26, 2.8, 12.1, 0.016);
    humAt(18.8, 2.6, 21.5, 0.014);
    humAt(31.5, 2.8, 16.2, 0.012);
    register("buzz-flicker");
    {
      // 坏灯管：闪烁打火（增益由外部 flickerLevel 驱动）
      const osc = ctx.createOscillator();
      osc.type = "square"; osc.frequency.value = 118;
      const f = ctx.createBiquadFilter();
      f.type = "highpass"; f.frequency.value = 900;
      const g = ctx.createGain(); g.gain.value = 0;
      const p = panner(ctx, 19.5, 2.8, 12.1, 1.0, 2.2);
      osc.connect(f).connect(g).connect(p).connect(A.world);
      osc.start();
      sources.flickerBuzz = g;
      // 垂危灯管（巷上，低哑）
      const g2 = ctx.createGain(); g2.gain.value = 0;
      const p2 = panner(ctx, 16, 2.8, 16.2, 1.0, 2.2);
      osc.connect(g2);
      const f2 = ctx.createBiquadFilter(); f2.type = "bandpass"; f2.frequency.value = 240;
      g2.connect(f2).connect(p2).connect(A.world);
      sources.dyingBuzz = g2;
    }

    // ---- CRT 行频 + 电流（C 房）----
    register("crt-whine");
    {
      const osc = ctx.createOscillator();
      osc.type = "sine"; osc.frequency.value = 15625;
      const g = ctx.createGain(); g.gain.value = 0.011;
      const osc2 = ctx.createOscillator();
      osc2.type = "sine"; osc2.frequency.value = 50;
      const g2 = ctx.createGain(); g2.gain.value = 0.006;
      const p = panner(ctx, 4.35, 1.3, 19.7, 0.8, 2.2);
      osc.connect(g).connect(p);
      osc2.connect(g2).connect(p);
      p.connect(A.world);
      osc.start(); osc2.start();
      sources.crtGain = g;
    }

    // ---- CRT 录像回放声（归档后：经媒介失真的婚宴声）----
    register("crt-footage");
    {
      const bus = ctx.createGain(); bus.gain.value = 0;
      const shaper = ctx.createWaveShaper();
      const curve = new Float32Array(64);
      for (let i = 0; i < 64; i++) { const v = i / 31.5 - 1; curve[i] = Math.tanh(v * 2.4); }
      shaper.curve = curve;
      const bp = ctx.createBiquadFilter();
      bp.type = "bandpass"; bp.frequency.value = 1200; bp.Q.value = 0.7;
      const p = panner(ctx, 4.35, 1.3, 19.9, 0.7, 2.0);
      bus.connect(shaper).connect(bp).connect(p).connect(A.world);
      sources.crtFootage = { bus, nextNote: 0, step: 0 };
    }

    // ---- 通风机房间底噪（恒定，无波动——不是海）----
    register("vent-room");
    {
      const src = ctx.createBufferSource();
      src.buffer = brownBuf; src.loop = true;
      const f = ctx.createBiquadFilter();
      f.type = "lowpass"; f.frequency.value = 190;
      const g = ctx.createGain(); g.gain.value = 0.05;
      const p = panner(ctx, 18.5, 2.9, 13.4, 4, 0.9);
      src.connect(f).connect(g).connect(p).connect(A.world);
      src.start();
    }

    // ---- A 厅收场人声底噪（不可辨词的殷勤与客气）----
    register("murmur-hall");
    {
      const src = ctx.createBufferSource();
      src.buffer = brownBuf; src.loop = true; src.playbackRate.value = 1.7;
      const f = ctx.createBiquadFilter();
      f.type = "bandpass"; f.frequency.value = 420; f.Q.value = 1.1;
      const g = ctx.createGain(); g.gain.value = 0.0;
      const p = panner(ctx, 22, 1.4, 4, 4, 1.1);
      src.connect(f).connect(g).connect(p).connect(A.world);
      src.start();
      sources.murmur = g;
      // 人声起伏 LFO
      const lfo = ctx.createOscillator();
      lfo.frequency.value = 0.17;
      const lg = ctx.createGain(); lg.gain.value = 0.012;
      lfo.connect(lg).connect(g.gain);
      lfo.start();
    }

    // ---- 出口灯电流 ----
    register("exit-sign");
    {
      const osc = ctx.createOscillator();
      osc.type = "triangle"; osc.frequency.value = 3120;
      const g = ctx.createGain(); g.gain.value = 0.0035;
      const p = panner(ctx, 18, 2.5, 10.3, 0.6, 2.4);
      osc.connect(g).connect(p).connect(A.world);
      osc.start();
    }

    // 预注册瞬态类声源
    ["step-player", "step-entity", "cloth-entity", "clink-dish", "cloth-wipe",
      "crate-shift", "deck-click", "deck-motor", "tape-insert", "jack-static", "breath-player"]
      .forEach(register);

    // 借视底噪（持续节点，增益默认 0）
    {
      const src = ctx.createBufferSource();
      src.buffer = whiteBuf; src.loop = true;
      const f = ctx.createBiquadFilter();
      f.type = "bandpass"; f.frequency.value = 3200; f.Q.value = 0.4;
      const g = ctx.createGain(); g.gain.value = 0;
      src.connect(f).connect(g).connect(A.master);   // 不走 world（借视时 world 被压低）
      src.start();
      sources.jack = g;
    }

    // 玩家呼吸（极低，静止时才浮现）
    {
      const src = ctx.createBufferSource();
      src.buffer = whiteBuf; src.loop = true; src.playbackRate.value = 0.6;
      const f = ctx.createBiquadFilter();
      f.type = "bandpass"; f.frequency.value = 700; f.Q.value = 0.6;
      const g = ctx.createGain(); g.gain.value = 0;
      src.connect(f).connect(g).connect(A.master);
      src.start();
      sources.breath = g;
    }
  }

  // ---------------- 伴奏（千禧婚宴走场电子琴）----------------
  // 走场循环：不悲不喜，只是营业。旋律动机继承灰盒。
  const MELODY = [392, 440, 523.25, 587.33, 659.25, 523.25, 440, 349.23];
  const BASS = [196, 174.61, 164.81, 196];
  function scheduleBand(state) {
    const ctx = A.ctx;
    const bus = sources.band.bus;
    while (sources.band.nextNote < ctx.currentTime + 0.5) {
      const t = sources.band.nextNote;
      const i = sources.band.step;
      // 主旋律：双振荡电子琴音
      const f0 = MELODY[i % MELODY.length];
      for (const [detune, lvl, type] of [[0, 0.5, "triangle"], [6, 0.22, "sine"]]) {
        const osc = ctx.createOscillator();
        osc.type = type; osc.frequency.value = f0; osc.detune.value = detune;
        const g = ctx.createGain();
        g.gain.setValueAtTime(0.0001, t);
        g.gain.linearRampToValueAtTime(lvl, t + 0.05);
        g.gain.setTargetAtTime(0.0001, t + 0.42, 0.16);
        osc.connect(g).connect(bus);
        osc.start(t); osc.stop(t + 1.0);
      }
      // 低音垫（每两拍）
      if (i % 2 === 0) {
        const osc = ctx.createOscillator();
        osc.type = "sine";
        osc.frequency.value = BASS[Math.floor(i / 2) % BASS.length];
        const g = ctx.createGain();
        g.gain.setValueAtTime(0.0001, t);
        g.gain.linearRampToValueAtTime(0.4, t + 0.08);
        g.gain.setTargetAtTime(0.0001, t + 0.9, 0.25);
        osc.connect(g).connect(bus);
        osc.start(t); osc.stop(t + 1.6);
      }
      sources.band.nextNote += 0.62;
      sources.band.step++;
    }
  }

  // CRT 回放：同一动机，但速度、音准都在“带子”里漂
  function scheduleFootage() {
    const ctx = A.ctx;
    const s = sources.crtFootage;
    if (s.bus.gain.value < 0.01) return;
    if (s.nextNote < ctx.currentTime) s.nextNote = ctx.currentTime + 0.05;
    while (s.nextNote < ctx.currentTime + 0.4) {
      const t = s.nextNote;
      const wow = 1 + Math.sin(s.step * 0.7) * 0.02;   // 抖晃
      const osc = ctx.createOscillator();
      osc.type = "triangle";
      osc.frequency.value = MELODY[s.step % MELODY.length] * wow;
      const g = ctx.createGain();
      g.gain.setValueAtTime(0.0001, t);
      g.gain.linearRampToValueAtTime(0.5, t + 0.04);
      g.gain.setTargetAtTime(0.0001, t + 0.3, 0.1);
      osc.connect(g).connect(s.bus);
      osc.start(t); osc.stop(t + 0.7);
      s.nextNote += 0.66;   // 比现场略慢——录下来的东西总是慢一点
      s.step++;
    }
  }

  // ---------------- 瞬态 ----------------
  function burst({ x, y, z, dur = 0.08, bp = 900, q = 1, lvl = 0.2, rate = 1, lp = null }) {
    const ctx = A.ctx;
    if (!ctx || A.muted) return;
    const src = ctx.createBufferSource();
    src.buffer = whiteBuf; src.loop = false;
    src.playbackRate.value = rate;
    const f = ctx.createBiquadFilter();
    f.type = "bandpass"; f.frequency.value = bp; f.Q.value = q;
    const g = ctx.createGain();
    const t = ctx.currentTime;
    g.gain.setValueAtTime(lvl, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    let node = src.connect(f);
    if (lp) { const l = ctx.createBiquadFilter(); l.type = "lowpass"; l.frequency.value = lp; node = node.connect(l); }
    const p = panner(ctx, x, y, z, 1.6, 1.5);
    node.connect(g).connect(p).connect(A.world);
    src.start(t); src.stop(t + dur + 0.05);
  }
  function tone({ x, y, z, f0 = 200, f1 = null, dur = 0.1, lvl = 0.15, type = "sine", lp = null }) {
    const ctx = A.ctx;
    if (!ctx || A.muted) return;
    const osc = ctx.createOscillator();
    osc.type = type;
    const t = ctx.currentTime;
    osc.frequency.setValueAtTime(f0, t);
    if (f1) osc.frequency.exponentialRampToValueAtTime(f1, t + dur * 0.8);
    const g = ctx.createGain();
    g.gain.setValueAtTime(lvl, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    let node = osc;
    if (lp) { const l = ctx.createBiquadFilter(); l.type = "lowpass"; l.frequency.value = lp; node = osc.connect(l); }
    const p = panner(ctx, x, y, z, 1.6, 1.5);
    node.connect(g).connect(p).connect(A.world);
    osc.start(t); osc.stop(t + dur + 0.05);
  }

  // ---------------- 对外接口 ----------------
  function onEvent(ev, ctxInfo) {
    if (!A.ctx || A.muted) return;
    const p = ctxInfo.playerPos, e = ctxInfo.entityPos;
    const occluded = !losClear(p, e);
    const lp = occluded ? 460 : null;   // 墙后工作声：闷
    switch (ev.type) {
      case "entity-step": {
        // 工作鞋：规律、偏硬
        burst({ x: e.x, y: 0.1, z: e.z, dur: 0.05, bp: 1500, q: 1.2, lvl: occluded ? 0.16 : 0.22, lp });
        tone({ x: e.x, y: 0.1, z: e.z, f0: 82, f1: 60, dur: 0.1, lvl: 0.3, type: "sine" });
        if (Math.random() < 0.3) burst({ x: e.x, y: 1.0, z: e.z, dur: 0.12, bp: 500, q: 0.6, lvl: 0.05, lp });
        break;
      }
      case "entity-work": {
        if (ev.act === "wash" || ev.act === "tray") {
          tone({ x: e.x, y: 0.9, z: e.z, f0: 1450, f1: 870, dur: 0.3, lvl: occluded ? 0.1 : 0.2, type: "triangle", lp });
          setTimeout(() => tone({ x: e.x, y: 0.9, z: e.z, f0: 1180, f1: 760, dur: 0.24, lvl: occluded ? 0.07 : 0.13, type: "triangle", lp }), 260);
        } else if (ev.act === "boxes") {
          burst({ x: e.x, y: 0.5, z: e.z, dur: 0.22, bp: 260, q: 0.7, lvl: occluded ? 0.12 : 0.2, lp });
        } else if (ev.act === "wipe") {
          burst({ x: e.x, y: 1.0, z: e.z, dur: 0.3, bp: 1900, q: 0.5, lvl: occluded ? 0.04 : 0.08, lp });
        }
        break;
      }
      case "archive-complete": {
        // 插带 → 两声机械键 → 走带电机起转
        burst({ x: 4.35, y: 0.9, z: 19.7, dur: 0.16, bp: 700, q: 1, lvl: 0.3 });
        setTimeout(() => tone({ x: 4.35, y: 0.9, z: 19.7, f0: 240, dur: 0.05, lvl: 0.3, type: "square" }), 200);
        setTimeout(() => tone({ x: 4.35, y: 0.9, z: 19.7, f0: 240, dur: 0.05, lvl: 0.3, type: "square" }), 380);
        setTimeout(() => {
          if (!A.ctx) return;
          const t = A.ctx.currentTime;
          const osc = A.ctx.createOscillator();
          osc.type = "sawtooth";
          osc.frequency.setValueAtTime(14, t);
          osc.frequency.exponentialRampToValueAtTime(26, t + 0.9);
          const g = A.ctx.createGain();
          g.gain.setValueAtTime(0.14, t);
          g.gain.setTargetAtTime(0.03, t + 0.9, 0.4);
          g.gain.setTargetAtTime(0.0001, t + 3.4, 0.3);
          const pan2 = panner(A.ctx, 4.35, 0.9, 19.7, 0.8, 2.0);
          osc.connect(g).connect(pan2).connect(A.world);
          osc.start(t); osc.stop(t + 4.4);
        }, 520);
        break;
      }
      case "evidence-start": {
        // 不加音刺。只是衣料转身的摩擦，和一拍伴奏错位（少了一件乐器的感觉由 update 端处理）
        burst({ x: e.x, y: 1.2, z: e.z, dur: 0.35, bp: 1300, q: 0.4, lvl: 0.09 });
        break;
      }
      case "entity-yield": {
        burst({ x: e.x, y: 1.0, z: e.z, dur: 0.2, bp: 900, q: 0.5, lvl: 0.05 });
        break;
      }
    }
  }

  function playerStep(strength, low, side) {
    if (!A.ctx || A.muted) return;
    const px = _pp.x, pz = _pp.z;
    const ox = side ? 0.2 : -0.2;
    if (low) {
      // 凹槽水泥：更低、更实
      burst({ x: px + ox, y: -0.3, z: pz, dur: 0.06, bp: 700, q: 1, lvl: 0.1 + strength * 0.12 });
      tone({ x: px + ox, y: -0.3, z: pz, f0: 68, f1: 50, dur: 0.09, lvl: 0.22 + strength * 0.15 });
    } else {
      // 水磨石：轻脆
      burst({ x: px + ox, y: 0, z: pz, dur: 0.05, bp: 1300 + Math.random() * 500, q: 1.1, lvl: 0.07 + strength * 0.1 });
      tone({ x: px + ox, y: 0, z: pz, f0: 105, f1: 80, dur: 0.07, lvl: 0.14 + strength * 0.1 });
    }
  }

  let _pp = { x: 0, z: 0 };
  let evidenceDuck = 0;

  function update(dt, S) {
    // S: { playerPos, playerY, yaw, low, room, entityPos, crtMode, jack, flickerLevel, dyingLevel, stillT, evidenceActive, muted }
    if (!A.ctx) return;
    A.muted = S.muted;
    _pp = S.playerPos;
    const ctx = A.ctx;
    if (ctx.state === "suspended") return;

    // 听者位姿
    const l = ctx.listener;
    const fx = -Math.sin(S.yaw), fz = -Math.cos(S.yaw);
    if (l.positionX) {
      l.positionX.setTargetAtTime(S.playerPos.x, ctx.currentTime, 0.05);
      l.positionY.setTargetAtTime(S.playerY, ctx.currentTime, 0.05);
      l.positionZ.setTargetAtTime(S.playerPos.z, ctx.currentTime, 0.05);
      l.forwardX.setTargetAtTime(fx, ctx.currentTime, 0.05);
      l.forwardY.setTargetAtTime(0, ctx.currentTime, 0.05);
      l.forwardZ.setTargetAtTime(fz, ctx.currentTime, 0.05);
      l.upX.value = 0; l.upY.value = 1; l.upZ.value = 0;
    }

    // 主静音
    A.master.gain.setTargetAtTime(S.muted ? 0 : 1, ctx.currentTime, 0.1);

    // 伴奏：房间滤波 + 低处“变厚变远”
    scheduleBand();
    scheduleFootage();
    const room = S.room;
    let lpF = 4200, thick = 0, lvl = 0.5;
    if (room === "B") { lpF = 1500; lvl = 0.42; }
    else if (room !== "A") { lpF = 720; lvl = 0.36; }
    if (S.low) { lpF = 360; thick = 7.5; lvl *= 1.4; }
    // 证据窗口：伴奏“少了一件乐器”——高频抽走一拍
    if (S.evidenceActive > 0) { evidenceDuck = 1; }
    evidenceDuck = Math.max(0, evidenceDuck - dt * 0.7);
    lpF *= (1 - evidenceDuck * 0.55);
    A.musicLP.frequency.setTargetAtTime(lpF, ctx.currentTime, 0.18);
    A.musicThick.gain.setTargetAtTime(thick, ctx.currentTime, 0.2);
    A.music.gain.setTargetAtTime(lvl, ctx.currentTime, 0.25);

    // 人声底噪只在 A 厅附近有意义（panner 自带距离衰减，这里做房间闷化）
    sources.murmur.gain.setTargetAtTime(room === "A" ? 0.02 : 0.008, ctx.currentTime, 0.3);

    // 坏灯管打火
    sources.flickerBuzz.gain.setTargetAtTime(S.flickerLevel * 0.05, ctx.currentTime, 0.02);
    sources.dyingBuzz.gain.setTargetAtTime(S.dyingLevel * 0.03, ctx.currentTime, 0.05);

    // CRT：靠近才听得清；回放时加脚本声
    sources.crtGain.gain.setTargetAtTime(S.crtMode === "footage" ? 0.016 : 0.011, ctx.currentTime, 0.1);
    sources.crtFootage.bus.gain.setTargetAtTime(S.crtMode === "footage" ? 0.5 : 0, ctx.currentTime, 0.2);

    // 借视：世界压低 + 信号底噪
    A.world.gain.setTargetAtTime(S.jack ? 0.25 : 1.0, ctx.currentTime, 0.08);
    sources.jack.gain.setTargetAtTime(S.jack ? 0.05 : 0, ctx.currentTime, 0.05);

    // 呼吸：站定 2 秒后浮现
    const br = Math.max(0, Math.min(1, (S.stillT - 2) / 4));
    const cycle = (Math.sin(performance.now() * 0.0012) + 1) / 2;
    sources.breath.gain.setTargetAtTime(br * 0.006 * (0.3 + cycle * 0.7), ctx.currentTime, 0.15);
  }

  return {
    A, start, update, onEvent, playerStep,
    get registry() { return A.registry; },
    resume() { A.ctx?.resume?.(); },
  };
}
