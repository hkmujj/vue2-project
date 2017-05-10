<template >
  <div>

  <a  href="" class="txt-group pull-left">登录遇到问题?</a>
  <a  v-on:click="changeTabIndex(linkTab)" class="txt-group pull-right">{{linkTab[0]}}</a>
  </div>

</template>
<script>
  export default {
    props: ['linkTab', 'showIndex'],
    data () {
      return {
      }
    },
    methods: {
      changeTabIndex: function (linkTab) {
        this.$emit('test', linkTab[1])
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../../assets/sass/_textGroup.scss";
</style>
