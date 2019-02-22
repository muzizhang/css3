var a = (function() {/*
line 1
line 3
line 5
*/}).toString().split('\n').slice(1, -1).join('\n');
console.log(a)
var b = (function () {
    'line 1 \
    line 2 \
    line 3'
})
console.log(b)