<template>
  <div id="login">
    <login-header></login-header>
    <div  class="login-form" >
      <section name="accountLogin" v-show="showIndex===0">
        <login-input @test="listenToMyBoy" :loginType="loginType.accountLogin" :showIndex="showIndex"></login-input>
        <login-agreement></login-agreement>
        <login-btn :userName="userName" :psw="psw" :mobile="mobile" :sms="sms" :showIndex="showIndex"></login-btn>
        <login-txt-group @test="refreshIndex" :linkTab="linkTab.smsLink" :showIndex="showIndex"></login-txt-group>
      </section>
      <section name="smsLogin" v-show="showIndex===1">
        <login-input @test="listenToMyBoy" :loginType="loginType.smsLogin" ></login-input>
        <login-agreement></login-agreement>
        <login-btn :userName="userName" :psw="psw" :mobile="mobile" :sms="sms" :showIndex="showIndex" ></login-btn>
        <login-txt-group @test="refreshIndex" :linkTab="linkTab.accountLink" :showIndex="showIndex"></login-txt-group>
      </section>
    </div>
    </div>
</template>
<script>
import loginHeader from '@/components/loginBox/loginHeader'
import loginBtn from '@/components/loginBox/loginBtn'
import loginInput from '@/components/loginBox/input'
import loginAgreement from '@/components/loginBox/loginAgreement'
import loginTxtGroup from '@/components/loginBox/loginTxtGroup'
export default {
  name: 'login',
  data () {
    return {
      userName: '',
      psw: '',
      mobile: '',
      sms: '',
      showIndex: 0,
      loginType: {
        accountLogin: [
          { id: 'username',
            msg: '手机号 / 邮箱',
            bottom: true,
            'ui-input': 'ui-input',
            inputVal: '',
            focusStatus: false
          },
          { id: 'password',
            msg: '密码',
            bottom: false,
            'ui-input': 'ui-input',
            inputVal: '',
            focusStatus: false
          }
        ],
        smsLogin: [
          { id: 'username',
            msg: '手机号',
            bottom: true,
            'ui-input': 'ui-input',
            inputVal: '',
            focusStatus: false
          },
          { id: 'password',
            msg: '密码',
            bottom: false,
            'ui-input': 'ui-input',
            inputVal: '',
            focusStatus: false
          }

        ]
      },
      linkTab: {
        accountLink: ['账号密码登录', 0],
        smsLink: ['短信验证登录', 1]
      },
      submitData: []
    }
  },
  methods: {
    listenToMyBoy: function (msg) {
      if (this.showIndex === 0) {
        this.userName = msg[0]
        this.psw = msg[1]
      } else {
        this.mobile = msg[0]
        this.sms = msg[1]
      }
    },
    refreshIndex: function (msg) {
      this.showIndex = msg
    }
  },
  components: {
    loginBtn: loginBtn,
    loginInput: loginInput,
    loginHeader: loginHeader,
    loginAgreement: loginAgreement,
    loginTxtGroup: loginTxtGroup
  }
}
</script>
<style>
  .login-form{
    margin: .34rem 0 .84rem;
    padding: 0 .45rem;
    font-size: .32rem;
    height: 4.88rem;
  }


</style>
