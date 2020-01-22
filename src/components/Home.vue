<template>
  <div class="container">
    <div id="app">
      <button v-on:click="logout" class="btn btn-outline-dark btn-block text-uppercase">Logout</button>
      <Todos :todos="todos" v-on:delete-todo="deleteTodo" v-on:update-todo.prevent="updateTodo" />
      <AddTodo v-on:add-todo="addTodo" />
    </div>
  </div>
</template>
<script>
import Todos from "./Todos";
import AddTodo from "./AddTodo";
import { userService } from "../services/userServices";

export default {
  name: "app",
  components: {
    Todos,
    AddTodo
  },
  data() {
    return {
      todos: []
    };
  },
  methods: {
    addTodo(newTodoObj) {
      this.todos = [...this.todos, newTodoObj];
    },
    deleteTodo(todoId) {
      this.todos = this.todos.filter(todo => todo.id !== todoId);
    },
    updateTask(e, list) {
      list.title = e.target.innerText;
      e.target.blur();
    },
    logout() {
      userService.logout();
    }
  }
};
</script>
<style>
</style>