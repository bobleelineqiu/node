/*
* 8个bit称为一个字节byte
* 最小值 全是0 那么对应十进制 0
* 最大值 全是1 那么对应十进制 255
 */
var fs = require('fs');
fs.readFile('./msg.txt',function(err,data){
    if(err){
        console.log(err);
    }else{
        console.log(data.toString())
    }
})
