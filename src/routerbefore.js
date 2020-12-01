import router from '@/router'
import store from '@/store'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import {getToken,removeToken} from '@/utils/user.js'

const whiteList = ['/login']; 
router.beforeEach(async(to,from,next) => {
    NProgress.start();
    let token = getToken();
    if(token){
        //判断是不是刷新页面，刷新页面没数据，是刷新页面就重新请求，这句必须写，否则第一次登录进入没有菜单，或者进入404返回路由出现死循环
        if(store.getters['router/getRoutes'] == 0){
            try {
                await store.dispatch('user/getUserInfo')
                router.addRoutes(store.getters['router/getRoutes'])
                console.log(store.getters['router/getRoutes']);
            } catch (error) {
                console.log(error);
                removeToken();
                next('/login')
            }
        }
        if(to.path == '/login'){
            next('/');
        }else {
            next();
        }
    }else{
        if (whiteList.indexOf(to.path) !== -1) {
            next()
        } else {
            next('/login')
        }
        
    }
})

router.afterEach(() => {
    NProgress.done();
})

