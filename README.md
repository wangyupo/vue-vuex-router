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

### 更多自定义配置
See [Configuration Reference](https://cli.vuejs.org/config/).
