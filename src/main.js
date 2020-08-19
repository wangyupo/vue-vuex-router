import Vue from 'vue'
import App from './App.vue'
<<<<<<< HEAD
import router from './router'
import store from './store'
import i18n from './locale'
import filters from './filters'
import 'amfe-flexible'
=======
import router from './router' // vue-router配置
import store from './store' // vuex配置
import i18n from './locale' // 国际化配置
import filters from './filters' // vue过滤器
>>>>>>> master

// 自定义的toast（这里仅做示例，需自己根据需求变动）
import Toast from './components/toast/index'
Vue.use(Toast);

// 消除 click 移动浏览器300ms延迟
import attachFastClick from 'fastclick'
attachFastClick.attach(document.body)

Vue.config.productionTip = false


// 如果是非线上环境，加载 VConsole（移动端适用）
// if (process.env.NODE_ENV !== 'production') {
//     var VConsole = require('vconsole/dist/vconsole.min.js');
//     var vConsole = new VConsole();
// }

Vue.config.productionTip = false

// 全局过滤器
Object.keys(filters).forEach(filterName => {
    Vue.filter(filterName, filters[filterName])
})

/* eslint-disable no-new */
new Vue({
    router,
    store,
    i18n,
    render: h => h(App)
}).$mount('#app')
