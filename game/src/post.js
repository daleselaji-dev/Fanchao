// 后处理 —— 自建轻量管线：亮部提取 + 双 pass 模糊泛光 + 合成（颗粒/暗角/轻色差）
// 美术纪律：禁止全局蓝滤镜；夜景气质靠实用光源，后期只做胶片感与泛光。
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
  float k = smoothstep(0.55, 1.1, l);
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
uniform sampler2D tBloom;
uniform float uTime;
uniform float uRedPulse;   // 点名时的红脉冲
uniform float uShock;      // 事件冲击（收声/点火）
varying vec2 vUv;

float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }

void main() {
  vec2 uv = vUv;
  // 轻色差（边缘）
  vec2 d = uv - 0.5;
  float r2 = dot(d, d);
  float ca = 0.0016 + uShock * 0.004;
  vec3 col;
  col.r = texture2D(tScene, uv + d * ca).r;
  col.g = texture2D(tScene, uv).g;
  col.b = texture2D(tScene, uv - d * ca).b;
  // 泛光
  vec3 bloom = texture2D(tBloom, uv).rgb;
  col += bloom * 0.85;
  // 胶片调（轻 S 曲线 + 暖黑）
  col = col / (col + vec3(0.55)) * 1.45;
  col = pow(col, vec3(1.06, 1.08, 1.12));
  col += vec3(0.012, 0.008, 0.006);
  // 颗粒
  float g = hash(uv * vec2(1920.0, 1080.0) + fract(uTime * 7.0));
  col += (g - 0.5) * 0.045;
  // 暗角
  float vig = 1.0 - r2 * (1.15 + uShock * 0.8);
  col *= vig;
  // 点名红脉冲（画面四周渗红——腕绳的颜色）
  float edge = smoothstep(0.18, 0.5, r2);
  col = mix(col, vec3(0.42, 0.03, 0.04), edge * uRedPulse * 0.55);
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
        tScene: { value: null }, tBloom: { value: null },
        uTime: { value: 0 }, uRedPulse: { value: 0 }, uShock: { value: 0 },
      },
      vertexShader: QUAD_VERT, fragmentShader: COMPOSITE_FRAG,
    });
    this.quad = new THREE.Mesh(this.quadGeo, this.compMat);
    this.quad.frustumCulled = false;
    this.scene.add(this.quad);
    this.redPulse = 0;
    this.shock = 0;
  }

  resize(w, h, first = false) {
    const opts = { minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter };
    if (!first) { this.rtScene.dispose(); this.rtA.dispose(); this.rtB.dispose(); }
    this.rtScene = new THREE.WebGLRenderTarget(w, h, { ...opts, samples: 2 });
    this.rtA = new THREE.WebGLRenderTarget(w >> 2, h >> 2, opts);
    this.rtB = new THREE.WebGLRenderTarget(w >> 2, h >> 2, opts);
    this.w = w; this.h = h;
  }

  render(scene, camera, dt, time) {
    const r = this.renderer;
    this.redPulse = Math.max(0, this.redPulse - dt * 0.8);
    this.shock = Math.max(0, this.shock - dt * 0.5);
    // 1) 场景
    r.setRenderTarget(this.rtScene);
    r.render(scene, camera);
    // 2) 亮部
    this.quad.material = this.brightMat;
    this.brightMat.uniforms.tScene.value = this.rtScene.texture;
    r.setRenderTarget(this.rtA);
    r.render(this.scene, this.cam);
    // 3) 模糊 H/V
    this.quad.material = this.blurMat;
    this.blurMat.uniforms.tInput.value = this.rtA.texture;
    this.blurMat.uniforms.uDir.value.set(1 / (this.w >> 2), 0);
    r.setRenderTarget(this.rtB);
    r.render(this.scene, this.cam);
    this.blurMat.uniforms.tInput.value = this.rtB.texture;
    this.blurMat.uniforms.uDir.value.set(0, 1 / (this.h >> 2));
    r.setRenderTarget(this.rtA);
    r.render(this.scene, this.cam);
    // 4) 合成
    this.quad.material = this.compMat;
    this.compMat.uniforms.tScene.value = this.rtScene.texture;
    this.compMat.uniforms.tBloom.value = this.rtA.texture;
    this.compMat.uniforms.uTime.value = time;
    this.compMat.uniforms.uRedPulse.value = this.redPulse;
    this.compMat.uniforms.uShock.value = this.shock;
    r.setRenderTarget(null);
    r.render(this.scene, this.cam);
  }
}
