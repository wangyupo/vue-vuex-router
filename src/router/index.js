import Vue from 'vue'
import Router from 'vue-router'

// 正常加载
// import Home from '../views/home'
// import About from '../views/About'

// 按需（懒）加载（vue实现）
const Home = () => import( /* webpackChunkName: "home" */ '../views/home')
const About = () => import( /* webpackChunkName: "about" */ '../views/about')

// 按需（懒）加载（webpack动态导入）
// require.ensure() 是 webpack 特有的，已经被 import() 取代。大家理解其作用即可，参考issues —— https://github.com/wangyupo/vue-vuex-router/issues/1
// const Home = r => require.ensure([], () => r(require('../views/home')), 'home')
// const About = r => require.ensure([], () => r(require('../views/About')), 'about')

Vue.use(Router)

let base = `${process.env.BASE_URL}` // 动态获取二级目录

export default new Router({
    mode: 'history',
    base: base,
    routes: [{
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '*',
            redirect: '/'
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return {
                x: 0,
                y: 0
            }
        }
    }
})
