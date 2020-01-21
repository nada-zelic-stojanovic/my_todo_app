<template>
<div class='container'>
  <div id="app">
    <Todos :todos="todos" v-on:delete-todo="deleteTodo" v-on:update-tod.prevent='updateTodo'/>
    <AddTodo v-on:add-todo="addTodo"/>
  </div>
</div>
</template>
<script>
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
export default {
  name: 'app',
  components: {
    Todos,
    AddTodo
  },
  data() {
    return {
      todos: [],
    }
  },
  methods: {
    addTodo(newTodoObj) {
      this.todos = [...this.todos, newTodoObj];
    },
    deleteTodo(todoId) {
      this.todos = this.todos.filter(todo => todo.id !== todoId);
    },
    updateTask (e, list){
      list.title = e.target.innerText;
      e.target.blur();
    },
  }
}
</script>
<style>
</style>