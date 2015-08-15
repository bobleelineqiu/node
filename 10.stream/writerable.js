var fs = require('fs');
var Writable = require('stream').Writable;
var util = require('util');
util.inherits(consoleWrite,Writable);


function consoleWrite(opt){
    Writable.call(this);
    //this._start = opt.start;
    //this._end = opt.end;
}

consoleWrite.prototype._write = function(data,encoding,cb){
   console.log(data.toString());
    cb();
}

var counter = new consoleWrite();
/*
counter.setEncoding('utf8');
counter.on('data', function (data) {
    console.log(data);
})
counter.on('end', function () {
    console.log('end');
})*/
counter.write('weqwe', function () {
    console.log('success');
})