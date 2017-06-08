<template >
<ul class="list">
    <li class="list-item" v-for="item in items"> 
      <router-link :to="{path: item.linkRouter}" class="list-item-a">
        <i class="icon " v-bind:class="[item.iconClass]"></i>
        <span class="list-title">{{item.title}}</span>
        <span class="list-value" v-bind:class="{'list-value-warning': item.isWarn}">{{item.tips}}</span>
      </router-link>  
   </li>
 </router-link>
</ul>
</template>
<script>
  export default {
    data () {
      return {
      }
    },
    props: ['items'],
    methods: {
    }
  }
</script>

<style lang="sass">
  @import "../assets/sass/_list.scss";
</style>
