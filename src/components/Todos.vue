<template>
  <div class="container">
    <h2 class="heading">My To-Do list</h2>
    <ul class="list-group">
      <li :key="todo.id" v-for="todo in todos">
        <Todo
          :todo="todo"
          v-on:delete-todo="$emit('delete-todo', todo.id)"
          v-on:update-todo="updateTodo"
        />
      </li>
    </ul>
  </div>
</template>
<script>
import Todo from "./Todo";

export default {
  name: "Todos",
  components: {
    Todo
  },
  props: ["todos"],
  methods: {
    updateTodo(updatedTodo) {
      this.$emit("update-todo", updatedTodo);
    }
  }
};
</script>
<style scoped>
.heading {
  margin: 25px 0;
  color: green;
}
ul {
  list-style-type: none;
}
</style>
