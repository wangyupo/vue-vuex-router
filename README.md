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
    - container         // 外层布局
    - store             // Vuex管理目录
    - style             // 公共样式目录
    - views             // 页面目录
```

## 组件库

组件库使用滴滴的 [cube-ui](https://didi.github.io/cube-ui/#/zh-CN)，在 src/cube-ui.js 里按需引入，并且可以在 src/theme.styl 里修改组件默认样式。

## 移动端适配

移动端适配采用 [amfe-flexible](https://github.com/amfe/lib-flexible)，在 main.js 中引入，使用的时候按照设计稿输入px，插件会自动实现rem的转换。

### 更多自定义配置
See [Configuration Reference](https://cli.vuejs.org/config/).
