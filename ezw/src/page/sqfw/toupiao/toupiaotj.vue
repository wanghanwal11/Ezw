<template>
  <div class="toupiaoal2">
    <div v-html="content" class="dec"></div>
    <div style="width: 80%;margin: 30px auto;text-align: center;color: orange">投票时间</br>
      <countdown :endTime="chuo" :callback="callback" endText="已经结束了"></countdown>
    </div>
    <divider style="padding: 0 40px">请从下列选项中选取</divider>
    <toupiao class="toupiaotj" :items="items" @toupiao="toupiao"></toupiao>
    <x-button type="primary" :show-loading="false"  @click.native="jieguo" class="btntw" v-if="toupiaostate">查看结果</x-button>
  </div>
</template>

<script>
  import { Divider,XButton,querystring} from 'vux'
  import toupiao from '@/components/toupiao.vue'
  import countdown from '@/components/countdown.vue'
    export default {
        data () {
          return {
            toupiaostate:false,
            chuo:"",
            items:[],
            content:"",
            id:localStorage.actid?localStorage.actid:""
          }
        },
        mounted(){
          var vm=this;
          this.$wechatConfig(localStorage.ininted,function(wx){
            vm.$browser.share(wx,{url:window.location.href+"&id="+vm.id})
          })
        },
        components: {
          Divider,
          toupiao,
          countdown,XButton,querystring
        },
        created(){
          var vm=this;
          localStorage.appid=this.$route.query.openid
          localStorage.ininted=this.$route.query.initid
          if(this.$route.query.id){
            this.id=this.$route.query.id
          }
          localStorage.actid=this.id
          if(!localStorage.appid||localStorage.appid=="null"){
            this.login()
          }else{
            var url=vm.$store.state.serverHost+"cmy/vote/cmyVote/getByMobile?openid="+localStorage.appid+"&id="+vm.id
            vm.$http.get(url).then(function(res){
              console.log(res.data.rows[0])
              var data=res.data.rows[0]
              if(data.multiselect=="是"&&data.type=="文本"){
                vm.$router.push({
                  path:"toupiaotjmore",
                  query:{
                    actid:vm.id
                  }
                })
                return
              }else if(data.multiselect=="是"&&data.type=="图文"){
                vm.$router.push({
                  path:"toupiaotjtwmore",
                  query:{
                    actid:vm.id
                  }
                })
                return
              }else if(data.multiselect=="否"&&data.type=="图文"){
                vm.$router.push({
                  path:"toupiaotjtw",
                  query:{
                    actid:vm.id
                  }
                })
                return
              }
              vm.chuo=new Date(vm.$browser.FormatDate(data.endtime,"yyyy-MM-dd")).valueOf();
              vm.content=data.description
              var arr=[];
              if(data.numshow=="投票后"){
                for(var i=0;i<data.options.length;i++){
                  var s={};
                  if(data.options[i].ischoose=="Y"){
                    s.state="state3";
                  }else{
                    s.state="state";
                  }
                  s.title=data.options[i].txtcontent;
                  s.id=data.options[i].id
                  arr.push(s)
                }
                vm.items=arr;
              }else{
                for(var i=0;i<data.options.length;i++){
                  var s={};
                  s.title=data.options[i].txtcontent;
                  if(data.options[i].ischoose=="Y"){
                    s.state="state3";
                  }else{
                    s.state="state";
                  }
                  s.id=data.options[i].id
                  s.number="已投"+data.options[i].votecount+"票"
                  arr.push(s)
                }
                vm.items=arr;
              }
              if(data.isvote=="Y"){
                vm.callback()
                vm.toupiaostate=true
              }
            })
          }
        },
        methods: {
          login(back){
            var vm=this;
            var ss=encodeURIComponent("sqfwwx/index.html#/toupiaotj")
            var url =this.$store.state.serverHost+'wx/api/wx/getWxOAuth?initid='+localStorage.ininted+'&backurl='+ss
            vm.$http.get(url).then(function (res) {
                alert(res.data.rows[0])
              window.location.replace(res.data.rows[0])
            })
          },
          toupiao(obj){
            var vm=this;
            var url=vm.$store.state.serverHost+"cmy/vote/cmyVoteuser/vote?openid="+localStorage.appid
            vm.$http.get(url,{params:{
              voteid:vm.id,
              optionids:obj.item.id,
              initid:localStorage.ininted
            }
            }).then(function(res){
                console.log(res)
              vm.$vux.alert.show({
                title: '投票成功',
                buttonText:"查看投票结果",
                hideOnBlur:true,
                content: '您已投票，可查看投票结果',
                onHide () {
                  vm.$router.push({
                    path:"toupiaojg",
                    query:{
                      actid:vm.id
                    }
                  })
                }
              })
            })
          },
          callback(){
            for(var i=0;i<this.items.length;i++){
              if(this.items[i].state!="state3"){
                this.items[i].state="state2"
              }
            }
          },
          jieguo(){
            var vm=this;
            this.$router.push({
              path:"toupiaojg",
              query:{
                actid:vm.id
              }
            })
          }
        }
    }
</script>

<style>
  .toupiaoal2{
    padding:15px;
  }
  .dec img{
    max-width: 100%;
  }
  .btntw{
    display: block;
    width: 80%!important;
    background: #FB4343!important;
  }
</style>
