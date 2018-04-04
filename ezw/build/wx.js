var express = require('express')
var router = express.Router();
var WxJsSDKUtil = require('wx-jssdk');

router.get('/jssdk', function(req, res, next) {
  sendJson(res,[],'1111')
  /*
  var wx = new WxJsSDKUtil(config.appID, config.appsecret);
  var url = req.query.url;
  console.log(url)
  wx.getJsApiConfig(url, function (err, ret) {
    if (err) {
      console.error(err);
    }
    else {
      // you handler
      sendJson(res,ret,'')
      console.log(ret)
    }
  })
  */
});
function sendJson(res, result, message) {
  if(result) {
    res.send({rows:Array.isArray(result)?result:[result], isSucceed:true, message: message || ''});
  }else {
    res.send({rows:[], isSucceed:false, message: message || ''});
  }
}
module.exports = router;
