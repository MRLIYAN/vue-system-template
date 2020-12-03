import Vue from 'vue'
import VueRouter from 'vue-router'
import layout from '@/views/layout'

//解决多次点击相同路由报错问题：Avoided redundant navigation to current location:""
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}


Vue.use(VueRouter)


  const routes = [
  {
    path: '/',
    component:layout,
    redirect:'/home',
    meta:{
      hidden:"true",
    }
  },
  {
    path:'/layout',
    name:'layout',
    redirect:'/home',
    meta:{
      hidden:'true'
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
  }
]

export const notfoundrouter = [
  {
    path:'*',
    redirect:'/404',
    meta:{
      hidden:"true"
    }
  }
]


export const createRouter = () => new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

const router = createRouter()

//清空路由，重置路由
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}


export default router

