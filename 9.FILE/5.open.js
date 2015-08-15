var fs = require('fs');
fs.open('./msg.txt','r', function (err, fd) {
    var buf = new Buffer(6);
    var buf1 = new Buffer(9);
    fs.read(fd,buf,0,6,3,function(err,byteRead,buffer){
        console.log(byteRead);
        console.log(buffer.toString());
        fs.read(fd,buf1,0,9,3,function(err,byteRead,buffer){
            console.log(byteRead);
            console.log(buffer.toString());
        })
    })
})
