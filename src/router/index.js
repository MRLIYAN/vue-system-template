import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    beforeEnter: (to, from, next) => {
      let status = localStorage.getItem("login");
      status == 'y' ? next('/layout') : next('/login');
    }
  },
  {
    path:'/login',
    name:'login',
    component:()=>import('@/views/login'),
    beforeEnter: (to, from, next) => {
      let status = localStorage.getItem("login");
      status == 'y' ? next('/layout') : next();
    }
  },
  {
    path:'/layout',
    name:'layout',
    component:()=>import('@/views/layout')
  },
  {
    path:'/404',
    name:'404',
    component:()=>import('@/views/404')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.length === 0) {//如果未匹配到路由
    from.name ? next({ name:from.name}) : next('/404'); //如果上级也未匹配到路由则跳转登录页面，如果上级能匹配到则转上级路由
  } else {
    next(); //如果匹配到正确跳转
  }
});


// router.onError(callback=>{
//   router.push({path:'/404'})
//   throw new Error(callback);
// })


export default router
