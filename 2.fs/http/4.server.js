var http = require('http') ;
/*
var server = http.createServer(function(req,res){
    res.writeHeader(200,{
        'Content-Type' : 'text/plain;charset=utf-8'  // 添加charset=utf-8
    }) ;
    res.end("Hello,大熊！") ;
}) ;
server.listen(8888) ;
console.log("http server running on port 8888 ...") ;
*/
http.createServer(function (request, response) {
    var body = [];
    console.log(request.method) ;
    console.log(request.headers) ;
    request.on('data', function (chunk) {
        body.push(chunk);
    }) ;
    request.on('end', function () {
        body = Buffer.concat(body) ;
        console.log(body.toString()) ;
    });
}).listen(8888) ;
