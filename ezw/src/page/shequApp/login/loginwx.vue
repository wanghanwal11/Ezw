<template>
    <div>
      <div  class="headers">
        <div class="headerp">
          <p style="font-size: 24px;">登录</p>
          <p style="margin-top: 5px">用微信登录，感受社区的温暖吧！{{this.$store.state.user.obj}}</p>
        </div>
      </div>
      <div style="width: 85%;margin: 0 auto">
        <x-button type="primary" @click.native="wechatLogin" style="margin-top: 50px;">用微信登录</x-button>
        <div style="margin-top: 17px;margin-left: -5px">
          <check-icon  :value.sync="checker1"><span style="color: #b8b8b8;font-size: 15px">同意社区号的互联网协议</span></check-icon>
        </div>
      </div>
    </div>
</template>

<script>
  import { XButton,CheckIcon } from 'vux'
    export default {
        mounted(){
          this.$browser.headerColor({txtcolor:"#ffffff"})
        },
        data () {
            return {
              checker1: true
            }
        },
        components: {
          XButton,
          CheckIcon
        },
        methods: {
          wechatLogin() {
            if(!this.checker1){
              this.$vux.toast.text('请同意互联网协议！', 'middle')
              return;
            }
            var self=this;
           // this.$browser.wechatLogin((str)=>{
           //   var str=JSON.parse(str)
              self.$ajax('login', {
             /*   params: {
                  openid: str.openid,
                  unionid: str.unionid,
                  iconurl: str.iconurl,
                  name: str.name,
                  gender: str.gender
                },*/
                success (rows) {
                  //给头部添加header
                  const access_token = rows[0].access_token;
                  self.$browser.setParameter("ajaxHeaders", {
                    "token": access_token
                  });
                  self.$ajax('checkManager', {
                    success(data,obj){
                        console.log(obj)
                      var obj=obj.newPrimaryKeys;
                      var user={};
                      user.name=obj.name
                      user.headpicurl =obj.headpicurl
                      user.phone =obj.phone
                      user.unionid ='ouMm90zGP1LO5L81IPaPQlvmfNtw'
                      var commuity={}
                      commuity.initid=obj.initid
                      commuity.streetorcommunityid=obj.streetorcommunityid
                      commuity.streetorcommunity=obj.streetorcommunity
                      commuity.communityname=obj.communityname
                      self.$browser.setParameter("userinfo", user);
                      self.$browser.setParameter("shequinfo", commuity);
                      //跳转下一页
                      if(obj.streetorcommunityid){
                        self.$router.replace({ path: 'admin/shouye' })
                      }else{
                        self.$router.replace({ path: 'loginselect' })
                      }
                    }
                  })
                }
              })
          // });
          }
        }
    }
</script>

<style>
  .headers{
    width: 100%;
    height: 280px;
    background: url(../../../assets/bg.png);
    background-size: 100% 100%;
  }
  .headerp{
    padding: 40px 0 0 15px;
    color: white;
  }

</style>
