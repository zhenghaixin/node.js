var http = require('http');
var server = http.createServer(function(req,res){
    res.write(new Date().toLocaleString());
    res.end(new Buffer('谢谢'))
});
server.listen(8080,'localhost');

