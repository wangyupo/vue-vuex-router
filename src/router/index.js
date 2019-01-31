import Vue from 'vue'
import Router from 'vue-router'
import {sessionSetItem} from '../common/util'

// 按需（懒）加载
const Home = () => import( /* webpackChunkName: "home" */ '../views/home')
const My = () => import( /* webpackChunkName: "home" */ '../views/my')

Vue.use(Router)

let base = `${process.env.BASE_URL}` // 动态获取二级目录

const router = new Router({
    mode: 'history',
    base: base,
    routes: [{
            path: '/',
            name: 'home',
            component: Home
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
});

router.beforeEach((to, from, next) => {
    sessionSetItem('tabBar', to.name);
    return next()
});

export default router;
