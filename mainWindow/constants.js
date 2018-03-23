const electron = require('electron');

const {nativeImage} = electron;

const appIcon = nativeImage.createFromPath('static/logo-small.png');

const browserProperties = {
    width: 960,
    height: 640,
    icon: appIcon,
    backgroundColor: '#222'
}

module.exports = {
    appIcon,
    browserProperties
}
