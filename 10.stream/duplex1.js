var fs = require('fs');
var util = require('util');
var stream = require('stream');

function ChangeDuplex(){
    stream.Duplex.call(this);
}
util.inherits(Duplex,stream.Duplex);

ChangeDuplex.prototype._read = function () {

}

ChangeDuplex.prototype._write = function () {

}
var change = new ChangeDuplex();
fs.cr