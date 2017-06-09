// fs.appendFile(filename,data,[options],callback);
var fs = require('fs');
fs.appendFile('./inde','使用fs.appendFile追加文件内容',function(){
    console.log('追加内容完成');
});
