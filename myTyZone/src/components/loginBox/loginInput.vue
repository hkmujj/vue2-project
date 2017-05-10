<template >
    <div  class="input-box ">
      <input  type="inputAttr.text"   maxlength="inputAttr.maxlength" v-on:blur="blurInput(inputAttr)" v-todo-focus="{ status: inputAttr.status }"  v-bind:class="['ui-input', { bottomBorder: inputAttr.bottom }]" v-model="inputAttr.inputVal" :placeholder="inputAttr.placeholder" >
      <span v-on:click="clearInputVal(inputAttr)" class="delete block"><i></i></span>
    </div>
</template>
<script>
  export default {
    data () {
      return {
      }
    },
    props: ['inputAttr'],
    methods: {
      clearInputVal: function (item) {
        item.inputVal = null
        item.status = true
      },
      blurInput: function (item) {
        item.status = false
        this.$emit('test', item)
      }
    },
    directives: {
      'todo-focus': function (el, binding) {
        if (binding.value.status) {
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
