Flexbox

`Flexbox Layout` （柔性盒） 模块的目的在于提供一种更有效的方式来布置，调整和项目之间在一个容器中分配空间，即使它们的大小是未知的 / 动态的

主要思想：

​	让容器能够改变其项目的宽度/高度（和顺序），填充可用空间（是为了适应所有类型的显示设备和屏幕尺寸）。Flex 容器扩展项目以填充可用空间，或缩小它们以防止溢出。

[Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) 布局最适合应用程序的组件和小规模布局，而 [Grid](https://css-tricks.com/snippets/css/complete-guide-grid/) 布局则适用于更大规模的布局。

## 基础知识和术语

flex container （flex 容器  **父**） ----> container

flex items （flex 列表 **子**） ----> items



### 属性

### display  （适用于父类容器元素上）

- flex
- inline-flex
  - float，clear，vertical-align  在 flex 项目中不起作用



### flex-direction  【适用于父类容器元素上   ---->  容器方向】

设置或检索伸缩盒对象的子元素在父容器中的位置

- row （默认）
- row-reverse
- column
- column-reverse
  - 注：flex 生效需定义其父元素 display 为 flex 或 inline-flex（box 或 inline-box  -->  旧的方式）



### flex-wrap  【适用于父类容器上】

设置或检索伸缩盒对象的子元素超出父容器时是否换行

- nowrap：当子元素溢出父容器时不换行
- wrap：当子元素溢出父容器时自动换行
- wrap-reverse：反转 wrap 排列



### flex-flow  【适用于父类容器上】

复合属性。设置或检索伸缩盒对象的子元素 **排列** 方式

- flex-flow: <`flex-direction`>  ||  <`flex-wrap`>
- flex-direction  定义弹性盒子元素的排列方向
- flex-wrap 定义弹性盒子元素的溢出父容器时是否换行



### justify-content  【适用于父类容器上】

设置或检索弹性盒子元素在主轴（横轴）方向上的对齐方式

**当弹性盒里一行上的所有子元素都不能伸缩或已经达到其最大值时，这一属性可协助对多余的空间进行分配。当元素溢出某行时，这一属性同样会在对齐上进行控制**

- `flex-start` ：弹性盒子元素将向行起始位置对齐
- `flex-end` ：弹性盒子元素将向行结束位置对齐
- `center` ：弹性盒子元素将向行中间位置对齐
- `space-between` ：弹性盒子元素会平均地分布在行里
- `space-around` ：弹性盒子元素会平均的分布在行里 【第一个元素前的空间以及最后一个元素后的空间为其他空白空间的一半】

![1551854420157](C:\Users\z100068\Desktop\css3\assets\1551854420157.png)



### align-items  【适用于父类容器上】

设置或检索弹性盒子元素在侧轴（竖轴）方向上的对齐方式

- `flex-start` 
- `flex-end` 
- `center` 
- `baseline` ：如弹性盒子元素的行内轴和侧轴为同一条，则该值与 flex-start 等效。**其他情况下，该值将参与基线对齐**
- `stretch` ：如果制定侧轴大小的属性值为 “auto”，则其值会使项目的边距盒的尺寸**尽可能接近所在行的尺寸**   ，同时会遵照 'min/max-width/height' 属性的限制

![1551855210710](C:\Users\z100068\Desktop\css3\assets\1551855227765.png)

![1551855285634](C:\Users\z100068\Desktop\css3\assets\1551855285634.png)

### align-content  【适用于父类容器上】

设置或检索弹性盒**堆叠**伸缩行的对齐方式

- flex-start
- flex-end
- center
- space-between
- space-around
- stretch

![1551855889199](C:\Users\z100068\Desktop\css3\assets\1551855889199.png)



### order  （适用于弹性盒模型容器子元素）

【控制它们在 Flex 容器中显示的顺序】

****

- <integer>     默认值为  0   
- 整数值来定义排列顺序，数值小的排在前面，可以为负值



### flex-grow  （适用于弹性盒模型容器子元素）

设置或检索弹性盒的扩展比率

- 根据弹性盒子元素所设置的扩展因子作为比率来**分配剩余空间**
- <number>  用数值来定义扩展比率。**不允许负值**
- 默认值为0，如果**没有显示定义该属性**，是**不会拥有分配剩余空间权利。**



### flex-shrink  （适用于弹性盒模型容器子元素） ？？？

设置或检索弹性盒的收缩比率 【根据弹性盒子元素所设置的收缩因子作为比率来收缩空间】

- <`number`>   默认为 1

> flex-shrink 的默认值为1，如果没有显示定义该属性，将会自动按照默认值1在所有因子相加之后计算比率来进行空间收缩

- 本例中c显式的定义了flex-shrink，a,b没有显式定义，但将根据默认值1来计算，可以看到总共将剩余空间分成了5份，其中a占1份，b占1份，c占3分，即1:1:3
- 我们可以看到父容器定义为400px，子项被定义为200px，相加之后即为600px，超出父容器200px。那么这么超出的200px需要被a,b,c消化
- 按照以上定义a,b,c将按照1:1:3来分配200px，计算后即可得40px,40px,120px，换句话说，a,b,c各需要消化40px,40px,120px，那么就需要用原定义的宽度相减这个值，最后得出a为160px，b为160px，c为80px



### flex-basis  （适用于弹性盒模型容器子元素）

设置或检索弹性盒伸缩基准值

- auto：无特定宽度值，取决于其他属性值
- length：用长度值来定义宽度，不允许负值
- percentage：用百分比来定义宽度，不允许负值

### flex （适用于弹性盒模型子元素）

复合属性。设置或检索伸缩盒对象的子元素如何分配空间

**如果缩写 flex:1，则其计算值为 ： 1 1 0**

-  flex : none | [ flex-grow ] || [ flex-shrink ]||[flex-basis]
  - none：none关键字的计算值为 0 0 auto
  - flex-grow   定义弹性盒子元素的扩展比率（分配）
  - flex-shrink   定义弹性盒子元素的收缩比率 （收缩）
  - flex-basis   定义弹性盒子元素的默认基准值（基准值）



### align-self （适用于弹性盒模型子元素）

设置或检索弹性盒子元素自身在侧轴（纵轴）方向上的对齐方式。

- auto：如果 ‘align-self’ 的值为 auto，则其计算值为父元素的 ‘align-items’ 值，如果其没有父元素，则计算值为 stretch
- flex-start：
- flex-end
- center
- baseline：如弹性盒子元素的行内轴与侧轴为同一条，则该值与 ‘flex-start’ 等效。其他情况下，该值将参与基线对齐
- stretch：如果制定侧轴大小的属性值为 ‘auto’ ， 则其值会使项目的边距盒的尺寸尽可能接近所在行的尺寸，但同时会遵照 ‘min/max-width/height’ 属性的限制







