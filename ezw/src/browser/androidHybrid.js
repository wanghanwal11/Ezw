export default {
  name: "androidHybrid",
  isBrowser () {
    const userAgent = window.navigator.userAgent.toLowerCase();
    if(userAgent.match(/vitoandroid/i) == 'vitoandroid') {
      return true
    }
    return false
  },
  API: {
    start () {
      alert("start--------androidHybrid拍")
    },
    wechatLogin (back) {
      window["wechatLogin_CallBack"] = (obj)=>{
        back && back(obj)
      }
      var o={}
      o.callback="wechatLogin_CallBack";
      o=JSON.stringify(o)
      self.login.WXlogin(o)
    },
    headerColor(obj){
      obj=JSON.stringify(obj)
      window.color.setTopColor(obj)
    },
    openNewWebview(url){
      window.openNewWebview.open(url);
    },
    startPhone(eva,back){
      window["wechatLogin_CallBack"] = (obj)=>{
        back && back(obj)
      }
      var o={}
      o.callback="wechatLogin_CallBack";
      o.webUrl=eva.url;
      o=JSON.stringify(o)
      window.camera.open(o)
    }
  }
}

