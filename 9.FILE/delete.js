var fs = require('fs'),
    pathName = require('path');
function remove(path){
    if(!path){
        return;
    }
    var result = fs.existsSync(path);
    if(!result){
        console.log('不存在' + path);
        return;
    }
    var st = fs.statSync(path);
    if(st.isDirectory()){
        var files = fs.readdirSync(path);
        if(files && files.length){
            for(var i=0;i<files.length;i++){
                console.log('进入'+pathName.join(path,files[i]));
                remove(pathName.join(path,files[i]));
            }
            console.log("删除文件"+path);
            fs.rmdir(path);
        }else{
            console.log("删除文件"+path);
            fs.rmdir(path);
        }
    }else{
        console.log("删除文件"+path);
        fs.unlinkSync(path);
    }
}
remove('text');