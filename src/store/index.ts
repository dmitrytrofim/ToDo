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
  },
  deleteTodos() {
   this.todos = [];
  },
  deleteTodo(current) {
   this.todos = this.todos.filter((todo) => todo.id != current.id);
  },
  finishTodo(current) {
   this.todos = this.todos.map((todo) => {
    return {
     ...todo,
     finish:
      todo.id === current.id ? (todo.finish = !todo.finish) : todo.finish,
    };
   });
  },
 },
});
