import Vue from 'vue'
import Router from 'vue-router'
import loginPage from '@/page/login'
import index from '@/page/index'
import accountSafe from '@/page/accountSafe'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/loginPage',
      name: 'loginPage',
      component: loginPage
    },
    {
      path: '/accountSafe',
      name: 'accountSafe',
      component: accountSafe
    }
  ]
})
