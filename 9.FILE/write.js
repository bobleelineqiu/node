var fs = require('fs');

fs.open('./msg.txt','w', function (err, fd) {
    fs.write(fd,new Buffer('珠峰培训'),0,6,0,function (err, byWrite) {
        console.log('success');
        fs.write(fd,new Buffer('珠峰培训'),6,6,6,function (err, byWrite) {
            console.log('success1');

        })
    })
})
