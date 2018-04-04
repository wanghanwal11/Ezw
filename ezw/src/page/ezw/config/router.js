import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const load = (...p )=> resolve => require([`@/${p[1] || 'page/ezw'}/${p[0]}.vue`], resolve)
const router = new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      meta: { title: "login"},
      component: load('index/login'),
    },
    {
      path: '/admin',
      name: 'index',
      meta: { title: "index"},
      component: load('index/admin'),
      children:[
        {
          path: '/shouye',
          meta: { title: "shouye"},
          component: load('index/index')
        },
        {
          path: '/tongji',
          meta: { title: "tongji"},
          component: load('index/tongji')
        }, {
          path: '/wode',
          meta: { title: "wode"},
          component: load('index/wode')
        }
      ]
    },{
      path: '/moudlelist',
      name: 'moudlelist',
      meta: { title: "moudlelist"},
      component: load('index/moudlelist'),
     },{
      path: '/test',
      name: 'test',
      meta: { title: "test"},
      component: load('index/test'),
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
router.beforeEach(function (to, from, next) {
  next()
})

router.afterEach(function (to) {
})
export default router
