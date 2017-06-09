//导入核心模块http
var http = require('http');
var fs = require('fs');
var server = http.createServer(function (reqest, response) {
    //设置指定文件的路径，设置编码，得到data就是字符串类型的

    var url = reqest.url;
    if (url == '/') {
        console.log(url);
        response.setHeader('Content-Type', 'text/html', 'charset=utf8');
        fs.readFile('./index.html', 'utf8', function (err, data) {
            response.write(data);
            response.end();
        })
    } else if (url == '/index.css') {
        console.log(url);
        response.setHeader('Content-Type', 'text/css', 'charset=utf8');
        fs.readFile('./index.css', 'utf8', function (err, data) {
            response.write(data);
            response.end();

        });
    }

});
//在8080端口进行监听，主机名是localhost
server.listen(8090, 'localhost');
//端口号取值范围在0-65535之间

