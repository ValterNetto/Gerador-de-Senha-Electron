const { app, BrowserWindow } = require('electron');
const path = require('path');

let mainWindow;

app.on('ready', () => {

    mainWindow = new BrowserWindow({
        width: 500,
        height: 500,
        autoHideMenuBar: true,
        //resizable: false
    });
    const indexPath = path.join(__dirname, 'index.html');

    mainWindow.loadFile(indexPath);
})