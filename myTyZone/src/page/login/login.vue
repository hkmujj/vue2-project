<template >
  <div >
    <login-header></login-header>
    <div class="login-form">
      <login-input  @test="listenToInputVal" :inputAttr="userNameInputAttr" ></login-input>
      <login-input  @test="listenToInputVal" :inputAttr="pswInputAttr" ></login-input>
      <login-agreement></login-agreement>
      <input  type="button" class="ui-btn" value="免密登录" v-on:click="mobileLogin(userNameInputAttr.inputVal, pswInputAttr.inputVal)" >
    </div>
  </div>
</template>
<script>
  import loginHeader from '@/components/loginBox/loginHeader'
  import loginInput from '@/components/loginBox/loginInput'
  import loginAgreement from '@/components/loginBox/loginAgreement'
  import loginTxtGroup from '@/components/loginBox/loginTxtGroup'
  import {accountLogin} from '../../service/getData'

  export default {
    name: 'loginPage',
    data () {
      return {
        userNameInputAttr: {
          'name': 'userName',
          'type': 'text',
          'maxlength': '35',
          'status': false,
          'bottom': true,
          'placeholder': '手机号 / 邮箱'
        },
        pswInputAttr: {
          'name': 'psw',
          'type': 'text',
          'maxlength': '35',
          'status': false,
          'bottom': false,
          'placeholder': '密码'
        }
      }
    },
    methods: {
      listenToInputVal: function (item) {
        if (item.name === 'userName') {
          this.userNameInputAttr = item
        } else if (item.name === 'psw') {
          this.pswInputAttr = item
        }
        console.log(this.userNameInputAttr.inputVal)
        console.log(this.pswInputAttr.inputVal)
      },
      mobileLogin: async function (userName, psw) {
      /*
      let data = {
          'apptype': 'wap',
          'appKey': 'test',
          'accountType': '01',
          'dynamicCheck': 'false',
          'userName': userName,
          'password': psw,
          'validateCode': '',
          'captchaToken': '',
          'returnUrl': '',
          'callbackMsg': 'callbackMsg'
        }
        */
        console.log(psw)
        let exsis = await accountLogin(userName, psw)
        if (exsis) {
          console.log(exsis.result)
          console.log(exsis.msg)
        }
      }
    },
    directives: {
      'todo-focus': function (el, binding) {
        if (binding.value.focusStatus) {
          el.focus()
        }
      }
    },
    components: {
      loginInput: loginInput,
      loginHeader: loginHeader,
      loginAgreement: loginAgreement,
      loginTxtGroup: loginTxtGroup
    }
  }
</script>
<style>
  @import "../../assets/sass/_input.scss";
  .login-form{
    margin: .34rem 0 .84rem;
    padding: 0 .45rem;
    font-size: .32rem;
    height: 4.88rem;
  }

</style>
