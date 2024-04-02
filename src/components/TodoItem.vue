<template>
 <div
  v-for="todo in store.todos"
  :key="todo.id"
  class="flex items-center justify-between gap-[7px]"
 >
  <input class="cursor-pointer" type="checkbox" />
  <li class="grow text-[20px] border rounded-[5px] p-[5px_10px]">
   <span>{{ todo.text }}</span>
  </li>
  <button @click="deleteTodo" class="text-[22px] text-[red]">x</button>
 </div>
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
 methods: {
  deleteTodo() {
   this.store.deletePost();
  },
 },
};
</script>
