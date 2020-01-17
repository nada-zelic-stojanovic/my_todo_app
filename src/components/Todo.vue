<template>
  <div v-bind:class="{ 'completed': todo.completed, 'important': todo.important }">
    <p><span v-on:click="markComplete">{{ todo.title }}</span> <button v-on:click="markImportant">*</button><button @click="$emit('delete-todo', todo.id)">X</button></p>
    
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
</style>