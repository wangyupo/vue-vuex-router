# 用 Vue Cli 3 搭建的项目脚手架（移动端）

## 常用命令

```
安装插件
yarn install

项目启动
yarn run serve

项目打包
yarn run build

修复ESLint
yarn run lint

提交代码
yarn push
```

## 项目结构

```
- src
    - api               // 接口管理目录
    - assets            // 图片资源目录
    - common            // 公共资源目录(函数库、请求封装)
    - components        // 组件目录
    - config            // 配置文件目录
        - env.js            // 环境配置
        - lang              // 语言目录
    - fliters            // 过滤器
    - container         // 外层布局
    - store             // Vuex管理目录
    - style             // 公共样式目录
    - views             // 页面目录
```

## 组件库

[cube-ui](https://didi.github.io/cube-ui/#/zh-CN)

[vant](https://youzan.github.io/vant/#/zh-CN/intro)

## 移动端适配

移动端适配采用 [amfe-flexible](https://github.com/amfe/lib-flexible)，在 main.js 中引入，使用的时候按照设计稿，在package.json中找到"postcss-px2rem"，然后将设计稿的尺寸除以10，输进去，插件会自动实现rem的转换。

Tips：如果需要使用 px 作为单位，可以把 PX 大写，或者在后面加 /* no */

## 其他组件

[vue-awesome-swiper 滚动组件库](https://github.com/surmon-china/vue-awesome-swiper)
[xgplayer 西瓜播放器](https://h5player.bytedance.com/)

## 推荐规范

1、命名

文件命名采用小写驼峰，如：countDown.vue 为一个倒计时组件，home.vue 为首页。

2、样式

样式统一在 style 文件夹里维护

    |- common.scss  里面放公共的、全局的、使用频率比较高的样式，这样可以方便组织样式。如：.hide{display: none;}
    |- mixin.scss   里面放全局的样式方法，已经在webpack中全局引入，使用的时候 @include ct();
    |- reset.scss   里面放页面样式重置的css，不需要修改
    |- var.scss     里面放公共变量，方便全局样式，如：颜色、字体大小等

3、vuex

store 按页面或者业务划分，然后统一由 store/index.js 输出

所有的mutations方法，需要现在最外层的 mutation-type.js 说明后，然后在单个 mutations.js 中引入使用

4、请求

请求统一在 api 文件夹下管理，可以按照页面或者业务划分。所有的请求放在vuex的action中，不得放在页面内，数据统一存储在state中，取数据用getter，修改用mutations，保持数据的单向性。

```
如何Vuex的作用及处理数据的方式？

在前端可以把Vuex看做后端mvc中的m层，即数据处理层，它与控制器分开，只有它与数据库接触，控制器只是用它调用或是获取数据，并不能直接修改数据库数据，也是需要m层来修改数据库。

而在Vuex（store）中，action就负责取数据（请求接口），getter负责处理数据返回相应格式，mutation负责改变数据（即改变数据库），而state就是那个数据库。

即Vuex就是单纯做数据处理的，它应该与页面分开，保持数据的独立和单向性。
```

5、格式化方法

数据的格式化，如时间戳、隐藏手机号、格式化银行卡等操作，不建议在vue页面中用方法修改数据，建议在 fliters 中说明过滤器，然后在模版中 {{data | fliter}} 格式化数据，可以使数据更干净。

6、语言

建议一直使用i18n作为语言的处理工具，方便国际化和统一管理，它在 config/lang 中（建议按页面区分）。

它的使用方法是，在.vue文件中 {{$t('name')}}

在js中，获取当前语言的方法是，console.log(this.$18n.local)，设置语言的方法同样 this.$18n.local = 'zh-CN'

7、vue-router

统一采用按需加载，如：const Home = () => import( /* webpackChunkName: "home" */ '../views/home.vue')，其中的 webpackChunkName 指的是打包出来的包名。

8、布局

布局在 layouts 文件夹中，然后在 App.vue 中引入，放在了路由的最外层，充当整个项目的公共布局，如：页眉、页脚等。

### 更多自定义配置
See [Configuration Reference](https://cli.vuejs.org/config/).
