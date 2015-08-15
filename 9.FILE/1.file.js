var fs = require('fs');
var content = fs.readFileSync('./msg.txt','utf8');
console.log(content);

fs.readFile('./msg.txt',function(err,data){
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
})