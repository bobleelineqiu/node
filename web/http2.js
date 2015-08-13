var http = require("http");
var fs = require("fs");
var mime = require("mime");
var path = require("path");
var stdin = process.stdin;
var stdout = process.stdout;
var http = require('http');
var url = require('url');
var server = http.createServer();
var cache = {};
//返回404页面
function send404(res) {
    res.writeHead(404, {
        "Content - Type": "text / plain"
    });
    res.write("Error 404: 页面丢了");
    res.end();
}
//提供文件数据服务,这个函数先写出正确的HTTP头，然后发送文件的内容。
function sendFile(res, filePath, fileContents) {
    res.writeHead(200, {
        "Content-Type": mime.lookup(path.basename(filePath))
    });
    res.write(fileContents);
    res.end();
}

function serveStatic(res, cache, absPath) {
    //检查文件是否缓存在内存
    if (cache[absPath]) {
        sendFile(res, absPath, cache[absPath]);

    } else {
        //检查文件是否存在
        fs.exists(absPath, function(exists) {
            //如果存在，从硬盘读取
            if (exists) {
                fs.readFile(absPath, function(err, data) {
                    if (err) {
                        send404(res);
                    } else {
                        cache[absPath] = data;
                        sendFile(res, absPath, data);
                    }
                });
            } else {
                send404(res);
            }
        });
    }
}

//判断是否为文件夹
fs.readdir(process.cwd(), function (err, files) {
    console.log('');
    if(!files.length){
        console.log('没有文件啊亲');
    }
    var stats = {},dirFile={};
    function showFiles(i){
        var fileName = files[i];
        fs.stat(path.join(process.cwd(),fileName), function (err, stat) {
            stats[i] = stat;
            var json={};
            if(stat.isDirectory()){
                json[i] = '\033[31m'+ fileName+'\033[39m';
                console.log(json);
                //console.log(' '+(i+1)+'\033[32m'+ fileName+'\033[39m');
            }else{
                json[i] = '\033[31m'+ fileName+'\033[39m';
                console.log(json);
                //console.log(' '+(i+1)+'\033[32m'+ fileName+'\033[39m');
            }
            i++;
            if(i == files.length){
                json= JSON.stringify(json);
                readChois(json);
            }else{
                showFiles(i);
            }
        })
    }
    showFiles(0);
    function readChois(json){
        console.log('');
        stdout.write(json);
        stdin.resume();//可以接收用户输入
        stdin.setEncoding('utf8');
        stdin.on('data',onData);
    }
    function onData(data){
        var index = Number(data);
        var stat = stats[index];
        if(!stat){
            console.log('请输入正确的选项');
        }else{
            if(stat.isDirectory()){
                fs.readdir(path.join(process.cwd(),files[index]),function(err,subFiles){
                    console.log('');
                    console.log('('+subFiles.length+')');
                    subFiles.forEach(function(subfile){
                        console.log(' -'+subfile);
                    });
                    console.log('');
                    process.exit(0);
                });
            } else{
                fs.readFile(path.join(process.cwd(),files[index]),'utf8',function(err,data){
                    console.log('');
                    console.log(data);
                    process.exit(0);
                })
            }
        }
    }
})
//创建Http服务器逻辑
var server = http.createServer(function(req, res) {
    var filePath = null;
    if (req.url == "/") {
        filePath = "index.html";
    } else {
        filePath = req.url;
    }

    var absPath = "./" + filePath;
    serveStatic(res, cache, absPath);
}).listen(3000,function() {
    console.log("服务器成功启动！！");
});

