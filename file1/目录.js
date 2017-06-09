//操作目录
var fs = require('fs');
//make derectry 简写 mkdir
//创建目录
//创建目录的时候父目录必须 存在
fs.mkdir('text',function(err){
    if(err){
        console.log('创建失败');
    }else{
        console.log('创建成功');
    }
});
//创建文件夹，如果父文件夹不存在的话 则需要自动创建
function makep(path,callback){
    //1.把这个这个参数转成数组
    //以次 判断各个目录是否存在，如果存在就跳过，如果不存在就创建目录
    //3最后创建一个最终的目录
}
//读取目录下面的文件
//3.获取一个文件或目录详情
fs.readdir('./book',function(err,files){
    //循环文件列表
 files.forEach(function(file){
   //获取文件的详情
     fs.stat('./book/'+file,function(err,state){
         console.log(state.isDirectory());//是否是目录
         console.log(state.isFile());//是否是文件
         console.log(state.size);
     });
 });

});
//判断一个文件是否存在
fs.exists('./book',function(exits){
    console.log(exits);
})