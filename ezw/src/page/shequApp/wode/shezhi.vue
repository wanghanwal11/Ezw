<template>
    <div>
      <div style="height: 65px;">
        <div style="height: 15px;background:white;position: fixed;width: 100%;z-index: 99;"></div>
        <x-header style="background: white;position: fixed;width: 100%;z-index: 99;top: 15px">
          <div slot="overwrite-left" style="color: black;display: -webkit-box;">
            <div class="iconfont icon-icon-test1" style="font-size: 20px" @click="goback"></div>
            <div style="font-size: 18px;padding: 1px 10px;">设置</div>
          </div>
        </x-header>
      </div>
      <div style="padding: 18px">
        <div v-for="(item,index) in items" :key="index" style="line-height: 50px;border-bottom: 1px solid #e1e1e1">
          <span>{{item.left}}</span> <span v-if="item.right" style="float: right;color: #999999">{{item.right}}</span>
        </div>
      </div>
    </div>
</template>

<script>
  import {XHeader} from 'vux'
    export default {
        mounted(){
          this.$browser.headerColor({txtcolor:"#000000"})
        },
        data () {
            return {
              items:[{left:"反馈"},{left:"清除缓存"},{left:"设置密码"},{left:"版本更新",right:"V2.12"}]
            }
        },
        components: {XHeader},
        methods: {
          goback(){
            this.$router.go(-1)
          }
        }
    }
</script>

<style>
</style>
