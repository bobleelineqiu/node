var fs = require('fs');
var path = require('path');

function deepVerse(dir){
    console.log(dir);
    var stat = fs.statSync(dir);
    if(stat.isDirectory()){
        var files = fs.readdirSync(dir);
        for(var i=0;i<files.length;i++){
            deepVerse(path.join(dir,files[i]));
        }
    }
}

//deepVerse(path.resolve('./A'));

function deepVerse2(dir,back){
   fs.readdirSync(dir).forEach(function (file) {
       var pathName = path.join(dir,file);
       if(fs.statSync(dir).isDirectory()){
           back(pathName);
           deepVerse2(pathName,back);
       }
   })
}

//deepVerse2(path.resolve('./A'),function(data){
//    console.log(data)
//})


function deepVerse3(dir,cb,mynext){
    fs.readdir(dir, function(err,files) {
        (function next(i) {
            if(i<files.length){
                var pathName = path.join(dir,files[i]);
                cb(pathName);
                fs.stat(pathName,function(err,stats){
                    if(stats.isDirectory()){
                        deepVerse3(pathName,cb,function(){
                            next(i+1);
                        });
                    }else{
                        cb(pathName)
                    }
                })
            }else{
                mynext();
            }
        })(0);
    })
}

/*
deepVerse3(path.resolve('./A'),function(data){
 console.log(data);
 },function(){
 console.log('over');
 });*/
var arr=[],newArr=[];
function wide(dir){
    arr.push(dir);
    wideVerse(arr);
}
function wideVerse(arr){
    if(arr.length>0){
        for(var i=0;i<arr.length;i++){
            console.log(arr[i]);
            var stat = fs.statSync(arr[i]);
            if(stat.isDirectory()){
                var files = fs.readdirSync(arr[i]);
                for(var j=0;j<files.length;j++){
                    newArr.push(path.join(arr[i],files[j]));
                }
            }
        }
        arr = newArr;
        newArr = [];
        if(arr.length>0){
            wideVerse(arr);
        }
    }
}
wide(path.resolve('./A'));