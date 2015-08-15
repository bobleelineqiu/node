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
    var self = this;
    var buf =new Buffer();
    buf.concat([targetBuffer.slice(sourceStart,sourceEnd)],[self.slice(0,targetStart)]);

};
srcBuf.copy(tarBuf,3,0,3);
console.log(tarBuf);



/*
Buffer.prototype.copy=
    function(targetBuffer, targetStart, sourceStart, sourceEnd){
        var _this=this;
        for(var i=sourceStart;i<sourceEnd;i++){
            targetBuffer[targetStart]=_this[i];
            targetStart++;
        }
    }*/
