<template>
  <body>
    <section
      class="bg-half-170 d-flex align-items-center"
      style="background: url('images/authentication.jpg') center center"
    >
      <div class="bg-overlay bg-overlay-primary"></div>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-5 col-md-7">
            <div class="login_page bg-white rounded p-4">
              <div class="text-center">
                <h4 class="mb-3">Signup</h4>
              </div>
              <ul>
                <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
              </ul>
              <form v-on:submit.prevent="submit()" class="login-form">
                <div class="row">
                  <div class="col-md-12">
                    <div class="mb-3">
                      <label class="form-label"
                        >First name <span class="text-danger">*</span></label
                      >
                      <input
                        type="text"
                        v-model="newUserParams.name"
                        class="form-control"
                        placeholder="Name"
                        name="s"
                        required=""
                      />
                    </div>
                  </div>
                  <!--end col-->
                  <div class="col-md-12">
                    <div class="mb-3">
                      <label class="form-label"
                        >Email <span class="text-danger">*</span></label
                      >
                      <input
                        type="email"
                        v-model="newUserParams.email"
                        class="form-control"
                        placeholder="Email"
                        name="email"
                        required=""
                      />
                    </div>
                  </div>
                  <!--end col-->
                  <div class="col-md-12">
                    <div class="mb-3">
                      <label class="form-label"
                        >Password <span class="text-danger">*</span></label
                      >
                      <input
                        type="password"
                        v-model="newUserParams.password"
                        class="form-control"
                        placeholder="Password"
                        required=""
                      />
                    </div>
                  </div>
                  <!--end col-->
                  <div class="col-md-12">
                    <div class="mb-3">
                      <label class="form-label"
                        >Password Confirmation<span class="text-danger"
                          >*</span
                        ></label
                      >
                      <input
                        type="password"
                        v-model="newUserParams.password_confirmation"
                        class="form-control"
                        placeholder="Password"
                        required=""
                      />
                    </div>
                  </div>
                  <!--end col-->
                  <div class="col-md-12">
                    <div class="mb-3">
                      <label class="form-label"
                        >Location<span class="text-danger">*</span></label
                      >
                      <input
                        type="text"
                        v-model="newUserParams.location"
                        class="form-control"
                        placeholder="Location"
                        required=""
                      />
                    </div>
                  </div>
                  <!--end col-->
                  <div class="col-md-12">
                    <div class="mb-3">
                      <label class="form-label"
                        >Image<span class="text-danger">*</span></label
                      >
                      <input
                        type="text"
                        v-model="newUserParams.image_url"
                        class="form-control"
                        placeholder="Image URL"
                        required=""
                      />
                    </div>
                  </div>
                  <!--end col-->
                  <div class="col-md-12">
                    <div class="mb-3">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label class="form-check-label" for="flexCheckDefault"
                          >I Accept
                          <a href="#" class="text-primary"
                            >Terms And Condition</a
                          ></label
                        >
                      </div>
                    </div>
                  </div>
                  <!--end col-->
                  <div class="col-md-12">
                    <button type="submit" class="btn btn-primary w-100">
                      Signup
                    </button>
                  </div>
                  <!--end col-->
                  <div class="mx-auto">
                    <p class="mb-0 mt-4">
                      <small class="text-dark me-2"
                        >Already have an account ?</small
                      >
                      <router-link to="/login" class="text-dark fw-bold"
                        >Sign in</router-link
                      >
                    </p>
                  </div>
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
  </body>

  <!-- <div class="signup">
    <form v-on:submit.prevent="submit()">
      <h1>Signup</h1>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        <label>Name:</label>
        <input type="text" v-model="newUserParams.name" />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" v-model="newUserParams.email" />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" v-model="newUserParams.password" />
      </div>
      <div>
        <label>Password confirmation:</label>
        <input type="password" v-model="newUserParams.password_confirmation" />
      </div>
      <div>
        <label>Location:</label>
        <input type="text" v-model="newUserParams.location" />
      </div>
      <div>
        <label>Image URL:</label>
        <input type="text" v-model="newUserParams.image_url" />
      </div>
      <input type="submit" value="Signup" />
    </form>
  </div> -->
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newUserParams: {},
      errors: [],
    };
  },
  methods: {
    submit: function () {
      axios
        .post("/users", this.newUserParams)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/login");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
