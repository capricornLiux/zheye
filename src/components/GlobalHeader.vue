<template>
  <nav class="navbar navbar-dark bg-primary justify-content-between mb-4 px-4">
    <a class="navbar-brand" href="#">者也专栏</a>
    <ul v-if="!user.isLogin" class="list-inline mb-0">
      <li class="list-inline-item"><a href="#" class="btn btn-outline-light my-2">登录</a></li>
      <li class="list-inline-item"><a href="#" class="btn btn-outline-light my-2">注册</a></li>
    </ul>
    <ul v-else class="list-inline mb-0">
      <!-- <li class="list-inline-item"><a href="#" class="btn btn-outline-light my-2">你好 {{user.name}}</a></li> -->
      <dropdown :title="`你好 ${user.name}`">
        <dropdown-item><a href="#" class="dropdown-item">a</a></dropdown-item>
        <dropdown-item><a href="#" class="dropdown-item">b</a></dropdown-item>
        <dropdown-item><a href="#" class="dropdown-item">c</a></dropdown-item>
        <dropdown-item><a href="#" class="dropdown-item">d</a></dropdown-item>
      </dropdown>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import Dropdown from './Dropdown.vue'
import DropdownItem from './DropdownItem.vue'

export interface UserProps {
  isLogin: boolean;
  name?: string;
  id?: number;
}
export default defineComponent({
  name: 'GlobalHeader',
  components: {
    Dropdown,
    DropdownItem
  },
  props: {
    user: {
      type: Object as PropType<UserProps>,
      required: true
    }
  }
})
</script>
