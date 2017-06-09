//异步读取文件
var fs = require('fs');
fs.readFile('./index.txt',function(err,data){
    console.log(data.toString());
    console.log(err);
});
console.log('are you ok?');
//同步
var data =  fs.readFileSync('./index.txt');
console.log(data);
console.log('women')

