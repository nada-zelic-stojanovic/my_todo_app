import Vue from 'vue';

const postTodo = (newTodo) => {
  return Vue.axios
    .post("/todo", newTodo)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      throw error;
    });
}

const getTodos = () => {
  return Vue.axios.get('/todo')
    .then(result => {
      return result.data;
    }).catch((error) => {
      throw error;
    });
}

const deleteTodo = (id) => {
  Vue.axios.delete('/todo/' + id).catch((error) => {
    throw error;
  });
}

const updateTodo = (id, todo) => {
  return Vue.axios
    .post('/todo/' + id, todo).catch((error) => {
      throw error;
    });
}

export const todoService = {
  postTodo,
  getTodos,
  deleteTodo,
  updateTodo
}
