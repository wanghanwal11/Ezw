<template>
  <div class="ssppjcg" style="background: #ebebeb;">
    <div style="height: 65px;background: #fff;">
      <div style="height: 15px;z-index: 99;position: fixed;width: 100%;background: #fff;"></div>
      <x-header style="background: #fff;position: fixed;width: 100%;z-index: 99;top: 15px;">
        <div slot="overwrite-left" style="color: #2b2b2b;display: -webkit-box">
          <div class="iconfont icon-icon-test1" style="font-size: 20px" @click="goback"></div>
          <div style="font-size: 18px;padding: 1px 10px;">评价成功</div>
        </div>
        <div slot="right">
          <span style="display: block;width: 70px;height: 30px;line-height: 30px;background: #ff6000;color: #fff;text-align: center;border-radius: 3px;" @click="submit">完成</span>
        </div>
      </x-header>
    </div>

    <div style="background: #fff;height: 140px;margin-bottom: 10px;text-align: center">
      <span class="iconfont icon-wancheng" style="color: #38bd0e;font-size: 22px;padding-right: 10px;"></span><span style="font-size: 22px;">评价成功</span>
      <p style="color: #b3b3b3;padding-top: 10px;">感谢您的评价,我们将继续努力！</p>
    </div>

    <div style="">
      <div style="height: 40px; line-height:40px;border-bottom: 1px solid #ebebeb;padding: 0 10px;color: #999999;font-size: 14px;background-color: #fff">其他未评价</div>
      <div  v-for="(list,index) in arr"  style="margin-bottom: 10px;padding: 10px;background: #fff;">
        <p>一日，我与上帝一同出行。路过一条河</p>
        <div style="width:100%;display: flex;margin: 10px 0;">
          <div class="imgBox"></div>
          <div class="imgBox"></div>
          <div class="imgBox"></div>
        </div>
        <div style="overflow: hidden;">
          <span style="float:left;color: #999999;">2017.1.1</span>

          <span style="float: right;display: block;width: 110px;height: 35px;line-height: 35px;text-align:center;border:1px solid #2979ff ;color: #2979ff;" @click="goRoute">评价+6积分</span>
          <!--<span v-else style="float: right;color: #ff6000;">正在办理</span>-->
        </div>
      </div>

    </div>
  </div>
</template>
<script>
  import { XHeader  } from 'vux'

  var vm;
  export default {

    data () {
      return {
        raters:3,
        arr:[1,2,3]
      }
    },

    created: function () {
      vm = this;
    },
    components: {
      XHeader,
    },
    methods: {
      goback(){
        this.$router.go(-1)
      },
      goRoute(){
        vm.$router.push('suishoupaipj')
      },
      submit(){
        this.$vux.loading.show({
          text: '提交中'
        })
        setTimeout(() => {
          this.$vux.loading.hide()
          vm.$router.push('suishoupailb')
        }, 1000)
      }
    }

  }
</script>
<style>
  .ssppjcg .vux-header .vux-header-right{
    top: 12px!important;
  }
  .ssppjcg .imgBox{
    flex:1;
    height: 85px;
    background: #ccc;
    float: left;
    margin-right: 10px;
  }
  .ssppjcg .imgBox:nth-child(3){
    margin:0
  }
</style>
