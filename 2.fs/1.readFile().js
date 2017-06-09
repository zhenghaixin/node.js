//readFile(filename,[options],callback);

/**
 * filename, 必选参数，文件名
 * [options],可选参数，可指定flag（文件操作选项，如r+ 读写；w+ 读写，文件不存在则创建）及encoding属性
 * callback 读取文件后的回调函数，参数默认第一个err,第二个data 数据
 */
    //读取文件
var fs = require('fs');
var path = require('path');
fs.readFile('./index.txt',{flag:'r',encoding:'utf8'},function(err,data){
    if(err){
        console.log(err);
    }
    console.log(data);
});
