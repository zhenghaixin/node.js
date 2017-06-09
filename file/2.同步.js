var fs = require('fs');
var data = fs.readFileSync('./index.txt','utf-8');
console.log(data);
console.log('b');
console.log('c');
/*1.每一个同步方法异步方法都是成对出现的
  2.同步方法会阻塞主线程的执行，在数据没有返回之前不能执行后续代码
  3它不需要回调函数，通过函数返回值接收结果
  4
* */