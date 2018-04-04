<template>
    <div :class="classes">
        <div v-for="(item,index) in items" :key="index" class="h0">
          <div class="h1">
            <div class="left">{{item.title}}</div><div class="right">{{item.count}}</div>
          </div>
          <x-progress :percent="item.number" :show-cancel="false" ></x-progress>
        </div>
    </div>
</template>

<script>
  import { XProgress, Box } from 'vux'
    export default {
        mounted(){

        },
        props:{
            classes:String,
            items:{
                  type:Array,
                  default:[]
            }
        },
        data () {
            return {
            }
        },
        components: {
          XProgress
        },
        methods: {}
    }
</script>

<style scoped>
  .h1{
    display: -webkit-box;
  }
  .left{
    width: 80%;
    word-break: break-all;
  }
  .right{
    width: 20%;text-align: right
  }
</style>
