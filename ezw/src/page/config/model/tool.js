const TYPE = (val)=>{
  if(Array.isArray(val)) {
    return 'array'
  }else {
    return typeof val
  }
}
const containedType = (t1, t2)=>{
  if(TYPE(t1) == TYPE(t2))return true;
  else return false;
}
const Tool = {

  //判断后一个对象是否包含前面一个
  containedObject (objc = {}, objp = {}, back=()=>{}) {

    if((typeof objc) == (typeof objp) && (typeof objp) == 'object') {
      fore(objc, objp)
    }else {
      back('两个数据类型不一样1:'+(typeof objc)+'   2:'+(typeof objp))
    }
    function fore(a1, a2) {
      for(let str in a1) {
        if(a2[str]) {
          if(TYPE(a2[str]) ==  TYPE(a1[str])) {
            if(typeof a2[str] == "object") {
              fore(a1[str], a2[str])
            }
          }else {
            back(str+"和返回值中类型不一样");
          }
        }else {
          back(str+"不存在!和返回值中不一样");
        }
      }
    }
  },
  //判断数据类型
  type: TYPE

}
export default Tool
