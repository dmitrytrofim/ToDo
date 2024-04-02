<template>
 <div
  v-for="todo in store.todos"
  :key="todo.id"
  class="flex items-center justify-between gap-[7px]"
 >
  <input
   @click="finishTodo(todo)"
   :checked="todo.finish"
   class="cursor-pointer scale-125 accent-[black]"
   type="checkbox"
  />
  <li
   class="grow text-[20px] border rounded-[5px] p-[5px_10px]"
   :class="todo.finish ? 'bg-[gray] text-[var(--t-white)]' : ''"
  >
   {{ todo.text }}
  </li>
  <button @click="deleteTodo(todo)" class="text-[22px] text-[red]">
   &#10006;
  </button>
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
  deleteTodo(todo) {
   this.store.deleteTodo(todo); // Как сюда передать целевую туду
  },
  finishTodo(todo) {
   this.store.finishTodo(todo);
  },
 },
};
</script>
