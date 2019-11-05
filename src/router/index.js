import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/hello_word',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: {
        title: '欢迎来到ONEF'
      }
    },
    {
      path: '/login',
      component: () => import('@/pages/login'),
      meta: {
        title: '登录'
      }
    },
    {
      path: '/home',
      component: () => import('@/pages/home'),
      meta: {
        title: '首页'
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    // 设置浏览器标题(router和i18n属于同级，不能在此做国际化)
    document.title = to.meta.title
  }
  next()
})

export default router
