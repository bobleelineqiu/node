var fs = require('fs');
var util = require('util');
var stream = require('stream');

function ZfTransForm(){
    stream.Transform.call(this);
}
util.inherits(ZfTransForm,stream.Transform);

ZfTransForm.prototype._transform = function(chunk,encoding,cb){
    for(var i =0;i<chunk.length;i++){
        chunk[i] = 255 - chunk[i];
    }
    this.push(chunk);
    this.push(null);
};

var c = new ZfTransForm();
fs.createReadStream('./23.txt').pipe(c).pipe(fs.createWriteStream('./24.txt'));
//fs.createReadStream(path,options)