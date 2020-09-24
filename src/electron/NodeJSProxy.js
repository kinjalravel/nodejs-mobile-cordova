module.exports = exports = {
    sendMessageToNode: function(success, error, args) {
        console.log('sendMesageToNode', arguments);
    },
    startEngine: function(success, error, args) {
        success();
    },
    startEngineWithScript: function(success, error, args) {
        console.log('startEngineWithScript', arguments);
    },
    setAllChannelsListener: function(success, error, args) {
        console.log('setAllChannelsListener', arguments);
    }
}
cordova.commandProxy.add('NodeJS', exports);