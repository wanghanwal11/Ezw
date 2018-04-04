<template>
    <div style="    padding: 15px;">
        <div v-for="(item,index) in items" :key="index" class="boex">
          <div class="ming"  v-if="item.ming">{{item.ming}}</div>
          <div class="ren">
              <div style="display: -webkit-box;">
                <div style="width: 60px;height: 60px;border: 1px solid white;border-radius: 50%;background-size: 100% 100%" :style="{backgroundImage:'url('+item.src+')'}"></div>
                <div style="-webkit-box-flex: 1" :class="item.person.length==0?'juzhong':''">
                  <div style="padding: 3px 10px">{{item.ren}}
                    <svg slot="icon" class="icon i" aria-hidden="true" style="width: 20px;height: 20px;vertical-align: middle;margin-top: -2px;">
                    <use xlink:href="#icon-tubiaozhizuomoban1"></use>
                    </svg>
                  </div>
                  <div v-if="item.person.length>0">
                    <tags :items="item.person"></tags>
                  </div>
                </div>
              </div>
          </div>
          <div class="fen" v-if="item.fen"><span style="font-size: 26px;padding: 0 10px">{{item.fen}}</span>分</div>
          <div class="guanzhu" v-if="item.guanzhu" @click="guanzhu(item)">
              <x-button mini  style="color: #666666">{{item.guanzhu}}</x-button>
          </div>
        </div>
    </div>
</template>

<script>
  import tags from "@/components/tags"
  import { XButton} from 'vux'
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

            }
        },
        components: {
          tags,
          XButton
        },
        methods: {
          guanzhu(obj){
            this.$emit("guanzhu",obj)
          }
        }
    }
</script>

<style scoped>
  .boex{
    display: -webkit-box;
    -webkit-box-align: center;
    padding: 10px 0;
  }
  .juzhong{
    display: -webkit-box;;
    -webkit-box-align: center;
  }
  .ming{
    width: 25px;
    height: 25px;
    border: 1px solid white;
    border-radius: 50%;
    text-align: center;
  }
  .fen{
    min-width: 50px;
    text-align: right;
  }
  .ren{
    -webkit-box-flex: 1;
    padding-left: 10px;
  }
  .boex:nth-child(1) .ming{
    background: #ffcc00;
    color: white;
  }
  .boex:nth-child(2) .ming{
    background: #bbc1c9;
    color: white;
  }
  .boex:nth-child(3) .ming{
    background: #de9457;
    color: white;
  }
  .boex:nth-child(1) .fen{
    color: #ffcc00;
  }
  .boex:nth-child(2) .fen{
    color:  #bbc1c9;
  }
  .boex:nth-child(3) .fen{
    color: #de9457;
  }
</style>
