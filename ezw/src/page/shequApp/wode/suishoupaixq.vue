<template>
    <div class="sspxq">
      <div style="height: 65px;">
        <div style="height: 15px;z-index: 99;position: fixed;width: 100%;background: #fff;"></div>
        <x-header style="background: #fff;position: fixed;width: 100%;z-index: 99;top: 15px;">
          <div slot="overwrite-left" style="color: #2b2b2b;display: -webkit-box">
            <div class="iconfont icon-icon-test1" style="font-size: 20px" @click="goback"></div>
            <div style="font-size: 18px;padding: 1px 10px;">详情</div>
          </div>
        </x-header>
      </div>

      <div style="background: #ebebeb;">
        <div style="margin-bottom: 10px;padding: 10px;background: #fff;">
          <p>一日，我与上帝一同出行。路过一条河</p>
          <div style="width:100%;display: flex;margin: 10px 0;">
            <div class="imgBox"></div>
            <div class="imgBox"></div>
            <div class="imgBox"></div>
          </div>
          <div style="color: #acacac">
            <span class="iconfont icon-icon-test"></span><span style="overflow: hidden;text-overflow:ellipsis;white-space: nowrap">一家宏伟大酒店</span>
          </div>
        </div>

        <div style="padding: 10px;background: #fff;">
          <div style="height: 45px;line-height: 45px;border-bottom: 1px solid #f5f8fa;">
            <span class="iconfont icon-chulijieguo" style="color: #38bd0e;font-size: 20px;padding-right: 5px;"></span><span>处理结果</span>
          </div>
          <div style="padding-top: 10px;">感谢您的投诉，现在已经处理完毕！</div>
          <XButton style="margin-top: 100px;background: #ff6000;color: #fff;border-radius:0" @click.native="goRoute">评价得积分</XButton>
        </div>
      </div>
    </div>
</template>
<script>
  import {XHeader,XButton} from 'vux'
  var vm;
  export default {

    data () {
      return {}
    },

    created: function () {
      vm = this;
    },
    components: {
      XHeader,
      XButton
    },
    methods: {
      goback(){
        this.$router.go(-1)
      },
      goRoute(){
        vm.$router.push('suishoupaipj')
      }
    }

  }
</script>
<style>
  .sspxq .imgBox{
    flex:1;
    height: 85px;
    background: #ccc;
    float: left;
    margin-right: 10px;
  }
  .sspxq .imgBox:nth-child(3){
    margin:0
  }
</style>
