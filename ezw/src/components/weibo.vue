<template>
    <div>
      <div style="background: white;padding: 15px;margin: 15px 0">
        <div style="display: -webkit-box;">
          <div style="width: 50px;height: 50px;position: relative;border: 1px solid white;border-radius: 50%;background-size: 100% 100%" :style="{backgroundImage:'url('+ren+')'}">
            <svg slot="icon" class="icon i" aria-hidden="true"  style="position: absolute;right: 0;width: 25px;height: 25px; bottom: -11px;font-size: 20px; color: #f9e722;">
              <use xlink:href="#icon-tubiaozhizuomoban1"></use>
            </svg>
          </div>
          <div style="-webkit-box-flex: 1">
            <div style="padding: 3px 10px">邻家大爷</div>
            <div style="padding: 1.5px 0px 1.5px 10px">
              <div>已发实打实大师大师离开小轿车是看了下</div>
              <div style="margin: 5px 0">
                <img style="width: 100px;height: 100px;" :src="tu1">
                <img style="width: 100px;height: 100px;" :src="tu1">
              </div>
              <div style="display:-webkit-box">
                <div style="-webkit-box-flex: 1;display:-webkit-box">
                  <div style="font-size: 14px;color: #b1b1b1"><span class="iconfont icon-dianzan" style="font-size: 24px;vertical-align: middle;color: #ff5100"></span><span style="vertical-align: middle;margin-left: 5px;">111</span></div>
                  <div style="font-size: 14px;line-height: 40px;padding: 0 10px"><span class="iconfont icon-icon_lingli_checkedl"  style="font-size: 22px;vertical-align: middle;;color:#717275"></span><span style="color: #b1b1b1;margin-left: 5px;">111</span></div>
                </div>
                <div style="min-width: 50px;font-size: 14px;line-height: 40px;color: rgb(177, 177, 177);">6分钟前</div>
              </div>
              <div style="background: #ecedef;">
                  <div style="line-height: 20px;padding:10px;border-bottom: 1px solid #e1e1e1">
                    <span class="iconfont icon-dianzan" style="font-size: 24px;vertical-align: middle;color: #717275"></span><span style="color: #485e8c;font-size: 14px;vertical-align: middle;    padding: 0px 0 0 5px;">我们、你们,我们、你们我们、你们我们、你们我们、你们</span>
                  </div>
                  <div style="padding: 10px">
                      <div style="font-size: 14px">
                          <span style="color: #485e8c;">凌家小姐：</span>阿斯达是哒是哒
                      </div>
                    <div style="font-size: 14px">
                      <span style="color: #485e8c;">凌家小姐：</span>阿斯达是哒是哒
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import ren from "@/assets/ren.png"
  import tu1 from "@/assets/tu1.png"
    export default {
        mounted(){

        },
        data () {
            return {
               ren:ren,
              tu1:tu1
            }
        },
        components: {},
        methods: {}
    }
</script>

<style>
</style>
