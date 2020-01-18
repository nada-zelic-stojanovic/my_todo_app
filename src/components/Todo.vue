<template>
  <div v-bind:class="{ 'completed': todo.completed, 'important': todo.important }">
    <p>
        <input type='checkbox' v-on:change='markComplete' class='checkbox' />
        <span class='todo-title' contenteditable="true" v-on:keydown.enter="updateTask($event, list)" v-on:blur="updateTask($event, list)">{{ todo.title }}</span>
        <button class='btn btn-outline-dark' v-on:click="markImportant">!</button>
        <button class='btn btn-outline-danger' @click="$emit('delete-todo', todo.id)">X</button>
    </p>
    
  </div>
</template>
<script>
export default {
  name: 'Todo',
  props: [
    "todo"
  ],
  methods: {
    markComplete() {
      this.todo.completed = !this.todo.completed
    },
    markImportant() {
        this.todo.important = !this.todo.important
    }
  }
}
</script>
<style scoped>
  .completed {
    text-decoration: line-through;
  }
  .important {
      font-weight: bold;
  }
  .checkbox {
      margin: 5px 10px;
  }
  button {
      margin: 0 5px;
  }
  .todo-title {
      margin-right: 10px;
  }
</style>