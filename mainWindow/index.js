const electron = require('electron');
const path = require('path');
const url = require('url');

const constants = require('./constants');
const {topMenu} = require('./menu');

const {
    app,
    BrowserWindow,
    Menu
} = electron;

let mainWindow = null;

const createWindow = () => {
    const {browserProperties} = constants;

    mainWindow = new BrowserWindow(Object.assign({}, browserProperties));

    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, '..', 'index.html'),
        protocol: 'file:',
        slashes: true
    }));

    mainWindow.on('closed', () => {
        mainWindow = null;
    });

    Menu.setApplicationMenu(topMenu);
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow();
    }
});
