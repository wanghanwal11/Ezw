<template>
    <div>
      <div style="height: 280px;position:relative;background-size: 100% 100%" :style="{backgroundImage:'url('+linlibg+')'}">
        <div style="position: absolute;top: 30px;right: 20px">
            <div style="font-size: 26px;color: white;text-shadow: 1px 1px rgba(197, 223, 248,0.8),2px 2px rgba(197, 223, 248,0.8),3px 3px rgba(197, 223, 248,0.8),4px 4px rgba(197, 223, 248,0.8),5px 5px rgba(197, 223, 248,0.8),6px 6px rgba(197, 223, 248,0.8);">华威西里社区</div>
          <div style="width: 60px;height: 60px;  float: right;border: 1px solid #ddddde;border-radius: 50%;background-size: 100% 100%" :style="{backgroundImage:'url('+ren+')'}">
          </div>
        </div>
        <div style="width: 45px;height: 45px;background: #ff6000;position: absolute;right: 20px;bottom: -25px;border: 1px solid #ff6000;border-radius: 50%">
            <div class="iconfont icon-gerendongtai2" style="color: white;text-align: center;    font-size: 30px;    margin-top: -2px;"></div>
        </div>
      </div>
      <weibo></weibo>
    </div>
</template>

<script>
  import {XHeader} from 'vux'
  import weibo from "@/components/weibo"
  import linlibg from "@/assets/linlibg.png"
  import ren from "@/assets/ren.png"
    export default {
        mounted(){

        },
        data () {
            return {
              linlibg:linlibg,
              ren:ren
            }
        },
        components: {XHeader,weibo},
        methods: {}
    }
</script>

<style>
</style>
