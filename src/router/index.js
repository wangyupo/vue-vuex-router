import Vue from 'vue'
import Router from 'vue-router'

// 按需（懒）加载
const DemoPage = () => import( /* webpackChunkName: "home" */ '../views/demo.vue')
const My = () => import( /* webpackChunkName: "home" */ '../views/my.vue')

Vue.use(Router)

let base = `${process.env.BASE_URL}` // 动态获取二级目录

export default new Router({
    mode: 'history',
    base: base,
    routes: [{
            path: '/',
            name: 'demoPage',
            component: DemoPage
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
