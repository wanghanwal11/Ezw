<template>
    <div>
      <div style="height: 65px;">
        <div style="height: 15px;background:white;position: fixed;width: 100%;z-index: 99;"></div>
        <x-header style="background: white;position: fixed;width: 100%;z-index: 99;top: 15px">
          <div slot="overwrite-left" style="color: black;display: -webkit-box;">
            <div class="iconfont icon-icon-test1" style="font-size: 20px" @click="goback"></div>
            <div style="font-size: 18px;padding: 1px 10px;">绑定手机</div>
          </div>
        </x-header>
      </div>
      <div style="padding: 18px" class="yanzheng">
       <div style="display: -webkit-box;border-bottom: 1px solid #e1e1e1;padding: 15px 0">
          <div style="-webkit-box-flex: 1">
              <x-input mask="99999999999" is-type="china-mobile" :max="13" v-model="maskValue" placeholder="输入您的手机号" style="font-size: 14px"></x-input>
          </div>
         <div style="width: 107px" class="btn">
              <x-button mini style="margin-top: 10px;width: 105px" :class="statebol?'statetrue':'statefalse'" @click.native="yzm" >{{state}}</x-button>
         </div>
       </div>
        <div style="display: -webkit-box;border-bottom: 1px solid #e1e1e1;padding: 5px 0">
          <div style="-webkit-box-flex: 1;display: -webkit-box">
            <x-input placeholder="输入验证码" @on-change="focus" v-model="code" style="font-size: 14px;-webkit-box-flex: 1" novalidate :class="dui?'red':''"></x-input><div v-if="dui" style="min-width: 50px;line-height: 40px;font-size: 14px;color: red;">验证码错误</div>
          </div>
        </div>
      </div>
      <div style="padding: 50px 18px">
        <x-button style="background-color: #ff6000;color: white;" @click.native="tijiao">确认绑定</x-button>
      </div>

    </div>
</template>

<script>
  import {XHeader,XInput,XButton} from 'vux'
  var vm
    export default {
        mounted(){
            vm=this
          this.$browser.headerColor({txtcolor:"#000000"})
          this.userinfo= this.$browser.getParameter("userinfo");
        },
        data () {
            return {
              dui:false,
              maskValue:"",
              code:"",
              state:"获取验证码",
              statebol:true,
              sendMsgDisabled:true,
              state1:60,
              num:1,
              userinfo:""
            }
        },
        components: {XHeader,XInput,XButton},
        methods: {
          goback(){
            this.$router.go(-1)
          },
          yzm(){
              if(this.num==1){
                this.statebol=false;
                this.num=3;
                this.send();
              }else if(this.num==2){
                this.statebol=false;
                this.send();
              }
            this.get()
          },
          send() {
            let me = this;
            me.sendMsgDisabled = true;
            let interval = window.setInterval(function() {
              me.state=me.state1+"s后重试"
              if ((me.state1--) <= 0) {
                me.state1 = 60;
                me.statebol=true;
                me.state="重试"
                me.num=2
                me.sendMsgDisabled = false;
                window.clearInterval(interval);
              }
            }, 1000);
          },
          get(){
            this.$ajax("sendRandomByPhone",{
              params: {
                phone: this.maskValue
              },
              success (res){
              }
            })
          },
          focus(){
            vm.dui=false;
          },
          tijiao(){
            this.$ajax("saveTuserInfo",{
              params: {
                code: this.code,
                phone: this.maskValue
              },
              success (res,obj){
                vm.$vux.toast.show({
                  text: '绑定成功',
                  position:"middle",
                  time:2000,
                  onHide () {
                    vm.userinfo.phone=vm.maskValue;
                    vm.$browser.setParameter("userinfo", vm.userinfo);
                    vm.$router.go(-1)
                  }
                })
              },
              error(obj){
                vm.dui=true;
              }
            })
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
