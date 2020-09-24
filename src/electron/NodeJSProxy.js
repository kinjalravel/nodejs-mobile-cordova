module.exports = exports = {
    sendMessageToNode: function() {
        console.log('sendMesageToNode', arguments);
    },
    startEngine: function() {
        console.log('startEngine', arguments);
    },
    startEngineWithScript: function() {
        console.log('startEngineWithScript', arguments);
    },
    setAllChannelsListener: function() {
        console.log('setAllChannelsListener', arguments);
    }
}
cordova.commandProxy.add('NodeJS', exports);