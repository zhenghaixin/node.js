var http = require('http');
var fs = require('fs');
var mime = require('mime');
var path = require('path');
//node 亲生的模块，帮我们解析URL的
var url = require('url');
var server = http.createServer(function (req, res) {
    //把URL转变成URL对象
    var urlObj = url.parse(req.url,true);
    console.log(urlObj.pathname);
    //pathname 指的是路径名，问号和端口号中间的那一部分
    //query查询字符串，TRUE，转变成对象

    //pathname 指的事路径名，问号和端口号中间的那部分
    if(urlObj.pathname =='/'){
        res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
        fs.readFile('./clock.html',function(err,data){
            res.end(data);
        });
    }else if(urlObj.pathname =='/clock'){
        //res.end(new Date().toLocaleString());
        res.statusCode = 404;
        res.end();
    }
});
//在8080监听，主机名是localhost
server.listen(5050, 'localhost');



