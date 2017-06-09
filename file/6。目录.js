/*
操作目录
* */
var fs = require('fs');
//mkdir
//创建目录
//创建目录的时候要求父目录 必须存在
fs.mkdir('test/t',function(err){
    if(err){
        console.log('创建目录失败');
    }else{
        console.log('创建目录成功');
    }
});
//2.读取目录下的所有文件
fs.readdir('./test',function(err,files){
console.log(files);
});
//创建文件夹，如果父文件夹不存在，则需要自动创建
function makep(path,callback){
    //1.把这个参数转变成数组
    //2.以次判断各个目录是否存在，如果存在跳过，如果不存在自动创建
    //3.最后创建一个最终目录
}
//3.获取一个文件或目录详情
fs.readdir('./test',function(err,files){
    //循环文件列表
    files.forEach(function(file){
       //获取文件详情
        fs.stat('./test/'+file,function(err,state){
            console.log(state.isDirectory());//是否是目录
            console.log(state.isFile());//是否是文件
console.log(state.size);
        });
    });

});

//判断一个文件是否存在
fs.exists('./test',function(exits){
    console.log(exits);
});