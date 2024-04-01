<template>
 <the-wrapper>
  <main>
   <v-container>
    <div class="pt-[50px]">
     <h1 class="text-[40px] font-600 text-center mb-[20px]">ToDo</h1>
     <input
      ref="input"
      v-model="post.text"
      class="border w-full text-[20px] rounded-[5px] p-[5px] mb-[20px]"
      type="text"
      placeholder="Сегодня я хочу сделать..."
     />
     <div class="flex justify-center gap-[10px] mb-[20px]">
      <v-button @click="addPost">Добавить</v-button>
      <v-button>Очистить</v-button>
      <v-button>Удалить все</v-button>
     </div>
     <ul v-if="store.todos[0]" class="flex flex-col gap-[5px]">
      <li
       v-for="todo in store.todos"
       :key="todo.id"
       class="text-[20px] border rounded-[5px] p-[5px]"
      >
       {{ todo.text }}
      </li>
     </ul>
    </div>
   </v-container>
  </main>
 </the-wrapper>
</template>

<script lang="ts">
import { useTodosStore } from './store';
import { ref } from 'vue';

export default {
 data() {
  return {
   post: {
    id: '',
    text: '',
   },
  };
 },
 setup() {
  const store = useTodosStore();
  return {
   store,
   ref,
  };
 },
 methods: {
  addPost() {
   const input = this.$refs.input;
   this.store.todos.push({
    id: Date.now().toString(),
    text: this.post.text,
   });
   this.post.text = '';
   (input as HTMLInputElement).focus();
  },
 },
};
</script>

<style>
body.j-lock {
 overflow: hidden;
}
</style>
