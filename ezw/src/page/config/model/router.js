import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const load = (...p )=> resolve => require([`@/${p[1] || 'page/*#*#'}/${p[0]}.vue`], resolve)
const router = new Router({
  routes: [
    {
      path: '/',
      name: 'init',
      meta: { title: "init"},
      component: load('init')
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
