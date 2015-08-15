var http = require('http');
var util = require('util');
var url = require('url');
var fs= require('fs');
var server = http.createServer();
server.on('request', function (req, res) {
    var urlObj = url.parse(req.url,true);
    var pathName = urlObj.pathname;
    if(pathName =='/'){
        fs.createReadStream('./index.html').pipe(res);
    }else if(pathName =='/post'){
        var result =[];
        req.on('data', function (data) {
            result.push(data);
        })
        req.on('end', function () {
            res.end(Buffer.concat(result).toString());
        })
    }else{
        res.end('404')
    }
})
server.listen(8000);

//用nodejs实现的一个静态文件服务器
//1.有索引目录页，可以列出所有的文件和文件夹；
//2.点击文件夹，进入 下一级目录 ；
//3.点击文件可以解释执行该文件或下载该文件；比如是图片就显示图片，是html就显示html 4.防止用户访问系统文件。