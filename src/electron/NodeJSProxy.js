module.exports = exports = {
    sendMessageToNode: function() {
        console.log('sendMesageToNode', arguments);
    },
    startEngine: () => {
        console.log('startEngine', arguments);
    },
    startEngineWithScript: () => {
        console.log('startEngineWithScript', arguments);
    }
}
cordova.commandProxy.add('NodeJS', exports);