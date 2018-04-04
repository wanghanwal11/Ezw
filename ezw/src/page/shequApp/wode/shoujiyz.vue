<template>
    <div>
      <div style="height: 65px;">
        <div style="height: 15px;background:white;position: fixed;width: 100%;z-index: 99;"></div>
        <x-header style="background: white;position: fixed;width: 100%;z-index: 99;top: 15px">
          <div slot="overwrite-left" style="color: black;display: -webkit-box;">
            <div class="iconfont icon-icon-test1" style="font-size: 20px" @click="goback"></div>
            <div style="font-size: 18px;padding: 1px 10px;">修改手机</div>
          </div>
        </x-header>
      </div>
      <div style="padding: 18px;text-align: center">
        <div style="line-height: 60px">输入验证码</div>
        <div style="font-size: 14px;line-height: 30px;color: #999999">短信验证码已经发送至+{{phone|toTel}}</div>
      </div>
      <div style="padding: 10px 18px">
        <x-button style="background-color: #ff6000;color: white;" >验证</x-button>
      </div>
    </div>
</template>

<script>
  import {XHeader,XButton} from 'vux'
  var vm
    export default {
        mounted(){
          vm=this
          this.$browser.headerColor({txtcolor:"#000000"})
        },
        data () {
            return {
                phone:this.$route.query.phone
            }
        },
        components: {XHeader,XButton},
        filters: {
          toTel (str) {
            let start = str.slice(0,4);
            let end = str.slice(-2);
            return `${start}******${end}`;
          }
          },
        methods: {
          goback(){
            this.$router.go(-1)
          }
        }
    }
</script>

<style>
  .btn .weui-btn:after{
    border:1px solid #ff9267
  }
  .btn .weui-btn_mini{
    padding:0 1.3em;
  }
  .yanzheng .vux-x-input .vux-input-icon{
    font-size: 14px;
  }
  .yanzheng .vux-input-icon.weui-icon-warn:before, .vux-input-icon.weui-icon-success:before{
    font-size: 15px;
  }
  .yanzheng .statetrue{
    color: #ff9267;
  }
  .yanzheng .statefalse{
    color: #999999;
  }
  .yanzheng .statefalse:after{
    color: red!important;
    border: 1px solid #999999;
  }
  .red .weui-icon-clear{
    color: red;
  }
</style>
