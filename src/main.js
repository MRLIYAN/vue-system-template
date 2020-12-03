import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'normalize.css/normalize.css'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

import '@/style/slideMenu.scss'
import '@/style/layout.scss'
import variable from '@/style/variable.scss'
Vue.prototype.$variable = variable

import './routerbefore'

import reqdata from './api/req.js'
Vue.prototype.$reqdata = reqdata

import VueCookies from 'vue-cookies'
Vue.use(VueCookies)

import echarts from 'echarts'
Vue.prototype.$echarts = echarts

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
