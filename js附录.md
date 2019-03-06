# js

## 附录：网页元素接口

### `<a>` 元素

`<a>` 元素用来设置链接。除了网页元素的通用接口（`Node 接口` 、`Element 接口`、`HTMLElement 接口`）。继承了 `HTMLAnchorElement` 接口 和 `HTMLHyperlinkElementUtils 接口`

1、  属性

​	1.1 URL 相关属性

​	用来操作链接地址。可以参见 `Location 对象的实例属性`

- hash： 片段识别符（以 # 开头）
- host ： 主机和端口（默认端口80和443会省略）
- hostname ： 主机名
- href ： 完整的URL
- origin ： 协议、域名和端口
- password ： 主机名前的密码
- port ： 端口
- pathname ： 路径（以`/` 开头）
- protocol ： 协议（包含尾部的冒号 `:`）
- search ： 查询字符串（以 `?` 开头）
- username ： 主机名前的用户名

~~~ js
//    HTML    代码
//  <a id="test" href="http://user:passwd@example.com:8081/index.html?bar=1#foo"> test </a>
a.hash       // #foo
a.host       // example.com:8081
a.hostname     // example.com
a.href           // http://user:passwd@example.com:8081/index.html?bar=1#foo
a.origin         // http://example.com:8081
a.password      //  passwd
a.pathname      //  index.html
a.port           // 8081
a.protocol       //  http: (包含尾部冒号)
a.search         //  ？bar=1
a.username       //  user
~~~

注：  除了 `origin` 属性是只读的，其他属性都是可读写的。



1.2 accessKey 属性

`accessKey` 属性用来读写  <a> 元素的快捷键。

~~~js
//   html
//   <a id="test" href="http://example.com">test</a>

//  获取元素
var a = document.getElementById('test');
a.accessKey = 'k';
~~~

上面代码设置 `<a>` 元素的快捷键为 `k`，只要按下快捷键，浏览器就会跳转到 example.com。

**不同的浏览器在不同的操作系统下，唤起快捷键的功能键组合式不一样的。**



1.3 download 属性

`download` 属性表示当前链接不是用来浏览，而是用来下载的。 **值是一个字符串，表示用户下载得到的文件名**

~~~js
//  html
//  <a id="test" href="foo.jpg"> 下载 </a>

//  获取元素
var a = document.getElementById('test')
a.download = 'bar.jpg';
~~~

`<a>` 元素是一个图片链接，默认情况下，点击后图片会在当前窗口加载。

**设置了 `download` 属性后，点击这个链接，就会下载对话框，询问用户保存位置，而且下载的文件名为   `bar.jpg`**



1.4 hreflang 属性

`hreflang` 属性用来读写 <a> 元素的 **HTML 属性 `hreflang`**. 表示链接指向的资源的语言。

例：  `hreflang="en"` 

~~~js
//   html  
//   <a id="test" href="https://example.com" hreflang="en"> test </a>

//  获取元素
var a = document.getElementById('test')
a.hreflang     //  en
~~~

