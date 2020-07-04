import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    beforeEnter: (to, from, next) => {
      
      if(status === 'y'){
        next('/layout')
      }else{
        next('/layout')  
      }
      
      
    }
  },
  {
    path:'/login',
    name:'login',
    component:()=>import('@/views/login')
  },
  {
    path:'/layout',
    name:'layout',
    component:()=>import('@/views/layout')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
