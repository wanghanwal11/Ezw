<style>
  .div1{
    width:156px;
  }
  .cla1{
    border:1px solid #222;
    display:inline-block;
    width:50px;
    height:50px;
    text-align: center;
    vertical-align: middle;
  }
  .flip-list-move {
    transition: transform 1s;
  }
</style>
<template>
<div>
  <button @click="chang">reverse</button>
  <transition-group tag="div" class="div1" name="flip-list">
    <span class="cla1" v-for="item in list" :key="item">{{item}}</span>
  </transition-group>

  <button @click="add">add</button>
  <button @click="move">remove</button>
  <transition-group
    tag="ul"
    name="flip-list"
    enter-active-class="animated bounceInDown"
    leave-active-class="animated bounceOut"
  >
    <li v-for="(item,index) in num" :key="item">{{item}}={{index}}</li>
  </transition-group>
</div>
</template>
<script>
  function shuffle(arr){
    var result = [],
      random;
    while(arr.length>0){
      random = Math.floor(Math.random() * arr.length);
      result.push(arr[random])
      arr.splice(random, 1)
    }
    return result;
  }
  export default {
    data () {
     return{
       show:true,
       n:3,
       num:[1,2,3],
       list:[1,2,3,4,5,6,7,8,9],
       statu:false
     }
    },
    methods:{
      chang:function(){
        this.list=shuffle(app.list);
      },
      add:function(){
        this.num.splice(3,0,++this.n)
      },
      move:function(){
        this.num.splice(3,1)
        console.log(this.num)
      }
    },
    component:{

    }
  }

</script>
