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
      <v-button @click="clearField">Очистить</v-button>
      <v-button @click="deletePosts">Удалить все</v-button>
     </div>
     <ul v-if="store.todos.length > 0" class="flex flex-col gap-[5px]">
      <li
       v-for="todo in store.todos"
       :key="todo.id"
       class="text-[20px] border rounded-[5px] p-[5px]"
      >
       {{ todo.text }}
      </li>
     </ul>
     <p v-if="store.todos.length === 0" class="text-[20px] text-center">
      Записей нет
     </p>
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
   this.store.addPost(this.post.text);
   this.post.text = '';
   this.focusField();
  },
  clearField() {
   this.post.text = '';
   this.focusField();
  },
  deletePosts() {
   if (confirm('Вы уверены?')) this.store.deletePosts();
  },
  focusField() {
   return (this.$refs.input as HTMLInputElement).focus();
  },
 },
};
</script>
