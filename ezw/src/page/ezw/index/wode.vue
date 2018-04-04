<template>
    <div>
      <div class="header" style="height: 61px">
        <div style="height: 15px;background:#2989ff;position: fixed;width: 100%;z-index: 99;"></div>
        <x-header style="background: #2989ff;position: fixed;width: 100%;z-index: 99;top: 15px">
          <div slot="overwrite-left"></div>
          <div style="color: white">我的</div>
        </x-header>
      </div>
      <div style="padding: 20px;display: -webkit-box;background:#2989ff;color: white">
        <div style="width:72px;height: 72px;background: red"></div>
        <div style="-webkit-box-flex: 1;padding: 0 15px">
          <div>111</div>
          <div>22</div>
        </div>
        <div style="width: 30px;padding-top: 10px" ><i class="iconfont icon-arrow" style="font-size: 20px"></i></div>
      </div>
      <div class="cell" style="margin-top: 15px;">
        <group gutter="0">
          <cell title="通讯录" is-link  @click.native="next()">
            <i slot="icon" class="iconfont icon-gangweibiandong" style="color: #ff5d5e;"></i>
          </cell>
        </group>
        <group gutter="0" style="margin-top: 10px">
          <cell title="邀请" is-link  @click.native="next()">
            <i slot="icon" class="iconfont icon-gangweibiandong" style="color: #ff5d5e;"></i>
          </cell>
        </group>
        <group gutter="0" style="margin-top: 10px">
          <cell title="通知动态设置" is-link  @click.native="next()">
            <i slot="icon" class="iconfont icon-gangweibiandong" style="color: #ff5d5e;"></i>
          </cell>
        </group>
        <group gutter="0">
          <cell title="统计动态设置" is-link  @click.native="next()">
            <i slot="icon" class="iconfont icon-gangweibiandong" style="color: #ff5d5e;"></i>
          </cell>
        </group>
        <group gutter="0" style="margin-top: 10px">
          <cell title="设置" is-link  @click.native="next()">
            <i slot="icon" class="iconfont icon-gangweibiandong" style="color: #ff5d5e;"></i>
          </cell>
        </group>
      </div>
    </div>
</template>

<script>
  import { XHeader,Group, Cell} from 'vux'
    export default {
        mounted(){

        },
        data () {
            return {

            }
        },
        components: {XHeader,Group, Cell},
        methods: {
          next(){

          }
        }
    }
</script>

<style>
  .cell .weui-cell{
    padding: 13px 15px;
  }
  .cell i{
    font-size: 25px;
    margin-right: 10px;
  }
  .cell label{
    font-size: 16px;
  }
</style>
