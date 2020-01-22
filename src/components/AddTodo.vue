<template>
  <div>
    <form @submit.prevent="addTodo">  
      <input class='form-control' placeholder="I need to..." type="text" v-model="title" name="title" required>
      <button class='btn btn-success' type="submit">Add</button>
    </form>
  </div>
</template>
<script>
export default {
  name: 'AddTodo',
  data() {
    return {
      title: ''
    }
  },
  methods: {
    addTodo() {
      const newTodoObj = {
        title: this.title,
        completed: false,
        important: false
      }
      this.$emit('add-todo', newTodoObj);
      this.title = '';
    }
  }
}
</script>
<style scoped>
    button {
        margin: 5px;
    }
    input {
        margin: 5px;
    }
</style>