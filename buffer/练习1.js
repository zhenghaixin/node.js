/*
var buf1 = new Buffer(256);
var buf2 = new Buffer('abc');
var buf3 = new Buffer([0x65,0x66,0x67]);
var buf4 = new Buffer(buf1);
console.log(buf1);
console.log(buf2);
console.log(buf3);
console.log(buf4);
*/
var buf1 = new Buffer(256);
buf1.fill(0);
buf1.write('abc');
console.log("buf1\'s content: ", buf1.toString());