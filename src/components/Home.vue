<template>
  <div class="container">
    <div id="app">
      <button v-on:click="logout" class="btn btn-outline-dark btn-block text-uppercase">Logout</button>
      <Todos :todos="todos" v-on:delete-todo="deleteTodo" v-on:update-todo="updateTodo" />
      <AddTodo v-on:add-todo="addTodo" />
    </div>
    <br />
    <div
      v-if="error.message.length > 0"
      class="error"
    >{{error.title}}: {{error.message}}</div>
  </div>
</template>
<script>
import Todos from "./Todos";
import AddTodo from "./AddTodo";
import { userService } from "../services/userServices";
import { todoService } from "../services/todoServices";

export default {
  name: "app",
  components: {
    Todos,
    AddTodo
  },
  data() {
    return {
      todos: [],
      error: {
        title: "",
        message: ""
      }
    };
  },
  created() {
    todoService.getTodos().then(data => {
      this.todos = [...data];
    });
  },
  methods: {
    addTodo(newTodoObj) {
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
        })
        .catch(e => {
          this.error.title = "Error in adding todo";
          this.error.message = e.message;
        });
    },
    updateTodo(updatedTodo) {
      todoService
        .updateTodo(updatedTodo.id, updatedTodo)
        .then(() => {
          this.todos = this.todos.map(todo =>
            todo.id === updatedTodo.id ? updatedTodo : todo
          );
        })
        .catch(e => {
          this.error.title = "Error in updating todo";
          this.error.message = e.message;
        });
    },
    deleteTodo(todoId) {
      this.todos = this.todos.filter(todo => todo.id !== todoId);
      todoService.deleteTodo(todoId).catch(e => {
        this.error.title = "Error in deleting todo";
        this.error.message = e.message;
      });
    },
    logout() {
      userService
        .logout()
        .then(() => {
          this.$router.push({ name: "login" });
        })
        .catch(e => {
          this.error.title = "Logout Error";
          this.error.message = e.message;
        });
    }
  }
};
</script>
<style>
</style>