var fs = require('fs');
var fun1 = function (curr,prev) {
    console.log('changed');
    if(Date.parse(prev.ctime)==0  && Date.parse(curr.ctime)!=0){
        console.log('文件刚创建');
    }else if(Date.parse(prev.ctime)!=0  &&Date.parse(curr.ctime)==0){
        console.log('文件刚删除');
    }else if(Date.parse(prev.ctime)!=0  &&Date.parse(curr.ctime)!=0){
        console.log('修改');
    }
}
fs.watchFile('change.txt',fun1);