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

### 对象

**1、简述**

重要的数据类型。

什么是对象？

​	简单说，对象就是一组“键值对（key-value）” 的 集合。是一种无序的复合数据集合。

~~~JS
var obj = {
    foo: 'hello',
    bar: 'world'
}
~~~

**2、键名**

- 对象的所有键名都是字符串（ES6中又引入 symbol 值也可以作为键名），**加不加引号都可以**

- 如果键名是数值，会被自动转换为字符串。

~~~js
var obj = {
    1: 'a',
    3.2: 'b',
    1e2: true,
    1e-2: true,
    .234: true,
    0xFF: true
}

obj
/*
Object {
	1: "a",
	3.2: "b",
	100: true,
	0.01: true,
	0.234: true,
	255: true
}
*/

obj['100']   // true
~~~

- 如果键名不符合标识名的条件（第一个字符为数字，或者含有空格或运算符），且也不是数字，必须加上引号。否则报错。
- 如果一个属性的值为函数，通常把这个属性称为”方法“，可以像函数一样调用
- 如果属性值是一个对象，**形成链式引用**
- 对象，**在运行时创建属性**

**3、对象的引用**

定义：      如果不同的变量名指向同一个对象，它们都是这个对象的引用。（**都指向同一个内存地址**）    修改其中一个变量，会影响到其他所有变量。

- 取消某一个变量对于原对象的引用，不会影响到另一个变量。

~~~js
var o1 = {};
var o2 = o1;

ol = 1;
o2   // {}
~~~

- **这种引用只局限于对象，如果两个变量指向同一个原始类型的值。（变量这是的值都是拷贝）**  保存的不是同一个内存地址





**4、表达式还是语句**

对象采用大括号表示，行首是一个大括号，是表达式还是语句？

为了避免这种歧义，无法确定是对象还是代码块，一律解释为代码块。（代码块  执行）

如果是对象，最好在大括号面前加上圆括号。（大括号里，只能是表达式）

eg： `eval`（对字符串求值）

~~~js
eval('{foo: 123}')  // 123
eval('({foo: 123})')   // {foo: 123}
~~~

**5、属性的查看**

查看一个对象本身的所有属性，使用`Object.keys()` 方法

Object.keys('对象名')

**6、属性的删除：delete 命令**

`delete` 命令用于删除对象的属性，删除成功后返回 `true`

`delete 对象名.属性名`

- 删除一个不存在的属性，delete 不报错，而且返回 true（不能根据delete 命令的结果，认定某个属性是存在的）
- delete 命令会返回 false ，该属性不存在，且不得删除

~~~js
var obj = Object.defineProperty({}, 'p', {
    value: 123,
    configurable: false
})
obj.p // 123
delete obj.p   // false 
~~~

~~~js
// Object.defineProperty(obj, prop, descriptor)   方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回这个对象

obj   要在其上定义属性的对象
prop  定义和修改的属性的名称
descriptor   被定义或修改的属性描述符


属性描述符：
	对象目前存在的属性描述符有两种主要形式： `数据描述符` 和 `存取描述符`
    数据描述符：是一个具有值的属性，该值可能是可写的，也可能不是可写的。
    存取描述符：是有 getter-setter 函数对描述的属性。
    `描述符必须是这两种形式之一，不能同时是两者`
    
两者以下可选键值：
	configurable：当且仅当该属性的 configurable 为 true 时，该属性描述符才能被改变。同时该属性也能从对应的对象上被删除。默认为  false
	enumerable：为 true 时，该属性才能够出现在对象的枚举属性中。默认为 false
数据描述符具有：
	value：可以是任何有效的  javascript 值（数值，对象，函数）  默认为 undefined
    writable：该属性为 true 时，value 才能被 赋值运算符改变。默认 false
存取描述符具有：
	get：一个属性提供 getter 的方法，如果没有 getter 则为 undefined 。当访问该属性时，该方法会被执行，方法执行时没有参数传入，但是会传入 this 对象（由于继承关系，这里的 this 并不一定是定义该属性的对象）
    set：
~~~

- delete 命令只能删除对象本身的属性，无法删除继承的属性（delete 命令 返回 true，但该属性并没有被删除，依然存在，该属性依然可能读取到值）

**7、属性是否存在 ： in  运算符**

in  运算符用于检查对象是否包含某个属性，（键名），如果包含 返回 true，否则返回 false。

~~~js
var obj = { p : 1 }
'p' in obj // true
'toString' in obj // true


//   左边为 字符串，表示属性名，右边是一个对象
~~~

- 不能识别哪些属性是对象自身的，哪些属性是继承的。
- `hasOwnProperty` 判断，是否为 对象自身的属性
  - 对象名.hasOwnProperty('属性名')

**8、属性的遍历：for...in  循环**

- 遍历的是对象所有可遍历的属性，会跳过不可遍历的属性
- 不仅遍历对象自身的属性，还遍历继承的属性
- 只想遍历对象自身的属性，结合 hasOwnProperty 方法

**9、 with 语句**

~~~js
// 格式：
with (对象) {
    语句;
}
~~~

作用：操作同一个对象的多个属性，提供一些书写的方便

**注：如果 `with` 区块内部有变量的 复制操作，必须是当前对象已经存在的属性，否则会创造一个当前作用域的全局变量**

因为 with 区块没有改变作用域，它的内部依然是当前作用域。（`绑定对象不明确`）

- 单纯从代码块，根本无法判断 x 到底是全局变量，还是对象的一个属性。不利于代码的除错和模块化，编译器也无法对代码进行优化。
- 可以考虑用一个临时变量代替 with



### 函数

**1、函数的声明**

- function 命令


~~~js
function print(s) {
    console.log
}
~~~

- 函数表达式（匿名函数）

~~~js
//  变量赋值
var print = function(s) {
    console.log(s)
}
~~~

- Function 构造函数

~~~js
var add = new Function('x', 'y', 'return x + y')

// 等同于 
function add(x, y) {
    return x + y;
}
~~~

Function 构造函数接受三个参数，除了 最后一个参数 是 add 函数的 “函数体” ，其他参数都是 add 函数的参数

传递任意数量的参数给 Function 构造函数，只有最后一个参数会被当作函数体，如果只有一个参数，该参数就是函数体。

**2、函数名的提升**

函数会像变量声明一样，被提升到代码头部。

~~~js
f();

function f() {}
~~~

**3、函数的属性和方法**

- name 属性

函数的 name 属性返回函数的名字

- length 属性

返回函数预期传入的参数个数，即函数定义之中的参数个数

- toString()  方法

返回一个字符串，内容是函数的源码

~~~js
function f() {
    a();
    b();
    c();
}
f.toString()
// function f() {
// 	a();
// 	b();
// 	c();
// }
~~~

**从而变相实现多行字符串**

**4、函数作用域**

变量存在的范围。