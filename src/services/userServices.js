import Vue from 'vue';

const login = (email, password) => {
  return Vue.axios.post("/login", { email, password })
    .then(req => {
      if (!req.data.token) {
        localStorage.removeItem('token');
        return;
      }
      localStorage.token = req.data.token;
    })
    .catch((e) => {
      localStorage.removeItem('token');
      throw e;
    });
}

const register = (name, email, password, password_confirmation) => {
  return Vue.axios
    .post("/register", {
      name,
      email,
      password,
      password_confirmation
    })
    .then(req => {
      if (!req.data.token) {
        localStorage.removeItem('token');
        return;
      }
      localStorage.token = req.data.token;
    })
    .catch((e) => {
      localStorage.removeItem('token');
      throw e;
    });
}

const logout = () => {
  return Vue.axios
    .post("/logout")
    .then(() => {
      localStorage.removeItem('token');
    })
    .catch((e) => {
      throw e;
    });
}

export const userService = {
  login,
  register,
  logout
};