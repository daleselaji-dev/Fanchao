// UI —— HTML 覆盖层：字幕 / 目标 / 提示 / 议程红帖 / 淡入淡出 / 结局
export class UI {
  constructor() {
    this.el = {};
    for (const id of ['subtitle', 'objective', 'prompt', 'card', 'fade', 'end', 'endTitle', 'endBody', 'endBtn', 'timerbar', 'timerfill', 'callHint']) {
      this.el[id] = document.getElementById(id);
    }
    this._subT = null;
    this._cardT = null;
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
  prompt(text) {
    const e = this.el.prompt;
    if (!text) { e.style.opacity = 0; return; }
    e.innerHTML = text;
    e.style.opacity = 1;
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
  end(title, body, btnText, onBtn) {
    this.el.endTitle.textContent = title;
    this.el.endBody.innerHTML = body;
    this.el.endBtn.textContent = btnText;
    this.el.end.style.display = 'flex';
    requestAnimationFrame(() => { this.el.end.style.opacity = 1; });
    this.el.endBtn.onclick = onBtn;
  }
  hideEnd() {
    this.el.end.style.opacity = 0;
    setTimeout(() => { this.el.end.style.display = 'none'; }, 600);
  }
}
