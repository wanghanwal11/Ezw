<template>
    <div>
      <div style="height: 65px;">
        <div style="height: 15px;background:white;position: fixed;width: 100%;z-index: 99;"></div>
        <x-header style="background: white;position: fixed;width: 100%;z-index: 99;top: 15px">
          <div slot="overwrite-left" style="color: black;display: -webkit-box;">
            <div class="iconfont icon-icon-test1" style="font-size: 20px" @click="goback"></div>
            <div style="font-size: 18px;padding: 1px 10px;">我关注的人</div>
          </div>
        </x-header>
      </div>
      <div>
        <paiming :items="items" @guanzhu="guanzhu">
        </paiming>
      </div>
      <div v-transfer-dom class="com">
        <confirm v-model="show2"
                 theme="android"
                 @on-cancel="onCancel"
                 @on-confirm="onConfirm">
          <p style="text-align:center;">确定不在关注他？</p>
        </confirm>
      </div>
    </div>
</template>

<script>
  import {XHeader,Confirm} from 'vux'
  import paiming from "@/components/paiming"
  import ren from "@/assets/ren.png"
    export default {
        mounted(){
          this.$browser.headerColor({txtcolor:"#000000"})
        },
        data () {
            return {
              ren:ren,
              show2:false,
              items:[{src:ren,guanzhu:"已关注",ren:"张果汁",person:[{name:"律师",color:"red"},{name:"志愿者",color:"#1fa1ff"}]},{src:ren,guanzhu:"已关注",ren:"罗振宇",person:[{name:"志愿者",color:"#1fa1ff"}]},{src:ren,guanzhu:"已关注",ren:"吕小明",person:[]},{src:ren,guanzhu:"已关注",ren:"邻家大爷",person:[{name:"志愿者",color:"#1fa1ff"}]}]
            }
        },
        components: {XHeader,paiming,Confirm},
        methods: {
          goback(){
            this.$router.go(-1)
          },
          guanzhu(obj){
              this.show2=true;
          },
          onCancel(){
            this.show2=false;
          },
          onConfirm(){
            this.show2=false;
          }
        }
    }
</script>

<style>
  .com .weui-dialog__bd p{
    text-align: left!important;
  }
</style>
