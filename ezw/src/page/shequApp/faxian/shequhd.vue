<template>
    <div style="height: 100%;width: 100%;" class="shequhd">
      <div style="background: white;">
        <div style="height: 65px;">
          <div style="height: 15px;background:white;position: fixed;width: 100%;z-index: 99;"></div>
          <x-header style="background: white;position: fixed;width: 100%;z-index: 99;top: 15px">
            <div slot="overwrite-left" style="color: black;display: -webkit-box;">
              <div class="iconfont icon-icon-test1" style="font-size: 20px" @click="goback"></div>
              <div style="font-size: 18px;padding: 1px 10px;">社区活动</div>
            </div>
          </x-header>
        </div>
        <xinwen :items="items"></xinwen>
      </div>
    </div>
</template>

<script>
  import { XHeader} from 'vux'
  import xinwen from "@/components/xinwen"
  import tu1 from "@/assets/tu1.png"
    export default {
        mounted(){
          this.$browser.headerColor({txtcolor:"#000000"})
        },
        data () {
            return {
              items:[{type:"活动 +6积分",typecolor:"#ffa800",title:"北京2017冬季空气质量显著提升，连续20日无雾霾",see:363,time:"6小时前",src:tu1},{type:"活动 +6积分",typecolor:"#ffa800",title:"北京2017冬季空气质量显著提升，连续20日无雾霾",see:363,time:"6小时前",src:tu1},{type:"活动 +6积分",typecolor:"#ffa800",title:"北京2017冬季空气质量显著提升，连续20日无雾霾",see:363,time:"6小时前",src:tu1},{type:"活动 +6积分",typecolor:"#ffa800",title:"北京2017冬季空气质量显著提升，连续20日无雾霾",see:363,time:"6小时前",src:tu1}]
            }
        },
        components: {
          XHeader,
          xinwen
        },
        methods: {
          goback(){
            this.$router.go(-1)
          }
        }
    }
</script>

<style>
  .shequhd .box{
    border-bottom: none!important;
  }
</style>
