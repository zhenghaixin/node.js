/*
 把src 文件里的内容写入的target文件里
 2.写入的时候要先清空写入
* */
var fs = require('fs');
function copy(src,target){
    fs.readFile(src, function(err,data){
        fs.writeFile(target,data,function(err){
            console.log('copy sucsee from '+src+'to' +target)
        });
    });
}

copy('./logo.png','./logo2.png');