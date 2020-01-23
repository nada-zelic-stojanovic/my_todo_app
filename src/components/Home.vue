<template>
  <div class="container">
    <div id="app">
      <button v-on:click="logout" class="btn btn-outline-dark btn-block text-uppercase">Logout</button>
      <Todos :todos="todos" v-on:delete-todo="deleteTodo" v-on:update-todo="updateTodo" />
      <AddTodo v-on:add-todo="addTodo" />
    </div>
  </div>
</template>
<script>
import Todos from "./Todos";
import AddTodo from "./AddTodo";
import { userService } from "../services/userServices";
import { todoService } from "../services/todoServices";
import { router } from "../main";

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
  mounted() {
    todoService.getTodos().then(data => {
      this.todos = [...data];
    });
  },
  methods: {
    addTodo(newTodoObj) {
      if (localStorage.token) {
        todoService
          .postTodo(newTodoObj)
          .then(data => {
            const todo = {
              id: data.id,
              title: data.title,
              completed: data.completed ? true : false,
              important: data.important ? true : false
            };
            return todo;
          })
          .then(todo => {
            this.todos = [...this.todos, todo];
          });
      } else {
        router.push({ name: "login" });
      }
    },
    updateTodo(updatedTodo) {
      todoService.updateTodo(updatedTodo.id, updatedTodo).then(() => {
        this.todos = this.todos.map(todo =>
          todo.id === updatedTodo.id ? updatedTodo : todo
        );
      });
    },
    deleteTodo(todoId) {
      this.todos = this.todos.filter(todo => todo.id !== todoId);
      todoService.deleteTodo(todoId);
    },
    logout() {
      userService.logout();
    }
  }
};
</script>
<style>
</style>