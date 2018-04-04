<template>
    <div class="toupiaoal1">

      <div style="height: 100%;background: #fffeef;position: relative;height:100%;overflow-y:scroll" >
        <div v-html="content" class="dec"></div>
        <div style="width: 100%;background: white;    padding: 20px 0;">
          <div style="width: 80%;margin: 0px auto;text-align: center;color: orange">投票时间</br>
            <countdown :endTime="chuo" :callback="callback" endText="已经结束了"></countdown>
          </div>
        </div>
        <div style="width: 100%">
          <divider style="margin: 20px 40px;">请从下列选项中选取</divider>
        </div>

        <div>
        <wall :imgsArr="imgsArr" >
          <template scope="props">
            <div class="grids">
              <div class="content">
                <div class="name" style="font-size: 14px;padding: 5px">{{ props.value.title }}</div>
               <span v-if="toupiaotype" style="padding: 0 10px;color: orange;font-weight: bold">1111<span style="font-size: 14px">票</span></span> <x-button mini plain :disabled="disabled" type="primary" style="border-radius:3px;height: 22px;line-height: 22px;margin:5px 0;" :style="{width:!toupiaotype?'100px':'auto'}" :class="props.value.state"  @click.native="toupiaotw(props.value.id)">投票</x-button>
              </div>
            </div>
          </template>
        </wall>
        </div>

      </div>
      <div style="background: #fffeef;text-align: center;padding: 20px 0;"  v-if="toupiaostate">
      <x-button type="primary" :show-loading="false"  @click.native="jieguo" class="btntw">查看结果</x-button>
      </div>
      </div>
</template>

<script>
  import wall from '@/components/wall.vue'
  import countdown from '@/components/countdown.vue'
  import { Divider,Masker, Grid, GridItem, Flexbox, FlexboxItem,XButton} from 'vux'
  export default {
        mounted(){

        },
        created(){
          var vm=this;
          var url=this.$store.state.serverHost+"cmy/vote/cmyVote/getByMobile?openid="+localStorage.appid+"&id="+this.id
          this.$http.get(url).then(function(res){
            console.log(res.data.rows[0])
            var data=res.data.rows[0]
            vm.chuo=new Date(vm.$browser.FormatDate(data.endtime,"yyyy-MM-dd")).valueOf();
            vm.content=data.description
            var arr=[];
            if(data.numshow=="投票后"){
              vm.toupiaotype=false;
              for(var i=0;i<data.options.length;i++){
                var s={};
                s.src=data.options[i].imgcontent
                s.title=data.options[i].txtcontent;
                s.id=data.options[i].id;
                s.state="state1";
                arr.push(s)
              }
              vm.imgsArr=arr;
            }else{
              vm.toupiaotype=true;
              for(var i=0;i<data.options.length;i++){
                var s={};
                s.src=data.options[i].imgcontent
                s.title=data.options[i].txtcontent;
                s.id=data.options[i].id;
                s.state="state1";
                arr.push(s)
              }
              vm.imgsArr=arr;
            }
            if(data.isvote=="Y"){
              vm.callback()
              vm.toupiaostate=true
            }
          })
        },
        data () {
            return {
              toupiaostate:false,
              chuo:"",
              content:"",
              imgsArr: [],         //存放所有已加载图片的数组（即当前页面会加载的所有图片）
              fetchImgsArr: [],
              toupiaotype:false,
              disabled:false,
              id:this.$route.query.actid
            }
        },
        components: {
          wall,
          Divider,
          Masker,
          Grid, GridItem, Flexbox, FlexboxItem,XButton,countdown
        },
        methods: {
          toupiaotw(ids){
            const vm = this
            this.$vux.confirm.show({
              title: '选择好了吗？',
              content: '请确定是否选择完成',
              onCancel () {
              },
              onConfirm () {
                var url=vm.$store.state.serverHost+"cmy/vote/cmyVoteuser/vote?openid="+localStorage.appid
                 vm.$http.get(url,{params:{
                   voteid:vm.id,
                   optionids:ids,
                   initid:localStorage.ininted
                   }
                 }).then(function(res){
                   vm.$vux.alert.show({
                     title: '投票成功',
                     buttonText:"查看投票结果",
                     hideOnBlur:true,
                     content: '您已投票，可查看投票结果',
                     onHide () {
                       vm.$router.push({
                         path:"toupiaojgtw",
                         query:{
                           actid:vm.id
                         }
                       })
                     }
                   })
                 })
              }
            })
          },
          jieguo(){
            var vm=this;
            this.$router.push({
              path:"toupiaojgtw",
              query:{
                actid:vm.id
              }
            })
          },
          callback(){
            this.disabled=true
            for(var i=0;i<this.imgsArr.length;i++){
              this.imgsArr[i].state="state2"
            }
          }
        }
    }
</script>

<style>
  .toupiaoal1{
    height: 100%;
  }
  .m-img {
    padding-bottom: 33%;
    display: block;
    position: relative;
    max-width: 100%;
    background-size: cover;
    background-position: center center;
    cursor: pointer;
    border-radius: 2px;
  }
  .btntw{
    display: block;
    width: 80%!important;
    background: #FB4343!important;
  }
  .m-title {
    color: #fff;
    text-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
    font-weight: 500;
    font-size: 16px;
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    text-align: center;
    top: 50%;
    z-index: 1;
  }
  .grids {
    border: none!important;
  }
 .weui-grids:before, .weui-grid:before, .weui-grids:after,.weui-grid:after{
    border: none!important;
  }
  .grids .weui-grid__icon{
    width: 80%;
    height: 80%;
  }
  .grids {

  }
  .grids .content{
    background: white;
    text-align: center;
    margin: 0 auto;
  }
  .grids .content img{
   width: 100%;
    height: 134px;
  }
  .grids .name{
    word-wrap: break-word;
  }
  .grids .btnn{
    width: 55px;
    height: 20px;
    line-height: 20px;
    margin-bottom: 5px;
    border-radius: 13px;
    padding: 0;
    margin-left: 10px;
    background: #FA6C3C;
    border: 1px solid #FA6C3C;
    color: white;
  }
  .state1{
    color: white!important;
    background-color: #FB4144!important;
    border: 1px solid #FB4144!important;
  }
  .state2{
    color: white!important;
    background-color: #999999!important;
    border: 1px solid #999999!important;
  }
  .dec{
    background: white;
  }
  .dec img{
    max-width: 100%;
  }
</style>
