var http = require('http');
var fs = require('fs');
var mime = require('mime');
var path = require('path');
//node 亲生的模块，帮我们解析URL的
var url = require('url');
var users =[];
var server = http.createServer(function (req, res) {
    //把URL转变成URL对象
    var urlObj = url.parse(req.url,true);
    console.log(urlObj.pathname);
    //pathname 指的是路径名，问号和端口号中间的那一部分
    //query查询字符串，TRUE，转变成对象

    //pathname 指的事路径名，问号和端口号中间的那部分
    if(urlObj.pathname =='/'){
        res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
        fs.readFile('./reg.html',function(err,data){
            res.end(data);
        });
    }else if(urlObj.pathname =='/reg'){
        //每当服务器收到客户端发过来的一段数据时候就会触发data事件
        var str = '';
        req.on('data',function(data){
            str+=data.toString();
        });
        //当所有的数据完毕后会触发end事件，这时请求体的数据接收完整
        req.on('end',function(){
            console.log(str);
            //转成对象追加到用户列表里
            users.push(JSON.parse(str));
            console.log(users);
            //最后返回用户列表
            res.end(str);//end()方法必须用argument must be a string or Buffer，其他的都不行
        })

    }
});
//在8080监听，主机名是localhost
server.listen(4040, 'localhost');



