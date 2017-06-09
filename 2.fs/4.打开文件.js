// fs.open(filename, flags, [mode], callback);

/**
 * filename, 必选参数，文件名
 * flags, 操作标识，如"r",读方式打开
 * [mode],权限，如777，表示任何用户读写可执行
 * callback 打开文件后回调函数，参数默认第一个err,第二个fd为一个整数，表示打开文件返回的文件描述符，window中又称文件句柄
 */
var fs = require('fs');
fs.open('./index.txt','r','0666',function(err,fd){
console.log(fd);
});
