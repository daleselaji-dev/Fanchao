// 音频引擎 —— 全程序化 WebAudio，无外部音频文件。
// 规范：05_DESIGN_V2/09_音频方向（三层声场 + 静默规则 + 无持续配乐）
export class AudioEngine {
  constructor() {
    this.ctx = null;
    this.master = null;
    this.ambientBus = null; // 公共声场层（受静默规则控制）
    this.layers = {};
    this.started = false;
    this._noiseBuf = null;
  }

  init() {
    if (this.started) return;
    const AC = window.AudioContext || window.webkitAudioContext;
    this.ctx = new AC();
    this.master = this.ctx.createGain();
    this.master.gain.value = 0.85;
    // 轻混响（廉价：双延迟反馈）—— 反馈量/暗度随空间切换（setSpace）
    this.verb = this.ctx.createGain(); this.verb.gain.value = 0.22;
    const d1 = this.ctx.createDelay(1); d1.delayTime.value = 0.13;
    const d2 = this.ctx.createDelay(1); d2.delayTime.value = 0.211;
    const fb = this.ctx.createGain(); fb.gain.value = 0.32;
    const lp = this.ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 2400;
    this.verb.connect(d1); d1.connect(d2); d2.connect(fb); fb.connect(lp); lp.connect(d1);
    d2.connect(this.master);
    this._verbFB = fb; this._verbLP = lp;
    // 耳机向母线：轻压缩把低语/低频/尖响粘成一张连续的「房间」，不炸不糊
    const comp = this.ctx.createDynamicsCompressor();
    comp.threshold.value = -20; comp.knee.value = 18;
    comp.ratio.value = 3.5; comp.attack.value = 0.006; comp.release.value = 0.26;
    this.master.connect(comp);
    comp.connect(this.ctx.destination);
    this.ambientBus = this.ctx.createGain();
    this.ambientBus.gain.value = 1;
    this.ambientBus.connect(this.master);
    this._noiseBuf = this._makeNoise();
    this.started = true;
    this._buildAmbience();
  }

  _makeNoise() {
    const len = this.ctx.sampleRate * 2;
    const buf = this.ctx.createBuffer(1, len, this.ctx.sampleRate);
    const d = buf.getChannelData(0);
    let lastOut = 0;
    for (let i = 0; i < len; i++) {
      const white = Math.random() * 2 - 1;
      lastOut = (lastOut + 0.02 * white) / 1.02; // 棕噪
      d[i] = lastOut * 3.5;
    }
    return buf;
  }

  _noiseSrc(bus, filterType, freq, q, gain) {
    const src = this.ctx.createBufferSource();
    src.buffer = this._noiseBuf; src.loop = true;
    src.playbackRate.value = 0.7 + Math.random() * 0.5;
    const f = this.ctx.createBiquadFilter();
    f.type = filterType; f.frequency.value = freq; f.Q.value = q;
    const g = this.ctx.createGain(); g.gain.value = gain;
    src.connect(f); f.connect(g); g.connect(bus);
    src.start();
    return { src, f, g };
  }

  _buildAmbience() {
    const c = this.ctx;
    // 1) 酒店房间底噪 —— 左右两路轻微失谐的棕噪（耳机上房间是「宽」的，不是一个点）
    const rtL = c.createStereoPanner(); rtL.pan.value = -0.42; rtL.connect(this.ambientBus);
    const rtR = c.createStereoPanner(); rtR.pan.value = 0.42; rtR.connect(this.ambientBus);
    this.layers.roomtone = this._noiseSrc(rtL, 'lowpass', 320, 0.5, 0.035);
    this.layers.roomtoneR = this._noiseSrc(rtR, 'lowpass', 300, 0.5, 0.035);
    // 2) 荧光灯 100Hz 嗡鸣
    const humOsc = c.createOscillator(); humOsc.type = 'sawtooth'; humOsc.frequency.value = 100;
    const humF = c.createBiquadFilter(); humF.type = 'bandpass'; humF.frequency.value = 200; humF.Q.value = 6;
    const humG = c.createGain(); humG.gain.value = 0.006;
    humOsc.connect(humF); humF.connect(humG); humG.connect(this.ambientBus);
    humOsc.start();
    this.layers.hum = { g: humG };
    // 3) 宾客低语（返潮点火前）
    const mur = this._noiseSrc(this.ambientBus, 'bandpass', 480, 1.2, 0.0);
    this.layers.murmur = mur;
    this._murmurLFO(mur);
    // 4) 海残骸低频层（点火后）
    const sub = c.createOscillator(); sub.type = 'sine'; sub.frequency.value = 31;
    const subG = c.createGain(); subG.gain.value = 0.0;
    sub.connect(subG); subG.connect(this.master); // 低频层不参加收声（海不守静默）
    sub.start();
    const sub2 = this._noiseSrc(this.master, 'lowpass', 90, 0.7, 0.0);
    this.layers.sea = { g: subG, n: sub2.g };
    // 5) 水声（海洋馆区域）
    const wat = this._noiseSrc(this.ambientBus, 'bandpass', 900, 0.8, 0.0);
    this.layers.water = wat;
    // 6) 威胁层（侍应逼近：高频颤 + 低频脉动，带声像——耳机能听出方位）
    const thrPan = c.createStereoPanner();
    thrPan.connect(this.master);
    const shim = this._noiseSrc(thrPan, 'bandpass', 2600, 3.5, 0.0);
    const pulse = c.createOscillator(); pulse.type = 'sine'; pulse.frequency.value = 52;
    const pulseAM = c.createOscillator(); pulseAM.frequency.value = 4.2;
    const pulseAMg = c.createGain(); pulseAMg.gain.value = 0.5;
    const pulseG = c.createGain(); pulseG.gain.value = 0.0;
    pulseAM.connect(pulseAMg); pulseAMg.connect(pulseG.gain);
    pulse.connect(pulseG); pulseG.connect(thrPan);
    pulse.start(); pulseAM.start();
    this.threatNodes = { pan: thrPan, shim: shim.g, pulse: pulseG };
    // 7) 绳鸣层（贴近载客红绳时的低弦持续音）
    const humPan = c.createStereoPanner();
    humPan.connect(this.master);
    const cordO = c.createOscillator(); cordO.type = 'sawtooth'; cordO.frequency.value = 82;
    const cordF = c.createBiquadFilter(); cordF.type = 'bandpass'; cordF.frequency.value = 164; cordF.Q.value = 9;
    const trem = c.createOscillator(); trem.frequency.value = 6.3;
    const tremG = c.createGain(); tremG.gain.value = 0.5;
    const cordG = c.createGain(); cordG.gain.value = 0.0;
    trem.connect(tremG); tremG.connect(cordG.gain);
    cordO.connect(cordF); cordF.connect(cordG); cordG.connect(humPan);
    cordO.start(); trem.start();
    this.cordHumNodes = { pan: humPan, g: cordG };
    // 8) 低频不安层（林奇式房间压力）：41Hz 双正弦以 0.55Hz 差拍缓慢搏动——
    //    绕过 ambientBus（收声时它还在，静默才显得「有压力」而不是「没声音」）
    const dr1 = c.createOscillator(); dr1.type = 'sine'; dr1.frequency.value = 41;
    const dr2 = c.createOscillator(); dr2.type = 'sine'; dr2.frequency.value = 41.55;
    const drG = c.createGain(); drG.gain.value = 0.0;
    dr1.connect(drG); dr2.connect(drG); drG.connect(this.master);
    dr1.start(); dr2.start();
    this.dreadNodes = { g: drG };
    // 9) 静默前兆（耳鸣）：收声瞬间浮出的 7kHz 极弱纯音——「安静得耳朵开始自己响」
    const tin = c.createOscillator(); tin.type = 'sine'; tin.frequency.value = 7040;
    const tinG = c.createGain(); tinG.gain.value = 0.0;
    tin.connect(tinG); tinG.connect(this.master);
    tin.start();
    this.tinnitus = tinG;
    // 10) 近身呼吸层（侍应贴近 4.5m 内）：0.32Hz 吸/呼包络的带通噪——比脚步更早告诉你「他就在那边」
    const brPan = c.createStereoPanner(); brPan.connect(this.master);
    const br = this._noiseSrc(brPan, 'bandpass', 460, 1.6, 0.0);
    const brLFO = c.createOscillator(); brLFO.frequency.value = 0.32;
    const brLFOg = c.createGain(); brLFOg.gain.value = 0.5;
    brLFO.connect(brLFOg); brLFOg.connect(br.g.gain);
    brLFO.start();
    this.breathNodes = { pan: brPan, g: br.g };
    this._breathV = 0;
  }

  // 低频不安强度（0~1）：随议程逐拍加深——大多数时候你「感觉得到」但「指不出来」
  setDread(v) {
    if (!this.started || !this.dreadNodes) return;
    this.dreadNodes.g.gain.setTargetAtTime(v * 0.055, this.ctx.currentTime, 1.8);
  }

  // 近身呼吸（v: 0~1；pan: 方位）
  setBreath(v, pan = 0) {
    if (!this.started || !this.breathNodes) return;
    const t = this.ctx.currentTime;
    this._breathV = v;
    this.breathNodes.g.gain.setTargetAtTime(v * 0.05, t, 0.4);
    this.breathNodes.pan.pan.setTargetAtTime(pan, t, 0.25);
  }

  // 空间自适应混响：瓷砖走廊短亮、大堂厚软、海洋馆长暗（耳朵先于眼睛知道换了房间）
  setSpace(name) {
    if (!this.started || name === this._space) return;
    this._space = name;
    const P = {
      '宴会厅': [0.22, 0.32, 2400],
      '服务走廊': [0.15, 0.24, 3000],
      '大堂': [0.28, 0.38, 2050],
      '海洋馆连廊': [0.38, 0.46, 1450],
      '员工连廊': [0.2, 0.3, 1900],
    }[name] || [0.22, 0.32, 2400];
    const t = this.ctx.currentTime;
    this.verb.gain.setTargetAtTime(P[0], t, 0.9);
    this._verbFB.gain.setTargetAtTime(P[1], t, 0.9);
    this._verbLP.frequency.setTargetAtTime(P[2], t, 0.9);
  }

  // 威胁逼近（v: 0~1 强度；pan: -1~1 方位）
  setThreat(v, pan = 0) {
    if (!this.started || !this.threatNodes) return;
    const t = this.ctx.currentTime;
    this.threatNodes.shim.gain.setTargetAtTime(v * 0.05, t, 0.18);
    this.threatNodes.pulse.gain.setTargetAtTime(v * 0.16, t, 0.18);
    this.threatNodes.pan.pan.setTargetAtTime(pan, t, 0.12);
  }

  setCordHum(v, pan = 0) {
    if (!this.started || !this.cordHumNodes) return;
    const t = this.ctx.currentTime;
    this.cordHumNodes.g.gain.setTargetAtTime(v * 0.045, t, 0.25);
    this.cordHumNodes.pan.pan.setTargetAtTime(pan, t, 0.15);
  }

  _murmurLFO(m) {
    const c = this.ctx;
    const tick = () => {
      if (!this.started) return;
      const t = c.currentTime;
      m.f.frequency.setTargetAtTime(300 + Math.random() * 700, t, 0.25);
      setTimeout(tick, 300 + Math.random() * 700);
    };
    tick();
  }

  setLayer(name, v, ramp = 1.5) {
    if (!this.started) return;
    const l = this.layers[name];
    if (!l) return;
    const g = l.g ? l.g.gain : null;
    if (g) g.setTargetAtTime(v, this.ctx.currentTime, ramp);
    if (name === 'sea' && l.n) l.n.gain.setTargetAtTime(v * 1.6, this.ctx.currentTime, ramp);
  }

  // 静默规则：广播前全楼收声——低频不安层刻意不收（静默是「压着的」），耳鸣浮出
  hush(dur = 3.0) {
    this.hushed = true; // 视觉低压层（post.uDread）读取
    if (!this.started) return;
    const t = this.ctx.currentTime;
    this.ambientBus.gain.cancelScheduledValues(t);
    this.ambientBus.gain.setTargetAtTime(0.04, t, dur * 0.33);
    if (this.tinnitus) this.tinnitus.gain.setTargetAtTime(0.0075, t + dur * 0.25, 1.4);
  }
  unhush(after = 0) {
    this.hushed = false;
    if (!this.started) return;
    const t = this.ctx.currentTime + after;
    this.ambientBus.gain.setTargetAtTime(1.0, t, 2.2);
    if (this.tinnitus) this.tinnitus.gain.setTargetAtTime(0.0, t, 0.8);
  }

  // 广播提示音（三音上行电铃）—— 1.3 秒后从远厅再迟到一遍（闷、小、偏侧）
  paChime() {
    if (!this.started) return;
    const c = this.ctx, t = c.currentTime;
    const eDly = c.createDelay(2); eDly.delayTime.value = 1.3;
    const eLP = c.createBiquadFilter(); eLP.type = 'lowpass'; eLP.frequency.value = 640;
    const eG = c.createGain(); eG.gain.value = 0.3;
    const ePan = c.createStereoPanner(); ePan.pan.value = -0.5;
    eDly.connect(eLP); eLP.connect(eG); eG.connect(ePan); ePan.connect(this.master);
    [523.25, 659.25, 783.99].forEach((f, i) => {
      const o = c.createOscillator(); o.type = 'sine'; o.frequency.value = f;
      const g = c.createGain();
      g.gain.setValueAtTime(0, t + i * 0.42);
      g.gain.linearRampToValueAtTime(0.16, t + i * 0.42 + 0.03);
      g.gain.exponentialRampToValueAtTime(0.001, t + i * 0.42 + 1.4);
      o.connect(g); g.connect(this.verb); g.connect(this.master); g.connect(eDly);
      o.start(t + i * 0.42); o.stop(t + i * 0.42 + 1.5);
    });
  }

  // 司仪广播嗓音：闷哑共振峰合成（听得出是人声腔调，听不清词——词由字幕承担）
  // echoLag>0 时：同一段广播从「另一个厅」的喇叭迟到抵达——更闷、更小、偏一侧（延迟声画）
  broadcast(nSyllables = 8, pitch = 108, dur = null, echoLag = 1.35) {
    if (!this.started) return 0;
    const c = this.ctx, t0 = c.currentTime;
    const total = dur || (nSyllables * 0.34 + 0.6);
    const o = c.createOscillator(); o.type = 'sawtooth';
    o.frequency.value = pitch;
    const vib = c.createOscillator(); vib.frequency.value = 4.6;
    const vibG = c.createGain(); vibG.gain.value = 3.5;
    vib.connect(vibG); vibG.connect(o.frequency);
    // 双共振峰
    const f1 = c.createBiquadFilter(); f1.type = 'bandpass'; f1.Q.value = 7;
    const f2 = c.createBiquadFilter(); f2.type = 'bandpass'; f2.Q.value = 9;
    const g = c.createGain(); g.gain.value = 0;
    // PA 喇叭质感：高低都切
    const paHP = c.createBiquadFilter(); paHP.type = 'highpass'; paHP.frequency.value = 280;
    const paLP = c.createBiquadFilter(); paLP.type = 'lowpass'; paLP.frequency.value = 2400;
    o.connect(f1); o.connect(f2);
    f1.connect(g); f2.connect(g);
    g.connect(paHP); paHP.connect(paLP);
    paLP.connect(this.master); paLP.connect(this.verb);
    if (echoLag > 0.05) {
      // 远厅回声：整段延迟 echoLag 秒，闷到只剩腔调，从左右交替的一侧传来
      this._echoSide = -(this._echoSide || 1);
      const eDly = c.createDelay(4); eDly.delayTime.value = Math.min(3.9, echoLag);
      const eLP = c.createBiquadFilter(); eLP.type = 'lowpass'; eLP.frequency.value = 720;
      const eG = c.createGain(); eG.gain.value = 0.4;
      const ePan = c.createStereoPanner(); ePan.pan.value = 0.45 * this._echoSide;
      paLP.connect(eDly); eDly.connect(eLP); eLP.connect(eG); eG.connect(ePan);
      ePan.connect(this.master); eG.connect(this.verb);
    }
    o.start(t0); vib.start(t0);
    o.stop(t0 + total + Math.max(0.3, echoLag) + 0.3); vib.stop(t0 + total + Math.max(0.3, echoLag) + 0.3);
    // 音节包络
    let t = t0 + 0.15;
    for (let i = 0; i < nSyllables; i++) {
      const sd = 0.16 + Math.random() * 0.2;
      g.gain.setTargetAtTime(0.14, t, 0.02);
      g.gain.setTargetAtTime(0.004, t + sd, 0.04);
      f1.frequency.setValueAtTime(380 + Math.random() * 420, t);
      f2.frequency.setValueAtTime(1100 + Math.random() * 900, t);
      o.frequency.setValueAtTime(pitch * (0.92 + Math.random() * 0.22), t);
      t += sd + 0.06 + Math.random() * 0.1;
    }
    g.gain.setTargetAtTime(0, t, 0.1);
    return total;
  }

  // Karplus-Strong 拨弦（红绳的声音）
  pluck(freq = 82, vol = 0.4, damp = 0.996, pan = 0) {
    if (!this.started) return;
    const c = this.ctx;
    const sr = c.sampleRate;
    const N = Math.round(sr / freq);
    const len = sr * 1.6;
    const buf = c.createBuffer(1, len, sr);
    const d = buf.getChannelData(0);
    const ring = new Float32Array(N);
    for (let i = 0; i < N; i++) ring[i] = Math.random() * 2 - 1;
    let idx = 0;
    for (let i = 0; i < len; i++) {
      const cur = ring[idx];
      const nxt = ring[(idx + 1) % N];
      const v = (cur + nxt) * 0.5 * damp;
      ring[idx] = v;
      d[i] = cur;
      idx = (idx + 1) % N;
    }
    const src = c.createBufferSource(); src.buffer = buf;
    const g = c.createGain(); g.gain.value = vol;
    const lp = c.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 2600;
    src.connect(lp); lp.connect(g);
    if (pan !== 0) {
      const p = c.createStereoPanner(); p.pan.value = pan;
      g.connect(p); p.connect(this.master);
    } else {
      g.connect(this.master);
    }
    g.connect(this.verb);
    src.start();
  }

  // 绳张紧滑音（点名时腕绳绷直）
  tension(dur = 1.6) {
    if (!this.started) return;
    const c = this.ctx, t = c.currentTime;
    const o = c.createOscillator(); o.type = 'sine';
    o.frequency.setValueAtTime(60, t);
    o.frequency.exponentialRampToValueAtTime(340, t + dur);
    const g = c.createGain();
    g.gain.setValueAtTime(0.0, t);
    g.gain.linearRampToValueAtTime(0.10, t + dur * 0.7);
    g.gain.linearRampToValueAtTime(0.0, t + dur);
    const o2 = c.createOscillator(); o2.type = 'triangle';
    o2.frequency.setValueAtTime(61.5, t);
    o2.frequency.exponentialRampToValueAtTime(345, t + dur);
    o.connect(g); o2.connect(g); g.connect(this.master);
    o.start(t); o2.start(t); o.stop(t + dur); o2.stop(t + dur);
  }

  footstep(mat = 'terrazzo', run = false) {
    if (!this.started) return;
    const c = this.ctx, t = c.currentTime;
    const src = c.createBufferSource(); src.buffer = this._noiseBuf;
    src.playbackRate.value = 2 + Math.random();
    const f = c.createBiquadFilter();
    const g = c.createGain();
    let dur = 0.07, vol = run ? 0.16 : 0.07;
    if (mat === 'carpet') { f.type = 'lowpass'; f.frequency.value = 400; vol *= 0.5; }
    else if (mat === 'metal') { f.type = 'bandpass'; f.frequency.value = 900; f.Q.value = 3; dur = 0.14; vol *= 1.3; }
    else if (mat === 'wet') { f.type = 'bandpass'; f.frequency.value = 1600; f.Q.value = 1; vol *= 0.9; }
    else { f.type = 'bandpass'; f.frequency.value = 1200; f.Q.value = 1.5; }
    g.gain.setValueAtTime(vol, t);
    g.gain.exponentialRampToValueAtTime(0.001, t + dur + Math.random() * 0.05);
    src.connect(f); f.connect(g); g.connect(this.master);
    src.start(t); src.stop(t + 0.3);
    if (mat === 'metal') { const echo = c.createGain(); echo.gain.value = vol * 0.6; f.connect(echo); echo.connect(this.verb); }
  }

  thud(vol = 0.5) {
    if (!this.started) return;
    const c = this.ctx, t = c.currentTime;
    const o = c.createOscillator(); o.type = 'sine';
    o.frequency.setValueAtTime(120, t);
    o.frequency.exponentialRampToValueAtTime(38, t + 0.28);
    const g = c.createGain();
    g.gain.setValueAtTime(vol, t);
    g.gain.exponentialRampToValueAtTime(0.001, t + 0.5);
    o.connect(g); g.connect(this.master); g.connect(this.verb);
    o.start(t); o.stop(t + 0.55);
    const src = c.createBufferSource(); src.buffer = this._noiseBuf;
    const f = c.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 500;
    const g2 = c.createGain(); g2.gain.setValueAtTime(vol * 0.7, t);
    g2.gain.exponentialRampToValueAtTime(0.001, t + 0.3);
    src.connect(f); f.connect(g2); g2.connect(this.master);
    src.start(t); src.stop(t + 0.35);
  }

  glassCreak() {
    if (!this.started) return;
    const c = this.ctx, t = c.currentTime;
    const o = c.createOscillator(); o.type = 'sine';
    const f0 = 900 + Math.random() * 1600;
    o.frequency.setValueAtTime(f0, t);
    o.frequency.linearRampToValueAtTime(f0 * (0.55 + Math.random() * 0.2), t + 0.9);
    const g = c.createGain();
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(0.035, t + 0.15);
    g.gain.linearRampToValueAtTime(0, t + 0.9 + Math.random() * 0.5);
    o.connect(g); g.connect(this.master); g.connect(this.verb);
    o.start(t); o.stop(t + 1.6);
  }

  creakLow() {
    if (!this.started) return;
    const c = this.ctx, t = c.currentTime;
    const o = c.createOscillator(); o.type = 'sawtooth';
    o.frequency.setValueAtTime(55 + Math.random() * 30, t);
    o.frequency.linearRampToValueAtTime(35 + Math.random() * 15, t + 1.4);
    const f = c.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 300;
    const g = c.createGain();
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(0.09, t + 0.4);
    g.gain.linearRampToValueAtTime(0, t + 1.6);
    o.connect(f); f.connect(g); g.connect(this.master); g.connect(this.verb);
    o.start(t); o.stop(t + 1.8);
  }

  // 喜歌八音盒动机（major=正常态 / minor=终局小调化——喜与丧同构）
  motif(minor = false, vol = 0.06) {
    if (!this.started) return;
    const c = this.ctx, t0 = c.currentTime;
    // 简化喜庆五声动机
    const maj = [523, 587, 659, 784, 659, 587, 523, 392, 523, 523];
    const min = [523, 554, 622, 740, 622, 554, 523, 370, 523, 494];
    const seq = minor ? min : maj;
    seq.forEach((f, i) => {
      const t = t0 + i * (minor ? 0.62 : 0.34);
      const o = c.createOscillator(); o.type = 'sine'; o.frequency.value = f;
      const o2 = c.createOscillator(); o2.type = 'triangle'; o2.frequency.value = f * 2;
      const g = c.createGain();
      g.gain.setValueAtTime(0, t);
      g.gain.linearRampToValueAtTime(vol, t + 0.01);
      g.gain.exponentialRampToValueAtTime(0.0005, t + (minor ? 1.6 : 0.9));
      o.connect(g); o2.connect(g); g.connect(this.master); g.connect(this.verb);
      o.start(t); o2.start(t); o.stop(t + 2); o2.stop(t + 2);
    });
  }

  // 点名心跳（倒计时压迫）
  heartbeat() {
    if (!this.started) return;
    const c = this.ctx, t = c.currentTime;
    [0, 0.18].forEach((dt, i) => {
      const o = c.createOscillator(); o.type = 'sine';
      o.frequency.setValueAtTime(i ? 48 : 60, t + dt);
      const g = c.createGain();
      g.gain.setValueAtTime(0.22 - i * 0.08, t + dt);
      g.gain.exponentialRampToValueAtTime(0.001, t + dt + 0.16);
      o.connect(g); g.connect(this.master);
      o.start(t + dt); o.stop(t + dt + 0.2);
    });
  }

  // 惊吓弦鸣（震惊节拍：两把失谐弦 + 噪声爆）
  sting(vol = 0.4) {
    if (!this.started) return;
    const c = this.ctx, t = c.currentTime;
    [178, 183.5, 356].forEach((f, i) => {
      const o = c.createOscillator(); o.type = 'sawtooth'; o.frequency.value = f;
      o.frequency.linearRampToValueAtTime(f * 1.06, t + 1.1);
      const fl = c.createBiquadFilter(); fl.type = 'lowpass'; fl.frequency.value = 2200;
      const g = c.createGain();
      g.gain.setValueAtTime(0, t);
      g.gain.linearRampToValueAtTime(vol * (i === 2 ? 0.12 : 0.2), t + 0.02);
      g.gain.exponentialRampToValueAtTime(0.001, t + 1.4);
      o.connect(fl); fl.connect(g); g.connect(this.master); g.connect(this.verb);
      o.start(t); o.stop(t + 1.6);
    });
    const src = c.createBufferSource(); src.buffer = this._noiseBuf;
    src.playbackRate.value = 1.6;
    const f = c.createBiquadFilter(); f.type = 'highpass'; f.frequency.value = 900;
    const g = c.createGain(); g.gain.setValueAtTime(vol * 0.5, t);
    g.gain.exponentialRampToValueAtTime(0.001, t + 0.3);
    src.connect(f); f.connect(g); g.connect(this.master);
    src.start(t); src.stop(t + 0.35);
  }

  // 深水巨响（暗影撞玻璃）
  boom(vol = 0.8) {
    if (!this.started) return;
    const c = this.ctx, t = c.currentTime;
    const o = c.createOscillator(); o.type = 'sine';
    o.frequency.setValueAtTime(66, t);
    o.frequency.exponentialRampToValueAtTime(24, t + 1.4);
    const g = c.createGain();
    g.gain.setValueAtTime(vol, t);
    g.gain.exponentialRampToValueAtTime(0.001, t + 2.2);
    o.connect(g); g.connect(this.master); g.connect(this.verb);
    o.start(t); o.stop(t + 2.4);
    const src = c.createBufferSource(); src.buffer = this._noiseBuf;
    src.playbackRate.value = 0.5;
    const f = c.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 260;
    const g2 = c.createGain(); g2.gain.setValueAtTime(vol * 0.9, t);
    g2.gain.exponentialRampToValueAtTime(0.001, t + 1.1);
    src.connect(f); f.connect(g2); g2.connect(this.master); g2.connect(this.verb);
    src.start(t); src.stop(t + 1.3);
  }

  // 布/绳呼啸（彩带下坠、快速摘绳）
  whoosh(vol = 0.2) {
    if (!this.started) return;
    const c = this.ctx, t = c.currentTime;
    const src = c.createBufferSource(); src.buffer = this._noiseBuf;
    src.playbackRate.setValueAtTime(0.8, t);
    src.playbackRate.linearRampToValueAtTime(2.4, t + 0.5);
    const f = c.createBiquadFilter(); f.type = 'bandpass'; f.Q.value = 1.4;
    f.frequency.setValueAtTime(300, t);
    f.frequency.exponentialRampToValueAtTime(1600, t + 0.5);
    const g = c.createGain();
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(vol, t + 0.22);
    g.gain.linearRampToValueAtTime(0, t + 0.6);
    src.connect(f); f.connect(g); g.connect(this.master);
    src.start(t); src.stop(t + 0.7);
  }

  // 绞盘咔嗒（闸门安静升起时反复调用）
  ratchet() {
    if (!this.started) return;
    const c = this.ctx, t = c.currentTime;
    const src = c.createBufferSource(); src.buffer = this._noiseBuf;
    src.playbackRate.value = 3.2;
    const f = c.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = 1900; f.Q.value = 5;
    const g = c.createGain(); g.gain.setValueAtTime(0.09, t);
    g.gain.exponentialRampToValueAtTime(0.001, t + 0.05);
    src.connect(f); f.connect(g); g.connect(this.master);
    src.start(t); src.stop(t + 0.08);
    const o = c.createOscillator(); o.type = 'square'; o.frequency.value = 480;
    const g2 = c.createGain(); g2.gain.setValueAtTime(0.02, t);
    g2.gain.exponentialRampToValueAtTime(0.001, t + 0.04);
    o.connect(g2); g2.connect(this.master);
    o.start(t); o.stop(t + 0.05);
  }

  // 瓷器细颤（侍应警戒前摇：托盘上碗沿彼此磕碰的细密声——0.9 秒）
  porcelainRattle(dur = 0.9) {
    if (!this.started) return;
    const c = this.ctx, t = c.currentTime;
    const n = Math.floor(dur * 14);
    for (let i = 0; i < n; i++) {
      const tt = t + (i / n) * dur + Math.random() * 0.02;
      const o = c.createOscillator(); o.type = 'sine';
      o.frequency.value = 2400 + Math.random() * 1800;
      const g = c.createGain();
      g.gain.setValueAtTime(0.014 + Math.random() * 0.02, tt);
      g.gain.exponentialRampToValueAtTime(0.0008, tt + 0.03);
      o.connect(g); g.connect(this.master); g.connect(this.verb);
      o.start(tt); o.stop(tt + 0.04);
    }
  }

  // 远处的笑声（隔着几堵墙的宴席喧闹——响两秒，然后掐断，不是淡出）
  distantLaugh(pan = 0) {
    if (!this.started) return;
    const c = this.ctx, t = c.currentTime;
    const src = c.createBufferSource(); src.buffer = this._noiseBuf; src.loop = true;
    src.playbackRate.value = 0.9;
    const f = c.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = 700; f.Q.value = 2.2;
    const g = c.createGain(); g.gain.value = 0;
    const p = c.createStereoPanner(); p.pan.value = pan;
    src.connect(f); f.connect(g); g.connect(p); p.connect(this.master); g.connect(this.verb);
    let tt = t + 0.1;
    for (let i = 0; i < 6; i++) {
      g.gain.setTargetAtTime(0.026 + Math.random() * 0.018, tt, 0.05);
      f.frequency.setTargetAtTime(560 + Math.random() * 480, tt, 0.06);
      tt += 0.18 + Math.random() * 0.14;
    }
    g.gain.setValueAtTime(0, tt + 0.05); // 掐断
    src.start(t); src.stop(tt + 0.2);
  }

  // 电梯到站铃（大堂尽头——这栋楼的电梯从没开过门）
  elevatorDing(pan = 0.6) {
    if (!this.started) return;
    const c = this.ctx, t = c.currentTime;
    const p = c.createStereoPanner(); p.pan.value = pan; p.connect(this.master);
    [831, 1662].forEach((f, i) => {
      const o = c.createOscillator(); o.type = 'sine'; o.frequency.value = f;
      const g = c.createGain();
      g.gain.setValueAtTime(i ? 0.016 : 0.042, t);
      g.gain.exponentialRampToValueAtTime(0.0008, t + 1.5);
      o.connect(g); g.connect(p); g.connect(this.verb);
      o.start(t); o.stop(t + 1.6);
    });
  }

  // 水滴（走廊/连廊随机氛围）
  drip(pan = 0) {
    if (!this.started) return;
    const c = this.ctx, t = c.currentTime;
    const o = c.createOscillator(); o.type = 'sine';
    const f0 = 1400 + Math.random() * 900;
    o.frequency.setValueAtTime(f0, t);
    o.frequency.exponentialRampToValueAtTime(f0 * 0.45, t + 0.09);
    const g = c.createGain();
    g.gain.setValueAtTime(0.055, t);
    g.gain.exponentialRampToValueAtTime(0.001, t + 0.14);
    const p = c.createStereoPanner(); p.pan.value = pan;
    o.connect(g); g.connect(p); p.connect(this.master); g.connect(this.verb);
    o.start(t); o.stop(t + 0.2);
  }

  // 灯泡爆裂（火花 + 玻璃细屑）
  bulbPop() {
    if (!this.started) return;
    const c = this.ctx, t = c.currentTime;
    const src = c.createBufferSource(); src.buffer = this._noiseBuf;
    src.playbackRate.value = 2.8;
    const f = c.createBiquadFilter(); f.type = 'highpass'; f.frequency.value = 2400;
    const g = c.createGain(); g.gain.setValueAtTime(0.5, t);
    g.gain.exponentialRampToValueAtTime(0.001, t + 0.16);
    src.connect(f); f.connect(g); g.connect(this.master); g.connect(this.verb);
    src.start(t); src.stop(t + 0.2);
    for (let i = 0; i < 5; i++) {
      const dt = 0.06 + i * 0.05 + Math.random() * 0.04;
      const o = c.createOscillator(); o.type = 'sine';
      o.frequency.value = 3800 + Math.random() * 2600;
      const g2 = c.createGain();
      g2.gain.setValueAtTime(0.028, t + dt);
      g2.gain.exponentialRampToValueAtTime(0.001, t + dt + 0.07);
      o.connect(g2); g2.connect(this.master);
      o.start(t + dt); o.stop(t + dt + 0.1);
    }
  }

  // 剪断腕绳（终局）
  snip() {
    if (!this.started) return;
    this.pluck(660, 0.5, 0.992);
    this.pluck(49, 0.6, 0.999);
    const c = this.ctx, t = c.currentTime;
    const src = c.createBufferSource(); src.buffer = this._noiseBuf;
    src.playbackRate.value = 3;
    const f = c.createBiquadFilter(); f.type = 'highpass'; f.frequency.value = 3000;
    const g = c.createGain(); g.gain.setValueAtTime(0.3, t);
    g.gain.exponentialRampToValueAtTime(0.001, t + 0.12);
    src.connect(f); f.connect(g); g.connect(this.master);
    src.start(t); src.stop(t + 0.15);
  }
}
