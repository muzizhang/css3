# vue

## API

### keep-alive

keep-alive 的理解？

>

## 插件

插件的作用：

​	通常会为 Vue 添加全局功能。插件的范围没有限制，一般有以下几种。

- 添加全局方法或者属性，如： `vue-custom-element`
- 添加全局资源：指令/过滤器/过渡 等。`vue-touch`
- 通过全局 mixin 方法添加一些组件选项。`vue-router`
- 添加 vue 实例方法，通过把它们添加到 Vue.prototype 上实现。
- 一个库，提供自己的 API，同时提供上面提到的一个或多个功能。 `vue-router`

### 使用插件

通过全局方法 `Vue.use()` 使用插件。

使用条件：

​	需要在调用 `new Vue()` 启动应用之前完成

~~~js
//  调用 `MyPlugin.install(Vue)`
Vue.use(MyPlugin)

new Vue({
    //  options
})




也可以传入一个选项对象
Vue.use(MyPlugin, {someOption: true})
~~~

`Vue.use` 会自动阻止多次注册相同插件，只会注册一次该插件。

Vue.js 官方提供的一些插件（`vue-router`）在检测到 Vue 是可访问的全局变量时会自动调用 `Vue.use()` 。 但是在 CommonJS 的模块环境中，应该始终显示地调用 `Vue.use()`

~~~js
//  用 Browserify 或 webpack 提供的 CommonJS  模块环境时
var Vue = require('vue')
var VueRouter = require('vue-router')

//  不要忘记调用此方法
Vue.use(VueRouter）
~~~

### 开发插件

Vue.js 插件有一个公开方法 **install** 。 

`install` 参数：

- 参数一：         `Vue` 是构造器
- 参数二：         可选的选项对象

~~~js
MyPlugin.install = function (Vue, options) {
    //  1、添加全局方法或属性
    Vue.myGlobalMethod = function() {
        //  逻辑.....
    }
    //  2、添加全局资源
    Vue.directive('my-directive', {
        bind(el, binding, vnode, oldVnode) {
            // 逻辑
        }
        ......
    })
    //  3、注入组件
    Vue.mixin({
        created: function() {
            //  逻辑...
        }
        ......
    })
    //  4、添加实例方法
    Vue.prototype.$myMethod = function(methodOptions) {
        //  逻辑....
    }
}
~~~

## Vue.use(plugin)

定义：

​	vue.use() 往全局注入一个插件，供全局直接使用，不需要单独引用

~~~js
//  代码理解

import Router from 'vue-router'
//  入口文件全局注入 vue-router，从而可以在全局中使用  this.$route
Vue.use(Router)

//  如果不使用 vue.use  ，在组件中使用都的单独引入
import Router from 'vue-router'

import Router from 'vue-router'
~~~

参数： 

​	`{Object | function} plugin`

用法：

​	安装Vue.js 插件。如果插件是一个对象，必须提供 install 方法。如果插件是一个函数，它会被作为 install 方法。install 方法调用时，会将 Vue 作为参数传入。

​	该方法需要在调用 `new Vue()` 之前被调用。

​	当 install 方法被用一个插件多次调用，插件将只会被安装一次。