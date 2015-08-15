var http = require('http');
var util = require('util');
var url = require('url');
var server = http.createServer();
server.on('request', function (req, res) {
    var urlObject = url.parse(req.url,true);
    console.log('request');
    res.setHeader('name','zfpx');
    res.setHeader('age','25');
    res.end(JSON.stringify(urlObject.query))
})
server.on('connection', function () {
    console.log('conected');
})

server.listen(8100);