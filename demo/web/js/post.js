"use strict";
/*
 * 后期合成 —— PS3 实机质感：
 * 内部 720p 渲染目标 → 全屏合成：胶片颗粒（暗部更重）、轻微色差、
 * 暗角、绿灰阴影/暖中间调的色阶、轻 S 曲线、去饱和。
 * 借视（Q）：撕裂行、信号噪声、硬暗角 —— 让玩家更不安，不是透视外挂。
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

  // 借视：行撕裂 + 水平抖动
  if (uJack > 0.001) {
    float band = floor(uv.y * 90.0);
    float tear = (hash(vec2(band, floor(uTime * 24.0))) - 0.5) * 0.012 * uJack;
    float roll = sin(uv.y * 3.0 + uTime * 1.7) * 0.002 * uJack;
    uv.x += tear + roll;
  }

  // 轻微径向色差
  vec2 d = uv - 0.5;
  float r2 = dot(d, d);
  float ca = (0.0016 + uJack * 0.004) * r2 * 18.0;
  vec3 col;
  col.r = texture2D(tDiffuse, uv + d * ca).r;
  col.g = texture2D(tDiffuse, uv).g;
  col.b = texture2D(tDiffuse, uv - d * ca).b;

  // 曝光（软滚肩，防高光死白）
  col = vec3(1.0) - exp(-col * uExposure);

  // 色阶：阴影压进灰绿，中间调偏暖，高光略奶
  float luma = dot(col, vec3(0.299, 0.587, 0.114));
  col += vec3(0.010, 0.016, 0.012) * (1.0 - smoothstep(0.0, 0.45, luma));
  col *= vec3(1.045, 1.0, 0.955);
  // 轻 S 曲线
  vec3 s = col * col * (3.0 - 2.0 * col);
  col = mix(col, s, 0.42);
  // 去饱和一点（时代底片）
  col = mix(col, vec3(luma), 0.10);
  // 黑位轻抬（CRT 时代黑不到底）
  col = col * 0.96 + 0.018;

  // 借视：更狠的去饱和与对比 + 信号噪声
  if (uJack > 0.001) {
    col = mix(col, vec3(dot(col, vec3(0.34, 0.5, 0.16))), 0.55 * uJack);
    float n = hash(uv * uRes * 0.4 + vec2(uTime * 63.0, uTime * 41.0));
    col += (n - 0.5) * 0.22 * uJack;
    float drop = step(0.985, hash(vec2(floor(uv.y * 160.0), floor(uTime * 30.0))));
    col *= 1.0 - drop * 0.7 * uJack;
  }

  // 胶片颗粒（暗部更重）
  float g = hash(uv * uRes + vec2(uTime * 91.0, -uTime * 57.0));
  col += (g - 0.5) * uGrain * (0.55 + (1.0 - luma) * 0.8);

  // 暗角
  float vig = 1.0 - smoothstep(0.32, 1.05 - uJack * 0.25, length(d) * 1.5);
  col *= mix(0.55, 1.0, vig);

  gl_FragColor = vec4(col, 1.0);
}`;

export function createPost(renderer) {
  const rt = new THREE.WebGLRenderTarget(1280, 720, {
    minFilter: THREE.LinearFilter,
    magFilter: THREE.LinearFilter,
    colorSpace: THREE.SRGBColorSpace,
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

  let jack = 0;
  function render(scene, camera, dt, wantJack) {
    jack += ((wantJack ? 1 : 0) - jack) * Math.min(1, dt * 9);
    mat.uniforms.uTime.value = (performance.now() % 100000) / 1000;
    mat.uniforms.uJack.value = jack;
    renderer.setRenderTarget(rt);
    renderer.render(scene, camera);
    renderer.setRenderTarget(null);
    renderer.render(quadScene, quadCam);
  }

  return { setSize, render, mat, get jackLevel() { return jack; } };
}
