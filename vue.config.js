// vue.config.js
const path = require('path');

function resolve(dir) {
    return path.join(__dirname, dir)
};
module.exports = {
    // 开启生产环境SourceMap
    productionSourceMap: true,
    // 关闭ESLint
    lintOnSave: false,
    devServer: {
        open: false, // 是否自动打开浏览器页面
        host: '127.0.0.1', // 指定使用一个 host。默认是 localhost
        port: 8080, // 端口地址
        https: false, // 使用https提供服务

        // 设置代理
        proxy: {
            "/api": {
                target: "http://api.zhuishushenqi.com", // 域名
                changOrigin: true, //开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
                pathRewrite: {
                    "^/api": ""
                }
            }
        }
    },
    chainWebpack: (config) => {
        config.resolve.alias
            .set('@', resolve('src'))
            .set('assets', resolve('src/assets'))
            .set('components', resolve('src/components'))
    },
    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            return {
            }
        }
    }
}
