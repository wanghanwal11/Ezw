import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const load = (...p )=> resolve => require([`@/${p[1] || 'page/sqfw'}/${p[0]}.vue`], resolve)
const router = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      meta: {title: "社区服务"},
      component: load('toupiao/toupiaotj')
    },{
      path: '/toupiaojg',
      name: 'toupiaojg',
      meta: { title: "投票结果"},
      component: load('toupiao/toupiaojg')
    },{
      path: '/toupiaojgtw',
      name: 'toupiaojgtw',
      meta: { title: "投票结果"},
      component: load('toupiao/toupiaojg-tw')
    },{
      path: '/toupiaotj',
      name: 'toupiaotj',
      meta: { title: "投票系统"},
      component: load('toupiao/toupiaotj')
    },{
      path: '/toupiaotjtw',
      name: 'toupiaotjtw',
      meta: { title: "投票系统"},
      component: load('toupiao/toupiaotjtw')
    },{
      path: '/toupiaotjmore',
      name: 'toupiaotjmore',
      meta: {title: "投票系统"},
      component: load('toupiao/toupiaotj-more')
    },{
      path: '/toupiaotjtwmore',
      name: 'toupiaotjtwmore',
      meta: {title: "投票系统"},
      component: load('toupiao/toupiaotjtw-more')
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

router.afterEach(function (to,from,next) {
  document.title=to.meta.title
})
export default router
