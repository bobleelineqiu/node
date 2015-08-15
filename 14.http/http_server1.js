var http = require('http');
var server = http.createServer();
server.on('request', function (req, res) {
    res.end('hello');
})
server.on('connection', function (socket) {
    console.log('一个新的连接建立了');
    socket.on('close', function () {
        console.log('客户端close');
    })
    socket.on('end', function () {
        console.log('客户端end');
    })
})
server.on('close', function () {
    console.log('服务器关闭了');
})
server.on('error', function (err) {
    console.error(err)
})
server.setTimeout(13000,function () {
    console.log('连接已经超时');
});
server.listen(8010);