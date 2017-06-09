function copy(src ,tar){
    var fs = require('fs');
    var str;
    fs.readFile(src,'utf8',function(err,data){
        str = data;
    });
    fs.writeFile(tar,src,'utf8',function(err){
        console.log(src);
        if(err){
            console.log(err);
        }
    });

}
copy('./mr.jpg','./mr3.jpg');
