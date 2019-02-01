# CSS3

## 新特性

- 强大的CSS3选择器（伪类选择器、伪元素）
- 抛弃图片的视觉效果
- 盒模型变化（多列布局和弹性盒模型）
- 阴影效果
- Web字体和 web font 图标
- CSS3过渡与动画交互效果
- 媒体查询



浏览器的支持情况：   [can i use](http://caniuse.com)



### 渐进增强和优雅降级

渐进增强：   满足大部分浏览器  （共同效果）

优雅降级：   满足大部分用户



## 伪类选择器

介绍：不存在于html中

- 动态伪类选择器（交互时有的效果）

~~~html
<a src="">panda classes</a>
~~~

~~~css
<style type="text/css">
a:link {
    color: #666;
}
a:visited {
    /* 访问过的样式 */
    color: #f00;
}
a:hover {
    color: #000;
}
a:active {
    /* 点击时的样式 */
    color: #0f0;
}
</style>
~~~

- UI 元素`状态`伪类选择器

~~~html
<input type="text">
<input type="text" disabled>
~~~

~~~css
input:enabled {
    background: #0f0;
}
input:disabled {
    background: #f00;
}
~~~

- 结构伪类选择器
  - 什么是结构伪类选择器？
    - 简化了html文本结构，减少class 和 id 的使用
    - 新增加的选择器可以很好的选择重复的标签
  - :first-child 选择某个元素的第一个子元素
  - :last-child 选择某个元素的最后一个子元素
  - :nth-child( [数字或表达式] )  选择某个元素的一个或多个特定的子元素
      - even   偶数
      - odd     奇数
      - n+1
  - :nth-last-child()  选择某个元素的一个或多个特定的子元素，从这个元素的  最后一个子元素开始算
  - :nth-of-type()  选择指定的元素    [限定类型]
  - :nth-last-of-type()   选择指定的元素，从元素的最后一个开始计算
  - :first-of-type()    选择一个上级元素下的第一个同类子元素
  - :last-of-type()     选择一个上级元素的最后一个同类子元素
  - :only-child      选择的元素是它的父元素的唯一一个子元素
  - :only-of-type    选择一个元素是它的上级元素的唯一一个相同类型的子元素                                         ?????
  - :empty    选择的元素里没有任何内容
      - <li></li>

### 伪元素

- 什么是伪元素？
  - css 伪元素 用于向某些选择器设置特殊效果

| 伪元素         | 作用                           |
| -------------- | ------------------------------ |
| ::first-letter | 将特殊的样式添加到文本的首字母 |
| ::first-line   | 将特殊的样式添加到文本的首行   |
| ::before       | 在某元素之前插入某些内容       |
| ::after        | 在某元素之后插入某些内容       |

~~~ css
.class::before {
    /* 无值则为空         content:'' */
    content: url('./top.png') 
}
~~~

### border-radius

优点：

- 减少网站的维护工作
- 提高网站性能
- 增加视觉美观性

~~~html
//   画三角形    向左的三角
<div class="sanjiao"></div>
~~~

~~~css
.sanjiao {
    border-top: 50px solid transparent;
    border-bottom: 50px solid transparent;
    border-left: 0px solid #0f0;
    border-right: 50px solid #00f;
    
    width: 0;
    height: 0;
    margin: 50px auto;
}
~~~

border-radius

border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;

​                                   x轴                                      y轴

### Transform

~~~html
//  transform  2D 3D 变形转换  
//    菱形
<div class="diamond"></div>
//    平行四边形
<div class="parallel"></div>
~~~

~~~css
.diamond {
    width: 200px;
    height: 200px;
    background: #6a6;
    margin: 100px auto;
    transform: rotate(45deg);
}
.parallel {
    width: 200px;
    height: 100px;
    background: #6a6;
    margin: 100px auto;
    //               左右倾斜    上下倾斜
    transform: skew(20deg 20deg);
}
~~~

参数：

**转换**

- `translate(x,y)`      定义2D转换
- `translate3d(x,y,z)`        定义3D转换
- `translateX()`                 定义X转换
- `translateY()`                 定义Y转换
- `translateZ()`                 定义Z转换

**缩放**

- `scale(x,y)`              定义2D缩放
- `scale3d(x,y,z)`          定义3D缩放
- `scaleX(x)`
- `scaleY(y)`
- `scaleZ(z)`

**旋转**

- `rotate(angle)`              角度    例： `rotate(30deg)`
- `rotate3d()`
- `rotateX()`
- `rotateY()`
- `rotateZ()`

**倾斜转换**

- `skew(x-angle,y-angle)`       2d 倾斜转换
- `skewX(angle)`
- `skewY(angle)`

**透视视图**

- `perspective(n)`                 为3D转换元素定义透视视图

#### Transform-origin

设置旋转元素的基点位置。

该属性必须与 transform 属性一同使用。

### opacity   透明

~~~
		 值  0-1   继承（继承父级的透明度）
opacity: value/inherit

0：  完全透明
1：  不透明
~~~

### 颜色模式

- RGBA

R： 红色值。正整数|百分数

G： 绿色值。正整数|百分数

B： 蓝色值。正整数|百分数

A： Alpha 透明度。取值0~1之间

- hsla

H：Hue（色调）。0/360 表示红色，120 表示绿色，240表示蓝色，也可取其他数值来指定颜色。取值 0-360

S： 饱和度（Saturation）。取值：0.0%-100.0%

L： 亮度（Lightness）            0.0%~100.0%

A： Alpha 透明度    0-1

~~~
RGBA 与 hsla 的区别：
当 RGBA 的透明度逐渐变浅时，相关的信息颜色都会变浅
当 hsla 的透明度逐渐变浅时，相关的信息颜色不会进行变化
~~~

