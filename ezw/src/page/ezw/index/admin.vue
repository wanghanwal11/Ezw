<template>
  <div style="height: 100%;">
      <div ref="viewBox" :body-padding-bottom="this.$store.state.isShow?'50px':'0px'">

        <router-view class="router-view"></router-view>

        <tabbar slot="bottom" v-if="this.$store.state.isShow" class="aa"  style="position: fixed;bottom: 0" >
          <tabbar-item :selected="route.path === '/shouye'" @on-item-click="open('shouye')">
            <svg slot="icon" class="icon" aria-hidden="true">
              <use xlink:href="#icon-icon_work_normal"></use>
            </svg>
            <svg slot="icon-active" class="icon" aria-hidden="true">
              <use xlink:href="#icon-icon_work_checked"></use>
            </svg>
            <span slot="label" style="font-size: 12px">工作</span>
          </tabbar-item>
          <tabbar-item :selected="route.path === '/index/tongji'" @on-item-click="open('tongji')">

            <svg slot="icon" class="icon" aria-hidden="true">
              <use xlink:href="#icon-icon_tongji_normal"></use>
            </svg>
            <svg slot="icon-active" class="icon" aria-hidden="true">
              <use xlink:href="#icon-icon_tongji_checked"></use>
            </svg>
            <span slot="label" style="font-size: 12px">统计</span>
          </tabbar-item>
          <tabbar-item :selected="route.path === '/index/wode'" @on-item-click="open('wode')">
            <svg slot="icon" class="icon" aria-hidden="true">
              <use xlink:href="#icon-icon_wode_normal"></use>
            </svg>
            <svg slot="icon-active" class="icon" aria-hidden="true">
              <use xlink:href="#icon-icon_wode_checked"></use>
            </svg>
            <span slot="label" style="font-size: 12px">我的</span>
          </tabbar-item>
        </tabbar>

      </div>


  </div>
</template>

<script>
  import { Tabbar, TabbarItem, ViewBox, Drawer, Group, Cell } from 'vux'
  var self = null;
  export default {
    created() {
      self = this;
      self.$router.replace({path: 'shouye'})
    },
    computed: {
      route: ()=>self.$route
    },
    data() {
      return {
      }
    },
    components: { Tabbar, TabbarItem, ViewBox, Drawer, Group, Cell },
    methods: {
       open (path) {
           if(path=="shouye"){
             this.$browser.headerColor({bgcolor:"#ff6d00",txtcolor:"#ffffff"})
           }else{
             this.$browser.headerColor({bgcolor:"#ffffff",txtcolor:"#000000"})
           }
         self.$router.replace({path: path})
       }
    }
  }
</script>

<style>
  .router-view {
    width: 100%;
  }
  .aa .icon {
    width: 27px;
    height: 27px;
  }
  .aa .weui-tabbar__item.weui-bar__item_on .weui-tabbar__icon, .weui-tabbar__item.weui-bar__item_on .weui-tabbar__icon > i, .weui-tabbar__item.weui-bar__item_on .weui-tabbar__label{
    color: #2989ff!important;
  }
</style>
