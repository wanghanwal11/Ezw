import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'

Vue.use(Vuex)
var host = window.location.origin + "/";
    host = "http://192.168.0.10/";
export default new Vuex.Store({
  state: {
    host: "http://localhost:8080/",
    serverHost: host,
    aliHost: "http://shequ.vitoyun.cn/",
    loading2: false,
    loadWX: false,
    pageTitle: "",
    headpicurl: "",
    communityDetail: {
      initid: ''
    },
    isLoading: false,
    isShow:true
  },
  mutations:{
    increment (state, title) {
      // 变更状态
      state.pageTitle = title
    },
    updateLoadingStatus (state, payload) {
      state.isLoading = payload.isLoading
    },
    showtab (state, s) {
      state.isShow =s
    }
  },
  computed: {
  },
  modules: {
    user: user
  },
  strict: process.env.NODE_ENV !== 'production'
})
