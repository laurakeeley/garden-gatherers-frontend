<template>
  <!-- Hero Start -->
  <section
    class="bg-home d-flex align-items-center"
    style="background: url('images/authentication.jpg') center center"
  >
    <div class="bg-overlay bg-overlay-primary"></div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-5 col-md-7">
          <div class="login_page bg-white rounded p-4">
            <div class="text-center">
              <h4 class="mb-3">Login / Signin</h4>
            </div>
            <form v-on:submit.prevent="submit()" class="login-form">
              <ul>
                <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
              </ul>
              <div class="row">
                <div class="col-lg-12">
                  <div class="mb-3">
                    <label class="form-label"
                      >Your Email <span class="text-danger">*</span></label
                    >
                    <input
                      type="email"
                      v-model="newSessionParams.email"
                      class="form-control"
                      placeholder="Email"
                      name="email"
                      required=""
                    />
                  </div>
                </div>
                <!--end col-->

                <div class="col-lg-12">
                  <div class="mb-3">
                    <label class="form-label"
                      >Password <span class="text-danger">*</span></label
                    >
                    <input
                      type="password"
                      v-model="newSessionParams.password"
                      class="form-control"
                      placeholder="Password"
                      required=""
                    />
                  </div>
                </div>
                <!--end col-->

                <div class="col-lg-12 mb-0">
                  <button type="submit" class="btn btn-primary w-100">
                    Sign in
                  </button>
                </div>
                <!--end col-->

                <div class="col-12 text-center">
                  <p class="mb-0 mt-4">
                    <small class="text-dark me-2"
                      >Don't have an account ?</small
                    >
                    <router-link to="/signup" class="text-dark fw-bold"
                      >Sign Up</router-link
                    >
                  </p>
                </div>
                <!--end col-->
              </div>
              <!--end row-->
            </form>
          </div>
        </div>
        <!--end col-->
      </div>
      <!--end row-->
    </div>
    <!--end container-->
  </section>
  <!--end section-->
  <!-- Hero End -->
  <!-- <div class="login">
    <form v-on:submit.prevent="submit()">
      <h1>Login</h1>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        <label>Email:</label>
        <input type="email" v-model="newSessionParams.email" />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" v-model="newSessionParams.password" />
      </div>
      <input type="submit" value="Login" />
    </form>
  </div> -->
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newSessionParams: {},
      errors: [],
    };
  },
  methods: {
    submit: function () {
      axios
        .post("/sessions", this.newSessionParams)
        .then((response) => {
          axios.defaults.headers.common["Authorization"] =
            "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          localStorage.setItem("user_id", response.data.user_id);
          this.$router.push("/");
        })
        .catch((error) => {
          console.log("login error", error.response);
          this.errors = ["Invalid Username or Password"];
        });
    },
  },
};
</script>
