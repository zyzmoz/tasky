const electron = require('electron');
const { BrowserWindow } = electron;

class MainWindow extends BrowserWindow {
  constructor(){
    super({
      height: 560,
      width: 365,
      frame: false,
      resizable: false,
      show: false,
    });

    if (process.env.NODE_ENV === 'development') {
      this.loadURL('http://localhost:4200');
    } else {
      this.loadURL(`file://${__dirname}/dist/index.html`);
    }

    this.on('blur', this.onBlur.bind(this));
  }

  onBlur(){
    console.log('blur');
    this.hide();
  }
}

module.exports = MainWindow;
