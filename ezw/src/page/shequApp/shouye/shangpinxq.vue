<template>
  <div>
    <div style="height: 65px;">
      <div style="height: 15px;background: #fff;z-index: 99;position: fixed;width: 100%;background: #fff;"></div>
      <x-header style="background: #fff;position: fixed;width: 100%;z-index: 99;top: 15px;">
        <div slot="overwrite-left" style="color: #2b2b2b;display: -webkit-box">
          <div class="iconfont icon-icon-test1" style="font-size: 20px" @click="goback"></div>
          <div style="font-size: 18px;padding: 1px 10px;">商品详情</div>
        </div>
      </x-header>
    </div>

    <div style="height: 410px;background-color: #ccc"></div>

    <div style="padding: 15px;overflow: hidden;">
      <div style="float:left;width: 78%;height: 80px;border-right: 2px solid #f7f7f7;">
        <p style="font-size: 20px;">全棉针织四件套</p>
        <p style="color: #aeaeae;">每人兑换</p>
        <span style="color: #ff3f00;">{{35}}</span><span style="font-size: 12px;color: #ff3f00;">分</span>
      </div>
      <div style="float:left;width: 20%;height: 80px;text-align: center">
        <span style="font-size: 20px;color: #ff3f00;font-weight: 700;">{{37}}</span><span style="color: #ff3f00;">人</span><br>
        <span style="display: block;padding-top: 15px;color: #aeaeae;">已兑换</span>
      </div>
    </div>

    <div style="height: 10px;background-color: #ebebeb;"></div>
    <div style="height: 150px;padding: 10px 15px;">
      <p>商品详情</p>
    </div>

    <XButton style="position: fixed;bottom: 0;left: 0;background: #ff6000;color: #fff;border-radius:0">兑换</XButton>
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
      XButton
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
