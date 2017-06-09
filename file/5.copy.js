/*
把src里的文件内容，写入target文件里
2.写入时清空再写入
* */
'use strict';
var fs = require('fs');
function copy(src,target){
    fs.readFile(src,function(err,data){
        fs.writeFile(target,data,function(err){
            console.log('copy success from'+src+'to'+target)
        });
    });
}
copy('./mr.jpg','./mr2.jpg')