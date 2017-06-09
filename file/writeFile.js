var fs = require('fs');
//以同步的方法向硬盘的文件里写数据
fs.writeFileSync('./write.js','珠峰培训')

/*
* 异步操作
* flag 是表示对此文件做何种类型的操作
* w 清空并写入
* a 在原有基础上追加
* */
/*
fs.writeFile('./write.txt','node读写',{flag:'a'},function(err,data){
  /!*  if(err){
        console.log(err);
    }*!/
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
});*/
fs.appendFile('./write.txt','node');
