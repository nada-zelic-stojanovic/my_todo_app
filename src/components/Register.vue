<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div class="card card-signin my-5">
          <div class="card-body">
            <br />
            <h5 class="card-title text-center">Register</h5>
            <br />
            <form class="form-signin" @submit.prevent="register">
              <div class="form-label-group">
                <input
                  v-model="name"
                  type="name"
                  class="form-control"
                  placeholder="Name"
                  required
                  autofocus
                />
              </div>
              <br />
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
               <div class="form-label-group">
                <input
                  v-model="confirmPassword"
                  type="password"
                  class="form-control"
                  placeholder="Confirm Password"
                  required
                />
              </div>
              <br />
             
              <button class="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Register</button>
              <br />
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      confirmPassword: '',
      error: false
    };
  },
  methods: {
    register() {
      this.$http
        .post("/register", {
          name: this.name,
          email: this.email,
          password: this.password,
          password_confirmation: this.confirmPassword
        })
        .then(request => this.registerSuccessful(request))
        .catch(() => this.registerFailed());
    },
    registerSuccessful(req) {
      if (!req.data.token) {
        this.registerFailed();
        return;
      }

      localStorage.token = req.data.token;
      this.error = false;

      this.$router.replace(this.$route.query.redirect || "/login");
    },

    registerFailed() {
      this.error = "Register failed!";
      delete localStorage.token;
      return this.error;
    }
  }
};
//password123
</script>
