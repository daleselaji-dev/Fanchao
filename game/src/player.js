// 第一人称控制 —— WASD + 鼠标 + E（全部操作）。碰撞：圆 vs AABB。
import * as THREE from 'three';

export class Player {
  constructor(camera, dom) {
    this.camera = camera;
    this.dom = dom;
    this.pos = new THREE.Vector3(0, 0, -3);
    this.yaw = Math.PI;      // 面向舞台
    this.pitch = 0;
    this.vel = new THREE.Vector3();
    this.keys = {};
    this.locked = false;
    this.enabled = false;
    this.seated = false;
    this.radius = 0.32;
    this.eyeHeight = 1.62;
    this.bobT = 0;
    this.stepDist = 0;
    this.onStep = null;      // (mat, running)
    this.holdE = 0;
    this.eDown = false;
    this.ePressed = false;   // 单帧按下
    this.kickV = 0;          // 相机冲击（摘/挂/巨响反馈）
    this.kickRoll = 0;
    window.addEventListener('keydown', (e) => {
      this.keys[e.code] = true;
      if (e.code === 'KeyE' && !this.eDown) { this.eDown = true; this.ePressed = true; }
    });
    window.addEventListener('keyup', (e) => {
      this.keys[e.code] = false;
      if (e.code === 'KeyE') { this.eDown = false; this.holdE = 0; }
    });
    document.addEventListener('mousemove', (e) => {
      if (!this.locked || !this.enabled) return;
      this.yaw -= e.movementX * 0.0021;
      this.pitch -= e.movementY * 0.0021;
      this.pitch = THREE.MathUtils.clamp(this.pitch, -1.35, 1.35);
    });
    document.addEventListener('pointerlockchange', () => {
      this.locked = document.pointerLockElement === this.dom;
    });
  }

  lock() { this.dom.requestPointerLock?.(); }

  get forward() {
    return new THREE.Vector3(-Math.sin(this.yaw), 0, -Math.cos(this.yaw));
  }
  get lookDir() {
    const d = new THREE.Vector3();
    this.camera.getWorldDirection(d);
    return d;
  }

  teleport(x, z, yaw = null) {
    this.pos.set(x, 0, z);
    this.vel.set(0, 0, 0);
    if (yaw !== null) this.yaw = yaw;
  }

  // 相机冲击：v>0 上挑（挂绳），v<0 下压（摘绳/巨响）
  kick(v, roll = 0) {
    this.kickV = v;
    this.kickRoll = roll;
  }

  update(dt, colliders, regionAt) {
    this.ePressedThisFrame = this.ePressed;
    this.ePressed = false;
    if (this.eDown) this.holdE += dt; else this.holdE = 0;

    if (!this.enabled || this.seated) {
      this._applyCamera(dt, true);
      return;
    }
    const run = this.keys['ShiftLeft'] || this.keys['ShiftRight'];
    const speed = run ? 4.6 : 2.9;
    const f = this.forward;
    const r = new THREE.Vector3(-f.z, 0, f.x);
    const wish = new THREE.Vector3();
    if (this.keys['KeyW'] || this.keys['ArrowUp']) wish.add(f);
    if (this.keys['KeyS'] || this.keys['ArrowDown']) wish.sub(f);
    if (this.keys['KeyA'] || this.keys['ArrowLeft']) wish.sub(r);
    if (this.keys['KeyD'] || this.keys['ArrowRight']) wish.add(r);
    if (wish.lengthSq() > 0) wish.normalize().multiplyScalar(speed);
    this.vel.lerp(wish, Math.min(1, dt * 10));
    const step = this.vel.clone().multiplyScalar(dt);
    // 分轴碰撞
    this.pos.x += step.x;
    this._resolve(colliders, 'x');
    this.pos.z += step.z;
    this._resolve(colliders, 'z');
    // 脚步
    const moved = Math.hypot(step.x, step.z);
    this.stepDist += moved;
    const strideLen = run ? 2.2 : 1.7;
    if (this.stepDist > strideLen && moved > 0.001) {
      this.stepDist = 0;
      this.onStep?.(regionAt(this.pos), run);
    }
    if (moved > 0.005) this.bobT += dt * (run ? 11 : 7.5);
    this._applyCamera(dt, false);
  }

  _resolve(colliders, axis) {
    for (const c of colliders) {
      if (c.disabled) continue;
      const nx = Math.max(c.minX, Math.min(this.pos.x, c.maxX));
      const nz = Math.max(c.minZ, Math.min(this.pos.z, c.maxZ));
      const dx = this.pos.x - nx, dz = this.pos.z - nz;
      const d2 = dx * dx + dz * dz;
      if (d2 < this.radius * this.radius) {
        const d = Math.sqrt(Math.max(d2, 1e-6));
        const push = (this.radius - d) / d;
        if (axis === 'x') this.pos.x += dx * push;
        else this.pos.z += dz * push;
        if (d2 < 1e-6) {
          // 完全嵌入：沿轴向外推
          if (axis === 'x') this.pos.x = this.pos.x < (c.minX + c.maxX) / 2 ? c.minX - this.radius : c.maxX + this.radius;
          else this.pos.z = this.pos.z < (c.minZ + c.maxZ) / 2 ? c.minZ - this.radius : c.maxZ + this.radius;
        }
      }
    }
  }

  _applyCamera(dt, still) {
    const bobY = still ? 0 : Math.sin(this.bobT) * 0.035;
    const bobX = still ? 0 : Math.cos(this.bobT * 0.5) * 0.02;
    // 冲击衰减（弹簧回弹）
    this.kickV *= Math.max(0, 1 - dt * 7);
    this.kickRoll *= Math.max(0, 1 - dt * 5);
    this.camera.position.set(
      this.pos.x + bobX * Math.cos(this.yaw),
      this.pos.y + this.eyeHeight + bobY,
      this.pos.z + bobX * Math.sin(this.yaw)
    );
    this.camera.rotation.order = 'YXZ';
    this.camera.rotation.y = this.yaw;
    this.camera.rotation.x = this.pitch + this.kickV;
    this.camera.rotation.z = this.kickRoll;
  }

  // 手部位置（持绳端点）
  handPos() {
    const f = this.lookDir;
    return new THREE.Vector3(
      this.pos.x + f.x * 0.5,
      this.pos.y + this.eyeHeight - 0.35 + f.y * 0.3,
      this.pos.z + f.z * 0.5
    );
  }
}
