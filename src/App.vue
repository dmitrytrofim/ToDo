<template>
 <the-wrapper>
  <main>
   <v-container>
    <div class="pt-[50px]">
     <h1 class="text-[40px] font-600 text-center mb-[20px]">ToDo</h1>
     <input
      v-on:keydown="addPost"
      ref="input"
      v-model="post.text"
      class="border w-full text-[20px] rounded-[5px] p-[5px] mb-[20px]"
      type="text"
      placeholder="Сегодня я хочу сделать..."
     />
     <div class="flex justify-center gap-[10px] mb-[20px]">
      <v-button
       @click="addPost"
       :class="post.text.trim().length === 0 ? 'bg-[gray]' : ''"
       >Добавить</v-button
      >
      <v-button
       @click="clearField"
       :class="post.text.length === 0 ? 'bg-[gray]' : ''"
       >Очистить</v-button
      >
      <v-button
       @click="deletePosts"
       :class="store.todos.length === 0 ? 'bg-[gray]' : ''"
       >Удалить все</v-button
      >
     </div>
     <todo-list />
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
    finish: false,
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
  addPost(e) {
   if (this.post.text.trim() === '') {
    return this.focusField();
   }
   if (e.type === 'click' || e.key === 'Enter') {
    this.store.addTodo(this.post.text);
    this.post.text = '';
    this.focusField();
   }
  },
  clearField() {
   this.post.text = '';
   this.focusField();
  },
  deletePosts() {
   if (this.store.todos.length === 0) return;
   if (confirm('Вы уверены?')) this.store.deleteTodos();
  },
  focusField() {
   return (this.$refs.input as HTMLInputElement).focus();
  },
 },
};
</script>

<style></style>
