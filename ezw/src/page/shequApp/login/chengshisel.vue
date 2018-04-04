<template>
    <div>
      <div style="height: 53px;">
        <div style="height: 15px;background:white;position: fixed;width: 100%;z-index: 99;"></div>
        <x-header style="background: white;position: fixed;width: 100%;z-index: 99;top: 15px">
          <div slot="overwrite-left"><span class="iconfont icon-icon-test1" @click="fanhui" style="color: black"></span><span style="margin-left: 10px;font-size: 16px;color: black">城市选择</span></div>
          <!--<div slot="right"><span class="iconfont icon-icon-test" style="margin-right: 5px;    vertical-align: middle;"></span><span style="color: black">北京</span></div>-->
        </x-header>
      </div>
      <div class="searchs">
        <search
          placeholder="请输入您要找的城市名"
          v-model="value"
          position="absolute"
          auto-scroll-to-top top="53px"
          @on-cancel="cancel"
          @on-change="submit1"
          ref="search">
          <div slot="default" style="padding: 0 15px">
            <div style="font-size: 14px;padding-bottom: 5px;border-bottom: 1px solid #d9dde2;position: fixed; background: white;  z-index: 1; width: 90%;">
             热门城市
            </div>
          </div>
          <div style="font-size: 14px;display:-webkit-box;border-bottom: 1px solid #d9dde2;position: fixed; background: white;  z-index: 1; width: 100%;margin-top: 25px;line-height: 40px">
            <div v-for="(city,index) in citys" :key="index" style="text-align: center;-webkit-box-flex: 1" @click="listclick(city)">{{city.name}}</div>
          </div>
          <div class="box2" style="padding: 15px;margin-top: 45px;position: relative">
            <div v-for=" (item,index) in num" :id="'anchor-'+index" :key="index" style="line-height: 35px;border-bottom: 1px solid #d9dde2" >
              <div>{{item}}</div>
              <div v-for=" (city,i) in city1[index]" :key="i" @click="listclick(city)" :id="'anchor-'+city.id">{{city.name}}</div>
            </div>
            <div style="position: fixed;width: 35px;top: 160px;right:0;bottom:0;text-align: right;padding-right: 5px;   overflow-y: scroll;">
              <a v-for="(i,index) in num" style="display: block;font-size: 14px" @click="goAnchor('#anchor-'+index)">{{i}}</a>
            </div>
          </div>
        </search>
      </div>
    </div>
</template>

<script>
  import { XHeader ,Search } from 'vux'
    export default {
        mounted(){
          this.$browser.headerColor({txtcolor:"#000000"})
        },
        created(){
          var self=this;
          this.$ajax('chengshilist', {
            success(data){
              var data=data;
              let sum=[];
              for(let i=0;i<self.num.length;i++){
                      let arr=[];
                 for(let j=0;j<data.length;j++){
                    if(self.num[i]==data[j].firstzim){
                        var obj={}
                        obj.name=data[j].cityname;
                        obj.id=data[j].cityid
                        arr.push(obj)
                    }
                 }
                 sum.push(arr)
              }
              self.city1=sum
            }
          })
        },
        data () {
            return {
              num:["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
              citys:[{name:"北京",id:"1"},{name:"上海",id:"73"},{name:"广州",id:"197"},{name:"深圳",id:"199"},{name:"武汉",id:"169"}],
              city1:[],
              value:"",
              items: [{address:"天通苑"},{address:"天通苑"},{address:"天通苑"},{address:"天通苑"},{address:"天通苑"},{address:"天通苑"},{address:"天通苑"},{address:"天通苑"},{address:"天通苑"},{address:"天通苑"},{address:"天通苑"},{address:"天通苑"},{address:"天通苑"},{address:"天通苑"},{address:"天通苑"},{address:"天通苑"},{address:"天通苑"},{address:"天通苑"}]
            }
        },
        components: {
          XHeader,
          Search
        },
        methods: {
          listclick(obj){
            this.$router.push({
              path:"shequsel",
              query:{
                cityid:obj.id,
                cityname:obj.name
              }
            })
          },
          goAnchor(selector) {
            var anchor = this.$el.querySelector(selector)
            document.getElementsByClassName("vux-search_show")[0].scrollTop = anchor.offsetTop-12
          },
          submit1(){
            var anchor = this.$el.querySelector(selector)
            document.getElementsByClassName("vux-search_show")[0].scrollTop = anchor.offsetTop-12
          },
          cancel(){
              this.value=""
          },
          fanhui(){
            this.$router.go(-1)
          }
        }
    }
</script>

<style>
  .searchs .weui-search-bar__box{
    background: #e2e7ed!important;
  }
  .searchs .weui-search-bar{
    background: white;
  }
  .weui-search-bar:after, .weui-search-bar:before,.weui-cells:before{
    border: none!important;
  }
  .weui-search-bar__cancel-btn{
    color: black!important;
  }
  .weui-cells.vux-search_show{
    top:95px;
    bottom: 0;
  }
  .weui-loadmore{
    margin: 0.5rem auto!important;
  }
  .vux-search_show{
    display: block!important;
  }
</style>
