<template>
  <div class="toupiaoall">
    <div v-html="content" class="dec"></div>
    <div style="width: 80%;margin: 30px auto;text-align: center;color: orange">投票时间</br>
      <countdown :endTime="chuo" :callback="callback" endText="已经结束了"></countdown>
    </div>
    <divider style="padding: 0 40px">请从下列选项中选取</divider>
    <checklist :options="items" label-position="left" :disabled="disabled" v-model="checklist003" :max="items.length" @on-change="toupiaomore" class="toupiaomore"></checklist>
    <x-button type="primary" :show-loading="false"  @click.native="toupiao" class="btn" v-if="!toupiaostate">投票</x-button>
    <x-button type="primary" :show-loading="false"  @click.native="jieguo" class="btn" v-if="toupiaostate">查看结果</x-button>
  </div>
</template>

<script>
  import { Divider,Checklist,XButton} from 'vux'
  import countdown from '@/components/countdown.vue'
    export default {
      data () {
        return {
          toupiaostate:false,
          items: [],
          checklist003: [],
          disabled:false,
          chuo:"",
          content:"",
          id:this.$route.query.actid
        }
      },
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
              for(var i=0;i<data.options.length;i++){
                var s={};
                if(data.options[i].ischoose=="Y"){
                    vm.checklist003.push(data.options[i].id)
                }
                s.key=data.options[i].id
                s.value=data.options[i].txtcontent;
                arr.push(s)
              }
              vm.items=arr;
            }else{
              for(var i=0;i<data.options.length;i++){
                var s={};
                if(data.options[i].ischoose=="Y"){
                  vm.checklist003.push(data.options[i].id)
                }
                s.key=data.options[i].id
                s.value="<div style='display: -webkit-box;-webkit-box-align: center;'>"+"<div style='min-width:50px;padding:0 5px;color: cadetblue;font-size: 14px;line-height: 24px'>已投"+data.options[i].votecount+"票</div>"+"<div style='-webkit-box-flex: 1;word-break: break-all;'>"+data.options[i].txtcontent+"</div></div>";
                arr.push(s)
              }
              vm.items=arr;
            }
            if(data.isvote=="Y"){
              vm.callback()
              vm.toupiaostate=true
            }
          })
        },
        components: {
          Divider,
          Checklist,
          XButton,
          countdown
        },
        methods: {
          toupiaomore(value,label){

          },
          toupiao(){
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
                  optionids:vm.checklist003.join(","),
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
                        path:"toupiaojg",
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
          callback(){
            this.disabled=true
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
  .toupiaoall{
    padding:15px;
  }
  .toupiaomore{
    margin-top: 25px;
  }
  .toupiaomore .weui-cells:before,.toupiaomore .weui-cell:before{
    border: none;
  }
  .toupiaomore .weui-cells:after,.toupiaomore .weui-cell:after{
    border: none;
  }
  .btn{
    margin-top: 50px;
  }
  .dec img{
    max-width: 100%;
  }
</style>
