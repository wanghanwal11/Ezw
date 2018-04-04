export default {
  name: "iosHybrid",
  isBrowser () {
    const userAgent = window.navigator.userAgent.toLowerCase();
    if(userAgent.match(/vitoios/i) == 'vitoios') {
      return true
    }
    return false
  },
  API: {
    start () {
      alert("start--------iosHybrid拍")
    },
    wechatLogin (back) {
      window["wechatLogin_CallBack"] = (obj)=>{
        obj=JSON.stringify(obj)
        back && back(obj)
      }
      var o={}
      o.callback="wechatLogin_CallBack";
      o=JSON.stringify(o)
      window.webkit.messageHandlers.wachatLogin.postMessage(o)
    },
    headerColor(obj){
      obj=JSON.stringify(obj)
      window.webkit.messageHandlers.setStatusBar.postMessage(obj)
    },
    openNewWebview(url){
      var obj = {};
      obj.webUrl = url;
      obj = JSON.stringify(obj);
      window.webkit.messageHandlers.presentNewWebView.postMessage(obj)
    },
    startPhone(eva,back){
      window["wechatLogin_CallBack"] = (obj)=>{
        obj=JSON.stringify(obj)
        back && back(obj)
      }
      var o={}
      o.callback="wechatLogin_CallBack";
      o.webUrl=eva.url;
      o=JSON.stringify(o)
      window.webkit.messageHandlers.takePhotos.postMessage(o)
    }
  }
}
