<template>
  <div v-bind:class="{ 'completed': todo.completed, 'important': todo.important }">
    <p>
      <input type="checkbox" v-on:change="toggleComplete" class="checkbox" />
      <span
        class="todo-title"
        contenteditable="true"
        v-on:blur="updateTitle($event)"
      >{{ todo.title }}</span>
      <button class="btn btn-outline-dark" v-on:click="toggleImportant">!</button>
      <button class="btn btn-outline-danger" @click="$emit('delete-todo', todo.id)">X</button>
    </p>
  </div>
</template>
<script>
export default {
  name: "Todo",
  props: ["todo"],
  methods: {
    toggleComplete() {
      const completed = !this.todo.completed;
      const updatedTodo = { ...this.todo, completed };
      this.$emit("update-todo", updatedTodo);
    },
    toggleImportant() {
      const important = !this.todo.important;
      const updatedTodo = { ...this.todo, important };
      this.$emit("update-todo", updatedTodo);
    },
    updateTitle(e) {
      const title = e.target.innerText;
      const updatedTodo = { ...this.todo, title };
      this.$emit("update-todo", updatedTodo);
    }
  }
};
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