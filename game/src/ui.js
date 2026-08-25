// UI —— HTML 覆盖层：字幕 / 目标 / 提示 / 议程红帖 / 淡入淡出 / 结局 / 准星 / 剪缆环
const RING_LEN = 188.5; // 2πr, r=30

export class UI {
  constructor() {
    this.el = {};
    for (const id of ['subtitle', 'objective', 'prompt', 'card', 'fade', 'end', 'endTitle', 'endBody', 'endBtn',
      'timerbar', 'timerfill', 'callHint', 'reticleWrap', 'cutring', 'endCard']) {
      this.el[id] = document.getElementById(id);
    }
    this.ringFg = this.el.cutring.querySelector('.fg');
    this._subT = null;
    this._cardT = null;
    this._retState = '';
  }
  subtitle(text, dur = 4) {
    const e = this.el.subtitle;
    e.textContent = text;
    e.style.opacity = 1;
    clearTimeout(this._subT);
    this._subT = setTimeout(() => { e.style.opacity = 0; }, dur * 1000);
  }
  objective(text) {
    const e = this.el.objective;
    e.innerHTML = '<span class="obj-mark">◆</span> ' + text;
    e.style.opacity = 1;
    e.classList.remove('obj-flash');
    void e.offsetWidth;
    e.classList.add('obj-flash');
  }
  // prompt('文案', 'E')：带按键帽；prompt('') 隐藏
  prompt(text, key = null) {
    const e = this.el.prompt;
    if (!text) { e.style.opacity = 0; return; }
    e.innerHTML = (key ? `<span class="key">${key}</span>` : '') + `<span>${text}</span>`;
    e.style.opacity = 1;
  }
  // 交互准星：'' | 'grab'（可摘·菱形） | 'hang'（可挂·圆环） | 'park'（寄挂·红脉冲）
  reticle(state) {
    if (this._retState === state) return;
    this._retState = state;
    this.el.reticleWrap.className = state ? 'ret-' + state : '';
  }
  // 剪缆进度环（frac 0~1；<=0 隐藏）
  cutRing(frac) {
    if (frac <= 0) { this.el.cutring.style.opacity = 0; return; }
    this.el.cutring.style.opacity = 1;
    this.ringFg.style.strokeDashoffset = (RING_LEN * (1 - Math.min(1, frac))).toFixed(1);
  }
  card(title, sub = '', dur = 3.4) {
    const e = this.el.card;
    e.innerHTML = `<div class="card-title">${title}</div><div class="card-sub">${sub}</div>`;
    e.style.opacity = 1;
    clearTimeout(this._cardT);
    this._cardT = setTimeout(() => { e.style.opacity = 0; }, dur * 1000);
  }
  fade(opacity, dur = 0.6) {
    const e = this.el.fade;
    e.style.transition = `opacity ${dur}s ease`;
    e.style.opacity = opacity;
  }
  callHint(show) {
    this.el.callHint.style.opacity = show ? 1 : 0;
  }
  timer(show, frac = 1) {
    this.el.timerbar.style.opacity = show ? 1 : 0;
    this.el.timerfill.style.width = (frac * 100).toFixed(1) + '%';
  }
  end(title, body, btnText, onBtn, showCard = false) {
    this.el.endTitle.textContent = title;
    this.el.endBody.innerHTML = body;
    this.el.endBtn.textContent = btnText;
    this.el.endCard.style.display = showCard ? 'block' : 'none';
    this.el.end.style.display = 'flex';
    requestAnimationFrame(() => { this.el.end.style.opacity = 1; });
    this.el.endBtn.onclick = onBtn;
  }
  hideEnd() {
    this.el.end.style.opacity = 0;
    setTimeout(() => { this.el.end.style.display = 'none'; }, 600);
  }
}
