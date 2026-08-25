// Electron 桌面壳：加载同目录 index.html（游戏完全自包含，无网络依赖）
const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');

// 防止渲染循环被后台节流（rAF 降到 1fps）
app.commandLine.appendSwitch('disable-renderer-backgrounding');
app.commandLine.appendSwitch('disable-background-timer-throttling');
app.commandLine.appendSwitch('disable-backgrounding-occluded-windows');

function create() {
  Menu.setApplicationMenu(null);
  const win = new BrowserWindow({
    width: 1600,
    height: 900,
    fullscreen: true,
    autoHideMenuBar: true,
    backgroundColor: '#050403',
    title: '返潮 FANCHAO ·《喜宴》',
    webPreferences: { contextIsolation: true, backgroundThrottling: false },
  });
  win.loadFile(path.join(__dirname, 'index.html'));
  win.show();
  win.focus();
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
