var net = require('net');
var util = require('util');
var fs = require('fs');
var out = fs.createWriteStream('./tcp.txt');
out.on('finish', function () {
    console.log('finder');
})
var server = net.createServer(function (socket) {
    console.log(socket);
    console.log('conned');
    socket.setEncoding('utf8');
    socket.pipe(out);
    socket.on('data', function (chunk) {
        console.log(chunk);
        socket.write('serve:'+chunk);
    })
    socket.on('end', function () {
        console.log('end');
    })
    socket.on('error', function () {
        console.log('error');
        socket.destroy();
    })
})
server.listen(8080);