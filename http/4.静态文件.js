var http = require('http');

/*/!*1.能在特定Ip特定端口监听客户端的请求
 2.当请求到来时执行监听函数，并响应
 创建一个服务器
 指定监听函数 每当客户端请求到来时执行函数
 req代表客户端的请求
 res 代表客户端发的响向客户端发出响应  * / */
var fs = require('fs');
/*var mime = {
    '.html':'text/html',
    '.js':'text/javascript',
    '.css':'text/css'
}*/
var mime = require('mime');
var path = require('path');
var server = http.createServer(function (req, res) {
    var url = req.url;
        res.setHeader('Content-Type',mime.lookup(req.url)+';charset=utf-8');
    console.log(mime.lookup(req.url));
        //指定文件路径，设置文件编码，得到data就是字符串类型的
        fs.readFile('.'+url, 'utf8', function (err, data) {
            res.write(data);
            res.end();
        })
});
//在8080监听，主机名是localhost
server.listen(9090, 'localhost');
