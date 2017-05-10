<template >
  <div>
    <div  v-for="(item,index) in loginType"  class="input-box ">
      <input  type="text" id="item.id"  maxlength="35" v-on:blur="blurInput(index,item)" v-todo-focus="{ focusStatus: item.focusStatus }"  v-bind:class="['ui-input', { bottomBorder: item.bottom }]" v-model="item.inputVal" :placeholder="item.msg" >
      <span v-on:click="clearInputVal(item)" class="delete block"><i></i></span>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        myUserName: '',
        myPsw: ''
      }
    },
    props: ['loginType', 'showIndex'],
    methods: {
      clearInputVal: function (item) {
        item.inputVal = null
        item.focusStatus = true
      },
      blurInput: function (index, item) {
        item.focusStatus = false
        if (index === 0) {
          this.myUserName = item.inputVal
        }
        if (index === 1) {
          this.myPsw = item.inputVal
        }
        this.$emit('test', [this.myUserName, this.myPsw])
      }
    },
    directives: {
      'todo-focus': function (el, binding) {
        if (binding.value.focusStatus) {
          el.focus()
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../../assets/sass/_input.scss";

</style>
