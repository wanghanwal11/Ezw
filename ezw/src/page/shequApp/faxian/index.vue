<template>
    <div class="faxian">
      <div style="height: 65px">
        <div style="height: 15px;background:white;position: fixed;width: 100%;z-index: 99;"></div>
        <x-header style="background: white;position: fixed;width: 100%;z-index: 99;top: 15px;">
          <div slot="overwrite-left"></div>
          <div style="color: black">发现</div>
        </x-header>
      </div>
      <group gutter="15px">
        <cell title="随手拍" is-link @click.native="next('ssp')">
          <i slot="icon" class="iconfont icon-gerendongtai2" style="color: #0faeff;font-size: 25px"></i>
        </cell>

        <cell title="全部活动" is-link @click.native="next('shequhd')">
          <i slot="icon" class="iconfont icon-gerendongtai3" style="color: #ff5e5e;font-size: 25px"></i>
        </cell>

        <cell title="社区通讯录" is-link>
          <i slot="icon" class="iconfont icon-gerendongtai4" style="color: #31c42f;font-size: 25px"></i>
        </cell>
        <cell title="协同办公" is-link>
          <i slot="icon" class="iconfont icon-xietongbangong" style="color: #0faeff;font-size: 25px"></i>
        </cell>
        <cell title="申请" is-link @click.native="next('shenqing')">
          <i slot="icon" class="iconfont icon-tubiaozhizuomoban2" style="color: #0faeff;font-size: 25px"></i>
        </cell>
        <cell title="审批" is-link  @click.native="next('daishenpi')">
          <i slot="icon" class="iconfont icon-tubiaozhizuomoban21" style="color: #0faeff;font-size: 25px"></i>
        </cell>
      </group>
    </div>
</template>

<script>
  import { Group, Cell,XButton ,XHeader} from 'vux'
    var self = null;
    export default {
        mounted() {
            self = this;
          this.$browser.headerColor({txtcolor:"#000000"})
        },
        data() {
            return {}
        },
        components: {Group, Cell,XButton ,XHeader},
        methods: {
          next(type){
              switch (type){
                case "shequhd":{
                  self.$router.push({ path: '/shequhd' })
                  break;
                }
                case "shenqing":{
                  self.$browser.openNewWebview('https://vitoyun.cn/oa/shenpi/shenpi3.html?phone=15101050425')
                  break;
                }
                case "ssp":{
                  self.$router.push({ path: '/fxsuishoupai' })
                  break;
                }
                case "daishenpi":{
                  self.$browser.openNewWebview('https://vitoyun.cn/oa/shenpi/daishenpi3.html?phone=15101050425')
                  break;
                }

              }
          },
        }
    }
</script>

<style scoped>
  .faxian {
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
