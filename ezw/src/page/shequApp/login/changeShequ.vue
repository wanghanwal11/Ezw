<template>
    <div>
      <p>您的社区</p>
      <p>没有定位到对应社区</p><br/>
      <p>不对？ <router-link to="shequlist">重新选择</router-link></p><br/>
      <x-button type="primary" @click.native="goAdmin">下一步</x-button>
    </div>
</template>

<script>
    import { XButton } from 'vux'
    var self = null;
    export default {
        mounted() {
            self = this;
        },
        data() {
            return {}
        },
        components: { XButton },
        methods: {
          goAdmin () {
            self.$router.replace({ path: 'admin/shouye' })
          }
        }
    }
</script>

<style>

</style>
