//fs file system
//加载fs核心模块，文件模块，第三方模块别人的模块
var fs =require('fs');
fs.readFile('./ index.txt','utf8',function(err,data){

});
//文件模块，就是我们自己写的模块
require('./math.js');
 var mine =require('mime');
console.log(mine);
