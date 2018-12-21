import Vue from 'vue'
import Router from 'vue-router'

// 按需（懒）加载
const Home = () => import( /* webpackChunkName: "home" */ '../views/home.vue')
const About = () => import( /* webpackChunkName: "about" */ '../views/about.vue')

Vue.use(Router)

let base = `${process.env.BASE_URL}` // 动态获取二级目录

export default new Router({
    mode: 'history',
    base: base,
    routes: [
        //地址为空时跳转home页面
        {
            path: '',
            redirect: '/home'
        },
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: About,
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
