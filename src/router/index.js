import Vue from 'vue'
import Router from 'vue-router'

// 按需（懒）加载
const DemoPage = () => import( /* webpackChunkName: "home" */ '../views/demo.vue')
const Home = () => import( /* webpackChunkName: "home" */ '../views/home/index.vue')
const ClassDetail = () => import( /* webpackChunkName: "home" */ '../views/home/classDetail/index.vue')
const My = () => import( /* webpackChunkName: "home" */ '../views/my/index.vue')

Vue.use(Router)

let base = `${process.env.BASE_URL}` // 动态获取二级目录

export default new Router({
    mode: 'history',
    base: base,
    routes: [{
            path: '/demo',
            name: 'demopage',
            component: DemoPage
        },
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/class/:id',
            name: 'classDetail',
            component: ClassDetail,
        },
        {
            path: '/my',
            name: 'my',
            component: My
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
