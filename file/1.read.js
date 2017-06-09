var fs = require('fs');
function afterRead(err,data){
    if(err){
        console.error(err);
    }else{
        console.log(data);
    }

}
/*1.异步方法需要把回调函数传入
  2.回调函数会在同步方法执行完毕后才执行
  3.异步方法不会阻塞主线程 ，不会影响后续代码执行
* */
fs.readFile('./index.txt','utf-8',afterRead);
console.log('b');
console.log('c');