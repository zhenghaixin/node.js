function f1() {
    console.time('time span');
}
function f2() {
    console.timeEnd('time span');
}
setTimeout(f1, 100);
setTimeout(f2, 200);

function waitForMs(n) {
    var now = Date.now();
    while (Date.now() - now < n) {
    }
}
waitForMs(500);//time span: 0ms
