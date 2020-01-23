import Vue from 'vue';
import { router } from '../main';

const login = (email, password) => {
  Vue.axios.post("/login", { email, password })
    .then(req => {
      if (!req.data.token) {
        delete localStorage.token;
        return;
      }
      localStorage.token = req.data.token;
      router.push({ name: 'home' });
    })
    .catch((e) => {
      delete localStorage.token;
      return e;
    });
}

const register = (name, email, password, password_confirmation) => {
  Vue.axios
    .post("/register", {
      name,
      email,
      password,
      password_confirmation
    })
    .then(req => {
      if (!req.data.token) {
        this.registerFailed();
        return;
      }
      localStorage.token = req.data.token;
      router.push({ name: 'login' });
    })
    .catch((e) => {
      delete localStorage.token;
      return e;
    });
}

const logout = () => {
  Vue.axios
    .post("/logout")
    .then(() => {
      localStorage.removeItem('token');
      router.push({ name: 'login' });
    })
    .catch((e) => {
      return e;
    });
}

export const userService = {
  login,
  register,
  logout
};