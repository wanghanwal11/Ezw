<template>
  <div class="fxssp" style="height: 100%;background: #ebebeb;">
    <div style="height: 65px;background: #fff;">
      <div style="height: 15px;z-index: 99;position: fixed;width: 100%;background: #fff;"></div>
      <x-header style="background: #fff;position: fixed;width: 100%;z-index: 99;top: 15px;">
        <div slot="overwrite-left" style="color: #2b2b2b;display: -webkit-box">
          <div class="iconfont icon-icon-test1" style="font-size: 20px" @click="exit"></div>
          <div style="font-size: 18px;padding: 1px 10px;">随手拍</div>
        </div>
        <div slot="right">
          <span style="display: block;width: 70px;height: 30px;line-height: 30px;background: #ff6000;color: #fff;text-align: center;border-radius: 3px;" @click="submit">上报</span>
        </div>
      </x-header>
    </div>

    <div>
      <Group style="" gutter="0">
        <x-textarea title="" show-counter :max="140" placeholder="请输入您要上报的内容" height=150></x-textarea>
      </Group>
      <div style="overflow: hidden;padding: 0 10px 20px 10px;background: #fff;">
        <div style="float: left;width: 100px;height: 100px;background-color: #f0f2f5;margin-right: 10px;">


        </div>
        <div class="jia" style="float: left;width: 100px;height: 100px;border: 1px solid #f0f2f5;position: relative;" @click="photo"></div>
      </div>
    </div>

    <div style="background: #fff;margin-top: 10px;height: 30px;padding: 10px;">
      <span class="iconfont icon-icon-test" style="color: #b5b9be;"></span>
      <span>北京市朝阳区华威西里7号楼</span>
    </div>

    <div style="padding: 10px;">
      <span class="iconfont icon-icon-test2" style="color: #ff6000;"></span>
      <span>我同意并已阅读</span><span style="color: #83aff7;">《诉求协议》</span>
    </div>

    <actionsheet v-model="action" :menus="menu" theme="android" >
    </actionsheet>



  </div>
</template>
<script>
  import { XHeader,XTextarea,Group,Actionsheet,Confirm } from 'vux'

  var vm;
  export default {

    data () {
      return {
        action:false,
        menu:{
          menu1:'从相册选择',
          menu2:'拍照'
        }
      }
    },

    created: function () {
      vm = this;
    },
    components: {
      XHeader,
      XTextarea,
      Group,
      Actionsheet,
      Confirm
    },
    methods: {
      exit(){
        this.$vux.confirm.show({
          title:'确认退出编辑吗？',
          confirmText:'退出',
          cancelText:'取消',
          onConfirm(){
            vm.$router.go(-1)
          },
          onCancel (){

          }
        })
      },
      submit(){
        this.$vux.loading.show({
          text: '提交中'
        })
        setTimeout(() => {
          this.$vux.loading.hide()
        }, 1000)
      },
      photo(){
        vm.action=true;
      }
    }

  }
</script>
<style>
  .fxssp .vux-header .vux-header-right{
    top: 12px!important;
  }
  .weui-cells:before{
    display: none!important;
  }
  .weui-cells:after{
    display: none!important;
  }
  .jia::before{
    content: '';
    display: block;
    position: absolute;
    left: 49px;
    top: 20px;
    width: 3px;
    height: 60px;
    background-color: #f0f2f5;
  }
  .jia::after{
    content: '';
    display: block;
    position: absolute;
    top: 49px;
    left: 20px;
    width: 60px;
    height: 3px;
    background-color: #f0f2f5;
  }
  .weui-dialog__btn_primary{
    color: #ff6000!important;
  }
</style>
