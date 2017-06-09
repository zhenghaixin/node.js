var fs =require('fs');
/*1.每一个同步方法和异步方法都是成对出现
  2.同步方法会阻塞主线程的执行，数据没有返回不能执行后续代码
  3.它不需要传递回调函数，通过函数返回值接收结果
  4.
* */
var data=fs.readFileSync('./index.txt','utf8');
console.log(data);
console.log('b');
console.log('c');
