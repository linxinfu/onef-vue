import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/hello_word',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      component: () => import('@/pages/login/login')
    },
    {
      path: '/home',
      component: () => import('@/pages/home/home')
    }
  ]
})
