<template>
  <div class="toupiao">
    <div style="height: 100%;background: #fffeef;height:100%;overflow-y:scroll" >
      <div v-html="content" class="dec"></div>
      <div style="width: 100%;background: white;    padding: 20px 0;">
        <div style="width: 80%;margin: 0px auto;text-align: center;color: orange">投票时间</br>
          {{time}}
        </div>
      </div>
      <divider style="padding: 20px 40px;">投票结果</divider>
      <wall :imgsArr="imgsArr">
        <template scope="props">
          <div class="grids">
            <div class="content">
              <div class="name" style="font-size: 14px;padding: 5px">{{ props.value.title }}</div>
              <div style="overflow: hidden">
              <span  style="padding: 0 10px;color: orange;font-weight: bold;float: left;line-height: 30px">{{ props.value.number}}<span style="font-size: 14px">票</span></span> <x-button mini plain disabled type="primary" style="border-radius:10px;float: right;background-color:#FF7A43!important;border:1px solid #FF7A43!important;height: 22px;line-height: 22px;margin:5px 10px 5px 0;" :class="props.value.state"  @click.native="toupiaotw(props.value.id)">第{{props.index+1}}名</x-button>
              </div>
            </div>
          </div>
        </template>
      </wall>
    </div>
  </div>
</template>

<script>
  import wall from '@/components/wall.vue'
  import countdown from '@/components/countdown.vue'
  import { Divider,Masker, Grid, GridItem, Flexbox, FlexboxItem,XButton} from 'vux'
  export default {
    mounted(){
    },
    created(){
      var vm=this;
      var url=this.$store.state.serverHost+"cmy/vote/cmyVote/getResult?id="+this.id
      this.$http.get(url).then(function(res){
        console.log(res.data.rows[0])
        var data=res.data.rows[0]
        vm.content=data.description
        vm.time=vm.$browser.FormatDate(data.starttime,"yyyy-MM-dd")+" ~ "+vm.$browser.FormatDate(data.endtime,"yyyy-MM-dd")
          var arr=[];
          for(var i=0;i<data.options.length;i++){
            var s={};
            s.src=data.options[i].imgcontent
            s.number=data.options[i].votecount
            s.title=data.options[i].txtcontent;
            s.id=data.options[i].id;
            s.state="state1";
            arr.push(s)
          }
          vm.imgsArr=arr;
      })
    },
    data () {
      return {
        heights:"",
        content:"",
        time:"",
        imgsArr: [],         //存放所有已加载图片的数组（即当前页面会加载的所有图片）
        id:this.$route.query.actid
      }
    },
    components: {
      wall,
      Divider,
      Masker,
      Grid, GridItem, Flexbox, FlexboxItem,XButton,countdown
    },
    methods: {
    }
  }
</script>

<style>
  .toupiao{
    height: 100%;
  }
  .m-img {
    padding-bottom: 33%;
    display: block;
    position: relative;
    max-width: 100%;
    background-size: cover;
    background-position: center center;
    cursor: pointer;
    border-radius: 2px;
  }

  .m-title {
    color: #fff;
    text-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
    font-weight: 500;
    font-size: 16px;
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    text-align: center;
    top: 50%;
    z-index: 1;
  }
  .grids {
    border: none!important;
  }
  .weui-grids:before, .weui-grid:before, .weui-grids:after,.weui-grid:after{
    border: none!important;
  }
  .grids .weui-grid__icon{
    width: 80%;
    height: 80%;
  }
  .grids {

  }
  .grids .content{
    background: white;
    text-align: center;
    margin: 0 auto;
  }
  .grids .content img{
    width: 100%;
    height: 134px;
  }
  .grids .name{
    word-wrap: break-word;
  }
  .grids .btnn{
    width: 55px;
    height: 20px;
    line-height: 20px;
    margin-bottom: 5px;
    border-radius: 13px;
    padding: 0;
    margin-left: 10px;
    background: #FA6C3C;
    border: 1px solid #FA6C3C;
    color: white;
  }
  .state1{
    color: white!important;
    background-color: #FB4144!important;
    border: 1px solid #FB4144!important;
  }
  .state2{
    color: white!important;
    background-color: #999999!important;
    border: 1px solid #999999!important;
  }
  .dec{
    background: white;
  }
  .dec img{
    max-width: 100%;
  }
</style>
