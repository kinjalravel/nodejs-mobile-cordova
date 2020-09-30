module.exports = exports = {
    sendMessageToNode: function(success, error, args) {
        Electron.ipcRenderer.send('sendMessageToNode', args);
    },
    startEngine: function(success, error, args) {
        Electron.ipcRenderer.once('startEngineResponse', (event, ...args) => {
            success(args);
        });
        Electron.ipcRenderer.send('startEngine', args);
    },
    startEngineWithScript: function(success, error, args) {
        Electron.ipcRenderer.once('startEngineWithScriptResponse', (event, ...args) => {
            success(args);
        });
        Electron.ipcRenderer.send('startEngineWithScript', args);
    },
    setAllChannelsListener: function(success, error, args) {}
}
cordova.commandProxy.add('NodeJS', exports);