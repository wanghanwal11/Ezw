<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  mounted(){

  },
  data () {
    return {
      message: ''
    }
  },
  components: {},
  methods: {}

}
</script>

<style>
  html,body {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
    width: 100%;
    height: 100%;
    color: #333;
    background-color: #fff;
  }
  .icon {
    width: 1em; height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
</style>
<style lang="less">
  @import '../../../../node_modules/vux/src/styles/reset.less';
</style>
