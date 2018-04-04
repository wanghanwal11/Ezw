<template>
    <div style="height: 100%;width: 100%;" class="jifenpm">
      <div style="background: white;">
        <div style="height: 65px;">
          <div style="height: 15px;background:#ff6d00;position: fixed;width: 100%;z-index: 99;"></div>
          <x-header style="background: #ff6d00;position: fixed;width: 100%;z-index: 99;top: 15px">
            <div slot="overwrite-left" style="color: white;display: -webkit-box;">
              <div class="iconfont icon-icon-test1" style="font-size: 20px" @click="goback"></div>
              <div style="font-size: 18px;padding: 1px 10px;">排名</div>
            </div>
          </x-header>
        </div>
        <div>
           <paiming :items="items"></paiming>
        </div>
        <div style="height: 82px;background: #ebebeb;" class="bottom">
          <paiming :items="items1" style="background: white;position: fixed;bottom:0;width: 100%;padding:0" class="paiming"></paiming>
        </div>
      </div>
    </div>
</template>

<script>
  import { XHeader,XButton} from 'vux'
  import paiming from "@/components/paiming"
  import Schart from 'vue-schart';
  import ren from "@/assets/ren.png"
    export default {
        mounted(){
          this.$browser.headerColor({txtcolor:"#ffffff"})
        },
        data () {
            return {
              ren:ren,
                items:[{ming:1,src:ren,ren:"张果汁",fen:266,person:[{name:"律师",color:"red"},{name:"志愿者",color:"#1fa1ff"}]},{ming:2,src:ren,ren:"罗振宇",fen:266,person:[{name:"志愿者",color:"#1fa1ff"}]},{ming:3,src:ren,ren:"吕小明",fen:266,person:[]},{ming:4,src:ren,ren:"邻家大爷",fen:266,person:[{name:"志愿者",color:"#1fa1ff"}]}],
                items1:[{ming:4,src:ren,ren:"邻家大爷",fen:266,person:[{name:"志愿者",color:"#1fa1ff"}]}]

            }
        },
        components: {
          XHeader,XButton,paiming,ren
        },
        methods: {
          goback(){
            this.$router.go(-1)
          }
        }
    }
</script>

<style>
 .spbtn{
    padding: 0 2.32em!important;
  }
 .jifenpm{
   background: #ebebeb;
 }
  .paiming .boex{
    padding: 10px 15px!important;
  }
</style>
