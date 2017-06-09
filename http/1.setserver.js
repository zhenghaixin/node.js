var http = require('http');

/*/!*1.能在特定Ip特定端口监听客户端的请求
  2.当请求到来时执行监听函数，并响应
创建一个服务器
指定监听函数 每当客户端请求到来时执行函数
req代表客户端的请求
res 代表客户端发的响向客户端发出响应  * / */

var server = http.createServer(function(req,res){
    var now = new Date();
    res.write(now.toLocaleString());//向客户端发出响应
    res.end()//说完了，挂掉电话不能在write了

});
//在8080监听，主机名是localhost
server.listen(9999,'localhost');
