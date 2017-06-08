<template>
  <div id="app">
    <div class="e-logo-item">
        <img class="e-logo" src="/static/images/e-logo.png" />
    </div>
    <router-link to="loginPage">
        <div class="user-info" >
            <div class="user-info-item">
                <img class="avator" src="/static/images/avator.png" />
            </div><div class="user-info-item">
                <h2 class="user-info-title">登录您的天翼账号</h2>
                <p class="user-info-subtitle">掌握您的账号情况</p>
            </div>
        </div>
    </router-link>
    <section>
        <list :items="items_group1"></list>
    </section>
    <section>
        <list :items="items_group2"></list>
    </section>
    <section>
        <carousel :slideList="slideList"></carousel>
    </section>
    <footer class="footer-info">
        <p class="link-wrapper">
            <a href="">在线客服</a>
            <a href="">法律声明</a>
            <a href="javascript:;">|</a>
            <a href="">退出</a>
        </p>
        <p class="copyright">Copyright © 中国电信</p>
    </footer>
    <router-view></router-view>
  </div>

</template>
<script>
  import list from '@/components/list'
  import carousel from '@/components/carousel'
  export default {
    data () {
      return {
        name: 'app',
        items_group1: [
          {
            iconClass: 'icon-account-safe',
            title: '账号安全',
            tips: '账号存在一定风险',
            isWarn: true,
            linkRouter: 'accountSafe'
          },
          {
            iconClass: 'icon-login-log',
            title: '登录记录',
            tips: '最近一周登录无异常',
            linkRouter: ''
          },
          {
            iconClass: 'icon-change-password',
            title: '修改密码',
            tips: '',
            linkRouter: ''
          }
        ],
        items_group2: [
          {
            iconClass: 'icon-about-account',
            title: '关联产品',
            tips: '',
            linkRouter: ''
          },
          {
            iconClass: 'icon-relate-product ',
            title: '关于天翼账号',
            tips: '',
            linkRouter: ''
          }
        ],
        slideList: [
          {
            'clickUrl': '#',
            'desc': 'nhwc',
            'image': '/static/images/index-banner.png'
          },
          {
            'clickUrl': '#',
            'desc': 'hxrj',
            'image': '/static/images/index-banner.png'
          },
          {
            'clickUrl': '#',
            'desc': 'rsdh',
            'image': '/static/images/index-banner.png'
          }
        ]
      }
    },
    components: {
      list: list,
      carousel: carousel
    }
  }
</script>
<style lang="scss" scoped="" type="text/css">
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
     .footer-info {
    font-size: .24rem;
    position: absolute;
    bottom: .4rem;
    width: 100%;
    text-align: center;
    color: #666;
  }
  .footer-info a {
      line-height: .6rem;
      padding: 0 .1rem;
      color: #666;
      text-decoration:none;
  }
</style>

