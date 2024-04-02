import { defineStore } from 'pinia';
import { ToDo } from '@/models';

export const useTodosStore = defineStore('todos', {
 state: () => ({
  todos: [] as Array<ToDo>,
 }),
 actions: {
  addTodo(text) {
   this.todos = [
    { id: Date.now().toString(), text, finish: false },
    ...this.todos,
   ];
   this.addLocalStorage();
  },
  deleteTodos() {
   this.todos = [];
   this.addLocalStorage();
  },
  deleteTodo(current) {
   this.todos = this.todos.filter((todo) => todo.id != current.id);
   this.addLocalStorage();
  },
  finishTodo(current) {
   this.todos = this.todos.map((todo) => {
    return {
     ...todo,
     finish:
      todo.id === current.id ? (todo.finish = !todo.finish) : todo.finish,
    };
   });
   this.addLocalStorage();
  },
  addLocalStorage() {
   localStorage.setItem('todos', JSON.stringify(this.todos));
  },
  loadTodos() {
   let todos = localStorage.getItem('todos');
   if (todos) this.todos = JSON.parse(todos);
  },
 },
});
