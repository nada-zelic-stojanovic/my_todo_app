<template>
  <div v-bind:class="{ 'completed': todo.completed }">
    <p v-on:click="markComplete">{{ todo.title }} <button @click="$emit('delete-todo', todo.id)">X</button></p>
    
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
    }
  }
}
</script>
<style scoped>
  .completed {
    text-decoration: line-through;
  }
</style>