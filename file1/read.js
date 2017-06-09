var fs = require('fs');
function afterRead(err,data){
    if(err){
        console.log(err)
    }else{
        console.log(data);
    }

}
//异步方法需要把回调函数传入
//回调函数会在同步方法执行完成之后再执行
//异步方法不会阻塞主线程，不会阻塞后续代码执行
fs.readFile('./index.txt','utf8',afterRead);
console.log('b');
console.log('c');
