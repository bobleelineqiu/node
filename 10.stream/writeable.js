var fs = require('fs');
var util = require('util');
var stream = require('stream');

function writeStream(){
    stream.Writable.call(this);
}
util.inherits(writeStream,stream.Writable);
writeStream.prototype._write = function(chunk,encoding,cb){
    console.log(chunk.toString());
    cb();
}

var zWriteStream = new writeStream();
zWriteStream.write('珠峰',function(){
    console.log('写入成功');
})