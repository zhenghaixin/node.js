var fs = require('fs');
fs.readFile('index.txt','utf8',function(err,data){
    console.log(data);
    console.log(Buffer(data));
});
