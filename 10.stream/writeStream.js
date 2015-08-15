var fs = require('fs');

//var out = fs.createWriteStream('./test1.txt');
/*for(var i=0;i<10000;i++){
    var flag = out.write(i.toString());
    console.log(flag);
}

out.on('drain',function(){
    console.log('缓存区中数据全部输出');
})*/

/*out.on('error', function (err) {
    console.log(err);
})
out.write('123');
out.end('123');*/

var read = fs.createReadStream('./test1.txt');
var out = fs.createWriteStream('./test2.txt');

/*
read.on('data',function(data){
    var flag = out.write(data);
    if(!flag){
        read.pause();
    }
})
read.on('end',function(){
    console.log('end');
})
out.on('drain',function(){
    read.resume();
})*/

read.pipe(out);