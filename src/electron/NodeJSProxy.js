module.exports = exports = {
    sendMessageToNode: function() {
        console.log('sendMesageToNode', arguments);
    },
    startEngine: () => {
        console.log('startEngine', arguments);
    },
    startEngineWithScript: () => {
        console.log('startEngineWithScript', arguments);
    },
    setAllChannelsListener: () => {
        console.log('setAllChannelsListener', arguments);
    }
}
cordova.commandProxy.add('NodeJS', exports);