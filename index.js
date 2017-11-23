const path = require('path');
const electron = require('electron');
const TimerTray = require('./app/timer_tray');

const { app, BrowserWindow } = electron;

let mainWindow;
let tray;

app.on('ready', () => {  
  mainWindow = new BrowserWindow({
    height: 540,
    width: 365,
    frame: false,
    resizable: false,
    show: false
  });

  if (process.env.NODE_ENV === 'development') {
    mainWindow.loadURL('http://localhost:4200');
  } else {
    mainWindow.loadURL(`file://${__dirname}/dist/index.html`);
  }

  mainWindow.on('blur', () =>{
    mainWindow.hide();
  });

  const iconName = process.platform === 'win32' ? 'windows-icon.png' : 'iconTemplate.png';
  const iconPath = path.join(__dirname, `./src/assets/${iconName}`);

  tray = new TimerTray(iconPath, mainWindow);

});

app.on('window-all-closed', function () {
  if (process.platform != 'darwin') {
    app.quit();
  }
});
