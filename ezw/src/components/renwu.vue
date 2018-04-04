<template>
    <div>
        <div v-for="(item,index) in items" :key="index" :class="!item.states?'gray':''" style="margin-bottom: 15px;padding: 10px;background-size: 100% 100%;border:1px solid white;border-radius: 5px" :style="{backgroundImage:'url('+item.bg+')'}">
            <div style="display: -webkit-box">
                <div style="width: 60px" >
                  <span class="iconfont" :class="item.src" style="font-size: 40px;color: white"></span>
                </div>
                <div style="-webkit-box-flex: 1">
                  <div style="line-height: 38px;color: white;font-size: 18px">{{item.h1}}</div>
                  <div style="font-size: 14px;color: white;opacity: 0.6;">{{item.h2}} </div>
                </div>
                <div style="min-width:50px;line-height: 63px;color: white;text-align: center">{{item.state}}<span style="padding: 0px 5px;font-size: 20px;vertical-align: middle;" v-if="item.states">></span></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted(){

        },
        props:{
          items:{
              type:Array,
              default:[]
          }
        },
        data () {
            return {
                message: ''
            }
        },
        components: {},
        methods: {}
    }
</script>

<style scoped>
  .gray{
    -webkit-filter: grayscale(100%);
    -moz-filter: grayscale(100%);
    -ms-filter: grayscale(100%);
    -o-filter: grayscale(100%);
    filter: grayscale(100%);
    filter: gray;
  }
</style>
