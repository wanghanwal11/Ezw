<template>
    <div style="height: 100%;background: white">
        <div style="display: -webkit-box;height: 230px; -webkit-box-align: center;-webkit-box-pack: center;">
              <div style="width: 80px;height: 80px;border-radius: 50%;border: 1px solid white;background: red"></div>
        </div>
      <div class="input">
          <div style="display: -webkit-box;padding:0 40px">
            <div class="iconfont icon-gangweibiandong" style="font-size: 24px;color: #0e88eb;line-height: 43px"></div>
            <x-input   placeholder="输入账号" ></x-input>
            <div></div>
          </div>
          <div style="display: -webkit-box;padding:0 40px;margin-top: 10px">
            <div class="iconfont icon-gongwuwaichu" style="font-size: 24px;color: #0e88eb;line-height: 43px"></div>
            <x-input   placeholder="输入密码" type="password" style="-webkit-box-flex: 1"></x-input>
            <div  class="iconfont icon-ziyouqingjialiucheng" style="width: 40px;line-height: 44px"></div>
          </div>
      </div>
      <div style="padding: 50px 40px">
        <x-button type="default" :show-loading="false" style="background: #3399ff;color: white;border-radius: 25px" @click.native="login">登录</x-button>
      </div>
    </div>
</template>

<script>
  import { XInput,XButton} from 'vux'
    export default {
        mounted(){

        },
        data () {
            return {
                message: ''
            }
        },
        components: {
          XInput,XButton
        },
        methods: {
          login(){
              this.$router.replace({
                path:'/admin'
              })
          }
        }
    }
</script>

<style>
  .input .weui-cell:before{
    border: none;
  }
</style>
