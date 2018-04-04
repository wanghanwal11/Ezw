<template>
    <div style="height: 100%;width: 100%" class="tishengjf">
      <div style="background: white;">
      <div style="height: 65px;">
        <div style="height: 15px;background:#ff6d00;position: fixed;width: 100%;z-index: 99;"></div>
        <x-header style="background: #ff6d00;position: fixed;width: 100%;z-index: 99;top: 15px;">
          <div slot="overwrite-left" style="color: white;display: -webkit-box;">
            <div class="iconfont icon-icon-test1" style="font-size: 20px" @click="goback"></div>
            <div style="font-size: 18px;padding: 1px 10px;">提升积分</div>
          </div>
        </x-header>
      </div>
        <div style="padding: 15px">
            <renwu  :items="items"></renwu>
        </div>
      </div>
    </div>
</template>

<script>
  import { XHeader,XButton} from 'vux'
  import renwu from "@/components/renwu"
  import bg1 from "@/assets/bg1.png"
  import bg2 from "@/assets/bg2.png"
  import bg3 from "@/assets/bg3.png"
  import bg4 from "@/assets/bg4.png"
    export default {
        mounted(){
          this.$browser.headerColor({txtcolor:"#ffffff"})
        },
        data () {
            return {
              items: [{h1:"签到+6积分",h2:'每天登录即可完成',src:"icon-xietongbangong",state:"去完成",states:true,bg:bg1},{h1:"社区聊一聊+2积分",h2:'在邻里发布一条动态',src:'icon-icon_lingli_normal',state:"去完成",states:true,bg:bg2},{h1:"随手拍+3积分",h2:'用随手拍反应一次社区问题',src:'icon-gerendongtai2',state:"去完成",states:true,bg:bg3},{h1:"活动达人+6积分",h2:'用随手拍反应一次社区问题',src:'icon-gerendongtai3',state:"已完成",states:false,bg:bg4}]
            }
        },
        components: {
          XHeader,XButton,renwu
        },
        methods: {
          goback(){
            this.$router.go(-1)
          }
        }
    }
</script>

<style>

</style>
