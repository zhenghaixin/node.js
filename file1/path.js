var fs = require('fs');
//出来路径
var path = require('path');
//合并连接路径
console.log(path.join('./book','mysql.java'));
//seperator分隔符
console.log(path.sep);
console.log(__filename);//获取当前模块的绝对路径
console.log(__dirname);//获取当前模块的绝对目录
console.log(path.basename('node\5.file\7.path.js'));//获取路径里的文件名
//获取一个路径里的文件扩展名
console.log(path.extname('7.path.js'));