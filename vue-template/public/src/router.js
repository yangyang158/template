import Vue from 'vue'
import Router from 'vue-router'
const Login = () => import(/* webpackChunkName: 'Login' */ '@pages/login/index.vue')
import Main from '@pages/main-page/index.vue'
const User = () => import(/* webpackChunkName: 'User' */ '@pages/main-page/system-mana/user/index.vue')
const Role = () => import(/* webpackChunkName: 'Role' */ '@pages/main-page/system-mana/role/index.vue')

Vue.use(Router)
export default new Router({
    "routes":[
        {
            path: '/main',
            name: 'Main',
            component: Main,
            children: [{
                path: '/main/user',
                name: 'User',
                component: User
            }, {
                path: '/main/role',
                name: 'Role',
                component: Role
            }],
            redirect: { name: 'User' }
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/',
            redirect: { name: 'Login' }
        }
    ]
})