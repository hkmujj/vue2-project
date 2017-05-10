<template >
  <p class="login-agreement">
    登录即同意
    <a class="agreement">《服务与隐私协议》</a>
  </p>
</template>
<script>
  export default {
    data () {
      return {
        btnDescribe: '免密登录'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../../assets/sass/_agreement.scss";

</style>
