// 后处理 —— 自建轻量管线：亮部提取 + 双尺度泛光（窄亮心/宽辉光）+ 电影级合成
// 美术纪律：禁止全局蓝滤镜；夜景气质靠实用光源，后期只做胶片感与泛光。
// v1.0：ACES 近似调色 + 曝光、动画 letterbox、冲击闪白/渗红、呼吸颗粒。
import * as THREE from 'three';

const QUAD_VERT = /* glsl */`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}`;

const BRIGHT_FRAG = /* glsl */`
uniform sampler2D tScene;
varying vec2 vUv;
void main() {
  vec3 c = texture2D(tScene, vUv).rgb;
  float l = dot(c, vec3(0.299, 0.587, 0.114));
  float k = smoothstep(0.5, 1.05, l);
  gl_FragColor = vec4(c * k, 1.0);
}`;

const BLUR_FRAG = /* glsl */`
uniform sampler2D tInput;
uniform vec2 uDir;
varying vec2 vUv;
void main() {
  vec3 acc = vec3(0.0);
  float w[5];
  w[0] = 0.227; w[1] = 0.194; w[2] = 0.121; w[3] = 0.054; w[4] = 0.016;
  acc += texture2D(tInput, vUv).rgb * w[0];
  for (int i = 1; i < 5; i++) {
    vec2 off = uDir * float(i) * 1.6;
    acc += texture2D(tInput, vUv + off).rgb * w[i];
    acc += texture2D(tInput, vUv - off).rgb * w[i];
  }
  gl_FragColor = vec4(acc, 1.0);
}`;

const COMPOSITE_FRAG = /* glsl */`
uniform sampler2D tScene;
uniform sampler2D tBloomA;  // 窄泛光（亮心）
uniform sampler2D tBloomB;  // 宽辉光（雾感/halation）
uniform float uTime;
uniform float uRedPulse;   // 点名时的红脉冲
uniform float uShock;      // 事件冲击（收声/点火）
uniform float uFlash;      // 震惊节拍闪白
uniform float uLetterbox;  // 电影黑边 0~1
uniform float uExposure;
uniform float uDread;      // 静默低压：0=正常 1=收声中（去饱和+边缘下沉）
uniform vec2 uTexel;       // 1/分辨率（锐化用）
varying vec2 vUv;

float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }

// ACES 近似（Narkowicz）
vec3 aces(vec3 x) {
  const float a = 2.51, b = 0.03, c = 2.43, d = 0.59, e = 0.14;
  return clamp((x * (a * x + b)) / (x * (c * x + d) + e), 0.0, 1.0);
}

void main() {
  vec2 uv = vUv;
  // 轻色差（边缘，冲击时加剧）
  vec2 d = uv - 0.5;
  float r2 = dot(d, d);
  float ca = 0.0014 + uShock * 0.004;
  vec3 col;
  col.r = texture2D(tScene, uv + d * ca).r;
  col.g = texture2D(tScene, uv).g;
  col.b = texture2D(tScene, uv - d * ca).b;
  // 锐化（unsharp mask——把 1.5x 像素比的画面锐回"数字艺术"级清晰度）
  {
    vec3 n1 = texture2D(tScene, uv + vec2(uTexel.x, 0.0)).rgb;
    vec3 n2 = texture2D(tScene, uv - vec2(uTexel.x, 0.0)).rgb;
    vec3 n3 = texture2D(tScene, uv + vec2(0.0, uTexel.y)).rgb;
    vec3 n4 = texture2D(tScene, uv - vec2(0.0, uTexel.y)).rgb;
    vec3 blur4 = (n1 + n2 + n3 + n4) * 0.25;
    col += (col - blur4) * 0.55;
  }
  // 双尺度泛光：窄亮心中性；宽辉光偏暖红——胶片 halation（高光边缘渗红，林奇式过曝签名）
  vec3 bloomA = texture2D(tBloomA, uv).rgb;
  vec3 bloomB = texture2D(tBloomB, uv).rgb;
  col += bloomA * 0.66;
  col += bloomB * 0.55 * vec3(1.06, 0.74, 0.52);
  // 曝光 + ACES 调色
  col *= uExposure * (1.0 + uFlash * 1.6);
  col = aces(col);
  // 暖黑（阴影往琥珀偏，绝不偏蓝）
  col = pow(col, vec3(0.96, 1.0, 1.06));
  col += vec3(0.014, 0.009, 0.006);
  // 轻 vibrance（低饱和像素补饱和——红金更实，不动肤色高光）
  {
    float lum0 = dot(col, vec3(0.299, 0.587, 0.114));
    float sat = length(col - vec3(lum0));
    col = mix(vec3(lum0), col, 1.0 + (0.18 - sat * 0.3) * (1.0 - uDread * 0.6));
  }
  // 静默低压：收声时画面微微失血、边缘下沉——静默=最大警报的视觉版
  {
    float lum1 = dot(col, vec3(0.299, 0.587, 0.114));
    col = mix(col, vec3(lum1) * vec3(1.0, 0.97, 0.94), uDread * 0.22);
    col *= 1.0 - uDread * smoothstep(0.06, 0.42, r2) * 0.22;
  }
  // 双层颗粒（粗+细，暗部更重——胶片特性）
  float lum = dot(col, vec3(0.299, 0.587, 0.114));
  float g1 = hash(uv * vec2(1920.0, 1080.0) + fract(uTime * 7.0));
  float g2 = hash(uv * vec2(640.0, 360.0) + fract(uTime * 13.0) * 3.0);
  col += (g1 - 0.5) * mix(0.05, 0.016, lum);
  col += (g2 - 0.5) * mix(0.022, 0.006, lum);
  // 暗角（呼吸感：极慢的 0.5% 起伏——房间在极轻地喘）
  float breathe = 1.0 + sin(uTime * 0.23) * 0.005;
  float vig = (1.0 - r2 * (1.08 + uShock * 0.8)) * breathe;
  col *= vig;
  // 点名红脉冲（画面四周渗红——腕绳的颜色）
  float edge = smoothstep(0.18, 0.5, r2);
  col = mix(col, vec3(0.42, 0.03, 0.04), edge * uRedPulse * 0.55);
  // 闪白（震惊节拍）
  col = mix(col, vec3(0.9, 0.86, 0.8), clamp(uFlash, 0.0, 1.0) * 0.55);
  // 电影黑边（软边缘）
  float bar = 0.085 * uLetterbox;
  float lb = smoothstep(bar, bar + 0.004, uv.y) * smoothstep(bar, bar + 0.004, 1.0 - uv.y);
  col *= mix(1.0, lb, step(0.001, uLetterbox));
  gl_FragColor = vec4(col, 1.0);
}`;

export class Post {
  constructor(renderer, width, height) {
    this.renderer = renderer;
    this.scene = new THREE.Scene();
    this.cam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    this.quadGeo = new THREE.PlaneGeometry(2, 2);
    this.resize(width, height, true);

    this.brightMat = new THREE.ShaderMaterial({
      uniforms: { tScene: { value: null } },
      vertexShader: QUAD_VERT, fragmentShader: BRIGHT_FRAG,
    });
    this.blurMat = new THREE.ShaderMaterial({
      uniforms: { tInput: { value: null }, uDir: { value: new THREE.Vector2() } },
      vertexShader: QUAD_VERT, fragmentShader: BLUR_FRAG,
    });
    this.compMat = new THREE.ShaderMaterial({
      uniforms: {
        tScene: { value: null }, tBloomA: { value: null }, tBloomB: { value: null },
        uTime: { value: 0 }, uRedPulse: { value: 0 }, uShock: { value: 0 },
        uFlash: { value: 0 }, uLetterbox: { value: 0 }, uExposure: { value: 1.18 },
        uDread: { value: 0 }, uTexel: { value: new THREE.Vector2(1 / width, 1 / height) },
      },
      vertexShader: QUAD_VERT, fragmentShader: COMPOSITE_FRAG,
    });
    this.quad = new THREE.Mesh(this.quadGeo, this.compMat);
    this.quad.frustumCulled = false;
    this.scene.add(this.quad);
    this.redPulse = 0;
    this.shock = 0;
    this.flash = 0;          // 设 1 触发闪白，自动衰减
    this.letterbox = 0;      // 当前值（插值）
    this.letterboxTarget = 0;
    this.exposure = 1.18;
    this.exposureTarget = 1.18; // 区域电影曝光（宴会厅过亮 / 服务区压暗）
    this.dread = 0;             // 静默低压（audio.hush 期间 → 1）
    this.dreadTarget = 0;
  }

  resize(w, h, first = false) {
    const opts = { minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter };
    if (!first) { this.rtScene.dispose(); this.rtA.dispose(); this.rtB.dispose(); this.rtC.dispose(); this.rtD.dispose(); }
    this.rtScene = new THREE.WebGLRenderTarget(w, h, { ...opts, samples: 2 });
    this.rtA = new THREE.WebGLRenderTarget(w >> 2, h >> 2, opts);
    this.rtB = new THREE.WebGLRenderTarget(w >> 2, h >> 2, opts);
    this.rtC = new THREE.WebGLRenderTarget(w >> 3, h >> 3, opts);
    this.rtD = new THREE.WebGLRenderTarget(w >> 3, h >> 3, opts);
    this.w = w; this.h = h;
  }

  _blur(src, dst, tmp, texW, texH) {
    const r = this.renderer;
    this.quad.material = this.blurMat;
    this.blurMat.uniforms.tInput.value = src.texture;
    this.blurMat.uniforms.uDir.value.set(1 / texW, 0);
    r.setRenderTarget(tmp);
    r.render(this.scene, this.cam);
    this.blurMat.uniforms.tInput.value = tmp.texture;
    this.blurMat.uniforms.uDir.value.set(0, 1 / texH);
    r.setRenderTarget(dst);
    r.render(this.scene, this.cam);
  }

  render(scene, camera, dt, time) {
    const r = this.renderer;
    this.redPulse = Math.max(0, this.redPulse - dt * 0.8);
    this.shock = Math.max(0, this.shock - dt * 0.5);
    this.flash = Math.max(0, this.flash - dt * 2.2);
    this.letterbox += (this.letterboxTarget - this.letterbox) * Math.min(1, dt * 3);
    this.exposure += (this.exposureTarget - this.exposure) * Math.min(1, dt * 0.9);
    this.dread += (this.dreadTarget - this.dread) * Math.min(1, dt * 1.4);
    // 1) 场景
    r.setRenderTarget(this.rtScene);
    r.render(scene, camera);
    // 2) 亮部
    this.quad.material = this.brightMat;
    this.brightMat.uniforms.tScene.value = this.rtScene.texture;
    r.setRenderTarget(this.rtA);
    r.render(this.scene, this.cam);
    // 3) 窄泛光（1/4 尺度）
    this._blur(this.rtA, this.rtA, this.rtB, this.w >> 2, this.h >> 2);
    // 4) 宽辉光（1/8 尺度，再模糊两次）
    this.quad.material = this.blurMat;
    this.blurMat.uniforms.tInput.value = this.rtA.texture;
    this.blurMat.uniforms.uDir.value.set(1 / (this.w >> 3), 0);
    r.setRenderTarget(this.rtC);
    r.render(this.scene, this.cam);
    this.blurMat.uniforms.tInput.value = this.rtC.texture;
    this.blurMat.uniforms.uDir.value.set(0, 1 / (this.h >> 3));
    r.setRenderTarget(this.rtD);
    r.render(this.scene, this.cam);
    this._blur(this.rtD, this.rtD, this.rtC, this.w >> 3, this.h >> 3);
    // 5) 合成
    this.quad.material = this.compMat;
    const u = this.compMat.uniforms;
    u.tScene.value = this.rtScene.texture;
    u.tBloomA.value = this.rtA.texture;
    u.tBloomB.value = this.rtD.texture;
    u.uTime.value = time;
    u.uRedPulse.value = this.redPulse;
    u.uShock.value = this.shock;
    u.uFlash.value = this.flash;
    u.uLetterbox.value = this.letterbox;
    u.uExposure.value = this.exposure;
    u.uDread.value = this.dread;
    u.uTexel.value.set(1 / this.w, 1 / this.h);
    r.setRenderTarget(null);
    r.render(this.scene, this.cam);
  }
}
