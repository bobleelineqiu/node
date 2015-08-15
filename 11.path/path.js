var path = require('path');
var fs = require('fs');
console.log(path.normalize('.//a/////b//d//..//c//e//..//'));//  a/b/c
console.log(path.join(__dirname,'a','b','msg'));
console.log(fs.readFileSync(path.join(__dirname,'a','b','msg'),'utf8'));

/**
 *resolve
 * 以应用程序根目录为起点，根据参数值解析一个绝对路径
 * 1）以应用程序根目录为起点
 * 2）.当前目录  ..上级目录
 * 3）普通字符串开头的标示当前目录的子目录
 * 4）/开头的标示一个绝对路径，表示根目录
 * 5）如果没有下一个参数字符串，返回当前路径
 **/
console.log(path.resolve());
console.log(path.resolve('/a','..','a','b','msg'));//  a/b/msg  如果/a换成\a则变成绝对路径，难道是mac的问题？

console.log(path.relative(__dirname,'../stream')) // ../stream