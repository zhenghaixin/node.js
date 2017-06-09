var http = require('http');

/*/!*1.能在特定Ip特定端口监听客户端的请求
 2.当请求到来时执行监听函数，并响应
 创建一个服务器
 指定监听函数 每当客户端请求到来时执行函数
 req代表客户端的请求
 res 代表客户端发的响向客户端发出响应  * / */
var fs = require('fs');
var server = http.createServer(function (req, res) {
    var url = req.url;
    console.log(url);
    if (url == '/index.html') {
        res.setHeader('Content-Type', 'text/html;charset=utf-8');
        //指定文件路径，设置文件编码，得到data就是字符串类型的
        fs.readFile('./index.html', 'utf8', function (err, data) {
            res.write(data);
            res.end();
        })

    } else if (url == '/style.css') {
        res.setHeader('Content-Type', 'text/css;charset=utf-8');
        //指定文件路径，设置文件编码，得到data就是字符串类型的
        fs.readFile('./style.css', 'utf8', function (err, data) {
            res.write(data);
            res.end();
        })

    }else if(url =='/index.js'){
        res.setHeader('Content-Type', 'text/javascript;charset=utf-8');
        //指定文件路径，设置文件编码，得到data就是字符串类型的
        fs.readFile('./index.js', 'utf8', function (err, data) {
            res.write(data);
            res.end();
        });
    }

});
//在8080监听，主机名是localhost
server.listen(9090, 'localhost');

