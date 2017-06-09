//file systerm
//加载fs核心模块，node自带的亲生的模块
var fs = require('fs');
fs.readFile('./index.txt');
//文件模块,我们自己写的文件模块
require('./math.js');
//别人给你生的，第三者生的，第三方模块

//模块的安装
//全局安装，直接下载到node安装目录中，各个项目都可以调用，适合工具模块，比如gulp
//本地安装，将一个模块下载到当前目录的node_modules的子目录，然后在当前目录和它的子目录之中才能调用这个模块
// npm install [pacage name]
var mime = require('mine');
console.log(mine);