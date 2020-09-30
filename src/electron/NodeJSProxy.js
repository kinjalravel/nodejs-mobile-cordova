module.exports = exports = {
    sendMessageToNode: function(success, error, args) {
        console.log('Client::startEngine::Result', result);
        Electron.ipcRenderer.send('sendMessageToNode', args);
    },
    startEngine: function(success, error, args) {
        console.log('Client::startEngine', args);
        Electron.ipcRenderer.invoke('startEngine').then((result) => {
            console.log('startEngine::Result', result);
            success(result);
        });
    },
    startEngineWithScript: function(success, error, args) {
        console.log('Client::startEngineWithScript', arguments);
        Electron.ipcRenderer.invoke('startEngineWithScript', args).then((result) => {
            console.log('Client::startEngineWithScript::Result', result);
            success(result);
        });
    },
    setAllChannelsListener: function(success, error, args) {
        console.log('Client::setAllChannelsListener', arguments);
        Electron.ipcRenderer.invoke('setAllChannelsListener', args).then((result) => {
            console.log('Client::setAllChannelsListener::Result', result);
            success(result);
        });
    }
}
cordova.commandProxy.add('NodeJS', exports);