// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { WechatPlugin, AjaxPlugin,ConfirmPlugin,AlertPlugin  } from 'vux'
Vue.use(WechatPlugin)
Vue.use(AjaxPlugin)
Vue.use(ConfirmPlugin)
Vue.use(AlertPlugin)

// 引入vue-amap
/*
import VueAMap from 'vue-amap'
Vue.use(VueAMap)
VueAMap.initAMapApiLoader({
  key: '160cab8ad6c50752175d76e61ef92c50',
  plugin: ['Geolocation','Autocomplete', 'PlaceSearch', 'Scale', 'OverView', 'ToolBar', 'MapType', 'PolyEditor', 'AMap.CircleEditor']
});
*/
import Browser from '@/browser/browser'
import H5 from '@/browser/h5'
import WeChat from '@/browser/wechat'
import androidHybrid from '@/browser/androidHybrid'
import iosHybrid from '@/browser/iosHybrid'
Browser.use(WeChat)
Browser.use(androidHybrid)
Browser.use(iosHybrid)
Browser.use(H5)
Vue.prototype.$browser = Browser
//ajax start
import Tool from './tool'
import URL from '../url'
const loadingShow = ()=>{
  //loading 显示
}
const loadingHide = ()=>{
  //loading 关闭
}
Vue.prototype.$tool = Tool
Vue.prototype.$ajax = (name,{ type = "get", params = {}, success = ()=>{}, error = ()=>{} } = {})=>{
  let log = (val)=>{
    if(URL.debug) {
      if(typeof val != "string") val = JSON.stringify(val);
      alert(val)
    }
    console.log(val);
  }
  if(URL.url[name]) {
    let json = URL.url[name]
    //校验
    if(URL.debug) {
      for(let str in params) {
        if(!json.params[str]) {
          log("方法"+name+"没有定义好的参数"+str)
          return;
        }
      }
    }
    //loading
    if(URL.url[name].loading) loadingShow();
    //
    Vue.http(json.url, {params: params, method: type}).then(function (response) {
      if(URL.url[name].loading) loadingHide();
      try{
        let arr = response.data.rows;
        if(response.data.isSucceed) {
          //校验
          if(URL.debug) {
            let bol = true;
            Tool.containedObject(json.result, arr,(str)=>{
              bol = false
              log(str)
            })
            if(bol) {
              success(arr)
            }
          }else {
            success(arr)
          }
          //
        }else {
          console.log("server message:" + response.data.message);
          error("server message:" + response.data.message);
        }
      }catch (e){
        console.log('ajax try catch error:'+e);
        error('ajax try catch error:'+e);
      }
    }).catch(function (e) {
      if(URL.url[name].loading) loadingHide();
      console.log('ajax error:'+e);
      error('ajax error:'+e);
    });
  }else {
    console.log('ajax error:'+name+'不存在!');
    error('ajax error:'+name+'不存在!');
  }
}
//ajax end
//wechat start
//在需要使用的页面中打开 this.$wechatConfig("gh_ba72be7cde5d", function(){}) 之后调用 this.$wechat 或者直接使用回调函数w 可以获得jssjdk所有方法

Vue.prototype.$wechatConfig = function(ghid, back) {
  alert(window.location.href.replace("#/","%23%2f"))
  const self = this;
  if(WeChat.isBrowser()) {
    this.$ajax("jssdk",{
      params: {
        ghid: ghid,
        url: window.location.href.replace("#/","%23%2f")
      },
      success (arr) {
        const json = arr[0]
        alert(JSON.stringify(json))
        self.$wechat.config({
          debug: true ,
          appId: json.appId, // 必填，公众号的唯一标识
          timestamp: json.timestamp, // 必填，生成签名的时间戳
          nonceStr: json.noncestr, // 必填，生成签名的随机串
          signature: json.signature,// 必填，签名，见附录1
          jsApiList: ['onMenuShareQZone', 'onMenuShareWeibo', 'onMenuShareQQ', 'onMenuShareAppMessage', 'onMenuShareTimeline', 'chooseImage', 'getLocalImgData', 'uploadImage'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
        })
        self.$wechat.ready(function(){
          back && back(self.$wechat)
        })
      }
    })
  }
}
//wechat end
import store from '../../../store/index'
//点击点击延迟
const FastClick = require('fastclick')
FastClick.attach(document.body)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
