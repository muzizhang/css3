# es6

## 函数的扩展

**1、函数参数的默认值**

允许为函数的形参设置默认值，     eg： y = 'world'



**2、解构赋值**

~~~js
function foo({x, y = 5}) {
    console.log(x, y)
}
foo({}) //  undefined 5
foo({x: 1})   //  1  5
foo()    //TypeError: Cannot read property 'x' of undefined
~~~

y = 5      【  解构参数的默认值】

- 只有当函数`foo` 参数是一个**对象**时，变量 x 和 y  才会通过解构赋值生成
- 如果调用时没提供参数，变量 x 和 y 就不会生成

~~~js
function foo({x, y = 5} = {}) {
    console.log(x, y)
}
foo()

// 如果没有提供参数，函数foo  参数默认为一个空对象
~~~

~~~js
{ body = '', method = 'GET', headers = {} } = {}
//  函数参数的默认值   ->    解构赋值的默认值
~~~

~~~js
function m1({x = 0, y = 0} = {}) {
    console.log(x, y)
}
function m2({x, y} = {x: 0, y: 0}) {
    console.log(x, y)
}

//  解： m1  函数参数的默认值是空对象，同时也设置了解构赋值的默认值          m2    函数参数的默认值  是一个有具体属性的对象，但是没有设置对象解构赋值的默认值

//   设置为空值
m1()    //  0,0
m2()    //  0,0
//  x,y 都有值
m1({3,8})    //  3,8
m2({3,8})    // 3,8
//  x 有值， y 无值
m1({3})     //  3,0
m2({3})     //  3, undefined

m2({})   //  undefined, undefined
~~~



**3、函数的 length 属性**

指定了默认值之后，函数的 `length` 属性，将返回没有指定默认值的参数个数。`也就是说，指定了默认后，length 属性将失真`

~~~js
(function(a) {}).length        //1
(function(a = 5) {}).length       // 0
(function(a, b, c = 4) {}).length    // 2
~~~

**`length` 属性的含义： 该函数预期传入的参数个数。** rest 参数也不会计入 length 属性

~~~js
(function(...args) {}).length         // 0
~~~

> 设置了默认值的参数不是尾参数，那么  length 属性也不再计入后面的参数了。

~~~js
(function(a = 1, b, c) {}).length           // 0
(function(a, b = 1, c) {}).length           // 1
~~~



**5、箭头函数**

使用注意点：

- 函数体内的 `this` 对象，就是 **`定义时 所在的对象`**，而不是使用时所在的对象
- 不可以当作构造函数，不可以使用 new  命令，否则会抛出一个错误
- **不可以使用 arguments 对象，该对象在函数体内不存在。**如果需要使用，可以用 rest 参数代替
- 不可以使用 `yield` 命令，因此箭头函数不能用作  Generator 函数





## Symbol



