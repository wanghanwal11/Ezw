//ip 也可以写代理服务标识 比如vito/
//使用的时候在下面url中写 IP+url
// 打包的时候jenkins会修改它为空
const IP = "http://192.168.0.10";
//debug模式下  每次请求都会严格匹配参数的个数了类型 包括打印alert
//正式打包的时候会jenkins会修改它为false
const DEBUG = true;
//接口
const URL = {
  "jssdk": {
    name: "获取微信jssdk的参数",
    url: "http://duanshang.vitoyun.cn/wx/wechat/core/jsapi",
    type: "get",
    loading: true,
    params: {
      ghid: "gh_ba72be7cde5d",
      url: "xxx"
    },
    result: [{
      signature: "52ca538e14f6bb293c9398022cd1d3efc13c4063",
      appId: "wx616b4781be93120a",
      jsapi_ticket: "d3yp2Ud9Gzwj6dnSWFhcReHvGoEjqndZsvt916ffxvWN9wJC3hgEJ_qHVEsp_lXnA1lkmrF92MZkkAPpMuUpLQ",
      nonceStr: "4488da5d-87f5-41f8-94b9-015f163cb59e",
      timestamp: "1514942491"
    }],
    text: {
      ghid: "微信公众号id",
      url: "当前url"
    }
  },
  "login": {
    name: "登录",
    url: "loginMobile.ht",
    type: "get",
    loading: true,
    params: {
      "username": "gaopengfei",
      "password": "gpf1234567890"
    },
    result: [{
      "account": "$access_token",
      "phone": "13021225928",
      "picture": "/file/SYSBOOKDOC/2015/9/10000123850102.jpg"
    }],
    text: {
      username: "用户名",
      password: "这是密码",
      phone: "手机号"
    }
  }
}

export default {
  url: URL,
  debug: DEBUG
};
