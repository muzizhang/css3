# uni-app

## 产品特征

- 跨平台
  - 一套代码，多端发行
  - 优雅的在同一个项目里调用不同平台的特色功能
- 运行体验
  - 组件、api、微信小程序一致，
  - 兼容 weex 原生渲染（局部渲染）
- 通用技术栈
  - vue 的 语法，微信小程序的 api
  - 内嵌 mpvue
- 开放生态，组件更丰富
  - 支持通过 npm 安装第三方包
  - 支持微信小程序 自定义组件 及 SDK
  - 兼容 mpvue 组件及项目
  - App 端支持和原生混合编码

## 快速上手

uni-app 支持通过 `HBuilderX` 可视化界面，`vue-cli` 命令行两种方式快速创建项目

### 通过HBuilderX 可视化界面

XBuilderX 内置相关环境，开箱即用。

### 通过 Vue-cli 命令行

使用 cli 脚手架，可以通过 vue-cli 创建 uni-app 项目，并搭配其他开发工具来开发 uni-app.

- vue-cli 版本 必须是 3.x
- cli 版本不能开发  App，只能发布 小程序和 H5

环境安装：

1、全局安装 vue-cli

~~~js
npm install -g @vue/cli
~~~

2、创建uni-app

~~~js
vue create -p dcloudio/uni-preset-vue 项目名称
~~~

然后，提示选择项目模板，初次体验建议选择 `hello uni-app` 项目模板

3、运行并发布 uni-app

~~~js
npm run dev:%PLATFORM%
npm run build:%PLATFORM%
~~~

`%PLATFORM%` 可取值：

| 值         | 平台         |
| ---------- | ------------ |
| H5         | H5           |
| mp-alipay  | 支付宝小程序 |
| mp-baidu   | 百度小程序   |
| mp-weixin  | 微信小程序   |
| mp-toutiao | 头条小程序   |

- dev 模式编译出的各平台代码存放于根目录下的 `/dist/dev/` 目录，打开各平台开发工具选择对应平台目录即可进行预览（H5 平台不会在此目录，存在于缓存中）
- build 模式编译出的各平台代码存放于根目录下 `/dist/build/`  目录下，发布时选择此目录进行发布
- dev 和 build 模式的区别：
  - dev 模式 有  `SourceMap` 可以方便的进行断点调试
  - build 模式会将代码进行压缩，体积更小更适合发布为正式版应用
  - 进行 环境判断时，dev 模式 process.env.NODE_ENV 的值为 development ， build 模式 process.env.NODE_ENV 为 production

**注：**

- 开发 App 必须使用 HBuilderX，其他编辑器搭配 cli  只能开发小程序和 H5
- cli 的 编译器在项目下，可使用 终端调用，而是用 HBuilderX 开发 uni-app 的编译器不在项目下，而在 HBuilderX 的插件目录下，使用 HBuilderX 开发屏蔽了所有 node 概念，在插件安装中可视化安装插件即可
- cli 一般用于 非 HBuilderX 工具开发小程序和 H5，在开发 uni-app 时，HBuilderX 和 其他工具 （vsCode）有什么区别？
- 已经使用 CLI 创建了 项目，想继续在 HBuilderX 里使用，把 `Src` 目录 拖入到 HBuilderX 中（可以在 hx 中对项目 右键起别名），然后通过 HBuilderX 的 uni-app 插件运行和发布

## 框架简介

### 开发规范

为了实现微信小程序、原生App 的 跨端兼容，综合考虑编译速度、运行性能等因素

- 页面文件遵循 [vue 单文件组件（SFC）规范](https://vue-loader.vuejs.org/zh/spec.html)
- 组件标签靠近小程序规范，[uni-app 组件规范](https://uniapp.dcloud.io/component/README)，不能使用标准 HTML 标签，也不能使用 js 对 DOM 进行操作
- 接口能力 （JS API） 靠近微信小程序规范，需将前缀 wx 替换为 uni ，详见 [uni-app 接口规范](https://uniapp.dcloud.io/api/README)
- 数据绑定及事件处理靠近 `vue.js` 规范，同时补充了 App 及页面的生命周期
- 为兼容多端运行，建议使用 flex 布局 进行开发

### 目录结构

- main.js     Vue 初始化入口文件
- App.vue       应用配置，用来配置App全局样式以及监听
- manifest.json    配置应用名称、appid、logo、版本等打包信息 [详见](https://uniapp.dcloud.io/collocation/manifest)
- pages.json   配置页面路由，导航条，选项卡等页面类信息 [详见](https://uniapp.dcloud.io/collocation/pages)

**注：**

- static 目录下的 js 文件不会被编译，如果有 es6 代码，不经过转换直接运行，在手机设备上会报错
- css、less/scss 等资源同不要放在 static 目录下，**建议存放在 common  目录下**

### 生命周期

#### 应用生命周期

uni-app 支持如下应用生命周期函数：

| 函数名            | 说明                                                         |
| ----------------- | ------------------------------------------------------------ |
| onLanuch          | 当 `uni-app` 初始化完成时触发（全局只触发一次）              |
| onShow            | 当 `uni-app` 启动，或从后台进入前台显示                      |
| onHide            | 当 `uni-app` 从前台进入后台                                  |
| onUniNviewMessage | 对 `nvue` 页面发送的数据进行监听，参考[nvue 向 vue 通讯](https://uniapp.dcloud.io/use-weex?id=nvue-%E5%90%91-vue-%E9%80%9A%E8%AE%AF) |

**注：**

- 应用生命周期仅可在 `App.vue` 中监听，在其他页面监听无效
- 在应用生命周期函数内进行页面跳转时需注意，不要和 pages.json 内配置的首页打开时机冲突

#### 页面生命周期

| 函数名                              | 说明                                                         | 平台支持                                         |        |                                                              |
| ----------------------------------- | ------------------------------------------------------------ | ------------------------------------------------ | ------ | ------------------------------------------------------------ |
| onLoad                              | 监听页面加载，其参数为上个页面传递的数据，参数类型为 Object (用于页面传参) |                                                  |        |                                                              |
| onShow                              | 监听页面显示                                                 |                                                  |        |                                                              |
| onReady                             | 监听页面初次渲染完成                                         |                                                  |        |                                                              |
| onHide                              | 监听页面隐藏                                                 |                                                  |        |                                                              |
| onUnload                            | 监听页面卸载                                                 |                                                  |        |                                                              |
| onPullDownRefresh                   | 监听用户下拉动作，一般用于下拉刷新                           |                                                  |        |                                                              |
| onReachBottom                       | 页面上拉触底事件的处理函数                                   |                                                  |        |                                                              |
| onTabItemTap                        | 点击 tab 时触发，参数为 Object                               | 微信小程序、百度小程序、H5                       |        |                                                              |
|                                     | 参数说明：                                                   |                                                  |        |                                                              |
|                                     |                                                              | 属性：                                           | 类型： | 说明：                                                       |
|                                     |                                                              | index                                            | String | 被点击 tabItem 的序号，从 0开始                              |
|                                     |                                                              | pagePath                                         | String | 被点击 tabItem 的页面路径                                    |
|                                     |                                                              | text                                             | String | 被点击 tabItem 的按钮文字                                    |
| onShareAppMessage                   | 用户点击右上角分享                                           | 微信小程序、百度小程序、头条小程序、支付宝小程序 |        |                                                              |
| onPageScroll                        | 监听页面滚动，参数为 Object                                  |                                                  |        |                                                              |
|                                     | 参数说明：                                                   |                                                  |        |                                                              |
|                                     |                                                              | 属性：                                           | 类型： | 说明                                                         |
|                                     |                                                              | scrollTop                                        | Number | 页面在垂直方向已滚动的距离（单位 px）                        |
| onNavigationBarButtonTap            | 监听原生标题栏按钮点击事件，参数为 Object                    | 5+app、H5                                        |        |                                                              |
|                                     | 参数说明：                                                   |                                                  |        |                                                              |
|                                     |                                                              | 属性                                             | 类型   | 说明                                                         |
|                                     |                                                              | index                                            | Number | 原生标题栏按钮数组的下标                                     |
| onBackPress                         | 监听页面返回                                                 | 5+app、H5                                        |        |                                                              |
|                                     | 回调参数对象说明：                                           |                                                  |        |                                                              |
|                                     |                                                              | 属性                                             | 类型   | 说明                                                         |
|                                     |                                                              | form                                             | String | 触发返回行为的来源：'backbutton'——左上角导航栏按钮及安卓返回键；'navigateBack'——uni.navigateBack() 方法。 |
| onNavigationBarSearchInputChanged   | 监听原生标题栏搜索输入框输入内容变化事件                     | 5+app、H5                                        |        |                                                              |
| onNavigationBarSearchInputConfirmed | 监听原生标题栏搜索输入框搜索事件，用户点击软键盘上的“搜索”按钮时触发。 | 5+app、H5                                        |        |                                                              |
| onNavigationBarSearchInputClicked   | 监听原生标题栏搜索输入框点击事件                             | 5+app、H5                                        |        |                                                              |

- nvue 页面支持的生命周期参考：[nvue 生命周期介绍](https://uniapp.dcloud.io/use-weex?id=%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F)

### 路由

`uni-app` 路由全部交给框架统一管理，开发者需要在 `pages.json` 里配置**每个路由页面的路径及页面样式**，不支持 `vue Router`

#### 路由跳转

`uni-app` 两种跳转方式：

- 使用 `navigator` 组件跳转
- 调用 API 跳转

#### 页面栈

页面`以栈的形式管理当前所有页面`，当**发生路由切换**的时候，页面栈的表现如下：

| 路由方式   | 页面栈表现                        | 触发时机                                                     |
| ---------- | --------------------------------- | ------------------------------------------------------------ |
| 初始化     | 新页面入栈                        | uni-app 打开的第一个页面                                     |
| 打开新页面 | 新页面入栈                        | 调用 API [uni.navigateTo](https://uniapp.dcloud.io/api/router?id=navigateto)、使用组件 [ <navigator open-type="navigateTo"/> ](https://uniapp.dcloud.io/component/navigator?id=navigator) |
| 页面重定向 | 当前页面出栈，新页面入栈          | 调用 API [uni.redirectTo]()、使用组件 [ <navigator open-type="redirectTo"/> ]() |
| 页面返回   | 页面不断出栈，直到目标返回页      | 调用 API [uni.navigateBack]() 、使用组件 [<navigator open-type="navigateBack"/>]() 、用户按左上角返回按钮，安卓用户点击物理 back 按钮 |
| tab 切换   | 页面全部出栈，只留下新的 tab 页面 | 调用 API [uni.switchTab]() 、使用组件 [<navigator open-type="switchTab"/>]() 、用户切换 tab |
| 重加载     | 页面全部出栈，只留下新的页面      | 调用 API [uni.reLaunch]() 、使用组件 [<navigator open-type="reLaunch"/>]() |

**getCurrentPages()**

`getCurrentPages()` 函数用于`获取当前页面栈的实例`，**以数组形式按栈的顺序给出**，第一个元素为首页，最后一个元素为当前页面。

**注：** `getCurrentPages()` 仅用于展示页面栈的情况，请勿修改页面栈，以免造成页面状态错误。

每个页面实例的方法属性列表：

| 方法                  | 描述                            | 平台说明 |
| --------------------- | ------------------------------- | -------- |
| page.$getAppWebview() | 获取当前页面的 webview 对象实例 | 5+App    |
| page.route            | 获取当前页面的路由              |          |

- `navigateTo`、`redirectTo` 只能打开 非 tabBar 页面
- `switchTab` 只能打开 `tabBar` 页面
- `reLaunch`  可以打开任意页面
- 页面底部的 `tabBar` 由页面决定，即只要是定义为 `tabBar` 的页面，地步都有 tabBar
- 不能在 `App.vue` 里面进行页面跳转

**$getAppWebview()**

`uni-app` 在 `getCurrentPages()` 获得的页面里内置一个方法 `$getAppWebview()` 可以得到当前 webview 的对象实例，从而获得 webview 的 style、id 等属性，也可设置 webview 的style。

~~~js
var pages = getCurrentPages();
var page = pages[pages.length - 1];
// #ifdef APP-PLUS
var currentWebview = page.$getAppWebview()；
console.log(currentWebview.id) // 获得当前 webview 的 id
currentWebview.setStyle({ // 设置当前 webview 的 style
    titleNView: {
        titleText: 'test'
    }
})
~~~

#### 运行环境判断

- `process.env.NODE_ENV`  判断**当前环境**是开发环境还是生产环境（HBuilderX 中，点击运行编译出来的代码是开发环境， 点击发行编译出来的代码是生产环境）

- `uni.getSystemInfoSync().platform` 判断**客户端环境**是 Android、iOS 还是小程序开发工具（百度小程序、微信小程序、支付宝小程序 开发工具中使用 `uni.getSystemInfoSync().platform` 返回值均为 devtools）

- 代码块
  - HBuilderX 中的 代码块 `uEnvDev`、`uEnvProd` 可以快速生成对应 `development`、`production`  的 运行环境判定代码

#### 页面样式与布局

- **upx** 作为默认尺寸单位，upx 是相对于基准宽度的单位，可以根据屏幕宽度进行自适应。
  - uni-app 规定屏幕基准宽度 750upx。

- 开发者可以通过设计稿基准宽度计算页面元素 upx 值，设计稿 1px 与 框架样式 1upx 转换公式：
  - `设计稿 1px / 设计稿基准宽度 = 框架样式 1upx / 750upx`
- 换言之，页面元素宽度 在 `uni-app` 中的宽度计算公式：
  - `框架样式（upx） = 750 * 元素在设计稿中的宽度 / 设计稿基准宽度`

~~~js
// 若设计稿宽度为 640px，元素 A 在设计稿上的宽度为 100px ，那么元素 A 在 uni-app  里面的宽度应该设为：
 750 * 100 / 640 = 117upx  // 框架样式
~~~

##### upx2px

动态绑定的 `style` 不支持 直接使用 `upx`

~~~js
//  静态 upx 赋值生效
<view class="test" style="width:200upx;"></view>
//  动态绑定不生效
<view class="test" :style="{width: winWidth + 'upx;'}"></view>
~~~

`uni.upx2px(Number)` 转换为 px 后再赋值

~~~js
<template>
    <view class="test" style="width:200px;"></view>
</template>
<script>
export default({
    computed: {
		setWidth(){
            return uni.upx2px(200) + 'px';
		}
    }
})
</script>
~~~

##### 样式导入

`@import` 语句可以导入外联样式表，@import  后需要导入的外联样式表的**相对路径**，用 `;` 表示语句结束

~~~js
<style>
    @import '相对路径';
</style>
~~~

##### 内联样式

框架组件支持使用 style、class 属性来控制组件的样式。

- style : 静态的样式统一写到 class 中。style 接收动态的样式，在运行时会进行解析，避免将静态的样式写进 style 中，以免影响渲染速度
- class ： 用于指定样式规则，其**属性值**是**样式规则中类选择器名**（样式类名）的集合，样式类名用空格分隔

##### 选择器

- .class
- #id
- element
- element, element **????**
- ::after （伪元素）  元素后
- ::before   （伪元素）元素前

##### 全局样式与局部样式

在 `App.vue` 中定义的样式为 全局样式，作用于每一个页面

在 `pages` 目录下的 vue 文件中定义的样式为局部样式，只作用在对应的页面，并会**覆盖App.vue 中相同的选择器**

##### css 变量

uni-app 提供内置 CSS 变量

| CSS 变量            | 描述                     | 5 + App                              | 小程序 | H5                 |
| ------------------- | ------------------------ | ------------------------------------ | ------ | ------------------ |
| --status-bar-height | 系统状态栏高度           | 系统状态栏高度（getStatusbarHeight） | 25px   | 0                  |
| --window-top        | 内容区域距离`顶部`的距离 | 0                                    | 0      | NavigationBar 高度 |
| --window-bottom     | 内容区域距离`底部`的距离 | 0                                    | 0      | TabBar 高度        |

eg： `var(--status-bar-height)`   状态栏高度

~~~css
<style>
.index {
    height: var(--status-bar-height);
}
</style>
~~~

##### 固定值

以下组件的高度是固定的，不可修改

| 组件          | 描述       | 5+App | H5   |
| ------------- | ---------- | ----- | ---- |
| NavigationBar | 导航栏     | 44px  | 44px |
| TabBar        | 底部选项卡 | 56px  | 50px |

##### Flex 布局

建议使用 Flex 布局，文档 [A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

##### 背景图片

支持使用 在 css 里设置背景图片，使用方式与普通 `web` 项目相同

- 支持 base64 格式图片
- 支持网络路径图片
- `uni-app` 使用本地路径图片：
  - 图片小于 40kb，`uni-app` 会自动将其转化为 base64 格式
  - 图片大于等于 40kb，需要开发者自己将其转换为 base64 格式使用或将其挪用到服务器上，从网络地址引用
  - 本地图片的引用路径仅支持以 **`~@` 开头的绝对路径（不支持相对路径）**

~~~css
.test {
    background-image: url('~@/static/logo.png');
}
~~~

##### 字体图标

支持使用字体图标，使用方式与普通 `web` 项目相同：

- 支持 base64 格式字体图标
- 支持网络路径字体图标
- **网络路径必须加协议头  https**
- 从 `http://www.iconfont.cn` 上拷贝的代码，默认是没加协议头的
-  `uni-app` 本地路径图标字体支持情况
  - 字体文件小于 40kb，`uni-app` 会自动将其转化为 base64 格式；
  - 字体文件大于等于 40kb， 需开发者自己转换，否则使用将不生效；
  - 字体文件的引用路径仅支持以 ~@ 开头的绝对路径（不支持相对路径）。

##### `<template/> && <block/>`

支持在 template 模板中嵌套 `<template/>` 和 `<block/>`，用来进行 [条件渲染](https://uniapp.dcloud.io/use?id=%E6%9D%A1%E4%BB%B6%E6%B8%B2%E6%9F%93) && [列表渲染](https://uniapp.dcloud.io/use?id=列表渲染)。

并不是一个组件，仅仅是一个包装元素，不会再页面中做任何渲染，只接受控制属性

#### NPM 支持

支持使用 npm 安装第三方包

- 初始化 npm 工程

~~~cmd
若项目之前未使用 npm 管理依赖（项目根目录下无 package.json 文件），先在项目根目录执行命令初始化 npm 工程：

npm init -y
~~~

- 安装依赖

~~~js
在项目根目录执行命令安装 npm 包：

npm install packageName --save
~~~

- 使用

~~~
安装完即可使用 npm 包，js 中引入 npm 包

import package from 'packageName'
const package = require('packageName')
~~~

- node_modules 目录必须在项目根目录下
- 支持安装 mpvue 组件，不支持直接使用 vue 组件和小程序自定义组件，[小程序组件](https://uniapp.dcloud.io/frame?id=%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6%E6%94%AF%E6%8C%81)
- 支持安装js 模板，安装的模板以及依赖的模板使用 的 API 必须是 uni-app 已有的 API（兼容小程序 API） ，支持 `高德地图微信小程序SDK`

#### TypeScript 支持

**在 vue 文件的 script 节点声明 lang="ts"**

声明 `lang="ts"` 后，该 vue 文件 import 进来的所有 vue 组件，均需要使用 ts 编写

















