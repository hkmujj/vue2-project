<template>
  <div id="app">
    <div class="e-logo-item">
        <img class="e-logo" src="/static/images/e-logo.png" />
    </div>
    <section class="user-info">
        <div class="user-info-item">
            <img class="avator" src="/static/images/avator.png" />
        </div><div class="user-info-item">
            <h2 class="user-info-title">登录您的天翼账号</h2>
            <p class="user-info-subtitle">掌握您的账号情况</p>
        </div>
    </section>
    <section>
        <list></list>
    </section>
  </div>
</template>
<script>
  import list from '@/components/list'
  export default {
    data () {
      return {
        name: 'app'
      }
    },
    components: {
      list: list
    }
  }
</script>
<style lang="scss" scoped="" type="text/css">
  @import "../src/assets/sass/comm/_base.scss";
    .e-logo-item{
        display: block;
        padding:.28rem;
        background: #fff;
    }
    .e-logo{
        display: block;
        height: .48rem;
    }
    .user-info {
        position: relative;
        padding: .26rem .28rem;
        background: #0090FF;
        box-shadow: 0 0 6px 0 rgba(111, 111, 111, .50);
    }
    .user-info:after {
      position: absolute;
      top: 50%;
      right: .4rem;
      width: 12px;
      height: 12px;
      content: ' ';
      -webkit-transform: translateY(-50%) rotate(45deg);
      transform: translateY(-50%) rotate(45deg);
      border: 2px solid #fff;
      border-bottom-width: 0;
      border-left-width: 0;
    }
    .user-avator {
      display: inline-block;
      width: 1.2rem;
      height: 1.2rem;
      border-radius: 50%;
    }
    .user-info-item {
      display: inline-block;
      color: #fff;
      vertical-align: top;
    }
    .user-info-title{
        font-size: .36rem;
        padding: .04rem 0 0 .3rem;
        color: #fff;
    
}
    .user-info-subtitle {
        font-size: .32rem;
        padding: .2rem 0 0 .3rem;
    }


</style>

