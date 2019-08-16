/**
 * sniff
 * 使用场景：查看运行环境，设备，系统等信息
 *
 * @description
 *
 * | 运行环境 | 是否支持 |
 * | :-----: | :-----: |
 * | touch   |   √   |
 * | wechat  |   √   |
 *
 */
let sniff = {
    browsers: {},
    info: {}
}; // 结果

let ua = navigator.userAgent,
    platform = navigator.platform,
    android = ua.match(/(Android);?[\s\/]+([\d.]+)?/), // 匹配 android
    ipad = ua.match(/(iPad).*OS\s([\d_]+)/), // 匹配 ipad
    ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/), // 匹配 ipod
    iphone = ua.match(/(iPhone\sOS)\s([\d_]+)/), // 匹配 iphone
    webApp = ua.indexOf('Safari') === -1; // 匹配 桌面 webApp

let browsers = {
    wechat: ua.match(/(MicroMessenger)\/([\d\.]+)/), // 匹配 weChat
    alipay: ua.match(/(AlipayClient)\/([\d\.]+)/), // 匹配 支付宝
    qq: ua.match(/(MQQBrowser)\/([\d\.]+)/), // 匹配 QQ 浏览器
    weibo: ua.match(/(weibo__)([\d\.]+)/), // 匹配 微博
    uc: ua.match(/(UCBrower)\/([\d\.]+)/), // 匹配 uc
    opera: ua.match(/(Opera)\/([\d\.]+)/) // 匹配 opera
};

// iphone model
let model = ua.match(/(iPhone\sOS).*m\/(\d+\.\d+)/);

// iphoneX model
let iphoneXModel = ['10.3', '10.6'];

// 系统

sniff.ios = sniff.android = sniff.iphone = sniff.ipad = sniff.ipod = false;

if (android) {
    sniff.os = 'android';
    sniff.osVersion = android[2];
    sniff.android = true;
}

if (ipad || iphone || ipod) {
    sniff.os = 'ios';
    sniff.ios = true;
}

if (iphone) {
    sniff.osVersion = iphone[2].replace(/_/g, '.');
    sniff.iphone = true;
    sniff.imobile = true;
    sniff.model = model && model[2];
    // iPhoneX 竖屏宽高
    const iphoneXVerticalWidth = 375;
    const iphoneXVerticalHeight = 812;
    const { width, height } = window.screen || {};
    sniff.iphoneX = iphoneXModel.indexOf(sniff.model) > -1
        || (width === iphoneXVerticalWidth && height === iphoneXVerticalHeight)
        // 考虑横屏情况
        || (width === iphoneXVerticalHeight && height === iphoneXVerticalWidth);
}

if (ipad) {
    sniff.osVersion = ipad[2].replace(/_/g, '.');
    sniff.ipad = true;
}

if (ipod) {
    sniff.osVersion = ipod[3] ? ipod[3].replace(/_/g, '.') : null;
    sniff.ipod = true;
    sniff.imobile = true;
}

// iOS 8+ changed UA
if (sniff.ios && sniff.osVersion && ua.indexOf('Version/') >= 0) {
    if (sniff.osVersion.split('.')[0] === '10') {
        sniff.osVersion = ua.toLowerCase().split('version/')[1].split(' ')[0];
    }
}

if (sniff.osVersion) {
    sniff.osVersionN = parseInt(sniff.osVersion.match(/\d+\.?\d*/)[0]);
}

// 配置

sniff.pixelRatio = window.devicePixelRatio || 1;

sniff.retina = sniff.pixelRatio >= 2;

// 浏览器
for (let key in browsers) {
    if (browsers[key]) {
        webApp = false;
        sniff.browsers[key] = browsers[key][2];
    } else {
        sniff.browsers[key] = false;
    }
}

sniff.webApp = sniff.os === 'ios' && webApp;

// 其他信息
ua.split(' ').forEach((item) => {
    var kv = item.split('/');
    if (kv.length === 2) {
        sniff.info[kv[0]] = kv[1];
    }
});

// PC
sniff.pc = platform.indexOf('Mac') === 0 || platform.indexOf('Win') === 0 || (platform.indexOf('linux') === 0 && !sniff.android);


window.sniff = sniff;

export default sniff;
