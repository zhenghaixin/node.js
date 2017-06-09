var http = require('http');
var server = http.createServer(function(req,res){
    var now =  new Date().toLocaleString();
    res.setHeader('Content-Type','text/html','charset=utf-8')
    res.end(new Buffer(now))
});
server.listen(8090,'localhost');

