<template>
  <div>
    <div  class="headers">
      <div class="headerp">
        <p style="font-size: 24px;">选择社区</p>
        <p style="margin-top: 5px">为了给您提供更好的服务，您需要您选择社区。</p>
      </div>
    </div>
    <div style="width: 85%;margin: 50px auto">
      <div>
        <p>您在:<span class="iconfont icon-icon-test" style="margin: 0 5px;color: #b5b9be;font-size: 20px"></span><span style="font-size: 18px">某个社区</span></p>
        <p style="margin-top: 10px">不在这？<a style="margin-left: 5px;color: #4683ea" @click="loginselect">手动选择></a></p>
      </div>
      <x-button :gradients="['#FF5E3A', '#FF9500']" @click.native="loginwx" style="margin-top: 50px;">进入社区</x-button>
    </div>
  </div>
</template>

<script>
  import { XButton,CheckIcon } from 'vux'
  export default {
    mounted(){
      this.$browser.headerColor({bgcolor:"#ED975E",txtcolor:"#ffffff"})
    },
    data () {
      return {
        checker1: true
      }
    },
    components: {
      XButton,
      CheckIcon
    },
    methods: {
      loginselect(){
        this.$router.push({
          path:"chengshisel"
        })
      }
    }
  }
</script>

<style>
  .headers{
    width: 100%;
    height: 280px;
    background: url(../../../assets/bg.png);
    background-size: 100% 100%;
  }
  .headerp{
    padding: 40px 0 0 15px;
    color: white;
  }

</style>
