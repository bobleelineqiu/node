var net = require('net');
var util = require('util');
var socket = new net.Socket();
socket.setEncoding('utf8');

socket.connect(8080,'localhost', function () {
    console.log(socket.remoteAddress,socket.remotePort);
    socket.write('hello');
    setTimeout(function () {
        socket.end('坏蛋');
    },5000);
})
socket.on('data', function (data) {
    console.log('接收到服务器数据：'+data)
})

