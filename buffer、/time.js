var time = 10*10000; //10万次
console.time('1024*4')
for(var i=0;i<time;i++)
    var x = new Buffer(1024*4);
console.timeEnd('1024*4')

console.time('1024*4+1')
for(var j=0;j<time;j++)
    var y = new Buffer(1024*4+1);
console.timeEnd('1024*4+1')
