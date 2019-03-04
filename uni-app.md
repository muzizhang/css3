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

页面以栈的形式管理当前所有页面，当发生路由切换的时候，页面栈的表现如下：













