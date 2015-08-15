var fs = require('fs');
/*fs.writeFile('./write.txt',new Buffer('qeqwewqeqw'),{flag:'w',encoding:'utf8'},function(){
    console.log('写入成功');
})*/

//fs.appendFile('./write.txt',new Buffer('氢气球'));

/**
 ** base64
 *
 **/
fs.readFile('./baidu.png','base64', function (err, data) {
    fs.writeFile('./b.png',data,'base64',function(){
        console.log('写入成功');
    })
})

var buf =new Buffer('珠');
console.log(buf);