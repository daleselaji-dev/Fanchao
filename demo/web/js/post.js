"use strict";
/*
 * 后期合成 —— PS3 实机质感：
 * 内部 720p 渲染目标 → 全屏合成：胶片颗粒（暗部更重）、轻微色差、
 * 暗角、绿灰阴影/暖中间调的色阶、轻 S 曲线、去饱和、
 * 高光糊边（halation）、片门微晃（gate weave）。
 * 借视（Q）：撕裂行、信号噪声、硬暗角 —— 让玩家更不安，不是透视外挂。
 * 过载（按住超时）：画面塌成噪场再回落。
 * 压迫（实体近身且可见）：暗角收紧 + 颗粒变重——注意力自己变窄。
 * 明确不做：Bloom 堆砌、蓝色滤镜、水下扭曲。
 */
import * as THREE from "three";

const VERT = /* glsl */`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}`;

const FRAG = /* glsl */`
precision highp float;
varying vec2 vUv;
uniform sampler2D tDiffuse;
uniform float uTime;
uniform float uJack;
uniform float uOverload;
uniform float uPressure;
uniform float uLow;
uniform float uGrain;
uniform float uExposure;
uniform vec2 uRes;

float hash(vec2 p) {
  p = fract(p * vec2(443.897, 441.423));
  p += dot(p, p.yx + 19.19);
  return fract((p.x + p.y) * p.x);
}

void main() {
  vec2 uv = vUv;

  // 片门微晃：底片没夹紧的那一点点呼吸（潜意识级）
  uv.x += sin(uTime * 1.13) * 0.00035;
  uv.y += sin(uTime * 0.77 + 1.7) * 0.00028;

  // 借视：行撕裂 + 水平抖动 + 场同步偶发滑移
  if (uJack > 0.001) {
    float band = floor(uv.y * 90.0);
    float tear = (hash(vec2(band, floor(uTime * 24.0))) - 0.5) * 0.016 * uJack;
    float roll = sin(uv.y * 3.0 + uTime * 1.7) * 0.002 * uJack;
    float vh = hash(vec2(floor(uTime * 6.0), 7.7));
    float vslip = step(0.84, vh) * (vh - 0.84) * 0.5 * uJack;
    uv.y = fract(uv.y + vslip);
    uv.x += tear + roll;
  }

  // 轻微径向色差
  vec2 d = uv - 0.5;
  float r2 = dot(d, d);
  float ca = (0.0010 + uJack * 0.004) * r2 * 18.0;
  vec3 col;
  col.r = texture2D(tDiffuse, uv + d * ca).r;
  col.g = texture2D(tDiffuse, uv).g;
  col.b = texture2D(tDiffuse, uv - d * ca).b;

  // 高光糊边（halation）：亮源往周围渗一圈暖雾——CRT/胶片时代的光不是干净的
  {
    vec2 px = 2.5 / uRes;
    vec3 h = texture2D(tDiffuse, uv + vec2(px.x, 0.0)).rgb
           + texture2D(tDiffuse, uv - vec2(px.x, 0.0)).rgb
           + texture2D(tDiffuse, uv + vec2(0.0, px.y)).rgb
           + texture2D(tDiffuse, uv - vec2(0.0, px.y)).rgb;
    h *= 0.25;
    float hl = max(0.0, dot(h, vec3(0.333)) - 0.82);
    col += vec3(1.0, 0.82, 0.6) * hl * 0.30;
  }

  // HDR 软滚肩：>1 的高光能量（半浮点 RT 保留）滚进白区，不再剪成色块
  col = vec3(1.0) - exp(-col * uExposure);

  // 色阶：阴影压进灰绿，中间调偏暖，高光略奶
  float luma = dot(col, vec3(0.299, 0.587, 0.114));
  col += vec3(0.010, 0.016, 0.012) * (1.0 - smoothstep(0.0, 0.45, luma));
  col *= vec3(1.045, 1.0, 0.955);
  // 低处：底片更沉——中间调压一点、阴影再绿一丝（界面之下的空气密度）
  col *= 1.0 - uLow * 0.06;
  col += vec3(-0.004, 0.005, 0.001) * uLow * (1.0 - smoothstep(0.0, 0.5, luma));
  // 轻 S 曲线
  vec3 s = col * col * (3.0 - 2.0 * col);
  col = mix(col, s, 0.42);
  // 去饱和一点（时代底片）
  col = mix(col, vec3(luma), 0.10);
  // 黑位轻抬（CRT 时代黑不到底）
  col = col * 0.96 + 0.018;

  // 借视：接入的是别人的眼睛——重脱色、信号噪声、扫描线、整体压暗
  if (uJack > 0.001) {
    col = mix(col, vec3(dot(col, vec3(0.34, 0.5, 0.16))), 0.82 * uJack);
    float n = hash(uv * uRes * 0.4 + vec2(uTime * 63.0, uTime * 41.0));
    col += (n - 0.5) * 0.26 * uJack;
    float drop = step(0.985, hash(vec2(floor(uv.y * 160.0), floor(uTime * 30.0))));
    col *= 1.0 - drop * 0.7 * uJack;
    float scan = 0.5 + 0.5 * sin(uv.y * uRes.y * 2.4);
    col *= 1.0 - uJack * (0.16 * scan + 0.12);
  }

  // 过载：信号彻底失锁——整帧塌进噪场 + 滚动亮带，然后按 uOverload 回落
  if (uOverload > 0.001) {
    float sn = hash(uv * uRes * 0.7 + vec2(uTime * 173.0, -uTime * 97.0));
    float bandY = fract(uv.y - uTime * 0.8);
    float bright = smoothstep(0.02, 0.0, abs(bandY - 0.5) - 0.03) * 0.5;
    vec3 noiseCol = vec3(sn * 0.75 + bright);
    col = mix(col, noiseCol, min(1.0, uOverload * 1.2));
  }

  // 胶片颗粒（暗部更重；压迫时更重）
  float g = hash(uv * uRes + vec2(uTime * 91.0, -uTime * 57.0));
  col += (g - 0.5) * uGrain * (0.55 + (1.0 - luma) * 0.8) * (1.0 + uPressure * 0.7);

  // 暗角（压迫时收紧 + 极缓慢的呼吸）
  float breathe = 1.0 + sin(uTime * 0.9) * 0.012 * uPressure;
  float vigEdge = (1.05 - uJack * 0.25 - uPressure * 0.13) * breathe;
  float vig = 1.0 - smoothstep(0.32, vigEdge, length(d) * 1.5);
  col *= mix(0.55 - uPressure * 0.06, 1.0, vig);

  gl_FragColor = vec4(col, 1.0);
}`;

export function createPost(renderer) {
  // 半浮点线性 RT：保留 >1 的高光能量，交给 shader 软滚肩（8 位会先剪裁成色块）
  const rt = new THREE.WebGLRenderTarget(1280, 720, {
    minFilter: THREE.LinearFilter,
    magFilter: THREE.LinearFilter,
    type: THREE.HalfFloatType,
    colorSpace: THREE.LinearSRGBColorSpace,
  });
  const quadScene = new THREE.Scene();
  const quadCam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
  const mat = new THREE.ShaderMaterial({
    vertexShader: VERT,
    fragmentShader: FRAG,
    uniforms: {
      tDiffuse: { value: rt.texture },
      uTime: { value: 0 },
      uJack: { value: 0 },
      uOverload: { value: 0 },
      uPressure: { value: 0 },
      uLow: { value: 0 },
      uGrain: { value: 0.055 },
      uExposure: { value: 1.55 },
      uRes: { value: new THREE.Vector2(1280, 720) },
    },
    depthTest: false,
    depthWrite: false,
  });
  const tri = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), mat);
  quadScene.add(tri);

  // 测试环境（SwiftShader）可用 ?rtscale=0.5 降低内部分辨率
  const rtScale = parseFloat(new URLSearchParams(location.search).get("rtscale") || "1") || 1;

  function setSize(w, h) {
    // 内部分辨率上限 720p（PS3 底片 + 性能）
    const scale = Math.min(1, 1280 / w, 720 / h) * rtScale;
    const rw = Math.max(320, Math.round(w * scale));
    const rh = Math.max(180, Math.round(h * scale));
    rt.setSize(rw, rh);
    mat.uniforms.uRes.value.set(rw, rh);
    renderer.setSize(w, h, false);
  }

  let jack = 0, overload = 0, pressure = 0, low = 0;
  // state: { jack, overload, pressure, low } —— 全部 0..1 目标值，内部做平滑
  function render(scene, camera, dt, state = {}) {
    jack += ((state.jack ? 1 : 0) - jack) * Math.min(1, dt * 9);
    overload += ((state.overload ? 1 : 0) - overload) * Math.min(1, dt * (state.overload ? 14 : 3.2));
    pressure += ((state.pressure || 0) - pressure) * Math.min(1, dt * 2.2);
    low += ((state.low ? 1 : 0) - low) * Math.min(1, dt * 2.5);
    mat.uniforms.uTime.value = (performance.now() % 100000) / 1000;
    mat.uniforms.uJack.value = jack;
    mat.uniforms.uOverload.value = overload;
    mat.uniforms.uPressure.value = pressure;
    mat.uniforms.uLow.value = low;
    renderer.setRenderTarget(rt);
    renderer.render(scene, camera);
    renderer.setRenderTarget(null);
    renderer.render(quadScene, quadCam);
  }

  return { setSize, render, mat, get jackLevel() { return jack; } };
}
