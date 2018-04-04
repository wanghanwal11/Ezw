<template>
    <div class="ssppj" style="background: #ebebeb;">
      <div style="height: 65px;background: #fff;">
        <div style="height: 15px;z-index: 99;position: fixed;width: 100%;background: #fff;"></div>
        <x-header style="background: #fff;position: fixed;width: 100%;z-index: 99;top: 15px;">
          <div slot="overwrite-left" style="color: #2b2b2b;display: -webkit-box">
            <div class="iconfont icon-icon-test1" style="font-size: 20px" @click="exit"></div>
            <div style="font-size: 18px;padding: 1px 10px;">评价</div>
          </div>
          <div slot="right">
            <span style="display: block;width: 70px;height: 30px;line-height: 30px;background: #ff6000;color: #fff;text-align: center;border-radius: 3px;" @click="submit">提交</span>
          </div>
        </x-header>
      </div>

      <div style="margin-bottom: 10px;padding: 10px;background: #fff;">
        <p>一日，我与上帝一同出行。路过一条河</p>
        <div style="width:100%;display: flex;margin: 10px 0;">
          <div class="imgBox"></div>
          <div class="imgBox"></div>
          <div class="imgBox"></div>
        </div>
      </div>

      <div style="padding: 10px;margin-bottom: 10px;background: #fff;">
        <div style="overflow: hidden;">
          <rater v-model="raters" style="float: left;"></rater>
          <div style="float: right;">
            <span style="font-size: 20px;color: #ffba00;font-weight: 700">5.0</span>
            <span style="color: #ffba00;font-size: 12px;">分</span>
          </div>
        </div>
        <p style="color:#cccccc;font-size: 12px;">干的不错!</p>
      </div>

      <div style="padding: 10px;background: #fff;">
        <div style="overflow: hidden;">
          <div class="tips">已有工作人员联系我</div>
          <div class="tips">时间已得到解决</div>
          <div class="tips">事件已得到解决</div>
        </div>
        <Group style="padding-top: 10px;" gutter="0">
          <x-textarea title="" show-counter :max="140" placeholder="留下您宝贵的意见" height=150></x-textarea>
        </Group>
      </div>




    </div>
</template>
<script>
  import { Confirm ,Rater,XHeader,XTextarea,Group  } from 'vux'

  var vm;
  export default {

    data () {
      return {
        raters:3
      }
    },

    created: function () {
      vm = this;
    },
    components: {
      Confirm,
      Rater,
      XHeader,
      XTextarea,
      Group,
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
            vm.$router.push('suishoupaipjcg')
        }, 1000)
      }
    }

  }
</script>
<style>
  .ssppj .vux-header .vux-header-right{
    top: 12px!important;
  }
  .ssppj .imgBox{
    flex:1;
    height: 85px;
    background: #ccc;
    float: left;
    margin-right: 10px;
  }
  .ssppj .imgBox:nth-child(3){
    margin:0
  }
  .ssppj .tips{
    min-width: 100px;
    padding: 5px 10px;
    margin: 0 10px 10px 0;
    border-radius: 3px;
    float: left;
    border:1px solid #cccccc;
  }
  .ssppj .weui-cells{
    border:1px solid #ccc;
  }
  .weui-dialog__btn_primary{
    color: #ff6000!important;
  }
</style>
