<template>
    <div style="height: 100%;width: 100%" class="jifenxz">
      <div style="background: white;">
      <div style="height: 65px;">
        <div style="height: 15px;background:#ff6d00;position: fixed;width: 100%;z-index: 99;"></div>
        <x-header style="background: #ff6d00;position: fixed;width: 100%;z-index: 99;top: 15px;">
          <div slot="overwrite-left" style="color: white;display: -webkit-box;">
            <div class="iconfont icon-icon-test1" style="font-size: 20px" @click="goback"></div>
            <div style="font-size: 18px;padding: 1px 10px;">新增</div>
          </div>
        </x-header>
      </div>
        <div style="padding: 15px">
          <div style="display: -webkit-box">
              <div style="-webkit-box-flex: 1">
                  <div style="float: left;font-size: 66px;line-height: 66px;color: #ff6000">752</div>
                  <div style="padding-left: 10px;float: left;">
                    <div style="    line-height: 38px;">*1.5倍</div>
                    <div style="color:#ff6000 ">分</div>
                  </div>
              </div>
              <div style="width: 120px;height: 70px">
                <x-button mini class="spbtn" style="color: white;background-color: #ffa700;margin-top: 25px" @click.native="tishengjf">提升积分</x-button>
              </div>
          </div>
          <div style="font-size: 14px;color: #999999">总积分：截止2017.12.01</div>
        </div>
      </div>
      <div style="position: absolute;top: 185px;bottom: 0;background: white;width: 100%">
        <div>
          <div v-for="(item,index) in items" :key="index" style="padding: 15px;border-bottom: 1px solid #ebebeb;font-size: 18px">
            <span>{{item.name}}</span><span style="float: right;color: #999999"><span style="font-size: 18px;color: black;padding-right: 10px">{{item.scorce}}</span>分</span>
          </div>
          <div style="text-align: right;color: #999999;line-height: 30px;line-height: 40px;padding-right: 15px;">共计：1.5*5*2=15分</div>
        </div>
        <div style="display: -webkit-box;padding-bottom: 30px;margin-top: 50px">
          <div style="-webkit-box-flex: 1;text-align: center"> <x-button plain mini type="primary" style="color: #ff6000;border-color: #ff6000;width: 140px;height: 40px;font-size: 16px">了解积分</x-button></div>
          <div style="-webkit-box-flex: 1;text-align: center"><x-button plain mini type="primary" style="color: white;border-color: #ff6000;width: 140px;height: 40px;font-size: 16px;background:#ff6000 ">晒晒积分</x-button></div>
        </div>
      </div>
    </div>
</template>

<script>
  import { XHeader,XButton} from 'vux'
  import Schart from 'vue-schart';
    export default {
        mounted(){
          this.$browser.headerColor({txtcolor:"#ffffff"})
        },
        data () {
            return {
              items: [{name:"活动",scorce:365},{name:"随手拍",scorce:258},{name:"动态",scorce:88},{name:"签到",scorce:96}]
            }
        },
        components: {
          XHeader,XButton
        },
        methods: {
          goback(){
            this.$router.go(-1)
          },
          tishengjf(){
            this.$router.push({ path: '/tishengjf' })
          }
        }
    }
</script>

<style>
 .spbtn{
    padding: 0 2.32em!important;
  }
 .jifenxz{
   background: #ebebeb;
 }
</style>
