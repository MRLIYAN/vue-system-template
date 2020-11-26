import router from '@/router'
// import store from './store'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import {getToken} from '@/utils/user.js'

const whiteList = ['/login']; 
router.beforeEach((to,from,next) => {
    NProgress.start();
    let token = getToken();
    if(token){
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

