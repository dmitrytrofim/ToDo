import { defineStore } from 'pinia';
import { ToDo } from '@/models';

export const useTodosStore = defineStore('todos', {
 state: () => ({
  todos: [] as Array<ToDo>,
 }),
 actions: {
  addPost(text) {
   this.todos = [{ id: Date.now().toString(), text }, ...this.todos];
  },
  deletePosts() {
   this.todos = [];
  },
 },
});
