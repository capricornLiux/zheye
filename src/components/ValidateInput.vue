<template>
  <div class="validate-input-container pb-3">
    <input type="text" class="form-control" v-model="inputRef.val" @blur="validateInput">
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, PropType } from 'vue'

// 邮箱校验正则
const emailReg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

// 规则校验interface
interface RuleProp {
  type: 'required' | 'email',
  message: string
}

export type RulesProp = RuleProp[]

export default defineComponent({
  name: 'ValidateInput',
  props: {
    rules: {
      type: Array as PropType<RulesProp>,
      required: false,
      default: []
    }
  },
  setup (props, context) {
    const inputRef = reactive({
      val: '',
      error: false,
      message: ''
    })

    const validateInput = () => {
      if (props.rules) {
        // 是否全部通过标识
        const allPassed = props.rules.every(rule => {
          let passed = false
          inputRef.message = rule.message
          switch (rule.type) {
            case 'required':
              passed = inputRef.val.trim() !== ''
              break;
            case 'email':
              passed = emailReg.test(inputRef.val.trim())
            default:
              break;
          }
        })
      }
    }

    return {
      inputRef,
      validateInput
    }
  }
})
</script>