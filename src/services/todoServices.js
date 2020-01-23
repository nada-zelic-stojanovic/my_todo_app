import Vue from 'vue';

const postTodo = (newTodo) => {
  return Vue.axios
    .post("/todo", newTodo)
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      return e;
    });
}

const getTodos = () => {
  return Vue.axios.get('/todo')
    .then(result => {
      return result.data;
    });
}

const deleteTodo = (id) => {
  Vue.axios.delete('/todo/' + id);
}

const updateTodo = (id, todo) => {
  return Vue.axios
    .post('/todo/' + id, todo);
}

export const todoService = {
  postTodo,
  getTodos,
  deleteTodo,
  updateTodo
}
