import { app, BrowserWindow } from 'electron';

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 400,
    height: 422,
    autoHideMenuBar: true,
		resizable: false
  });

  /**
   * Entry point for application.
   */
  win.loadURL(`file://${__dirname}/index.html`);

  /**
    * Developer Tools Extensions
   */
  BrowserWindow.addDevToolsExtension(`${__dirname}/../devtools/react`);

  win.on('closed', () => {
    window = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (window === null) {
    createWindow();
  }
});
