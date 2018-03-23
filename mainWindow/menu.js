const electron = require('electron');

const {Menu, app} = electron;

const topMenuTemplate = [{
    label: 'Debug',
    submenu: [{
        label: 'Reload',
        accelerator: 'CmdOrCtrl+R',
        click(item, focusWindow) {
            console.log(item, focusWindow);
            focusWindow.reload();
        }
    }, {
        label: 'Toggle devtools',
        accelerator: process.platform === 'darwin' ? 'Alt+Command+I' : 'Ctrl+Shift+I',
        click(item, focusWindow) {
            if (focusWindow) {
                focusWindow.webContents.toggleDevTools();
            }
        }
    }]
}];

const topMenu = Menu.buildFromTemplate(topMenuTemplate);

module.exports = {
    topMenu
}
