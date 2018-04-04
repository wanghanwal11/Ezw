<template>
    <div :class="classes">
      <div class="tj"  v-for="(item,index) in items" :key="index">
          <div class="left">{{item.title}}</div>
          <div v-if="item.number" class="center">{{item.number}}</div>
          <div class="right"> <x-button mini plain type="primary" style="width: 63px;height: 25px;line-height: 25px;" :class="item.state?item.state:'state1'" @click.native="toupiao(item,index)">投票</x-button></div>
      </div>
    </div>
</template>

<script>
  import { XButton } from 'vux'
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
          XButton
        },
        methods: {
          toupiao(item,index){
            if(item.state&&item.state=="state2"||item.state&&item.state=="state3"){
                return
            }
            const vm = this
            this.$vux.confirm.show({
              title: '选择好了吗？',
              content: '请确定是否选择完成',
              onCancel () {
              },
              onConfirm () {
                vm.$emit("toupiao",{item:item,index:index})
              }
            })
          }
        }
    }
</script>

<style scoped>
  .tj{
    display: -webkit-box;
    margin: 20px 0;
  }
  .left{
    -webkit-box-flex: 1;
    margin-right: 10px;
    word-wrap: break-word;
  }
  .center{
    min-width: 50px;
    margin-right: 10px;
    color: cadetblue;
  }
  .right{

  }
  .state1{
    color: #1aad19;
    border: 1px solid #1aad19;
  }
  .state2{
    color: #999999;
    border: 1px solid #999999;
  }
  .state3{
    color: white;
    border: 1px solid #999999;
    background: #999999;
  }
</style>
