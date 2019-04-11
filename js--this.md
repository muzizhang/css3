# this

### this是什么

`this 是一个指针，指向调用函数的对象`

#### this 的 绑定规则

- 默认绑定
- 隐式绑定
- 硬绑定
- new 绑定

### 默认绑定

在不能应用其他绑定规则时使用的默认规则，`独立函数调用`

~~~js
function sayHi() {
    console.log('hello，',this.name)
}
var name = 'YvetteLau'
sayHi()
~~~

在调用时，应用了默认绑定，this 指向全局对象（非严格模式下）。

**严格模式下，this 指向 undefined，undefined 上没有 this 对象，会抛出错误。** 

`如果在 node 环境中运行，结果是 hello,undefined。`**这是因为 node 中 name 并不是挂在全局对象上的**

### 隐式绑定

函数的调用是在某个对象上触发的，即调用位置上存在上下文对象。`XXX.fun()`

**对象属性链中只有最后一层会影响到调用位置**

~~~js
function sayHi() {
    console.log('hello,',this.name)
}
var person2 = {
    name: 'Christina',
    sayHi: sayHi
}
var person1 = {
    name: 'YvetteLau',
    friend: person2
}
person1.friend.sayHi()  // hello,Christina
~~~

`隐式绑定的陷阱，` **绑定容易丢失（以为this 指向的是什么，但实际上并非如此）**

~~~js
function sayHi() {
    console.log('hello,',this.name)
}
var person - {
    name: 'YvetteLau',
    sayHi: sayHi
}
var name = 'Wiliam'
var Hi = person,sayHi
Hi()  // hello,Wiliam
~~~

