import Vue from 'vue'
import Router from 'vue-router'
import loginPage from '@/page/login/login'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/loginPage',
      name: 'loginPage',
      component: loginPage
    }
  ]
})
