//导入核心模块http
var http = require('http');
var fs = require('fs');
var server = http.createServer(function (request, response) {
    //设置指定文件的路径，设置编码，得到data就是字符串类型的
    var url = request.url;
    if (url == '/index.html') {
        response.setHeader('Content-Type', 'text/html', 'charset=utf8');
        fs.readFile('./index.html', 'utf8', function (err, data) {
            response.write(data);
            response.end();
        })
    } else if (url == '/index.css') {

        response.setHeader('Content-Type', 'text/css', 'charset=utf8');
        fs.readFile('./index.css', 'utf8', function (err, data) {
            response.write(data);
            response.end();

        })
    }

});
server.listen(8000, 'localhost');

