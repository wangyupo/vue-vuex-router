import Vue from 'vue'
import Router from 'vue-router'

// 正常加载
// import Home from '../views/home.vue'
// import About from '../views/About.vue'

// 按需（懒）加载（vue实现）
const Home = () => import( /* webpackChunkName: "home" */ '../views/home.vue')
const About = () => import( /* webpackChunkName: "about" */ '../views/about.vue')

// 按需（懒）加载（webpack实现）
// const Home = r => require.ensure([], () => r(require('../views/home.vue')), 'home')
// const About = r => require.ensure([], () => r(require('../views/About.vue')), 'about')

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
