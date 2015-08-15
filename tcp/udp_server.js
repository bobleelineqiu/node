var dgram = require('dgram');
var server = dgram.createSocket('udp4');

server.on('message', function (msg, remoteInfo) {
    console.log(msg+'');
    console.log(remoteInfo);
    server.send(new Buffer('珠峰培训'),3,6,remoteInfo.port,remoteInfo.address);
})
server.bind(41234,'localhost');
server.on('listening', function () {
    var address = server.address();
    console.log('服务器开始监听，地址为：',address);
});