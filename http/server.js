var  http = require('http');
var fs = require('fs');
//创建一个http服务器         请求 响应
http.createServer(function(req,res){
    var url = req.url;
    var urls = url.split('?');
    var pathname = urls[0];
    var query = urls[1];
    //var flag =
    if(flag){

    }
    if (pathname != '/index.html') {
        res.end("404");
    } else {
        var content = fs.readFileSync('.'+pathname);
        res.setHeader('Content-Type',mime.lookup(pathname))
        res.end(content);
    }
}).listen(8800);