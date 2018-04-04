<template>
    <div class="ssp">
      <div style="height: 65px;">
        <div style="width: 100%;height: 15px;z-index: 99;position: fixed;background: #fff;"></div>
        <x-header style="background: #fff;position: fixed;width: 100%;z-index: 99;top: 15px;">
          <div slot="overwrite-left" style="color: #2b2b2b;display: -webkit-box">
            <div class="iconfont icon-icon-test1" style="font-size: 20px" @click="goback"></div>
          </div>
          <!--<div slot="overwrite-title" style="width: 0;"></div>-->
          <div slot="default">
            <tab :line-width="2" custom-bar-width="60px" bar-active-color="#ff6000" active-color="#ff6000">
              <tab-item selected @on-item-click="handler">办理中</tab-item>
              <tab-item @on-item-click="handler">已办理</tab-item>
            </tab>
          </div>
        </x-header>
      </div>
      <div style="margin-top: 10px;border-top: 1px solid #ebebeb;background: #ebebeb;">

        <div  v-for="(list,index) in arr"  style="margin-bottom: 10px;padding: 10px;background: #fff;" @click="goRoute">
          <p>一日，我与上帝一同出行。路过一条河</p>
          <div style="width:100%;display: flex;margin: 10px 0;">
            <div class="imgBox"></div>
            <div class="imgBox"></div>
            <div class="imgBox"></div>
          </div>
          <div style="overflow: hidden;">
            <span style="float:left;color: #999999;">2017.1.1</span>

            <span v-if="tab_i==1" style="float: right;display: block;width: 110px;height: 35px;line-height: 35px;text-align:center;border:1px solid #2979ff ;color: #2979ff;">评价+6积分</span>
            <span v-else style="float: right;color: #ff6000;">正在办理</span>
          </div>
        </div>

        <!--<div style="width:100%;margin-bottom: 10px;">-->
          <!--<p>一日，我与上帝一同出行。路过一条河</p>-->
          <!--<div style="width:100%;display: flex;margin: 10px 0;">-->
            <!--<div class="imgBox"></div>-->
            <!--<div class="imgBox"></div>-->
            <!--<div class="imgBox"></div>-->
          <!--</div>-->
          <!--<div style="overflow: hidden;">-->
            <!--<span style="float:left;color: #999999;">2017.1.1</span>-->
            <!--<span style="float: right;display: block;width: 110px;height: 35px;line-height: 35px;text-align:center;border:1px solid #2979ff ;color: #2979ff;">评价+6积分</span>-->
          <!--</div>-->
        <!--</div>-->


      </div>
    </div>
</template>
<script>
  import { Tab, TabItem,XHeader} from 'vux'
  var vm;
  export default {

    data () {
      return {
        tab_i:'',
        arr:[]
      }
    },

    created: function () {
      vm = this;
      vm.arr = [1,2,3,4,5]
    },
    components: {
      Tab,
      TabItem,
      XHeader
    },
    methods: {
      goback(){
        this.$router.push('admin/wode')
      },
      handler(i){
        vm.tab_i = i;
        if(i==1){
          vm.arr = [1,2,3]
        }else{
          vm.arr = [1,2,3,4,5]
        }
      },
      goRoute(){
        vm.$router.push('suishoupaixq')
      }
    }

  }
</script>
<style>
  .ssp .vux-tab .vux-tab-item{
    font-size: 18px;
  }
  .ssp .vux-tab-ink-bar{
    bottom: 5px!important;
  }
  .ssp .vux-tab-bar-inner{
    width: 15px!important;
  }
  .ssp .imgBox{
    flex:1;
    /*width: 32%;*/
    height: 85px;
    background: #ccc;
    float: left;
    margin-right: 10px;
  }
  .ssp .imgBox:nth-child(3){
    margin:0
  }
</style>
