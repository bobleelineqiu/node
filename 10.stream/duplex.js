var fs = require('fs');
var util = require('util');
var stream = require('stream');

function ZfDuplex(){
    stream.Duplex.call(this);
}
util.inherits(ZfDuplex,stream.Duplex);
ZfDuplex.prototype._write = function (chunk,encoding,cb) {
    console.log(chunk.toString());
    cb();
}

ZfDuplex.prototype._read = function(){
    this.push('hello');
    this.push(null);
}

var zfDuplex = new ZfDuplex();
fs.createReadStream('./2.txt').pipe(zfDuplex).pipe(fs.createWriteStream('./23.txt'));
/*zfDuplex.on('data', function (data) {
    console.log(data);
}).on('end',function(){
    console.log('end');
})*/
zfDuplex.write('qiujichao', function () {
    console.log('success');
})