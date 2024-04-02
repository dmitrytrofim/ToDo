<template>
 <li
  v-for="todo in store.todos"
  :key="todo.id"
  class="text-[20px] border rounded-[5px] p-[5px]"
 >
  {{ todo.text }}
 </li>
</template>

<script lang="ts">
import { useTodosStore } from '@store/index';
export default {
 name: 'todo-item',
 setup() {
  const store = useTodosStore();
  return {
   store,
  };
 },
};
</script>
