<template>
  <div class="validate-input-container pb-3">
    <input type="text"
      class="form-control"
      :class="{'is-invalid': inputRef.error}"
      :value="inputRef.val"
      @blur="validateInput"
      @input="updateValue"
    >
    <span v-if="inputRef.error" class="invalid-feedback">{{inputRef.message}}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, PropType } from 'vue'

// 邮箱校验正则
const emailReg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

// 规则校验interface
interface RuleProp {
  type: 'required' | 'email';
  message: string;
}

export type RulesProp = RuleProp[]

export default defineComponent({
  name: 'ValidateInput',
  props: {
    rules: {
      type: Array as PropType<RulesProp>,
      required: false,
      default: []
    },
    // v-model使用
    modelValue: String
  },
  setup (props, context) {
    const inputRef = reactive({
      // 双项绑定的值
      val: props.modelValue || '',
      // 校验是否有错误
      error: false,
      // 校验错误的message
      message: ''
    })

    // updateValue
    const updateValue = (e: KeyboardEvent) => {
      const targetValue = (e.target as HTMLInputElement).value
      inputRef.val = targetValue
      context.emit('update:modelValue', targetValue)
    }

    // form-item 校验方法, input blur的时候触发调用
    const validateInput = () => {
      if (props.rules) {
        // 是否全部通过标识
        const allPassed = props.rules.every(rule => {
          let passed = true
          inputRef.message = rule.message
          switch (rule.type) {
            case 'required':
              passed = inputRef.val.trim() !== ''
              break
            case 'email':
              passed = emailReg.test(inputRef.val.trim())
              break
            default:
              break
          }
          return passed
        })

        inputRef.error = !allPassed
      }
    }

    return {
      inputRef,
      validateInput,
      updateValue
    }
  }
})
</script>
