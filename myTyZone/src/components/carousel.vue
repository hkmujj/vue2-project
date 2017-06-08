<template>
<div class="carousel-wrap" id="carousel">
  <transition-group tag="ul" class='slide-ul' name="list">
   <li v-for="(list,index) in slideList" :key="index" v-show="index===currentIndex"  @mouseenter="stop" @mouseleave="go" >
    <a :href="list.clickUrl" rel="external nofollow" >
     <img :src="list.image" :alt="list.desc">
    </a>
   </li>
  </transition-group>
  <div class="carousel-items">
    <span v-for="(item,index) in slideList.length" :class="{'active':index===currentIndex}" @mouseover="change(index)"></span>
  </div>
</div>
</template>
<script>
  export default {
    data () {
      return {
        currentIndex: 0,
        timer: ''
      }
    },
    props: ['slideList'],
    methods: {
      go: function () {
        this.timer = setInterval(() => {
          this.autoPlay()
        }, 4000)
      },
      stop: function () {
        clearInterval(this.timer)
        this.timer = null
      },
      change: function (index) {
        this.currentIndex = index
      },
      autoPlay: function () {
        this.currentIndex++
        if (this.currentIndex > this.slideList.length - 1) {
          this.currentIndex = 0
        }
      }
    },
    created: function () {
      this.$nextTick(function () {
        this.timer = setInterval(() => {
          this.autoPlay()
        }, 4000)
      })
    }
  }
</script>

<style lang="sass">
  @import "../assets/sass/_carousel.scss";
</style>
