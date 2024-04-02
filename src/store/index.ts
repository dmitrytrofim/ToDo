import { defineStore } from 'pinia';
import { ToDo } from '@/models';

export const useTodosStore = defineStore('todos', {
 state: () => ({
  todos: [] as Array<ToDo>,
 }),
 actions: {
  addTodo(text) {
   this.todos.unshift({ id: Date.now().toString(), text, finish: false });
   this.addLocalStorage();
  },
  deleteTodos() {
   this.todos = [];
   this.addLocalStorage();
  },
  deleteTodo(current) {
   this.todos.splice(this.getIndex(current), 1);
   this.addLocalStorage();
  },
  finishTodo(current) {
   this.todos[this.getIndex(current)].finish =
    !this.todos[this.getIndex(current)].finish;
   this.addLocalStorage();
  },
  addLocalStorage() {
   localStorage.setItem('todos', JSON.stringify(this.todos));
  },
  loadTodos() {
   let todos = localStorage.getItem('todos');
   if (todos) this.todos = JSON.parse(todos);
  },
  getIndex(current) {
   return this.todos.findIndex((todo) => todo.id === current.id);
  },
 },
});
