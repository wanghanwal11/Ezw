export default {
  name: "wechat",
  isBrowser () {
    const userAgent = window.navigator.userAgent.toLowerCase();
    if(userAgent.match(/micromessenger/i) == 'micromessenger') {

      return true
    }
    return false
  },
  API: {
    start () {
      alert("start--------微信拍")
    }

  }
}
