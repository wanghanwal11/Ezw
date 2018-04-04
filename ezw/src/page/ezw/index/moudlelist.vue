<template>
    <div>
      <div style="height: 61px">
        <div style="height: 15px;background:white;position: fixed;width: 100%;z-index: 99;"></div>
        <x-header style="background: white;position: fixed;width: 100%;z-index: 99;top: 15px">
          <div slot="overwrite-left" style="color: black;display: -webkit-box;">
            <div class="iconfont icon-icon_arrow_left" style="font-size: 20px" @click="goback"></div>
          </div>
          <div style="color: black">更多</div>
          <div slot="right" style="color: black;font-size: 14px" @click="bj">编辑</div>
        </x-header>
      </div>
      <div>
        <div style="background: white">
          <div style="margin-left: 15px">常用1</div>
          <draggable class="dragArea" :list="item1" :options="{group:'people',disabled:disabled,chosenClass:'choose',animation:200}" @change="log" style="overflow: hidden;">
            <div v-for="(i,index) in item1" :key="index" style="text-align: center;width: 25%;display: inline-block;padding: 10px 0;" @click="pointto(i,index)">
                <div style="width: 30px;height: 30px;background: red;margin: 0 auto;position: relative">
                  <badge v-if="bianji" :text="i.text?'+':'-'" style=" position: absolute;top: -8px; right: -8px;"></badge>
                  <badge v-if="!bianji" :text="i.num" style=" position: absolute;top: -8px; right: -8px;"></badge>
                </div>
                <span style="line-height: 20px;font-size: 14px;color: gray">{{i.title}}</span>

              </div>
          </draggable>
        </div>
      </div>
      <div>
        <div style="background: white">
          <div style="margin-left: 15px">业务1</div>
          <draggable class="dragArea" :list="item2" :options="{group:'people',disabled:true,chosenClass:'choose',animation:200}" @change="log" style="overflow: hidden;">
            <transition-group name="list" tag="p" >
            <div v-for="(i,index) in item2" :key="index" style="text-align: center;width: 25%;display: inline-block;padding: 10px 0;" @click="pointto1(i,index)">
              <div style="width: 30px;height: 30px;background: red;margin: 0 auto;position: relative">
                <badge v-if="bianji" :text="i.text?'+':'-'" :style="{background:i.text?'blue':'red'}" style=" position: absolute;top: -8px; right: -8px;"></badge>
                <badge v-if="!bianji" :text="i.num" style=" position: absolute;top: -8px; right: -8px;"></badge>
              </div>
              <span style="line-height: 20px;font-size: 14px;color: gray">{{i.title}}</span>
            </div>
            </transition-group>
          </draggable>

        </div>
      </div>
    </div>
</template>

<script>
  import { XHeader,Badge} from 'vux'
  import draggable from 'vuedraggable'
    export default {
        mounted(){
        },
        data () {
            return {
              disabled:true,
              bianji:false,
              item1: [{title:'呼叫中心',badge:2,text:false},{title:'网格化',text:false}],
              item2: [{title:'呼叫中心',badge:2,text:false},{title:'网格化',text:false},{title:'事件督办',text:true},{title:'任务下派',text:true},{title:'待审批',text:true},{title:'公告',text:true},{title:'申请1',text:true},{title:'申请2',text:true},{title:'申请3',text:true}],
            }
        },
        components: {XHeader,draggable,Badge},
        methods: {
          goback(){
            this.$router.go(-1)
          },
          bj(){
              this.disabled=false
              this.bianji=true
          },
          log: function (evt){
            console.log(evt)
          },
          pointto(item,index){
              if(this.bianji){
                  if(this.item1.length<=4){
                      alert("不能小于4个")
                     return;
                  }
                this.item1.splice(index,1)
                for (let value of this.item2) {
                    if(value.title==item.title){
                      value.text=true
                    }
                }
              }
          },
          pointto1(item,index){
            if(this.bianji){
                if(item.text){
                  if(this.item1.length>=7){
                    alert("不能大于7个")
                    return;
                  }
                  item.text=false
                  this.item1.push(item)

                }else{
                  if(this.item1.length<=4){
                    alert("不能小于4个")
                    return;
                  }
                  item.text=true
                  for (let value of this.item1) {
                    if(value.title==item.title){
                      this.item1= this.item1.filter(function(i){
                          return i.title!=item.title
                      })
                    }
                  }
                }

            }
          }
        }
    }
</script>

<style>
   .weui-grids:before, .weui-grid:before, .weui-grid:after{
    border: none;
  }
   .list-enter-active, .list-leave-active {
     transition: all 1s;
   }
   .list-enter, .list-leave-active {
     opacity: 0;
     transform: translateY(30px);
   }
</style>
