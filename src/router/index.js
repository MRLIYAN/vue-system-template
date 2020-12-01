import Vue from 'vue'
import VueRouter from 'vue-router'
import layout from '@/views/layout'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}


Vue.use(VueRouter)


  const routes = [
  {
    path: '/',
    component:layout,
    redirect:'/layout',
    meta:{
      hidden:"true",
    }
  },
  {
    path:'/login',
    name:'login',
    component:()=>import('@/views/login'),
    meta:{
      hidden:"true",
    }
  },
  {
    path:'/layout',
    name:'layout',
    component:()=>import('@/views/layout'),
    meta:{
      hidden:'true'
    }
  },
  {
    path:'/ele',
    name:'ele',
    component:layout,
    redirect:'/ele/eleform',
    meta:{
      hidden:"true"
    },
    children:[
      {
        path:'eleform',
        name:'eleform',
        component:()=>import('@/eleform'),
      }
    ]
  },
  {
    path:'/404',
    name:'404',
    component:()=>import('@/views/404'),
    meta:{
      hidden:"true"
    }
  },
  {
    path:'*',
    redirect:'/404',
  }
]

export const notfoundrouter = [
  {
    path:'*',
    redirect:'/404',
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

