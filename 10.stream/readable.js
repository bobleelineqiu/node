var fs = require('fs');
var util = require('util');
var stream =require('stream');

/*
function zfReadStream(){
    stream.Readable.call(this);
}

util.inherits(zfReadStream,stream.Readable);

zfReadStream.prototype._read = function () {
    var content = fs.readFileSync('./2.txt');
    this.push(content);
    this.push(null);
}

var ZFReadStream = new zfReadStream();
ZFReadStream.on('data',function(data){
    console.log(data.toString());
}).on('end',function(){
    console.log('end');
})*/

var rs = fs.createReadStream('msg.txt');
rs.on('readable',function(){
    console.log('------------------readable------------------');
    var data;
    while(null != rs.read()){

    }
})

rs.on('end', function () {
    console.log('end');
})
