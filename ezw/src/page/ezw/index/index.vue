<template>
    <div>
      <div class="header">
        <div style="height: 15px;background:#2989ff;position: fixed;width: 100%;z-index: 99;"></div>
        <x-header style="background: #2989ff;position: fixed;width: 100%;z-index: 99;top: 15px">
          <div slot="overwrite-left"></div>
          <div style="color: white">E政务</div>
        </x-header>
      </div>
      <div style="width: 100%;position: relative;">
        <div style="height: 61px"></div>
        <div  class="my_scroller" >
          <grid :cols="4" style="background: white;  width: 100%;margin-bottom: 10px" :class="{'fix':fix}">
            <grid-item v-for="(i,index) in item1" :key="index" style="text-align: center" @click.native="pointto(i)">
              <div>
                <div  style="position: relative;width: 30px;height: 30px;margin: 0 auto;">
                  <svg slot="icon" class="icon i" aria-hidden="true" style="width: 30px;height: 30px;">
                    <use :xlink:href="'#icon-'+i.cls"></use>
                  </svg>
                  <div style="position: absolute;bottom: -3px;width: 18px;height: 18px;right: -4px;background: white;border: 1px solid white;border-radius: 50%">
                    <badge text="9" style="margin-top: -8px;padding: 0px;margin-left: 2px;width: 13px;height: 13px;background: white;border: 2px solid #F05140;color: #F05140"></badge>
                  </div>
                </div>
                <span style="line-height: 20px;font-size: 12px;color: black">{{i.title}}</span>
              </div>
            </grid-item>
          </grid>
          <div style="background: white;margin-bottom: 10px"  v-for="i in 10">
              <div style="display: -webkit-box;padding: 10px;">
                <div style="width: 40px;text-align: center;position: relative">
                  <svg slot="icon" class="icon i" aria-hidden="true" style="width: 22px;height: 22px;position: absolute;top: 2px;left: 10px">
                    <use xlink:href="#icon-hujiaozhongxin"></use>
                  </svg>
                  <badge  style="margin-top: -14px;padding: 4px;position: absolute;top: 11px;right: 7px;"></badge>
                </div>
                <div style="font-size: 14px;line-height: 28px;color: #999;-webkit-box-flex: 1;padding-left: 3px">
                  <span style="color: black">网格化</span>
                  <span style="margin-left: 30px;float: right;margin-right: 10px;">2017-2-5</span>
                </div>
              </div>
              <div style="padding: 0 20px;display: -webkit-box;background: #f8f8f8">
                  <div style="-webkit-box-flex: 1; padding: 5px 0px; padding-right: 10px;">
                    <div style="line-height: 30px;">紧急事件--已转办</div>
                    <div style="font-size: 14px;padding-bottom: 5px;color: #999;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;">燃烧原料燃烧原料燃烧原料燃烧原料燃烧原料燃烧原料燃烧原料</div>
                  </div>
                  <div style="width: 50px" v-if="false">
                    11
                  </div>
               </div>
              <div style="padding: 0 20px 0px 20px;"><div style="font-size: 14px;color: #999;line-height: 30px;">来源:111</div></div>
          </div>
        </div>
      </div>
      <div style="height: 53px"></div>
    </div>
</template>

<script>
  import { Grid, GridItem, GroupTitle,XHeader,Badge,Flexbox, FlexboxItem } from 'vux'
  var vm
    export default {
        mounted(){
          vm=this;
          this.$browser.headerColor({txtcolor:"#000000"})
          window.addEventListener('scroll',this.menu)
          },
        data () {
            return {
              item1: [{title:'呼叫中心',badge:2,cls:"hujiaozhongxin"},{title:'网格化',cls:"wanggehua"},{title:'事件督办',cls:"shijianduban"},{title:'任务下派',cls:"renwuxiapai"},{title:'待审批',cls:"shenpi"},{title:'公告',cls:"gonggao"},{title:'更多',cls:"gengduo"}],
              items: [],
              scrollTop:0,
              fix:false
            }
        },
        components: {
          Grid,
          GridItem,
          GroupTitle,
          XHeader,
          Badge,Flexbox, FlexboxItem
        },
        watch:{

        },
        methods: {
            menu(){
             this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
              if(this.scrollTop>=79){
                 this.fix=true
              }else{
                this.fix=false
              }
            },
          vuetouch(s,e){
            if(s.name=='longtap'){
              alert(1)
            }
          },
          pointto(){
              this.$router.push({
                path:'/moudlelist'
              })
          }
        }
    }
</script>

<style>
 .my_scroller .weui-grid{
    padding: 15px 10px 5px 10px;
  }
  .row{
    background: white;
    padding: 10px;
  }
 .my_scroller .weui-grids:before,.my_scroller .weui-grid:before,.my_scroller .weui-grid:after{
   border: none;
 }
  .fix{
    position: fixed!important;
    top: -20px;
    z-index: 9;
  }
</style>
