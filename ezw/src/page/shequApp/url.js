//ip 也可以写代理服务标识 比如vito/
const IP = "http://192.168.0.10/";
//const IP = "http://ceshi.vitoyun.cn/";
//debug模式下  每次请求都会严格匹配参数的个数了类型 包括打印alert
//正式打包的时候会jenkins会修改它为false
const DEBUG = false;
//接口 cmy/cmy/sCommunitymanager/loginByUnionid?openid=&unionid=&iconurl=name=&gender=
const URL = {
  "jssdk": {
    name: "获取微信jssdk的参数",
    url: "http://duanshang.vitoyun.cn/wx/wechat/core/jsapi",
    type: "get",
    loading: true,
    params: {
      ghid: "ghid",
      url: "url"
    },
    result: [{
      signature: "signature",
      appId: "appId",
      jsapi_ticket: "jsapi_ticket",
      nonceStr: "nonceStr",
      timestamp: "timestamp"
    }],
    text: {
      ghid: "微信公众号id",
      url: "当前url"
    }
  },
  "login": {
    name: "登录",
    url: IP + "cmy/cmy/sCommunitymanager/loginByUnionid",
    type: "get",
    loading: true,
    params: {
      openid: "openid",
      unionid: "unionid",
      iconurl: "iconurl",
      name: "name",
      gender: ""
    },
    result: [{
      "access_token": "access_token",
    }],
    text: {
      openid: "openid",
    }
  },
  "checkManager": {
    name: "登录信息",
    type:"post",
    loading: true,
    url: IP + "cmy/api/sCommunitymanager/checkManager"
  },
  "chengshilist": {
    name: "城市列表",
    url: IP + "base/base/SCity/getCityData"
  },
  "shequlist": {
    name: "社区列表",
    url: IP + "cmy/cmy/sCommunitymanager/getComunitylist"
  },
  "indexjf": {
    name: "主页积分",
    url: IP + "point/point/pointTotal/getPoint"
  },
  "upload": {
    name: "上传图片",
    url: IP + "cmy/cmy/sCommunityinfo/uploadCommunityPic"
  },
  "saveTuserInfo":{
    name: "修改信息",
    type:"post",
    url: IP + "uc/api/user/saveTuserInfo"
  },
  "sendRandomByPhone":{
    name: "绑定手机",
    type:"post",
    url: IP + "base/base/identifyingcode/sendRandomByPhone"
  }
}

export default {
  url: URL,
  debug: DEBUG,
  ip:IP
};

