var fs = require('fs');
fs.writeFile('./hello.txt','你好啊地对方',{flag:''},function(err,data){
    console.log(data);
});
fs.readFile('./hello.txt','utf-8',function(err,data){
    console.log(data);
});
fs.appendFile('./zhx.txt','node.js');