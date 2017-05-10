import Vue from 'vue'
import Router from 'vue-router'
import login from '@/login'
import loginPage from '@/page/login/login'
import loginInput from '@/components/loginBox/loginInput'
import dateScroll from '@/components/dateScroll'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/loginPage',
      name: 'loginPage',
      component: loginPage
    },
    {
      path: '/loginInput',
      name: 'loginInput',
      component: loginInput
    },
    {
      path: '/dateScroll',
      name: 'dateScroll',
      component: dateScroll
    }
  ]
})
