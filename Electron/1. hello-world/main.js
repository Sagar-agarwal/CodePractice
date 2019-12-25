const electron = require('electron');
const {
  app,
  BrowserWindow,
  Tray,
  Menu
} = electron;

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win, tray;

let trayMenu = Menu.buildFromTemplate([
  {label: 'item 1'},
  {role: 'quit'}
]);

let contextMenu = Menu.buildFromTemplate([
  {label: 'item 1'},
  {role: 'editMenu'}
]);

function createTray() {
  tray = new Tray('iceTemplate@2x.png');

  tray.setToolTip('Hello world');
  tray.setContextMenu(trayMenu);

  tray.on('click', e => {
    win.isVisible() ? win.hide() : win.show();
  });


};

function createWindow() {

  // Create Tray
  createTray();

  // Create the browser window.
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // and load the index.html of the app.
  win.loadFile('index.html')

  // Open the DevTools.
  //win.webContents.openDevTools()

  // Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null
  });

  win.webContents.on('context-menu', e => {
    contextMenu.popup();
  });

  electron.powerMonitor.on('resume', e => {
    if (!win) {
      createWindow();
    }
  });

  electron.powerMonitor.on('suspend', e => {
    console.log('gone to sleepMode');
  });

}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
});

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow()
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.