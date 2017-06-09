var fs  = require('fs');
//处理路径
var path = require('path');
//合并连接路径
console.log(path.join('./text','3.css'));
//seperator分隔符
console.log(path.sep);
console.log(__filename)//获取当前模块的绝对路径
console.log(__dirname);//获取当前模块的绝对目录
//获取一个路径里文件的名
console.log(path.basename('7.path.js','js'));
//获取一个路径里文件的扩展名
console.log(path.extname('7.path.js'));
//以应用程序的所在目录为根起
console.log(path.resolve('texgt','1.json','..','2.js'));
