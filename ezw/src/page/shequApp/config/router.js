import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const load = (...p )=> resolve => require([`@/${p[1] || 'page/shequApp'}/${p[0]}.vue`], resolve)
const router = new Router({
  routes: [
    {
      path: '/',
      meta: { title: "login"},
      component: load('login/loginwx')
    },
    {
      path: '/loginselect',
      meta: { title: "login"},
      component: load('login/loginselect')
    },
    {
      path: '/shequsel',
      meta: { title: "login"},
      component: load('login/shequsel')
    },
    {
      path: '/chengshisel',
      meta: { title: "login"},
      component: load('login/chengshisel')
    },
    {
      path: '/login',
      name: 'login',
      meta: { title: "login"},
      component: load('login/index')
    },
    {
      path: '/changeshequ',
      name: 'changeshequ',
      meta: { title: "changeshequ"},
      component: load('login/changeShequ')
    },
    {
      path: '/shequlist',
      name: 'shequlist',
      meta: { title: "shequlist"},
      component: load('login/shequList')
    },
    {
      path: '/admin',
      name: 'admin',
      component: load('login/admin'),
      children: [
        {
          path: 'shouye',
          meta: { title: "shouye"},
          component: load('shouye/index')
        },
        {
          path: 'linli',
          meta: { title: "linli"},
          component: load('linli/index')
        },
        {
          path: 'faxian',
          meta: { title: "faxian"},
          component: load('faxian/index')
        },
        {
          path: 'wode',
          meta: { title: "wode"},
          component: load('wode/index')
        }
      ]
    },{
      path: '/jifensq',
      component: load('shouye/jifensq')
    },{
      path: '/jifenxz',
      component: load('shouye/jifenxz')
    },{
      path: '/jifenpm',
      component: load('shouye/jifenpm')
    },{
      path: '/shequhd',
      component: load('faxian/shequhd')
    },{
      path: '/grdt',
      component: load('wode/grdt')
    },{
      path: '/grzx',
      component: load('wode/grzx')
    },{
      path: '/shezhi',
      component: load('wode/shezhi')
    },{
      path: '/guanzhu',
      component: load('wode/guanzhu')
    },{
      path: '/tishengjf',
      component: load('shouye/tishengjf')
    },{
      path: '/fxsuishoupai',
      meta: { title: "faxian"},
      component: load('faxian/fxsuishoupai')
    },{
      path: '/weizhi',
      meta: { title: "faxian"},
      component: load('faxian/weizhi')
    },{
      path: '/suishoupailb',
      meta: { title: "wode"},
      component: load('wode/suishoupailb')
    },{
      path: '/suishoupaixq',
      meta: { title: "wode"},
      component: load('wode/suishoupaixq')
    },{
      path: '/suishoupaipj',
      meta: { title: "wode"},
      component: load('wode/suishoupaipj')
    },{
      path: '/suishoupaipjcg',
      meta: { title: "wode"},
      component: load('wode/suishoupaipjcg')
    },{
      path: '/duihuansp',
      meta: { title: "wode"},
      component: load('shouye/duihuansp')
    },{
      path: '/shangpinxq',
      meta: { title: "wode"},
      component: load('shouye/shangpinxq')
    },{
      path: '/shoujibd',
      meta: { title: "wode"},
      component: load('wode/shoujibd')
    },{
      path: '/shoujixg',
      meta: { title: "wode"},
      component: load('wode/shoujixg')
    },{
      path: '/shoujiyz',
      meta: { title: "wode"},
      component: load('wode/shoujiyz')
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
  next(vm=>{
  })
})

router.afterEach(function (to) {
})
export default router
