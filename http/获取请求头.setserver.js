var http = require('http');

/*/!*1.能在特定Ip特定端口监听客户端的请求
  2.当请求到来时执行监听函数，并响应
创建一个服务器
指定监听函数 每当客户端请求到来时执行函数
req代表客户端的请求
res 代表客户端发的响向客户端发出响应  * / */

var server = http.createServer(function(req,res){
   console.log(req.method);//请求的方法
    console.log(req.url);//请求的URL
    console.log(req.headers);//请求头
    res.setHeader('Content-Type','text/html;charset=utf8');//设置响应头
    res.statusCode = 404//调响应码
res.write('hello');//响应体再第一次调用write的时候会发送响应头和第一个write的内容
    res.end('over');

});
//在8080监听，主机名是localhost
server.listen(1111,'localhost');
