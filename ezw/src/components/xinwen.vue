<template>
    <div class="xinwen">
      <div class="box" v-for="(item,index) in items" :key="index">
          <div class="left" :style="{paddingRight:item.src?'15px':'0'}">
            <div class="text">
            {{item.title}}
            </div>
          <div class="footer">
            <div class="type" v-if="item.type" :style="{borderColor:item.typecolor?item.typecolor:'#f43d3d',color:item.typecolor?item.typecolor:'#f43d3d'}" >{{item.type}}</div>
            <div style="-webkit-box-flex: 1;display: -webkit-box">
              <div v-if="item.see" class="iconfont icon-chakan" style="color: #c1c4ca;padding: 0px 8px;line-height: 28px;font-size: 14px">&nbsp;{{item.see}}</div>
              <div v-if="item.time" style="color: #c1c4ca;line-height: 28px;margin-left: 5px">{{item.time}}</div>
            </div>
            <div v-if="item.ping" style="color: #287eff;line-height: 28px;">去评价></div>
          </div>
          </div>
          <div v-if="item.src" class="img"><img :src="item.src"></div>
      </div>
    </div>
</template>

<script>
    export default {
        mounted(){

        },
      props:{
        items: {
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
  .xinwen{
    padding: 15px;
  }
    .box{
      display: -webkit-box;
      padding-bottom: 15px;
      margin-bottom: 15px;
      border-bottom: 1px solid #e5e5e5;
      text-align: justify;
    }
    .left{
      -webkit-box-flex: 1;
    }
    .text{
      height: 48px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
    }
  .img{
    width: 125px;
    height: 105px;
  }
    .img img{
      width: 100%;
      height: 100%;
    }
  .footer {
    display: -webkit-box;
    margin-top: 25px;
    font-size: 14px;
  }
  .type{
    border: 1px solid white;
    border-radius: 4px;
    padding: 2px 5px;
  }
</style>
