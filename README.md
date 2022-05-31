<p align="center"><img src="https://wangyupo.github.io/best-cli/_nuxt/img/708a1cb.png" alt="vue-vuex-router" width="100"/></p>
<h2 align="center">vue-vuex-router</h2>
<p align="center"><b>基于Vue CLI 3构建的项目初始化文件，master、mobile两个分支，pc端、mobile端开箱即用。</b></p>

## 文档内容

- [注意](#注意)
- [安装和使用](#安装和使用)
- [项目结构](#项目结构)
- [推荐规范](#推荐规范)
- [常见问题](#常见问题)
- [更多自定义配置](#更多自定义配置)
- [License](#License)

## 注意

注意！这是一份Vue的最佳实践，包括了实践展示，但是并不包括新手入门，如果你是Vue新手，可以按如下路径学习Vue：

```
1、用Vue+Vue-Router做一个展示网站。网站按页面划分模块，每个页面按section（部分）再划分模块。培养自己的模块化思想。
2、用Vue+Vue-Router+Axios做一个带请求的网站。把请求结果放在页面上展示出来。锻炼请求接口的能力，了解前后端分离思想。
3、用Vue+Vue-Router+Axios+Vuex做一个能管理数据的网站。把请求放到Vuex中，用store管理数据。搞懂Vuex在开发中的帮助，提升项目开发能力。

做完上面三步你就已经入门Vue了，接下来就可以用这个最佳实践来构建更优雅的代码、组织更简洁的项目。
```

## 安装和使用

```
初始化项目
./init.sh

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
    - fliters           // 公共过滤器
    - layouts           // 外层布局
    - locale            // i18n语言目录
    - router            // 路由
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

[html2canvas](https://html2canvas.hertzen.com/)

[qrcodeJs - 生成二维码](https://www.jianshu.com/p/2e5e2f5a091c)

[Animate.css](https://daneden.github.io/animate.css/)

## 推荐规范

1、命名

组件命名:

```
文件与组件命名保持一致，使用 PascalCase，即驼峰命名法，如：CountDown.vue 为一个倒计时组件。

参考链接：
https://cn.vuejs.org/v2/guide/components-registration.html#%E7%BB%84%E4%BB%B6%E5%90%8D%E5%A4%A7%E5%B0%8F%E5%86%99
```

页面命名：

```
Vue中什么都是组件，包括页面，但是我们为了与UI、业务组件作出区分，凡是页面组件的命名均以"小驼峰法"命名，如：home.vue。
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
[风格指南](https://cn.vuejs.org/v2/style-guide/)

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

@import "~@/scss/_var.css";
@import "~@/assets/iconfont/iconfont.css";
background: url("~@/assets/img/xxx.png");

原理：
CSS loader 会把把非根路径的url解释为相对路径，加~前缀才会解释成模块路径。

参考文档：
https://cli.vuejs.org/zh/guide/css.html#%E5%BC%95%E7%94%A8%E9%9D%99%E6%80%81%E8%B5%84%E6%BA%90
https://cli.vuejs.org/zh/guide/html-and-static-assets.html#url-%E8%BD%AC%E6%8D%A2%E8%A7%84%E5%88%99
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
<style>
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

12、前端好多日期展示，每次在methods里面处理好麻烦，我又不想修改原数据，有更方便的办法吗？

```
有！你完全不需要每次写方法处理，只需要在需要<template>模版中用 "| 过滤器" 即可！

因为我们全局混入了过滤器，内置了常用的方法，因此，对待时间戳转日期、隐藏手机号中间四位等要求，我们可以这样做：

时间戳：{{1544179366 | timeFilter}} => 2018-12-07 18:42:46
手机格式化：{{15311959057 | formatPhone}} => 153****9057
银行卡格式化：{{123123123123132 | formatBank}} => 1231 2312 3123 132
千分位分隔符：{{5000039 | toThousands}} => 5,000,039

如果你需要自定义一些方法，可以在 src/filters/index.js 里自己添加，用法和示例一样。

看，就是如此方便！向一堆重复方法说Bye Bye吧！

更多使用方法参考官方文档：https://cn.vuejs.org/v2/guide/filters.html
```

13、我用你这个框架开发微信公众号，在做微信分享的时候wx.config总是不过，一直报"invalid signature"，后端也找不出毛病来，你给我解决解决吧

```
vue这样引入sdk
yarn add weixin-js-sdk
import wx from 'weixin-js-sdk'

别的先不说，我先给你解决方案：
1、vue-router用hash模式
2、wx.config里面的url要动态获取并且encode，直接把这个换上去 encodeURIComponent(location.href.split('#')[0])
3、wx.config放到页面mounted里面，生命周期放的越前越好

为什么？
首先，wx.config里面的url必须是动态获取的，不能写死，因为在分享的时候微信会给你在链接里下毒，没毒不让分享。
其次，url必须和你后台配置的js安全域名一样，本地测试不了你可以放到开发环境测试，实在不行你过来打我。
最后，微信开发者文档在这里，有不懂的加群问我，群号在最后 https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1421141115
```

14、为什么我关了node服务，再次yarn serve的时候，端口号就变了，每关一次，端口号就会变一次，调试起来好麻烦呀，能不能让他不变？

```
如果你是mac电脑，试试用 control + c 来关闭node服务，而不要用 control + z

windows电脑，我不知道
```

15、我用你这个开发微信公众号，在IOS手机上下滑动的时候，整个页面就被拖着走，这个怎么解决？

```
使用iNoBounce，使用方法：
1、在public文件夹下自己创建一份inobounce.min.js
2、然后在index.html加这段代码 <script src="./inobounce.min.js"></script>

github地址：https://github.com/wangyupo/iNoBounce
```

16、加上iNoBounce以后IOS不能滚动什么情况？部分页面不能滚动又是什么情况？

```
所有页面都不能滚动
在最外层加这样的css：
overflow-y:scroll;
-webkit-overflow-scrolling:touch;

如果有单个页面不滚动，比如你在页面里面加了vant的list组件，发现页面不能上下滑动
本页面最外层的css这样写：
height: 100vh;
overflow-y:scroll;
-webkit-overflow-scrolling:touch;
```

17、ios input获取焦点有延迟怎么解决？

```
//main.js 引入
import FastClick from 'fastclick';
FastClick.attach(document.body);
FastClick.prototype.focus = (ele) => { 'use strict'; ele.focus(); }; //修改focus()方法

参考链接：https://github.com/ftlabs/fastclick/issues/583
```

18、我公司有多个环境，我想打包出对应的代码包来，我该怎么弄？

```
.env 文件里配置所有环境都能用的变量
.env.development 文件里配置开发环境的变量
.env.production 文件里配置生产环境的变量
.env.xx 文件内变量的使用方法都是 process.env. 开头，后跟你定义的变量名称，如 request.js 中的 process.env.VUE_APP_API ，用来控制不同打包情况下的api请求地址不同。

最后需要打包 development 环境的包，就运行 yarn devbuild，打包生产环境的包，就运行 yarn build。

参考链接：
https://cli.vuejs.org/zh/guide/mode-and-env.html#%E6%A8%A1%E5%BC%8F
https://blog.csdn.net/qq_36407748/article/details/82050976
```

## 更多自定义配置
See [Configuration Reference](https://cli.vuejs.org/config/)

## License

[MIT © Richard McRichface.](https://github.com/wangyupo/vue-vuex-router/blob/master/LICENSE)
