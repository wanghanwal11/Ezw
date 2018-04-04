<template>
    <div class="shouye">
      <div style="height: 71px">
        <div style="height: 25px;background:#ff6d00;position: fixed;width: 100%;z-index: 99;"></div>
          <x-header style="background: #ff6d00;position: fixed;width: 100%;z-index: 99;top: 25px;">
            <div slot="overwrite-left">
              <div style="width: 45px;height: 45px;border: 1px solid #ff6600;border-radius: 50%;background-size: 100% 100%" :style="{backgroundImage:'url('+userinfo.headpicurl+')'}"></div>
            </div>
            <div style="color: white;">{{shequinfo.communityname}}</div>
            <div slot="right">
              <div class="iconfont icon-saoyisao" style="font-size: 18px;color: white;line-height: 47px"></div>
            </div>
          </x-header>
      </div>
      <div style="height: 260px;background-size: 100% 100%" :style="{backgroundImage:'url('+headerbg+')'}">
        <div style="height: 180px;display: -webkit-box">
          <div style="width: 95px;color: white;text-align: center;font-size: 14px;margin-top: 68px" @click="jifenpm">
            <div><span style="font-size: 20px;padding: 5px;    line-height: 50px;">126</span>名</div>
            <div>排名</div>
          </div>
          <div style="-webkit-box-flex: 1;text-align: center;color: white">
            <div  class="yuan">
              <div style="font-size: 14px;color: #ffc7aa">总积分</div>
              <div style="line-height: 35px" @click="jifensq"><span style="font-size: 26px;padding: 5px;    line-height: 54px;">715</span>分</div>
              <div>{{userinfo.name}}
                <svg slot="icon" class="icon i" aria-hidden="true" style="width: 20px;height: 20px  ;  vertical-align: middle;
    margin-top: -4px;">
                       <use xlink:href="#icon-dengji"></use>
                </svg>
              </div>
            </div>
          </div>
          <div style="width: 95px;color: white;text-align: center;font-size: 14px;margin-top: 68px" @click="jifenxz">
            <div><span style="font-size: 20px;padding: 5px;    line-height: 50px;">36</span>分</div>
            <div>新增</div>
          </div>
        </div>
        <div style="display: -webkit-box">
          <div style="-webkit-box-flex: 1;text-align: center"> <x-button plain mini type="primary" style="color: white;border-color: #fbb64e;width: 140px;height: 40px;font-size: 16px">了解积分</x-button></div>
          <div style="-webkit-box-flex: 1;text-align: center"><x-button plain mini type="primary" style="color: white;border-color: #fbb64e;width: 140px;height: 40px;font-size: 16px">晒晒积分</x-button></div>
        </div>
      </div>
      <div style="padding: 0 15px;font-weight: bold;font-size: 18px">智能推送</div>
      <xinwen :items="items"></xinwen>
    </div>
</template>

<script>
  import { ViewBox, Scroller, Sticky, XButton,XHeader } from 'vux'
  import xinwen from "@/components/xinwen"
  import tu1 from "@/assets/tu1.png"
  import ren from "@/assets/ren.png"
  import headerbg from "@/assets/headerbg.png"
  var self = null;
  export default {
      mounted() {
          self = this;
          this.$browser.headerColor({txtcolor:"#ffffff"});
          this.shequinfo= this.$browser.getParameter("shequinfo");
          this.userinfo= this.$browser.getParameter("userinfo");
          this.$ajax('indexjf', {
            params: {
              initid: this.shequinfo.initid,
              communitytype:this.shequinfo.streetorcommunity,
              communityid:this.shequinfo.streetorcommunityid,
              unionid: this.userinfo.unionid
            },
            success (data) {
                alert(JSON.stringify(data))
            }
          })
      },
      data() {
          return {
            userinfo:{},
            shequinfo:{},
            headerbg:headerbg,
            items:[{type:"活动 +6积分",typecolor:"#ffa800",title:"北京2017冬季空气质量显著提升，连续20日无雾霾",see:363,time:"6小时前",src:tu1},{type:"通知",typecolor:"#f44747",title:"为响应全国人民代表大会，从明日起本社区的潘家起本社区",see:363,time:"6小时前",src:tu1},{type:"随手拍 积分+2",typecolor:"#0097ff",title:"您用“随手拍”上报的事件已有处理结果啦去评价获得积分奖励！",time:"12.25",ping:true}]
          }
      },
      components: { ViewBox, Scroller, Sticky, XButton ,xinwen,XHeader},
      methods: {
        onScroll (pos) {
          this.scrollTop = pos.top
        },
        card() {

        },
        jifensq(){
            this.$router.push({path:"/jifensq"})
        },
        jifenxz(){
          this.$router.push({path:"/jifenxz"})
        },
        jifenpm(){
          this.$router.push({path:"/jifenpm"})
        }
      }
  }
</script>

<style>
  .yuan{
    background: url(../../../assets/yuan.png);
    background-size: 100% 100%;
    height: 104px;
    width: 166px;
    padding-top: 32px;
    margin: 10px auto;
  }
  .shouye .vux-header .vux-header-left, .vux-header .vux-header-right{
    top:0!important;
  }
</style>
