/**
 * 配置编译环境和线上环境之间的切换
 *
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * credential: 跨域
 *
 */

const dev = {
    routerMode: 'history', // hash

    /* beta */
    baseUrl: `${location.origin}`,         // 自定义反向代理
    credential: true,
};

const prod = {
    ...dev,
};

export default process.env.NODE_ENV === 'development' ? dev : prod;
