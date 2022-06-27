import { createRouter, createWebHashHistory } from "vue-router";
import Home from '../views/home/Home.vue';

const routes = [
    {
        path: '/',// path 是路径
        redirect: '/login' // 重定向 如果访问/结尾，就重定向到Login页面去
    },
    {
        path: '/login',
        component: () => import(/*webpackChunkName:'Login'*/'../views/userCenter/Login/Login.vue')
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/activityDetail',
        component: () => import(/*webpackChunkName:'ActivityDetail'*/'../views/act/ActivityDetail.vue')
    },
]

const router = createRouter({
    // 官方提示你  hash 比较简单
    // create：创建
    // web 浏览器
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    // creaWebHistory() // 这个方法是替换成 history 路由模式的方法
    history: createWebHashHistory(),// 需要换成 history 方法的话  把当前这一行的方法替换成creaWebHistory（）就好了
    routes, // `routes: routes` 的缩写
})

export default router;