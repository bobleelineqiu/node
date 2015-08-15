var fs = require('fs');
var EventEmiter = require('events').EventEmitter;
var util = require('util');

var RETURN = 0x0d; //ascii \r 回车
var NEWLINE = 0x0a;//ascii \n 换行
function LineReader(path){
    //EventEmiter.call(this);
    this._rs = fs.createReadStream(path,'r');
}
util.inherits(LineReader,EventEmiter);
LineReader.prototype.on('newListener',function(name,func){
    if(name == 'newLine'){
        var self =this;
        var line = [];
        this._rs.on('readable',function(){
            var ch;
            while(null != (ch=this.read(1))){
                if(ch[0] == RETURN){
                    this.read(1);
                    self.emit('newLine',Buffer.concat(line).toString())
                    line =[];
                }else{
                    line.push(ch);
                }
            }
        });
      this._rs.on('end', function () {
          self.emit('newLine',Buffer.concat(line).toString());
          self.emit('end');
      })
    }
})

var reader = new LineReader('./1.txt');
reader.on('newLine',function(data){
    console.log(data);
})
reader.on('end',function(){
    console.log('end');
})