var buf1 = new Buffer('菜鸟教程');
var buf2 = new Buffer('www.baidu.com');
var buf3 = Buffer.concat([buf1,buf2]);
console.log(buf3.toString());