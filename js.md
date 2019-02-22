# js

## 导论

### 什么是javascript？

JavaScript 是一种轻量级的脚本语言。

`脚本语言`： 指的是它不具备开发操作系统的能力，而只是用来编写控制其他大型应用程序（比如浏览器）的 "脚本"。

JavaScript 也是一种嵌入式 语言。本身提供的核心语法不算多，只能用来做一些数学和逻辑运算。JavaScript 本身不提供任何与I/O（输入/输出）相关的 API，要靠宿主环境（host） 提供。

**JavaScript 适合嵌入更大型的应用程序环境，去调用宿主环境提供的底层 API**

目前，已经`嵌入 JavaScript 的宿主环境`有多种，常见的环境是浏览器，服务器环境（Node 项目）

语法角度： JavaScript 语言是一种 “对象模型”语言。各种宿主环境通过这个模型，描述自己的功能和操作接口，从而

## 标识符（变量名，函数名）

用来识别各种值得合法名称。

最常见的**标识符就是变量名，以及函数名。**

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

do...while 循环

**先运行一次循环体**，然后判断循环条件。

注：   while 语句后面的分号不要省略

~~~js
do
    语句
while （条件）;


do {
    语句
}while(条件);

~~~

for 循环

~~~js
for( ; ; ;) {
    console.log('Hello World')
}
//  无限循环
~~~

break 语句 & continue 语句

~~~js
//  break 跳出代码块或循环
//  continue   立即终止本次循环，返回循环结构的头部，开始新的循环。
~~~

如有多层循环，不带参数的 break 语句 和 continue 语句都只针对最内层循环

## 标签( label )

JavaScript 语言允许，语句的前面有标签，相当于定位符，用于跳转到程序的任意位置。格式如下

~~~js
label:
	语句
~~~

标签可以是任意的标识符。但不能是保留字，语句部分可以是任意语句。



标签通常与 `break` 语句 和 `continue` 语句配合使用，**跳出特定的循环**。

~~~js
top:
for (var i = 0;i < 3;i++) {
    for (var j = 0;j < 3;j++) {
        if (i === 1 && j === 1） break top;
        console.log('i=' + i + ',j=' + j);
    }
}

// 双重循环区块，break 命令后面加上 `top` 标签（top   不用加引号），满足条件时，直接跳出双层循环
~~~

也可以**跳出代码块**

continue ，满足条件时，会跳过当前循环，直接进入下一轮的外层循环。

# 数据类型

## 简介

JavaScript 的 数据类型 ， 共有 6 种。（ES6 新增了第7种  symbol 类型的值）

- 数值（Number）：整数和小数（1，3.14）
- 字符串（string）： 文本
- 布尔值（Boolean）：表示真伪的两个特殊值
- undefined ：表示”未定义“或不存在（由于目前没有定义，暂时没有任何值）
- null：表示空值，此处的值为空
- 对象（Object）：各种值组成的集合

数值，字符串，布尔值 这三种类型，合称为 原始类型（基本数据类型）

对象则为 合成类型的值，一个对象往往是多个原始类型的值的合成。可以看作是一个存放各种值的容器。

undefined 和 null ，一般看成两个特殊值。

对象，分成三个子类型：

- 狭义的对象（Object）
- 数组（Array）
- 函数（function）



**typeof 运算符**

确定一个值到底是什么类型

- typeof 运算符
- instanceof 运算符
- Object.prototype.toString 方法



typeof 运算符可以返回一个值的数据类型。

`undefined`  返回 undefined

typeof  可以用来检查一个**没有声明的变量**，而不报错

~~~js
v
typeof v // undefined


if (typeof v === 'undefined') {
    //  ...
}
~~~



instanceof 运算符可以区分数组和对象。



null 返回 object

~~~js
typeof null  // object
~~~



**null 和 undefined**

null 和 undefined 都可以表示 ‘没有’

在  if  语句 中， 他们都会被自动转为 false，相等运算符（==） 直接报告两者相等

~~~js
if (!undefined) {
    console.log('undefined is false')
}
if (!null) {
    console.log('null is false')
}

undefined == null     //  true
~~~

谷歌公司开发的javascript 语言的 替代品 Dart 语言，明确规定只有 null， 没有 undefined

~~~js
Number(null)   // 0
null  转换为数字时，自动变成0
~~~

**null 是一个表示 ”空“的对象，转为数值时为 0 ；          undefined 是一个表示 ”此处无定义“ 的原始值，转为数值时为  NaN**



`null 表示空值，即该处的值现在为空。调用函数时，某个参数未设置任何值，这时就可以传入 null ， 表示该参数为空。   eg：某个函数接受引擎抛出的错误作为参数，如果运行过程中未出错，那么这个参数就会传入  null，表示未发生错误`  ？？？？



### 布尔值

运算符会返回布尔值：（true/false）

- 前置逻辑运算符： `!(Not)`
- 相等运算符：`===`,`!==`,`==`,`!=`
- 比较运算符：`>`,`>=`,`<`,`<=`

undefined ，null，false，0，NaN，"" or '' （空字符串）

以上都被转换为 false，其他值都视为 true。

**空数组（[]）和空对象（{}）对应的布尔值，都是 true**



### 数值

JavaScript 内部，所有数字都是以 64位浮点数形式存储。（整数也是如此     1 和 1.0 是相同的，同一个数）

**javascript 语言的底层根本没有整数，所有数字都是小数（64位浮点数）**

某些运算只有整数才能完成，此时 JavaScript 会自动把 64 位浮点数，转成32位整数，然后进行运算。

~~~js
0.1 + 0.2 === 0.3
// false 
(0.3 - 0.2) === (0.2 - 0.1)
// false
~~~



**特殊数值**

1、正零和负零

javascript 的 浮点数之中，有一个二进制位是符号位。意味着：任何一个数都有一个对应的负值。（0也不例外）

0 存在2个，一个是`+0`，一个是 `-0`   区别是64位浮点数表示法的符号位不同。它们是等价的。

~~~js
-0 === +0          //  true
0 === -0           //  true
0 === +0           //  true

//   几乎所有场合，正零和负零都会被当作正常的  0    唯一有区别的是， +0  或  -0   当作分母，返回的值是不相等的
(1 / +0) === (1 / -0)   //false
除以正零得到 `+Infinity`，除以负零得到 `-Infinity`     这两者不相等
~~~

2、NaN

`NaN` 是 JavaScript 的特殊值，表示 ”非数字“   **主要出现在将字符串解析成数字出错的场合**

~~~js
5 - 'x'        //  NaN


代码运行时，会自动将字符串 x  转为数值，但是由于 x  不是数值，所以最后得到结果 为   NaN   （表示他是  非数字）
~~~

~~~js
//   数学函数的运算结果会出现  NaN

Math.acos(2)
Math.log(-1)
Math.sqrt(-1)

Math.acos(x)     //  返回一个数的【反余弦】 （值是  0 - PI之间的弧度值）
//   x 超过了  -1.0 ~ 1.0 之间的范围，浏览器将返回 NaN              如果参数 x 取值 -1，那么将返回 PI
Math.log(x)   //   返回一个数的【自然对数】（参数：任意数值或表达式   必须大于 0）
Math.sqrt(x)   //  返回一个数的【平方根】    （参数： 必须是大于等于 0 的数）

0 / 0            // NaN
~~~

**注： NaN 不是独立的数据类型，而是一个特殊数值。他的数据类型依然属于  Number**

~~~js
typeof NaN         //  Number
~~~

**运算规则：**

NaN 不等于 任何值，包括它本身。

NaN 在布尔运算时被当作 false

NaN 在与任何数 （包括自己）的运算，得到的都是 NaN。

**3、与数值相关的全局方法**









### 字符串

如果要在单引号字符串的内部，使用单引号，就必须在内部的单引号前面加上反斜杠，用来转义。双引号字符串内部使用双引号，也是如此。

**字符串默认只能写在一行内，分成多行将会报错**

~~~js
'a
b
c'
~~~

如果长字符串必须分成多行，可以在每一行的尾部使用反斜杠。

~~~js
var longString - 'Long \
long \
long \
string';

// 反斜杠的后面必须是换行符，不能有其他字符（eg：空格）
~~~

多行字符串，利用多行注释的变通方法

~~~js
(function() {/*
line 1
line 2
line 3
*/}).toString().split('\n').slice(1, -1).join('\n')


toString()    将数据格式转换为字符串格式
split()       将字符串分割成字符串数组 （使用换行对字符串进行分割成字符串数组）
slice()       从已有数组中返回选定的元素
join()        加入 换行符
~~~

**转义**

反斜杠转义的特殊字符：

- `\0`       null
- `\b`       后退键
- `\f`        换页符
- `\n`        换行符
- `\r`        回车键
- `\t`        制表符
- `\v`         垂直制表符
- `\'`         单引号
- `\"`         双引号
- `\\`         反斜杠

字符串内部的单个字符无法改变和增删

检测字符串长度的 length 属性，也是无法改变的

### Base64 转码

ASCII 码    0-31  的符号都无法打印出来，这时可以使用 Base64 编码，将它们转成可以打印的字符。

需要以文本格式传递二进制数据，也可以使用  Base64 编码。



用法：

将任意值转成 0~9、A~Z、a~z、+、/        这64个字符组成的可打印字符。

主要目的，不是为了加密，而是为了不出现特殊字符，简化程序的处理。 



方法：

- btoa()：任意值转为 Base64编码
- atob()：Base64 编码转为原来的值

这两个方法不适合非 ASCII 码 的 字符，会报错。

如果非ASCII 码字符转为Base64 编码，中间加一个转码环节，

~~~js
//  非ASCII 码字符转 Base64 编码
btoa(encodeURIComponent(’你好))

//  Base64 编码 转成 ASCII码
decodeURIComponent(atob('JUU0JUJEJUEwJUU1JUE1JUJE'))
~~~

