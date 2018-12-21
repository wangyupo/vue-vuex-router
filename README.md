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

组件库使用滴滴的 [cube-ui](https://didi.github.io/cube-ui/#/zh-CN)，在 src/cube-ui.js 里按需引入，并且可以在 src/theme.styl 里修改组件默认样式。

## 移动端适配

移动端适配采用 [amfe-flexible](https://github.com/amfe/lib-flexible)，在 main.js 中引入，使用的时候按照设计稿输入px，插件会自动实现rem的转换。

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

4、格式化方法

数据的格式化，如时间戳、隐藏手机号、格式化银行卡等操作，不建议在vue页面中用方法修改数据，建议在 fliters 中说明过滤器，然后在模版中 {{data | fliter}} 格式化数据，可以使数据更干净。

### 更多自定义配置
See [Configuration Reference](https://cli.vuejs.org/config/).
