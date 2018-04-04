<template>
    <div style="height: 100%;width: 100%" class="jifensq">
      <div style="padding-bottom: 10px;background: white;">
      <div style="height: 65px;">
        <div style="height: 15px;background:#ff6d00;position: fixed;width: 100%;z-index: 99;"></div>
        <x-header style="background: #ff6d00;position: fixed;width: 100%;z-index: 99;top: 15px;">
          <div slot="overwrite-left" style="color: white;display: -webkit-box;">
            <div class="iconfont icon-icon-test1" style="font-size: 20px" @click="goback"></div>
            <div style="font-size: 18px;padding: 1px 10px;">总积分</div>
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
                <x-button mini class="spbtn" style="color: white;background-color: #ffa700;margin-top: 25px" @click.native="duihuansp">兑换商品</x-button>
              </div>
          </div>
          <div style="font-size: 14px;color: #999999">总积分：截止2017.12.01</div>
        </div>
      <div style="display: -webkit-box">
        <div v-for="(list,index) in lists" :key="index" style="-webkit-box-flex: 1;color: #999999;text-align: center;max-width: 25%;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;">
          <div style=" overflow: hidden;text-overflow: ellipsis;white-space: nowrap;font-size: 14px"><span style="font-size: 20px;padding: 5px;color: black;">{{list.scorce}}</span>分</div>
          <div style="    line-height: 35px;">{{list.name}}</div>
        </div>
      </div>
      </div>
      <div style="position: absolute;top: 260px;bottom: 0;background: white;width: 100%">
        <schart :canvasId="canvasId"
                :type="type"
                :width="width"
                :height="height"
                :data="data"
                :options="options"
        ></schart>
        <div style="display: -webkit-box;padding-bottom: 30px">
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
              lists: [{name:"活动",scorce:365},{name:"随手拍",scorce:258},{name:"动态",scorce:88},{name:"签到",scorce:96}],
              canvasId: 'myCanvas',
              type: 'line',
              width: document.body.clientWidth,
              height: 400,
              data: [
                {name: '2014', value: 1342},
                {name: '2015', value: 2123},
                {name: '2016', value: 1654},
                {name: '2017', value: 1795},
              ],
              options: {
                title: ''
              }
            }
        },
        components: {
          XHeader,XButton,Schart
        },
        methods: {
          goback(){
              this.$router.go(-1)
          },
          duihuansp(){
            this.$router.push({ path: '/duihuansp' })
          }
        }
    }
</script>

<style>
 .spbtn{
    padding: 0 2.32em!important;
  }
 .jifensq{
   background: #ebebeb;
 }
</style>

