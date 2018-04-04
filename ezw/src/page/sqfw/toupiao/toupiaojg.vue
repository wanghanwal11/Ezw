<template>
    <div class="toupiaoall">
      <div v-html="content" class="dec"></div>
      <div style="width: 80%;margin: 30px auto;text-align: center;color: orange">投票时间</br>
        {{time}}
      </div>
      <progess class="toupiao" :items="items"></progess>
    </div>
</template>

<script>
  import { Divider } from 'vux'
  import progess from '@/components/progess.vue'
    export default {
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
            s.count="投票数"+data.options[i].votecount
            s.title=data.options[i].txtcontent;
            s.id=data.options[i].id;
            var pattern="%"
            s.number=data.options[i].percent.replace(new RegExp(pattern),"");
            arr.push(s)
          }
          vm.items=arr;
        })
      },
        data () {
            return {
              time:"",
              content:"",
              items:[],
              id:this.$route.query.actid
            }
        },
        components: {
          Divider,
          progess
        },
        methods: {}
    }
</script>

<style>
  .toupiaoall{
    padding:15px;
  }
  .toupiao{
    margin-top: 30px;
  }
  .toupiao .weui-progress__bar{
    height: 7px;
    margin: 10px 0;
  }
  .toupiao .right{
    color: #09BB07;
    font-size: 15px;
  }
  .toupiao .h0{
    margin: 10px 0;
  }
  .dec img{
    max-width: 100%;
  }
</style>
