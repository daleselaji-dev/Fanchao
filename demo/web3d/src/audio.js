// 程序化 WebAudio，零采样素材。纪律（08 §6）：
// 伴奏永远停在同一小节重开；实体声先于画面（隔墙低通衰减）；低处声学「变厚变远」；
// 禁：音刺、水声、人声、任何素材库。

const SCALE = [392, 440, 523.25, 587.33, 659.25, 523.25, 440, 349.23];
const SPEAKER = { x: 3.2, z: 2.45 };
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

export function createAudio() {
  const A = {
    ctx: null, master: null, musicGain: null, musicFilter: null,
    muted: false, notes: 0, nextNote: 0, noiseBuf: null,
  };

  function init() {
    if (A.ctx) return true;
    try {
      A.ctx = new (window.AudioContext || window.webkitAudioContext)();
    } catch (e) {
      return false;
    }
    A.master = A.ctx.createGain();
    A.master.gain.value = 0.9;
    A.master.connect(A.ctx.destination);
    A.musicGain = A.ctx.createGain();
    A.musicGain.gain.value = 0.1;
    A.musicFilter = A.ctx.createBiquadFilter();
    A.musicFilter.type = "lowpass";
    A.musicFilter.frequency.value = 2600;
    A.musicGain.connect(A.musicFilter).connect(A.master);
    A.nextNote = A.ctx.currentTime + 0.3;
    // 预生成噪声 buffer（擦拭声用）
    const len = Math.floor(A.ctx.sampleRate * 0.3);
    A.noiseBuf = A.ctx.createBuffer(1, len, A.ctx.sampleRate);
    const d = A.noiseBuf.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / len);
    return true;
  }

  function resume() {
    if (A.ctx && A.ctx.state === "suspended") A.ctx.resume();
  }

  // 伴奏：8 音一句，句间停 2.7s——永远停在同一小节重新开始
  function tickMusic(player, inLow, roomId) {
    if (!A.ctx || A.muted) return;
    const ct = A.ctx.currentTime;
    while (A.nextNote < ct + 0.4) {
      const idx = A.notes % (SCALE.length + 3);
      if (idx < SCALE.length) {
        const osc = A.ctx.createOscillator();
        const g = A.ctx.createGain();
        osc.type = "triangle";
        osc.frequency.value = SCALE[idx];
        g.gain.setValueAtTime(0.0001, A.nextNote);
        g.gain.linearRampToValueAtTime(0.5, A.nextNote + 0.06);
        g.gain.exponentialRampToValueAtTime(0.0001, A.nextNote + 0.8);
        osc.connect(g).connect(A.musicGain);
        osc.start(A.nextNote);
        osc.stop(A.nextNote + 0.85);
      }
      A.nextNote += 0.9; // 句尾三拍静默 = 停在间奏
      A.notes++;
    }
    const d = Math.max(1, Math.hypot(player.x - SPEAKER.x, player.z - SPEAKER.z));
    const base = clamp(2.2 / d, 0.03, 0.55) * 0.35;
    A.musicGain.gain.setTargetAtTime(inLow ? base * 1.35 : base, A.ctx.currentTime, 0.15);
    A.musicFilter.frequency.setTargetAtTime(
      inLow ? 420 : (roomId === "A" ? 2600 : 1300), A.ctx.currentTime, 0.15,
    );
  }

  function spatial(dist, pan, occluded, baseVol) {
    const g = A.ctx.createGain();
    const vol = clamp(baseVol / (dist * dist), 0.003, 0.18) * (occluded ? 0.45 : 1);
    g.gain.value = vol;
    let node = g;
    if (occluded) {
      const f = A.ctx.createBiquadFilter();
      f.type = "lowpass";
      f.frequency.value = 620;
      g.connect(f);
      node = f;
    }
    let out = node;
    if (A.ctx.createStereoPanner) {
      const p = A.ctx.createStereoPanner();
      p.pan.value = clamp(pan, -1, 1);
      node.connect(p);
      out = p;
    }
    out.connect(A.master);
    return g;
  }

  // 实体脚步：每步两声（极近的双击）——M05 的签名
  function playStep(dist, pan, occluded) {
    if (!A.ctx || A.muted) return;
    const ct = A.ctx.currentTime;
    for (const off of [0, 0.055]) {
      const osc = A.ctx.createOscillator();
      const g = spatial(dist, pan, occluded, 1.4);
      osc.type = "square";
      osc.frequency.value = 118 + Math.random() * 34;
      const env = A.ctx.createGain();
      env.gain.setValueAtTime(1, ct + off);
      env.gain.exponentialRampToValueAtTime(0.001, ct + off + 0.06);
      osc.connect(env).connect(g);
      osc.start(ct + off);
      osc.stop(ct + off + 0.07);
    }
  }

  // 瓷器/放盘
  function playClink(dist, pan, occluded) {
    if (!A.ctx || A.muted) return;
    const ct = A.ctx.currentTime;
    const osc = A.ctx.createOscillator();
    const g = spatial(dist, pan, occluded, 1.8);
    osc.type = "triangle";
    osc.frequency.setValueAtTime(1480, ct);
    osc.frequency.exponentialRampToValueAtTime(870, ct + 0.12);
    const env = A.ctx.createGain();
    env.gain.setValueAtTime(1, ct);
    env.gain.exponentialRampToValueAtTime(0.001, ct + 0.3);
    osc.connect(env).connect(g);
    osc.start(ct);
    osc.stop(ct + 0.32);
  }

  // 擦拭（工作循环的持续声，很轻）
  function playWipe(dist, pan, occluded) {
    if (!A.ctx || A.muted || !A.noiseBuf) return;
    const ct = A.ctx.currentTime;
    const src = A.ctx.createBufferSource();
    src.buffer = A.noiseBuf;
    const f = A.ctx.createBiquadFilter();
    f.type = "bandpass";
    f.frequency.value = 850;
    f.Q.value = 1.2;
    const g = spatial(dist, pan, occluded, 0.7);
    src.connect(f).connect(g);
    src.start(ct);
  }

  // 归档：卡座两声机械咔嗒
  function playArchive() {
    if (!A.ctx || A.muted) return;
    const ct = A.ctx.currentTime;
    for (const off of [0, 0.14]) {
      const osc = A.ctx.createOscillator();
      const g = A.ctx.createGain();
      osc.type = "square";
      osc.frequency.value = 240;
      g.gain.setValueAtTime(0.16, ct + off);
      g.gain.exponentialRampToValueAtTime(0.001, ct + off + 0.05);
      osc.connect(g).connect(A.master);
      osc.start(ct + off);
      osc.stop(ct + off + 0.06);
    }
  }

  function setMuted(m) {
    A.muted = m;
    if (A.master) A.master.gain.value = m ? 0 : 0.9;
  }

  return {
    init, resume, tickMusic, playStep, playClink, playWipe, playArchive, setMuted,
    get muted() { return A.muted; },
    get ready() { return !!A.ctx; },
  };
}
