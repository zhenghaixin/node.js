var http = require('http');
var fs = require('fs');
var mime = require('mime');
var path = require('path');
var url = require('url');
var server = http.createServer(function (req, res) {
    //把URL转变成URL对象
var urlObj = url.parse(req.url) ;
    console.log(urlObj);
    //pathname 指的是路径名，问号和端口号中间的那一部分
    //query查询字符串，TRUE，转变成对象
    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    if(urlObj.pathname =='/apple'){
        res.end(urlObj.query.num+'苹果');
    }
});
//在8080监听，主机名是localhost
server.listen(7070, 'localhost');

