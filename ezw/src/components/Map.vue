<template>
  <div class="mapdiv">
    <div style="position: absolute; z-index: 10; left: 0; top: 0px;">
      <p>水平Z:{{alpha}}</p>
      <p>水平X:{{beta}}</p>
      <p>水平Y:{{gamma}}</p>
    </div>
    <div style="position: absolute; z-index: 10; right: 10px; bottom: 20px;">
         <span v-if="loaded">
          location: lng = {{ lng }} lat = {{ lat }}
        </span>
        <span v-else>正在定位</span>
    </div>
    <el-amap class="map" :plugin="plugin" :zoom="zoom" vid="amapDemo" :center="center">
    </el-amap>
  </div>
</template>

<script>
  var vm = null;
export default {

  created() {
      vm = this
      if (window.DeviceOrientationEvent) {
      window.addEventListener('deviceorientation', function (event) {

        vm.alpha = Math.round(event.alpha);
        vm.beta = Math.round(event.beta);
        vm.gamma = Math.round(event.gamma);

      }, false);

    } else {
        alert('你的浏览器不支持陀螺仪');
    }

  },
  data () {
    return {
      alpha: '',
      beta: '',
      gamma: '',
      msg: 'Welcome to Your Vue.js App',
      zoom: 12,
      center: [121.59996, 31.197646],
      lng: 0,
      lat: 0,
      loaded: false,
      zoom: 12,
      viewMode:'3D',
      plugin: [{
        pName: 'Geolocation',
        events: {
          init(o) {
            // o 是高德地图定位插件实例
            o.getCurrentPosition((status, result) => {
              if (result && result.position) {
                vm.lng = result.position.lng;
                vm.lat = result.position.lat;
                vm.center = [vm.lng, vm.lat];
                vm.loaded = true;
                vm.$nextTick();
              }
              console.log(status)
              console.log(result)
            });
          }
        }
      }]
    }
  },
  components: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mapdiv, .map{
  width: 100%;
  height: 100%;
}

</style>
