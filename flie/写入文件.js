var fs = require('fs');
console.log('准备写入文件');
fs.writeFile('./input.txt','世界你好',{flag:'w'},function(err){
    console.log(err);
});
fs.readFile('./input.txt','utf8',function(err,data){
    if(err =='null'){
        console.log('没有错误');
    }else{
        console.log(data.toString());
    }

})