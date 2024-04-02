<template>
 <transition-group appear name="list">
  <li
   v-for="todo in store.todos"
   :key="todo.id"
   class="flex items-center justify-between gap-[7px] mb-2"
  >
   <input
    @click="finishTodo(todo)"
    :checked="todo.finish"
    class="cursor-pointer scale-125 accent-[black]"
    type="checkbox"
   />
   <div
    class="grow text-[20px] border rounded-[5px] p-[5px_10px]"
    :class="todo.finish ? 'bg-[gray] text-[var(--t-white)]' : ''"
   >
    {{ todo.text }}
   </div>
   <button @click="deleteTodo(todo)" class="text-[22px] text-[red]">
    &#10006;
   </button>
  </li>
 </transition-group>
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
   this.store.deleteTodo(todo);
  },
  finishTodo(todo) {
   this.store.finishTodo(todo);
  },
 },
};
</script>

<style scoped>
.list-item {
 display: inline-block;
}
.list-enter-active,
.list-leave-active {
 transition: all 0.5s ease;
}
.list-enter-from {
 opacity: 0;
 transform: translateY(-30px);
}
.list-leave-to {
 opacity: 0;
 transform: translateX(30px);
}
</style>
