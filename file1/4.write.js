var fs = require('fs');
//以同步的方式向硬盘的文件里写数据
/*1.回调里面的err,data是由fs.readFile决定的。
  2.
* */
//fs.writeFileSync('./write.txt','珠峰培训');
/*异步操作
* flag：是表示要对此文件做何种类型的操作
* w:清空并写入
* a 在原有的基础上追加
* */
/*
fs.writeFile('./write.txt','你好',{flag:'a'},function(err,data){
  console.log(arguments);
});*/
fs.appendFile('./write.txt','hehlo');