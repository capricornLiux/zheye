<template>
  <div class="container">
    <global-header :user="user"></global-header>
    <column-list :list="data"></column-list>
    <form>
      <div class="mb-3">
        <label class="form-label">Email address</label>
        <validate-input id="xxx" :rules="emailRules"></validate-input>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import ColumnList, { ColumnProps } from './components/ColumnList.vue'
import GlobalHeader, { UserProps } from './components/GlobalHeader.vue'
import ValidateInput, { RulesProp } from './components/ValidateInput.vue'

const testData: ColumnProps[] = [
  {
    id: 1,
    title: 'xxx',
    description: 'sdf'
  },
  {
    id: 1,
    title: 'xxx',
    description: 'sdf',
    avatar: 'sdfs'
  },
  {
    id: 1,
    title: 'xxx',
    description: 'sdf',
    avatar: 'sdfs'
  },
  {
    id: 1,
    title: 'xxx',
    description: 'sdf',
    avatar: 'sdfs'
  }
]

const userData: UserProps = {
  isLogin: true,
  name: 'string',
  id: 1
}
export default defineComponent({
  name: 'App',
  components: {
    ColumnList,
    GlobalHeader,
    ValidateInput
  },
  setup () {
    const emailRules: RulesProp = [
      {
        type: 'required',
        message: '电子邮箱不能为空'
      },
      {
        type: 'email',
        message: '电子邮箱格式不正确'
      }
    ]
    return {
      data: testData,
      user: userData,
      emailRules
    }
  }
})
</script>

<style>
</style>
