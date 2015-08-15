var fs = require('fs');

var rs = fs.createReadStream('msg.txt');
rs.on('data', function (data) {
    console.log('data');
})
rs.on('open', function () {
    console.log('opened');
})
rs.on('end',function(data){
    console.log('end:');
})
rs.on('close', function (data) {
    console.log('close:');
})
