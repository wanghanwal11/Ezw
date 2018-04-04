<template>
    <div class="login">
        <p>我是登录页面</p>
        <x-button type="primary" @click.native="wechatLogin">微信登录</x-button>

      <x-button type="primary" @click.native="login">pc临时登录</x-button>

    </div>
</template>

<script>
  import { XButton } from 'vux'
  var self = null;
  export default {
      mounted() {
          self = this;
          self.$wechatConfig("gh_ba72be7cde5d", function(){})
      },
      data() {
          return {}
      },
      components: {XButton},
      methods: {
        wechatLogin() {
          self.$browser.wechatLogin((str)=>{
            //alert(str)
            //self.$router.push({ path: 'admin/shouye' })
            self.$ajax('login', {
              params: {
                openid: "openid",
                unionid: "unionid",
                iconurl: "iconurl",
                name: "name",
                gender: ""
              },
              success (rows) {
                //给头部添加header
                const access_token = rows[0].access_token;
                self.$browser.setParameter("ajaxHeaders", {
                  "token": access_token
                });
                //跳转下一页
                self.$router.replace({ path: '/changeshequ' })
              }
            })
          });
        },
        login () {
          self.$router.replace({ path: '/changeshequ' })
        }
      }
  }
</script>

<style scoped>
  .login {
    padding: 10px;
  }
</style>
