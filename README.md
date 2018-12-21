# 用 Vue Cli 3 搭建的项目脚手架

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
    - container         // 外层布局
    - store             // Vuex管理目录
    - style             // 公共样式目录
    - views             // 页面目录
```

## 推荐规范

1、命名

采用小写驼峰，如：countDown.vue 为一个倒计时组件，home.vue 为首页

2、样式

样式统一在 style 文件夹里维护
    |- common.scss 里面放公共的、全局的、使用频率比较高的样式，这样可以方便组织样式。如：.hide{display: none;}
    |- mixin.scss 里面放全局的样式方法，已经在webpack中全局引入，使用的时候 @include ct();
    |- reset.scss 里面放页面样式重置的css，不需要修改
    |- var.scss 里面放公共变量，方便全局样式，如：颜色、字体大小等

### 更多自定义配置
See [Configuration Reference](https://cli.vuejs.org/config/).
