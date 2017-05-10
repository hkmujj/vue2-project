<template name="loginBox">
  <input  type="button" class="ui-btn" v-bind:value="btnDescribe" >
</template>
<script>
  export default {
    props: ['userName', 'psw', 'showIndex', 'sms', 'mobile'],
    data () {
      return {
        btnDescribe: '免密登录'
      }
    },
    methods: {
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../../assets/sass/_ui-btn.scss";

</style>
