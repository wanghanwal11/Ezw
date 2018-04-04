<template>
    <div class="wodes">
      <div style="height: 65px;">
        <div style="height: 15px;background:white;position: fixed;width: 100%;z-index: 99;"></div>
        <x-header style="background: white;position: fixed;width: 100%;z-index: 99;top: 15px">
          <div slot="overwrite-left" style="color: black;display: -webkit-box;">
            <div class="iconfont icon-icon-test1" style="font-size: 20px" @click="goback"></div>
            <div style="font-size: 18px;padding: 1px 10px;">个人中心</div>
          </div>
        </x-header>
      </div>
      <div style="padding: 18px">
        <div class="xinput">
          <div style="-webkit-box-flex: 1">头像</div>
          <div class="divbj" style="min-width: 50px;color: #999999" @click="point(1)">
            <img style='width: 60px;height: 60px' :src="headpicurl">
          </div>
        </div>
        <div class="xinput">
          <div style="-webkit-box-flex: 1">昵称</div>
          <div class="divbj" style="min-width: 50px;color: #999999" >
            <div contenteditable="true" @focus="changeData($event)" @blur="blur" ref="nickname">{{userinfo.name}}</div>
          </div>
        </div>
        <div class="xinput">
          <div style="-webkit-box-flex: 1">手机号</div>
          <div class="divbj" style="min-width: 50px;color: #999999" @click="point(2)">
            {{phone}}
          </div>
        </div>
        <div class="xinput">
          <div style="-webkit-box-flex: 1">我的小区</div>
          <div class="divbj" style="min-width: 50px;color: #999999" @click="">
            <span class="iconfont icon-icon-test" style="padding: 0 5px"></span>{{shequinfo.communityname}}
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import {XHeader,XInput,XTextarea} from 'vux'
  var vm
    export default {
        created(){
          vm=this;
          this.$browser.headerColor({txtcolor:"#000000"})
          this.shequinfo= this.$browser.getParameter("shequinfo");
          this.userinfo= this.$browser.getParameter("userinfo");
          this.headpicurl=this.userinfo.headpicurl
          console.log(this.userinfo)
          if(!this.userinfo.phone){
            this.phone="绑定手机"
          }else{
            this.phone=this.userinfo.phone
          }
        },
        data () {
            return {
              phone:"",
              shequinfo:'',
              contenteditable:false,
              userinfo:'',
              headpicurl:""
            }
        },
        components: {XHeader,XInput,XTextarea},
        methods: {
          goback(){
            this.$router.go(-1)
          },
          point(index){
              if(index==1){
                this.$browser.startPhone({url: this.$url.url.upload.url},function (res) {
                  var res=JSON.parse(res)
                  vm.headpicurl=res.filepath
                  vm.upload({headpicurl:res.filepath})
                })
              }
              if(index==2){
                  if(this.phone){
                    this.$vux.confirm.show({
                      content:"确认修改手机吗?",
                      theme:"android",
                      onConfirm () {
                        vm.$router.push({
                          path:"/shoujixg",
                          query:{
                              phone:vm.phone
                          }
                        })
                      }
                    })
                  }else{
                    this.$router.push({
                      path:"/shoujibd"
                    })
                  }
              }
          },
          changeData(event){

          },
          blur(event){
            this.upload({nickname:this.$refs.nickname.innerHTML})
          },
          upload(str){
              var vm=this;
              this.$ajax("saveTuserInfo",{
                 params: {
                   nickname: str.nickname?str.nickname:'',
                   phone: str.phone?str.phone:'',
                   headpicurl: str.headpicurl?str.headpicurl:'',
                   streetorcommunity:'',
                   streetorcommunityid:'',
                   communityname:''
                 },
                success (res){
                  if(str.nickname){
                    vm.userinfo.name=str.nickname;
                  }
                  if(str.headpicurl){
                    vm.userinfo.headpicurl=str.headpicurl;
                  }
                  vm.$browser.setParameter("userinfo", vm.userinfo);
                }
              })
          }

        }
    }
</script>

<style>
 .wodes .xinput{
    line-height: 50px;border-bottom: 1px solid #e1e1e1;display: -webkit-box
  }
  .wodes .weui-cell{
    padding: 0!important;
  }
  .wodes .weui-textarea{
    line-height: 20px!important;
  }
  .wodes .weui-skin_android .weui-dialog__bd{
    padding:0.25em 1.6em 0em!important;
  }
</style>
