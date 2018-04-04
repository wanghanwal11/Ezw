<template>
    <div>

      <div style="height: 53px;">
        <div style="height: 15px;background:white;position: fixed;width: 100%;z-index: 99;"></div>
        <x-header style="background: white;position: fixed;width: 100%;z-index: 99;top: 15px">
          <div slot="overwrite-left"><span class="iconfont icon-icon-test1" style="color: black" @click="fanhui"></span><span style="margin-left: 10px;font-size: 16px;color: black">小区选择</span></div>
          <div slot="right"><span class="iconfont icon-icon-test" style="margin-right: 5px;    vertical-align: middle;"></span><span style="color: black">{{cityname}}</span></div>
        </x-header>
      </div>
      <div class="searchs">
        <search
          placeholder="请输入您要找的社区名"
          v-model="value"
          position="absolute"
          auto-scroll-to-top top="53px"
          @on-cancel="cancel"
          @on-change="submit1"
          ref="search">
          <div slot="default" style="padding: 0 15px" >
              <div style="font-size: 14px;padding-bottom: 5px;border-bottom: 1px solid #d9dde2;position: fixed; background: white;  z-index: 1; width: 90%;">
                附近社区
              </div>
            <div class="box2" style="padding-top: 30px;">
              <p v-for=" (item,index) in items" :key="index" style="line-height: 35px" @click="listclick(item)">{{item.address}}</p>
              <load-more :tip="tip" :show-loading="loading" style="margin-top: 15px!important"></load-more>
            </div>
          </div>
        </search>
      </div>
    </div>
</template>

<script>
  import { XHeader ,Search,Scroller,LoadMore  } from 'vux'
    export default {
        mounted(){
            var self=this;
          this.$browser.headerColor({bgcolor:"#ffffff",txtcolor:"#000000"})
          document.getElementsByClassName('vux-search_show')[0].addEventListener('scroll', function(){
            if(document.getElementsByClassName('vux-search_show')[0].scrollTop+document.getElementsByClassName('vux-search_show')[0].clientHeight == document.getElementsByClassName('vux-search_show')[0].scrollHeight){
                self.show=true
                self.load()
            }
          })
          //alert(document.getElementsByClassName('vux-search_show')[0].scrollTop)
        },
        created(){
          var self=this;
          this.load()
        },
        data () {
            return {
              value:"",
              page:1,
              tip:"正在加载",
              loading:true,
              cityid:this.$route.query.cityid,
              cityname:this.$route.query.cityname,
              pageSN:1,
              showloading:false,
              items: []
            }
        },
        components: {
          XHeader,
          Search,
          Scroller,
          LoadMore
        },
        methods: {
            load(){
              var self=this;
              this.$ajax('shequlist', {
                params:{
                  cityid:self.cityid,
                  page:self.page,
                  rows:"20",
                  communityname:self.value
                },
                success(data){
                    if(data.length==0||data.length<20){
                        self.tip="暂无更多数据";
                        self.loading=false
                    }else{
                      self.tip="正在加载";
                      self.loading=true
                    }
                  for(var i=0;i<data.length;i++){
                    var obj={};
                    obj.address=data[i].communityname
                    obj.id=data[i].streetorcommunityid
                    obj.streetorcommunity=data[i].streetorcommunity
                    self.items.push(obj)
                  }
                  self.page++;
                }
              })
            },
          listclick(item){
            const vm = this
            this.$vux.confirm.show({
              title: '选择好了吗？',
              content: '是否选择'+item.address+"?",
              onCancel () {
              },
              onConfirm () {
                vm.$ajax('saveTuserInfo', {
                  params:{
                    streetorcommunity:item.streetorcommunity,
                    streetorcommunityid:item.id
                  },
                  success(data){
                     vm.$router.replace({
                     path:"admin/shouye"
                     })
                  }
                })
              }
            })
          },
          submit1(){
              this.items=[]
               this.page=1
              this.load()
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
