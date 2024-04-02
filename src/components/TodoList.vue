<template>
 <div>
  <ul v-if="store.todos.length > 0" class="flex flex-col">
   <todo-item />
  </ul>
  <p v-if="store.todos.length === 0" class="text-[20px] text-center">
   Записей нет
  </p>
 </div>
</template>

<script lang="ts">
import { useTodosStore } from '@store/index';
export default {
 name: 'todo-list',
 setup() {
  const store = useTodosStore();
  return {
   store,
  };
 },
};
</script>
