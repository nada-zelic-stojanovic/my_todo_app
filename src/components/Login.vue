<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div class="card card-signin my-5">
          <div class="card-body">
            <br />
            <h5 class="card-title text-center">Login to Todos</h5>
            <br />
            <form class="form-signin" @submit.prevent="login">
              <div class="form-label-group">
                <input
                  v-model="email"
                  type="email"
                  class="form-control"
                  placeholder="Email address"
                  required
                  autofocus
                />
              </div>
              <br />
              <div class="form-label-group">
                <input
                  v-model="password"
                  type="password"
                  class="form-control"
                  placeholder="Password"
                  required
                />
              </div>
              <br />
              <button class="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Log in</button>
              <br />
            </form>
            <div class="center-text">
              Or
              <a href="/register">Register</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { userService } from "../services/userServices";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      error: false
    };
  },
  methods: {
    login() {
      userService.login(this.email, this.password);
    }
  }
};
</script>

<style scoped>
.center-text {
  text-align: center;
}
</style>