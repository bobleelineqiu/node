var buf2 = new Buffer([1,2,3]);
//console.log(buf2)
var buf3 = new Buffer('珠峰培训');
//console.log(buf3);

var str='珠峰培训';
var buf = new Buffer(str);

var substr = str.slice(1,2);

var buf4 = new Buffer('珠峰培训');
console.log(buf4);
var buf5 = buf4.slice(0,7);
var buf6 = buf4.slice(7);
console.log(buf5);
console.log(buf6);
//StringDecoder
var StringDecoder = require('string_decoder').StringDecoder;
var decoder =new StringDecoder();
console.log(decoder.write(buf5));
console.log(decoder.write(buf6));

//Number 双精度大 Double
//writeInt8 var offser

/*
var buf7 =new Buffer(4);
buf7.writeInt8(0,0);
buf7.writeInt8(16,1);
buf7.writeInt8(32,2);
buf7.writeInt8(64,3);
console.log(buf7);
console.log(buf7.readInt8(0));
console.log(buf7.readInt8(1));
console.log(buf7.readInt8(2));
console.log(buf7.readInt8(3));

var buf =new Buffer(4);
buf.writeInt16BE(256,0);
buf.writeInt16LE(256,0);
console.log(buf)*/


//复制缓存
var srcBuf = new Buffer([4,5,6]);
var tarBuf = new Buffer(6);
tarBuf[0] =1;
tarBuf[1] =2;
tarBuf[2] =3;tarBuf[0]

srcBuf.copy(tarBuf,3,0,3);
console.log(tarBuf);

console.log(Buffer.isBuffer(srcBuf));
console.log(Buffer.byteLength("为喜欢"));
console.log(Buffer.isEncoding('utf8'));

Buffer.prototype.copy = function(targetBuffer, targetStart, sourceStart, sourceEnd) {
    var arr = [];
    var self =this;
    return arr = concat([targetBuffer.slice(sourceStart,sourceEnd)],[self.slice(0,targetStart)]);

};
srcBuf.copy(tarBuf,3,0,3);
console.log(tarBuf);