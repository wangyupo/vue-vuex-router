## 说明

vueCli3项目脚手架

## 常用命令

```
安装插件
yarn install

项目启动
yarn serve

项目打包
yarn build

分析打包体积
yarn analyz

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
    - fliters           // 公共过滤器
    - layouts           // 外层布局
    - router            // 路由
    - store             // Vuex管理目录
    - style             // 公共样式目录
    - views             // 页面目录
```

## 推荐规范

1、命名

文件命名:

```
采用小写驼峰，如：countDown.vue 为一个倒计时组件，home.vue 为首页。
```

变量命名：
```
常量——全大写+下划线，如：

let IMAGE_SERVER = 'http://img.alibaba.com';
let MAX_LENGTH = 200;

变量——小驼峰式命名法，如：
let maxCount = 10;
let tableTitle = 'LoginTable';

全局变量——g+变量名，如：
var gConfig = {
   a:1,
   b:2
};

私有变量——下划线+变量名，如：
let _name = '小明';
```
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

即Vuex就是单纯做数据处理的，它应该与页面分开，保持数据的独立和单向性。
```

5、格式化方法

数据的格式化，如时间戳、隐藏手机号、格式化银行卡等操作，不建议在vue页面中用方法修改数据，建议在 fliters 中说明过滤器，然后在模版中 {{data | fliter}} 格式化数据，可以使数据更干净。

6、语言

建议一直使用i18n作为语言的处理工具，方便国际化和统一管理，它在 config/lang 中（建议按页面区分）。

它的使用方法是，在.vue文件中 {{$t('name')}}

在js中，获取当前语言的方法是，console.log(this.$i18n.locale)，设置语言的方法同样 this.$18n.local = 'zh-CN'

7、vue-router

统一采用按需加载，如：const Home = () => import( /* webpackChunkName: "home" */ '../views/home.vue')，其中的 webpackChunkName 指的是打包出来的包名。

8、布局

布局在 layouts 文件夹中，然后在 App.vue 中引入，放在了路由的最外层，充当整个项目的公共布局，如：页眉、页脚等。

9、参考

[凹凸实验室前端代码规范](https://guide.aotu.io/docs/)

## 常见问题

1、yarn push 不能用怎么办？

```
命令行工具切到项目目录下，执行 chmod 755 push.sh
```

2、如何用手机调试，或者让别人看到？

```
项目启动的时候已经是你的本地ip了，只需要将手机和电脑连在同一个网络环境下（如：连同一个WIFI），复制地址栏的地址发送给手机即可访问。

之后，你改动任何一个地方，就能方便的在手机上看到改动了。也可以将这个地址发给同一网络环境的其他人，他们也就可以看到效果了。
```

3、我要开发移动端H5怎么做？

```
1、切换到mobile_template分支，这是为移动端开发专门准备的模版，执行命令：git checkout mobile_template。
2、查看设计稿的宽度，如750px、375px。
3、将设计稿宽度/10，然后修改 package.json 中的 postcss-px2rem 下的 remUnit
4、样式、css等就可以按照设计稿的大小用px来写了

例子：
"postcss": {
    "plugins": {
        "autoprefixer": {},
        "postcss-px2rem": {
            "remUnit": 37.5         // 修改这个值为"设计稿宽度/10"
        }
    }
},
```

4、我想把格式化后4个空格改成2个怎么改？

```
.editorconfig 中 indent_size = 2 即可
```

5、我怎么在组件中引入图片？

```
图片目录在src/assets下，在组件中引入方式如下：
<img :src="reuqire('@/assets/img/demo.png')" alt="" />

Tips：建议动态引入，避免调整页面带来的路径问题
```

6、我怎么无视层级导入css，或是引入图片？

```
使用 ~

@import "~@/assets/iconfont/iconfont.css";
background: url("~@/assets/img/xxx.png");

原理：
CSS loader 会把把非根路径的url解释为相对路径，加~前缀才会解释成模块路径。
```

7、我想修改Toast的样式怎么办？

```
src/components/toast/toast.vue 
修改此文件即可，更多修改可以查找 "vue插件" 资料。
```

8、我想在本地和服务端调试怎么弄？

```
修改 vue.config.js 中的 proxy 为你的服务端地址即可，如：

proxy: 'http://xxx.com'
```

9、我引入了第三方组件，如何修改样式？

```
有两个方法可以解决这个问题：

方法一：
在scoped的scss中使用 >>> 或者 /deep/ ，它们是vue提供的"深度作用选择器"，你可以参考 —— https://vue-loader.vuejs.org/zh/guide/scoped-css.html#%E6%B7%B1%E5%BA%A6%E4%BD%9C%E7%94%A8%E9%80%89%E6%8B%A9%E5%99%A8
<style scoped>
    .a >>> .b { /* ... */ }
    .a /deep/ .b { /* ... */ }
</style>

方法二：
单独写一个style，不加scoped，在这里面单独修改
<style scoped>
    .a .b { /* ... */ }
</style>
```

10、UI说我移动端的border太粗了，和他UI严重不符，怎么解决？

```
移动端屏幕像素比(dpr)导致的，如果你开发移动端，我为你准备了现成的1px border，不要使用border: 1px solid #ff6632，而是用：

@include border-bottom();
@include border-top();
@include border-left();
@include border-right();
@include border();

同时你也可以传入一些配置项来设置border的颜色、粗细等等，详细的请切换到 mobile_template 分支，查看 src/style/mixin.scss 里面的 border 类。
```

11、在数学运算时，出现了1.1999999999这种无限小数位，我该怎么解决啊？

```
浮点数运算失精，可以用 number-precision 这个插件，具体使用方法为：

yarn add number-precision

import NP from 'number-precision'

NP.plus(0.1, 0.2)

......

更多使用方法参考官方文档：https://github.com/nefe/number-precision
```

## 更多自定义配置
See [Configuration Reference](https://cli.vuejs.org/config/).

如果有任何问题，欢迎大家入群交流，群号：739637719
