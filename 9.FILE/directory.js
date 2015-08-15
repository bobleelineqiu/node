var fs = require('fs');
var path = require('path');
function copy(src,dest){
    var buff = new Buffer(1024*8);
    var srcFd = fs.openSync(src,'r');
    var destFd = fs.openSync(dest,'w'),
        readSoFar = 0;
    do{
        var readedBytes = fs.readSync(srcFd,buff,0,1024*8,null,readSoFar);
        fs.writeSync(destFd,buff,0,readedBytes,null);
        readedBytes+=readedBytes;
    }while(readedBytes == 1024*8)
    fs.close(srcFd);
    fs.close(destFd);
}
//copy('msg.txt','msg2.txt');

/*fs.mkdir('./A/a.txt', function (err) {
    if(err){
        console.log(err);
    }else{
        console.log('success');
    }
})*/

/*fs.readdir('./A', function (err,data) {
    console.log(data)
})

fs.stat('./A', function (err,data) {
    console.log(data)
})*/


//删除一个目录
//fs.rmdir('A/a.txt');
//级联创建目录
var makeP = function (str) {
    var arr = str.split(path.sep);
    for(var i=0;i<arr.length;i++){
        var currPath = process.cwd()+path.sep+arr.slice(0,i+1);
        var exists = fs.exists(currPath);
        if(exists){
            var stat = fs.statSync(currPath);
            if(stat.isFile()){
                throw Error('is file');
            }
        }else{
            fs.mkdirSync(currPath);
        }
        console.log(currPath);
    }

}
makeP('a/b/c/d');
//级联删除目录
var rmdirR = function(path,cb){
    var stat = fs.stat(path);
    if(stat.isDirectory()){
        var files = path.join(path)
    }
}