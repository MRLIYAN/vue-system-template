import router from '@/router'
import store from '@/store'
import { Message } from 'element-ui'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import {setPageTitle} from '@/utils/setPageTitle'

import {getToken,removeToken} from '@/utils/user.js'

const whiteList = ['/login']; 
router.beforeEach(async(to,from,next) => {
    NProgress.start();
    setPageTitle(to.meta.title)
    let token = getToken();
    if(token){
        // 保存在store中路由不为空则放行 (动态路由添加后需要保存在某个地方，防止页面被刷新后找不到路由)
        if(store.state.user.routes == 0){
            try {
                await store.dispatch('user/getUserInfo')
                router.options.routes = store.getters['user/getRoutes'];
                router.addRoutes(store.getters['user/getRoutes'])
                // 如果 addRoutes 并未完成，路由守卫会一层一层的执行执行，直到 addRoutes 完成，找到对应的路由，不加此句话，刷新页面会空白，找不到路由
                next({...to,repleace:true})
            } catch (error) {
                console.log(error);
                removeToken();
                Message.error(error.toString() || '出现错误！！')
                throw new Error(error);
            }
        }else{
            next();
        }
        if(to.path == '/login'){
            next({path:'/'});
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

