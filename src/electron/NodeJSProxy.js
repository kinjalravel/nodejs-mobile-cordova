module.exports = exports = {
    start: function() {
        console.log('Start Node')
    },
    startWithScript: function() {
        console.log('Start With Script');
    },
    channel: {
        on: () => {},
        post: () => {},
        setListener: () => {},
        send: () => {}
    }
}
cordova.commandProxy.add('NodeJS', exports);