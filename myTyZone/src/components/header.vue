<template >
  <header class="header">
    <a href=""  class="ui-button-back"></a>
    <p class="title">{{title}}</p>
  </header>
</template>
<script>
  export default {
    data () {
      return {
      }
    },
    props: ['title']
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass">
  @import "../assets/sass/_header.scss";
</style>
