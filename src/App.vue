<template>
<div class='container'>
  <div id="app">
    <Todos v-bind:todos="todos" v-on:delete-todo="deleteTodo" v-on:update-todo='updateTodo'/>
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
      todos: [
        
      ],
    }
  },
  methods: {
    addTodo(newTodoObj) {
      this.todos = [...this.todos, newTodoObj];
    },
    deleteTodo(todoId) {
      this.todos = this.todos.filter(todo => todo.id !== todoId);
    },
    updateTask: function(e, list){
      e.preventDefault();
      list.title = e.target.innerText;
      e.target.blur();
    },
  }
}
</script>
<style>
</style>