module.exports = exports = {
    sendMessageToNode: function(success, error, args) {
        console.log('Client::sendMessageToNode', args);
        Electron.ipcRenderer.send('sendMessageToNode', args);
    },
    startEngine: function(success, error, args) {
        console.log('Client::startEngine', args);
        Electron.ipcRenderer.send('startEngine', args);
        Electron.ipcRenderer.once('startEngineResponse', (event, ...args) => {
            console.log('Client::startEngine::Result', ...args);
            success(args);
        });
    },
    startEngineWithScript: function(success, error, args) {
        console.log('Client::startEngineWithScript', arguments);
        Electron.ipcRenderer.send('startEngineWithScript', args);
        Electron.ipcRenderer.once('startEngineWithScriptResponse', (event, ...args) => {
            console.log('Client::startEngineWithScript::Result', ...args);
            success(args);
        });
    },
    setAllChannelsListener: function(success, error, args) {
        console.log('Client::setAllChannelsListener', arguments);
        Electron.ipcRenderer.send('setAllChannelsListener', args);
        Electron.ipcRenderer.once('setAllChannelsListenerResponse', (event, ...args) => {
            console.log('Client::setAllChannelsListener::Result', ...args);
            success(args);
        });
    }
}
cordova.commandProxy.add('NodeJS', exports);