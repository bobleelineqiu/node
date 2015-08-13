var fs = require('fs');
var stdin = process.stdin;
var stdout = process.stdout;
var path = require('path');
var http = require('http');
var url = require('url');
var mime = require('mime');
var server = http.createServer();
server.on('request', function (req, res) {
    var pathname = url.parse(req.url).pathname;
    var ext = pathname.match(/(\.[^.]+|)$/)[0];//取得后缀名
    /*switch (ext){
        case '.css':
        case '.js':
            fs.readFile('.'+req.url,'utf8', function (err, data) {
                if (err) throw err;
                res.writeHead(200, {
                    "Content-Type": {
                        ".css":"text/css",
                        ".js":"application/javascript"
                    }[ext]
                })
                res.write(data);
                res.end();
            });
            break;
                default:
                fs.readFile('./index.html', 'utf-8',function (err, data) {//读取内容
                    if (err) throw err;
                    res.writeHead(200, {
                        "Content-Type": "text/html"
                    });
                    res.write(data);
                    res.end();
                });
            }*/
        var flag = fs.existsSync('.'+req.url);
    //console.log(req.url);
        if (flag) {
            var content = fs.readFileSync('.' + req.url,'utf-8');
            res.setHeader('Content-Type', mime.lookup(pathname));
            res.end(content);
        } else {
            res.end('404');
        }
    fs.readdir(process.cwd(), function (err, files) {
        console.log('');
        if(!files.length){
            console.log('没有文件啊亲');
        }
        var stats = {};
        function showFiles(i){
            var fileName = files[i];
            fs.stat(path.join(process.cwd(),fileName), function (err, stat) {
                stats[i] = stat;
                if(stat.isDirectory()){
                    //$('.list-group li').eq(i).test(' \033[31m'+ fileName+'\033[39m')
                    console.log(' '+(i+1)+' \033[31m'+ fileName+'\033[39m');
                }else{
                    //$('.list-group li').eq(i).test(' \033[31m'+ fileName+'\033[39m')
                    console.log(' '+(i+1)+' \033[32m'+ fileName+'\033[39m');
                }
                i++;
                if(i == files.length){
                    readChois();
                }else{
                    showFiles(i);
                }
            })
        }
        showFiles(0);
        function readChois(){
            console.log('');
            stdout.write('请输入你的选择');
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
})
server.listen(8180);