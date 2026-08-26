// CRT 阈限录像 —— 辅助信息层（宪法补丁 V2.1：预告下一档绳网与空间形态）
// 技术方案：第二相机渲染"下一态"层到低分辨率 RenderTarget + CRT 质感 shader
import * as THREE from 'three';

const CRT_VERT = /* glsl */`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`;

const CRT_FRAG = /* glsl */`
uniform sampler2D tDiffuse;
uniform float uTime;
uniform float uStatic;   // 0=正常预现 1=纯雪花（空间完成态）
uniform float uPower;    // 0=黑屏
varying vec2 vUv;

float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }

void main() {
  // 桶形畸变
  vec2 uv = vUv * 2.0 - 1.0;
  uv *= 1.0 + 0.08 * dot(uv, uv);
  uv = uv * 0.5 + 0.5;
  if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) {
    gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
    return;
  }
  // 行滚动条
  float roll = fract(uTime * 0.11);
  float rollBar = smoothstep(0.0, 0.08, abs(uv.y - roll)) * 0.25 + 0.75;
  // 色偏移（拖影）
  float ca = 0.0035;
  vec3 col;
  col.r = texture2D(tDiffuse, uv + vec2(ca, 0.0)).r;
  col.g = texture2D(tDiffuse, uv).g;
  col.b = texture2D(tDiffuse, uv - vec2(ca, 0.0)).b;
  // CRT 蓝绿荧光偏色（美术锁定：唯一允许的偏色）
  col = col * vec3(0.72, 1.02, 0.95) + vec3(0.015, 0.05, 0.045);
  // 隔行扫描
  float scan = sin(uv.y * 240.0 * 3.14159) * 0.5 + 0.5;
  col *= 0.78 + scan * 0.3;
  // 行频噪点
  float n = hash(vec2(floor(uv.y * 240.0), floor(uTime * 60.0)));
  col += (n - 0.5) * 0.10;
  // 雪花
  float snow = hash(uv * vec2(320.0, 240.0) + fract(uTime) * 100.0);
  col = mix(col, vec3(snow * 0.8 + 0.1), uStatic);
  // 暗角
  float vig = 1.0 - dot(vUv - 0.5, vUv - 0.5) * 1.6;
  col *= vig * rollBar;
  col *= uPower;
  gl_FragColor = vec4(col, 1.0);
}`;

export class CRTManager {
  constructor(renderer, scene, screens, futureGroups) {
    this.renderer = renderer;
    this.scene = scene;
    this.screens = [];
    this.future = futureGroups;
    this.activeFuture = [];     // 当前允许显示的预现层
    this.time = 0;
    this._idx = 0;
    this.previewBoost = new THREE.AmbientLight(0x9aaabb, 4.5); // 预现画面提亮（只在 RT 渲染时挂载）
    for (const def of screens) {
      const rt = def.kind === 'preview'
        ? new THREE.WebGLRenderTarget(256, 192, { minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter })
        : null;
      let vcrTex = null, vcrCanvas = null;
      if (def.kind === 'vcr') {
        vcrCanvas = document.createElement('canvas');
        vcrCanvas.width = 256; vcrCanvas.height = 192;
        vcrTex = new THREE.CanvasTexture(vcrCanvas);
      }
      const mat = new THREE.ShaderMaterial({
        uniforms: {
          tDiffuse: { value: rt ? rt.texture : vcrTex },
          uTime: { value: 0 },
          uStatic: { value: 0 },
          uPower: { value: 1 },
        },
        vertexShader: CRT_VERT,
        fragmentShader: CRT_FRAG,
      });
      def.mesh.material = mat;
      const cam = def.kind === 'preview'
        ? new THREE.PerspectiveCamera(52, 256 / 192, 0.1, 60)
        : null;
      if (cam) {
        cam.position.copy(def.camPos);
        cam.lookAt(def.camLook);
      }
      this.screens.push({ def, rt, mat, cam, vcrCanvas, vcrTex, static: false, power: true });
    }
  }

  setFutureActive(names) { this.activeFuture = names; }
  setStatic(id, on) {
    const s = this.screens.find(s => s.def.id === id);
    if (s) s.static = on;
  }
  setPower(id, on) {
    const s = this.screens.find(s => s.def.id === id);
    if (s) s.power = on;
  }

  _drawVCR(s) {
    const ctx = s.vcrCanvas.getContext('2d');
    const t = this.time;
    // 婚礼暖场 VCR：红底、金囍、缓慢平移的光斑——被预现闪切干扰
    ctx.fillStyle = '#5a0e12';
    ctx.fillRect(0, 0, 256, 192);
    const gx = 128 + Math.sin(t * 0.4) * 40;
    const g = ctx.createRadialGradient(gx, 90, 10, gx, 90, 120);
    g.addColorStop(0, 'rgba(255,190,120,0.5)');
    g.addColorStop(1, 'rgba(255,190,120,0)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, 256, 192);
    ctx.fillStyle = '#e7b64c';
    ctx.font = '90px serif';
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText('囍', 128, 92);
    ctx.font = '18px sans-serif';
    ctx.fillText('新婚快乐 百年好合', 128, 160);
    // 预现闪切：随机帧变成喉道暗弧
    if (Math.sin(t * 0.7) > 0.965 || (t % 11 > 10.6)) {
      ctx.fillStyle = '#0c0e10';
      ctx.fillRect(0, 0, 256, 192);
      ctx.strokeStyle = 'rgba(90,64,56,0.9)';
      ctx.lineWidth = 8;
      for (let i = 0; i < 5; i++) {
        ctx.beginPath();
        ctx.arc(128, 210, 40 + i * 34, Math.PI * 1.15, Math.PI * 1.85);
        ctx.stroke();
      }
      ctx.fillStyle = 'rgba(231,182,76,0.6)';
      ctx.font = '90px serif';
      ctx.fillText('囍', 128, 92);
    }
    s.vcrTex.needsUpdate = true;
  }

  update(dt, playerPos) {
    this.time += dt;
    for (const s of this.screens) {
      s.mat.uniforms.uTime.value = this.time;
      s.mat.uniforms.uStatic.value += ((s.static ? 1 : 0) - s.mat.uniforms.uStatic.value) * dt * 3;
      s.mat.uniforms.uPower.value += ((s.power ? 1 : 0) - s.mat.uniforms.uPower.value) * dt * 4;
    }
    // 每帧只更新一块屏（轮询），且仅当玩家在附近
    const candidates = this.screens.filter(s => {
      const wp = new THREE.Vector3();
      s.def.mesh.getWorldPosition(wp);
      return wp.distanceTo(playerPos) < 16 && s.power;
    });
    if (candidates.length === 0) return;
    this._idx = (this._idx + 1) % candidates.length;
    const s = candidates[this._idx];
    if (s.def.kind === 'vcr') {
      this._drawVCR(s);
      return;
    }
    if (s.static) return;
    // 渲染预现层：临时显示"下一态"组 + 提亮
    const shown = [];
    for (const name of this.activeFuture) {
      const grp = this.future[name];
      if (grp && !grp.visible) { grp.visible = true; shown.push(grp); }
    }
    this.scene.add(this.previewBoost);
    const oldFog = this.scene.fog;
    this.scene.fog = null;
    this.renderer.setRenderTarget(s.rt);
    this.renderer.render(this.scene, s.cam);
    this.renderer.setRenderTarget(null);
    this.scene.fog = oldFog;
    this.scene.remove(this.previewBoost);
    for (const grp of shown) grp.visible = false;
    // 屏幕辉光随内容微闪
    if (s.def.glow) s.def.glow.intensity = 3 + Math.sin(this.time * 13.7) * 0.8 + Math.random() * 0.5;
  }
}
