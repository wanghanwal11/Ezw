<template>
    <div class="toupiaoall">

      <div style="background: #fffeef;position: relative;height:100%;overflow-y:scroll">
        <div v-html="content" class="dec"></div>
        <div style="width: 100%;background: white;    padding: 20px 0;">
          <div style="width: 80%;margin:0px auto;text-align: center;color: orange">投票时间</br>
            <countdown :endTime="chuo" :callback="callback" endText="已经结束了"></countdown>
          </div>
        </div>
        <divider style="padding: 20px 40px">请从下列选项中选取</divider>

        <wall :imgsArr="imgsArr" >
            <template scope="props">
              <div class="grids">
                <div class="content">
                  <div class="name">{{ props.value.name }}</div>
                  <flexbox >
                    <flexbox-item><div  style="color: orange;padding-left: 10px;font-size: 14px"><span style="font-weight: bold;font-size: 16px">{{props.value.number}}</span> 票</div></flexbox-item>
                    <div style="text-align: right;padding-right: 10px;width: 30px;    margin-top: 4px;"> <Checker v-model="props.value.check" :disabled-item-class="props.value.xuan?'disabled-item':'disabled-items'" default-item-class="demo1-item"  selected-item-class="demo1-item-selected"  type="checkbox"><CheckerItem :value="props.value.id" :disabled="props.value.disabled"></CheckerItem>        </Checker></div>
                  </flexbox>
                </div>
              </div>
            </template>
        </wall>
      </div>
      <div style="background: #fffeef;text-align: center;padding: 20px 0;">
        <x-button type="primary" :show-loading="false"  @click.native="toupiaotw" class="btntw" v-if="!toupiaostate">投票</x-button>
        <x-button type="primary" :show-loading="false"  @click.native="jieguo" class="btntw" v-if="toupiaostate">查看结果</x-button>
      </div>
    </div>
</template>

<script>
  import { Divider,Masker, Grid, GridItem, Flexbox, FlexboxItem,XButton,CheckerItem,Checker } from 'vux'
  import countdown from '@/components/countdown.vue'
  import wall from '@/components/wall.vue'
  import img from  "@/assets/cy.jpg"
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
            s.name=data.options[i].txtcontent;
            s.number=data.options[i].votecount
            s.xuan=data.options[i].ischoose=="Y"?true:false
            if(data.isvote=="Y"){
              s.disabled=true
            }
            s.id=data.options[i].id
            s.check=[]
            arr.push(s)
          }
          vm.imgsArr=arr;
        }else{
          vm.toupiaotype=true;
          for(var i=0;i<data.options.length;i++){
            var s={};
            s.src=data.options[i].imgcontent
            s.name=data.options[i].txtcontent;
            s.xuan=data.options[i].ischoose=="Y"?true:false
            if(data.isvote=="Y"){
              s.disabled=true
            }
            s.id=data.options[i].id
            s.number=data.options[i].votecount
            s.check=[]
            arr.push(s)
          }
          vm.imgsArr=arr;
        }
        if(data.isvote=="Y"){
          //vm.callback()
          vm.toupiaostate=true;
        }
      })
    },
        data () {
            return {
              toupiaostate:false,
              content:"",
              imgsArr:[],
              id:this.$route.query.actid
            }
        },
        components: {
          Divider,
          Masker,
          Grid, GridItem, Flexbox, FlexboxItem,XButton,
          CheckerItem,Checker,
          countdown,
          wall
        },
        methods: {
          toupiaotw(){
            const vm = this
            this.$vux.confirm.show({
              title: '选择好了吗？',
              content: '请确定是否选择完成',
              onCancel () {
              },
              onConfirm () {
                var arr=[]
                for(var i=0;i<vm.imgsArr.length;i++){
                      if(vm.imgsArr[i].check.length>0){
                          arr.push(vm.imgsArr[i].check[0])
                      }
                }
                var url=vm.$store.state.serverHost+"cmy/vote/cmyVoteuser/vote?openid="+localStorage.appid
                vm.$http.get(url,{params:{
                  voteid:vm.id,
                  optionids:arr.join(","),
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
          select(index){
              alert(index)
          },
          callback(){
            this.disabled=true
            for(var i=0;i<this.imgsArr.length;i++){
              this.imgsArr[i].disabled=true
            }
          },
          jieguo(){
            var vm=this;
            this.$router.push({
              path:"toupiaojgtw",
              query:{
                actid:vm.id
              }
            })
          }
        }
    }
</script>

<style>
  .btntw{
    display: block;
    width: 80%!important;
    background: #FB4343!important;
  }
  .demo1-item {
    border: 1px solid #999999;
    border-radius: 2px;
    width: 16px;
    height: 16px;
  }
  .demo1-item-selected {
    border: 1px solid #FB4343;
    color: red;
    background: url(../../../assets/dui.png) no-repeat;
    background-size: 80%;
    background-position-x: 2px;
    background-position-y: 2px;
  }
  .disabled-item{
    border: 1px solid #FEADAB;
    background: url(../../../assets/dui1.png) no-repeat;
    background-size: 80%;
    background-position-x: 2px;
    background-position-y: 2px;
  }
  .toupiaoall{
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
  .grids .name{
    padding: 5px;
    word-wrap: break-word;
  }
  .grids .content img{
   width: 100%;
    height: 134px;
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
