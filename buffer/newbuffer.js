//buffer类似数组
// Buffer只能存放字节0-255
/*var buffer = new Buffer(1);
buffer[0]=10;
console.log(buffer);*/
//通过字符串创建buffer
console.log(new Buffer('珠'));
//通过数组创建buffer
console.log(new Buffer([1,2,3]));
//buf.toString([encoding[,start[,end]]]);
//字符串转buffer
var buffer = new Buffer('珠峰','utf8');
console.log(buffer);
//buffer转字符串
console.log(buffer.toString('utf8',3,5));