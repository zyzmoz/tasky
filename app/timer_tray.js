const electron = require('electron');
const { Tray, app, Menu } = electron;

class TimerTray extends Tray {
  constructor(iconPath, mainWindow){
    super(iconPath);
    this.mainWindow = mainWindow;
    this.setToolTip('Timer App');
    //inherit
    this.on('click', this.onClick.bind(this));
    this.on('right-click', this.onRightClick.bind(this));    
  }

  onClick(event, bounds){
    const { x, y } = bounds;
    //window height and width
    const { height, width } = this.mainWindow.getBounds();


    if (this.mainWindow.isVisible()){
      console.log('hide');
      this.mainWindow.hide();
    } else {
      const yPosition = process.platform === 'darwin' ? y : (y - height) + 30;
      console.log(yPosition);
      this.mainWindow.setBounds({
        x: Math.round((x - (width / 2)) - 45),
        y: yPosition ,
        height,
        width
      });
      console.log('show');
      this.mainWindow.show();
    }
  }

  onRightClick(){
    const menuConfig = Menu.buildFromTemplate([
      {
        label: 'Quit',
        click: () => app.quit()
      }
    ])

    this.popUpContextMenu(menuConfig);
  }


}
module.exports = TimerTray;
