//const fs = require('fs');
const fs = require('fs-extra');

//项目入口
const PAGENAME = "ezw";

//是否启动https 局域网在微信浏览器会空白
const HTTPS = false;

//是否启动微信服务器  需要填写维修测试
const WECHAT = true;
const appID = 'wxc472354bad584529';
const appsecret = '51dbd26f4242a7e21e6bd4314c49362c';

//


//***********************************************
//*********************************
//**********
module.exports = function() {
  //入口
  this.page = PAGENAME;

  //微信相关
  this.WECHAT = WECHAT;
  this.appID = appID;
  this.appsecret = appsecret;

  //HTTPS
  this.HTTPS = HTTPS;

  //配置ip
  this.ifconfig = function() {

  };
  //分配index.html
  this.index = function() {
    var path = __dirname+"/"+PAGENAME+'/config/index.html'
    if(fs.existsSync(path)) {
      var data = fs.readFileSync(path);
      fs.writeFileSync(__dirname.replace(/src.*/,'index.html'), data.toString());
      console.log(path + ":ok2");
    }else {
      console.log(path + "--文件不存在");
    }
  }
  //分配打包依赖
  this.webpack = function() {

    var pagePath = __dirname+"/";
    if(!fs.existsSync(pagePath+PAGENAME)) {
      fs.mkdirSync(pagePath+PAGENAME)
    }

    fs.readdirSync(pagePath).forEach(function (file){
      if(fs.existsSync(pagePath+file)) {
        var stats = fs.statSync(pagePath+file);
        if(stats.isDirectory() && file!="config") {
          if(!fs.existsSync(pagePath+file+"/config")) {
            try {
              fs.copySync(pagePath+"config/model", pagePath+file+"/config")
              fs.copySync(pagePath+"config/init.vue", pagePath+file+"/init.vue")
              fs.copySync(pagePath+"config/url.js", pagePath+file+"/url.js")
              var data = fs.readFileSync(pagePath+file+"/config/router.js");
              data = data.toString().replace("*#*#",PAGENAME);
              fs.writeFileSync(pagePath+file+"/config/router.js", data);
              var data2 = fs.readFileSync(pagePath+file+"/init.vue");
              data2 = data2.toString().replace("*#*#",PAGENAME);
              fs.writeFileSync(pagePath+file+"/init.vue", data2);
              console.log(pagePath+file+' : config success!')
            } catch (err) {
              console.error(err)
            }
          }
        }
      }else {
        console.log("分配打包依赖--文件不存在");
      }
    });

  }
}
