<template>
    <div class="weizhi">
      <div style="height: 65px;background: #fff;">
        <div style="height: 15px;z-index: 99;position: fixed;width: 100%;background: #fff;"></div>
        <x-header style="background: #fff;position: fixed;width: 100%;z-index: 99;top: 15px;">
          <div slot="overwrite-left" style="color: #2b2b2b;display: -webkit-box">
            <div class="iconfont icon-icon-test1" style="font-size: 20px" @click="exit"></div>
            <div style="font-size: 18px;padding: 1px 10px;">位置</div>
          </div>
          <div slot="right">
            <span style="display: block;width: 70px;height: 30px;line-height: 30px;background: #ff6000;color: #fff;text-align: center;border-radius: 3px;" @click="submit">完成</span>
          </div>
        </x-header>
      </div>

      <div class="map" style="width: 100%;height: 300px;background: #ccc;"></div>

      <div>

        <div style="padding:10px;position:relative;border-bottom: 1px solid #ebebeb;height: 40px;line-height: 40px;" >
          <p>桑普大厦（朝阳区北苑路大羊坊10号）</p>
          <span class="iconfont icon-weizhixuanzhong" style="position:absolute;right: 10px;top: 10px;color: #ff6000;"></span>
        </div>

        <div style="padding:10px;position:relative;border-bottom: 1px solid #ebebeb;height: 40px;">
          <p>桑普大厦</p>
          <p style="font-size: 12px;color: #b6b6b6;">北京朝阳区大羊坊路10号</p>
          <!--<span class="iconfont icon-weizhixuanzhong" style="position:absolute;right: 10px;top: 10px;color: #ff6000;"></span>-->
        </div>
        <div style="padding:10px;position:relative;border-bottom: 1px solid #ebebeb;height: 40px;">
          <p>北科创业大厦</p>
          <p style="font-size: 12px;color: #b6b6b6;">朝阳区北苑路28号院1号</p>
          <!--<span class="iconfont icon-weizhixuanzhong" style="position:absolute;right: 10px;top: 10px;color: #ff6000;"></span>-->
        </div>
        <div style="padding:10px;position:relative;border-bottom: 1px solid #ebebeb;height: 40px;">
          <p>鸿炜亿家酒店</p>
          <p style="font-size: 12px;color: #b6b6b6;">朝阳区北苑路28号院1号</p>
          <!--<span class="iconfont icon-weizhixuanzhong" style="position:absolute;right: 10px;top: 10px;color: #ff6000;"></span>-->
        </div>

      </div>
    </div>
</template>
<script>
  import { XHeader } from 'vux'
  var vm;
  export default {

    data () {
      return {
        point:true
      }
    },

    created: function () {
      vm = this;
    },
    components: {
      XHeader
    },
    methods: {
    }

  }
</script>
<style>
  .vux-header .vux-header-right{
    top: 12px!important;
  }
</style>
