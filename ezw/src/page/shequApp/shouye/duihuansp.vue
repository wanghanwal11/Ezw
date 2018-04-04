<template>
    <div>
      <div style="height: 65px;">
        <div style="height: 15px;background: #fff;z-index: 99;position: fixed;width: 100%;background: #fff;"></div>
        <x-header style="background: #fff;position: fixed;width: 100%;z-index: 99;top: 15px;">
          <div slot="overwrite-left" style="color: #2b2b2b;display: -webkit-box">
            <div class="iconfont icon-icon-test1" style="font-size: 20px" @click="goback"></div>
            <div style="font-size: 18px;padding: 1px 10px;">兑换商品</div>
          </div>
        </x-header>
      </div>
      <!--<div class="topBox" style="height: 30px;line-height: 30px;padding: 10px 0;border-bottom:1px solid #f4f4f4 ;">-->
        <!--<span class="iconfont icon-icon-test1" style="color: black;margin: 0 15px;" @click="fanhui"></span>{{title}}-->
      <!--</div>-->
      <div style="height: 30px;line-height: 30px;padding: 10px 15px;overflow: hidden;border-top: 1px solid #f4f4f4;color: #2b2b2b;font-size: 16px;">
          <div style="float:left;">
            <span>我有:</span>
            <span style="font-weight: 700;font-size: 20px;">{{have}}</span><span style="font-size: 14px;">分</span>
          </div>
          <div style="float:right;">
            兑换规则>
          </div>
      </div>

      <div style="padding: 0 15px;">

        <div  v-for="(item,index) in items" style="height: 250px;float:left;width:48%" :class="{pad:index%2 !=0}">
          <div style="height: 180px;background: #ccc;"></div>
          <div>
            <p style="padding-top: 10px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">冬日保暖</p>
            <span style="color: #ff4600;">{{75}}分</span>
            <span style="float:right;color: #7e7e7e;font-size: 12px;">{{123}}人已兑换</span>
          </div>
        </div>

      </div>
    </div>
</template>
<script>
  import { Group, Cell,XButton ,XHeader} from 'vux'
  var vm;
  export default {

    data () {
      return {
        have:'700',
        items:[1,2,34],
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
      }
    }

  }
</script>
<style>
    .pad{
      padding-left: 3%;
      float: right!important;
    }
</style>
