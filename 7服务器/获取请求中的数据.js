//导入核心模块http
var http = require('http');
/*
 1.能在特定的IP特定端口监听客户端的请求
 2.当请求到来的时候能执行监听函数，并返回相应
 创建一个服务器
 指定监听函数，每当有客户端请求到来执行的函数
 request代表客户端的请求，可以从中获取请求来的信息
 response 代表向客户端发的相应，可以通过它向客户端发相应

 * */
var server =  http.createServer(function(req,res){
   console.log(req.method);//请求的方法
    console.log(req.url);//请求的URL
    console.log(req.headers);//请求头
    res.statusCode = 404//调相应码
    res.setHeader('Content-Type','text/html','charset=utf8');//设置响应头
    res.write('hello');//响应体,在第一次调用write的时候会发送响应头和第一个write的内容
    //  throw new Error('Can\'t set headers after they are sent.'响应头发出以后不能再发响应头
    setTimeout(function(){
        res.write('zhenghaixin');
        res.end('over');
    },2000);

   //说完了挂掉电话,end之后 不能在write了
});
//在8080端口进行监听，主机名是localhost
server.listen(8080,'localhost')
//端口号取值范围在0-65535之间

