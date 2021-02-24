<template>
  <div class="container">
    <global-header :user="user"></global-header>
    <column-list :list="data"></column-list>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import ColumnList, { ColumnProps } from './components/ColumnList.vue'
import GlobalHeader, { UserProps } from './components/GlobalHeader.vue'

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
    GlobalHeader
  },
  setup () {
    return {
      data: testData,
      user: userData
    }
  }
})
</script>

<style>
</style>
