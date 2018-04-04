export default {
  name: "h5",
  isBrowser() {
    return true
  },
  API: {
    start () {
      alert("start--------h5拍")
    },
    FormatDate(time,format){
      var t = new Date(time);
      var tf = function(i) {
        return (i < 10 ? "0" :"") + i;
      };
      return format.replace(/yyyy|MM|dd|HH|mm|ss/g, function(a) {
        switch (a) {
          case "yyyy":
            return tf(t.getFullYear());
            break;

          case "MM":
            return tf(t.getMonth() + 1);
            break;

          case "mm":
            return tf(t.getMinutes());
            break;

          case "dd":
            return tf(t.getDate());
            break;

          case "HH":
            return tf(t.getHours());
            break;

          case "ss":
            return tf(t.getSeconds());
            break;
        }
      });
    },
    responseFun(name) {
      if(name){
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var path = decodeURI(window.location.href);
        var r = path.substr(1).match(reg);
        if (r != null) return unescape(r[2]); return null;
      }else{
        return window.location.href;
      }
    },
    setParameter (name, json) {
      localStorage.setItem(name, JSON.stringify(json));
    },
    getParameter (name) {
      if (localStorage.getItem(name)) {
        var json = localStorage.getItem(name);
        return JSON.parse(json);
      } else {
        return null;
      }
    }
  }
}
