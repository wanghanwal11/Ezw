<template>
    <div>
       <span class="span" v-for="(item,index) in items" :key="index" :style="{background:item.color?item.color:'red'}" >{{item.name}}</span>
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
  .span{
    display: inline-block;
    padding: 1px 10px;
    border: 1px solid white;
    border-radius: 12px;
    color: white;
    height: 20px;
    font-size: 14px;
    text-align: center;
    line-height: 20px;
    margin: 0 5px;
  }
</style>
