var fs = require('fs');
var readbale = require('stream').Readable;
var util = require('util');
util.inherits(Counter,readbale);


function Counter(opt){
    this._start = opt.start;
    this._end = opt.end;
    readbale.call(this);
}

Counter.prototype._read = function(){
    if(this._start>this._end){
        this.push(null);
    }else{
        this.push(new Buffer(this._start+''));
    }
    this._start++
}

var counter = new Counter({start:1,end:10});
counter.setEncoding('utf8');
counter.on('data', function (data) {
    console.log(data);
})
counter.on('end', function () {
    console.log('end');
})