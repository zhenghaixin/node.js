var http = require('http');
var fs = require('fs');
var server = http.createServer(function(req,rep){
    var url = req.url;
    console.log(url);
   if(url =='/'){
       rep.setHeader('Content-Type','text/html','charset=utf-8');
       fs.readFile('./index.html','utf8',function(err,data){
           rep.write(data);
           rep.end('thanks')
       });
   }else if(url =='/style.css'){
       console.log(url);
       rep.setHeader('Content-Type','text/css','charset=utf-8');
       fs.readFile('./style.css','utf8',function(err,data){
           console.log(data);
       });
   }

});
server.listen(8070,'localhost');
