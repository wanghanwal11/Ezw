<template>
    <div class="wode">
      <div style="height: 65px">
        <div style="height: 15px;background:white;position: fixed;width: 100%;z-index: 99;"></div>
      <x-header style="background: white;position: fixed;width: 100%;z-index: 99;top: 15px">
        <div slot="overwrite-left"></div>
        <div style="color: black">我的</div>
      </x-header>
      </div>
      <div style="background: white;padding: 15px;margin: 15px 0">
        <div style="display: -webkit-box;" @click="next('grzx')">
          <div style="width: 60px;height: 60px;border: 1px solid white;border-radius: 50%;background-size: 100% 100%" :style="{backgroundImage:'url('+userinfo.headpicurl+')'}"></div>
          <div style="-webkit-box-flex: 1">
            <div style="padding: 3px 10px">{{userinfo.name}}</div>
            <div>
                <tags :items="items"></tags>
            </div>
          </div>
          <div style="min-width:100px;line-height: 60px;text-align: center "><span style="font-size: 22px;font-weight: bold">715</span>分</div>
        </div>
      </div>
      <group gutter="0">
        <cell title="我的随手拍" is-link  @click.native="next('suishoupailb')">
          <i slot="icon" class="iconfont icon-wodesuishoupai" style="color: #ff5d5e;"></i>
        </cell>
      </group>

      <group gutter="15px">
        <cell title="等级" is-link>
          <svg slot="icon" class="icon i" aria-hidden="true">
            <use xlink:href="#icon-dengji"></use>
          </svg>
        </cell>

        <cell title="身份认证" is-link>
          <i slot="icon" class="iconfont icon-shenfenrenzheng" style="color: #31c42e;"></i>
        </cell>
      </group>

      <group gutter="15px">
        <cell title="留言" is-link>
          <i slot="icon" class="iconfont icon-shenfenrenzheng1" style="color: #0faeff;"></i>
        </cell>

        <cell title="我关注的人" is-link @click.native="next('guanzhu')">
          <i slot="icon" class="iconfont icon-shenfenrenzheng2" style="color: #ff5e5e;"></i>
        </cell>

        <cell title="个人动态" is-link @click.native="next('grdt')">
          <svg slot="icon" class="icon i" aria-hidden="true">
            <use xlink:href="#icon-gerendongtai"></use>
          </svg>
        </cell>
      </group>

      <group gutter="15px">
        <cell title="设置" is-link @click.native="next('shezhi')">
          <i slot="icon" class="iconfont icon-gerendongtai1" style="color: #10aeff;"></i>
        </cell>
      </group>



    </div>
</template>

<script>
    import { Group, Cell,XButton ,XHeader} from 'vux'
    import tags from "@/components/tags"
    import ren from "@/assets/ren.png"
    var self = null;
    export default {
        mounted() {
          this.$browser.headerColor({txtcolor:"#000000"})
            self = this;
          this.userinfo= this.$browser.getParameter("userinfo");
        },
        data() {
            return {
                 userinfo:{},
                items:[{name:"志愿者",color:"#fb5e42"},{name:"律师",color:"#1a9fff"}]
            }
        },
        components: { Group, Cell,XButton,tags ,XHeader },
        methods: {
          next(type){
            switch (type){
              case "grzx":{
                self.$router.push({ path: '/grzx' })
                break;
              }
              case "grdt":{
                self.$router.push({ path: '/grdt' })
                break;
              }
              case "shezhi":{
                self.$router.push({ path: '/shezhi' })
                break;
              }
              case "guanzhu":{
                self.$router.push({ path: '/guanzhu' })
                break;
              }
              case "suishoupailb":{
                self.$router.push({ path: '/suishoupailb' })
                break;
              }
            }
          }
        }
    }
</script>

<style scoped>

  .wode {
    width: 100%;
    height: 100%;
    background-color: #ebebeb;
    overflow-y: scroll;
  }
  .i {
    display:block;
    margin-right:15px;
    width: 25px;
    height: 25px;
  }
  i{
    display:block;
    margin-right:15px;
    font-size: 25px;
    line-height: 25px;
    width: 25px;
    height: 25px;
  }

</style>
<style>
  .weui-cell{
    padding: 15px!important;
  }
</style>


