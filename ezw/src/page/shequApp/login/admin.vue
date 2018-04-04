<template>
  <div style="height: 100%;">
      <view-box ref="viewBox" body-padding-bottom="50px">

        <router-view class="router-view"></router-view>

        <tabbar slot="bottom" >
          <tabbar-item :selected="route.path === '/admin/shouye'" @on-item-click="open('shouye')">
            <svg slot="icon" class="icon" aria-hidden="true">
              <use xlink:href="#icon-icon_home_normal"></use>
            </svg>
            <svg slot="icon-active" class="icon" aria-hidden="true">
              <use xlink:href="#icon-icon_home_checkedl"></use>
            </svg>
            <span slot="label">首页</span>
          </tabbar-item>
          <tabbar-item :selected="route.path === '/admin/linli'" @on-item-click="open('linli')">

            <svg slot="icon" class="icon" aria-hidden="true">
              <use xlink:href="#icon-icon_lingli_normal"></use>
            </svg>
            <svg slot="icon-active" class="icon" aria-hidden="true">
              <use xlink:href="#icon-icon_lingli_checkedl"></use>
            </svg>
            <span slot="label">邻里</span>
          </tabbar-item>
          <tabbar-item :selected="route.path === '/admin/faxian'" @on-item-click="open('faxian')">
            <svg slot="icon" class="icon" aria-hidden="true">
              <use xlink:href="#icon-icon_faxian_normal"></use>
            </svg>
            <svg slot="icon-active" class="icon" aria-hidden="true">
              <use xlink:href="#icon-icon_faxian_checked"></use>
            </svg>
            <span slot="label">发现</span>
          </tabbar-item>
          <tabbar-item :selected="route.path === '/admin/wode'" @on-item-click="open('wode')">
            <svg slot="icon" class="icon" aria-hidden="true">
              <use xlink:href="#icon-icon_wode_normal"></use>
            </svg>
            <svg slot="icon-active" class="icon" aria-hidden="true">
              <use xlink:href="#icon-icon_wode_checked"></use>
            </svg>
            <span slot="label">我的</span>
          </tabbar-item>
        </tabbar>

      </view-box>


  </div>
</template>

<script>
  import { Tabbar, TabbarItem, ViewBox, Drawer, Group, Cell } from 'vux'
  var self = null;
  export default {
    created() {
      self = this;
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

<style scoped>
  .router-view {
    width: 100%;
  }
  .icon {
    width: 27px;
    height: 27px;
  }
</style>
