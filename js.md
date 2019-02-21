# js

## 导论

### 什么是javascript？

JavaScript 是一种轻量级的脚本语言。

`脚本语言`： 指的是它不具备开发操作系统的能力，而只是用来编写控制其他大型应用程序（比如浏览器）的 "脚本"。

JavaScript 也是一种嵌入式 语言。本身提供的核心语法不算多，只能用来做一些数学和逻辑运算。JavaScript 本身不提供任何与I/O（输入/输出）相关的 API，要靠宿主环境（host） 提供。

**JavaScript 适合嵌入更大型的应用程序环境，去调用宿主环境提供的底层 API**

目前，已经`嵌入 JavaScript 的宿主环境`有多种，常见的环境是浏览器，服务器环境（Node 项目）

语法角度： JavaScript 语言是一种 “对象模型”语言。各种宿主环境通过这个模型，描述自己的功能和操作接口，从而

## 标识符

用来识别各种值得合法名称。

最常见的标识符就是变量名，以及函数名。

标识符的命名规则：

- 第一个字符，可以是任意字母（英文字母或其他语言的字母）， 以及美元符号（$） 和下划线 （_）
- 第二个字符，字母，美元符号，下划线，数字（0-9） 都可以进行使用

javaScript 保留字（不能用于做变量名）：

~~~js
JavaScript 有一些保留字，不能用作标识符：arguments、break、case、catch、class、const、continue、debugger、default、delete、do、else、enum、eval、export、extends、false、finally、for、function、if、implements、import、in、instanceof、interface、let、new、null、package、private、protected、public、return、static、super、switch、this、throw、true、try、typeof、var、void、while、with、yield。
~~~

## 注释

JavaScript 可以兼容 HTML 代码的注释，所以  `<!--` 和 `-->` 也被视为合法的单行注释。

`-->` 只有在行首，才会被当成单行注释，否则会当作正常的运算。

## 判断

switch 结构：    【内部采用严格相等运算符】

~~~js
switch (fruit) {
    case 'banana': 
        // ...
        break;
    case 'apple': 
        // ...
        break;
    default: 
        // ...
}

// 每个代码块内部的 `break` 语句不能少，否则会继续执行下一个case 代码块，而不是跳出 switch 结构
~~~

## 循环

while 循环

语句包括一个循环条件和一段代码块，只要条件为真，就不断循环执行代码块。

~~~js
while (条件) 语句;
~~~

for 循环

~~~js
for( ; ; ;) {
    console.log('Hello World')
}
//  无限循环
~~~

do...while 循环

先运行一次循环体，然后判断循环条件。

~~~js
do
    语句
while （条件）;


do {
    语句
}while(条件);
~~~

