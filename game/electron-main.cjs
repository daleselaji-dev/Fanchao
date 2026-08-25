// Electron 桌面壳：加载同目录 index.html（游戏完全自包含，无网络依赖）
const { app, BrowserWindow, Menu, globalShortcut } = require('electron');
const path = require('path');

function create() {
  Menu.setApplicationMenu(null);
  const win = new BrowserWindow({
    width: 1600,
    height: 900,
    fullscreen: true,
    autoHideMenuBar: true,
    backgroundColor: '#050403',
    title: '返潮 FANCHAO ·《喜宴》',
    webPreferences: { contextIsolation: true },
  });
  win.loadFile(path.join(__dirname, 'index.html'));
  // F11 切换全屏 / Alt+F4 退出
  win.webContents.on('before-input-event', (e, input) => {
    if (input.type === 'keyDown' && input.key === 'F11') {
      win.setFullScreen(!win.isFullScreen());
      e.preventDefault();
    }
  });
}

app.whenReady().then(create);
app.on('window-all-closed', () => app.quit());
