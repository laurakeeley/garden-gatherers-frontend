<template>
  <div class="users-update">
    <!-- Hero Start -->
    <section
      class="bg-half-170 bg-light d-table w-100"
      style="background: url('images/bg.jpg') center center"
    >
      <div class="bg-overlay bg-overlay-white"></div>
      <div class="container">
        <div class="row mt-5 text-center align-items-center">
          <div class="col-sm-6">
            <div class="text-sm-start">
              <div class="page-next-level">
                <h4 class="title">Update User</h4>
                <p class="text-muted mb-0">Update user info here.</p>
              </div>
            </div>
          </div>
          <!--end col-->

          <div class="col-sm-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
            <div class="page-next-level text-sm-end">
              <ul class="page-next ps-0 mb-0">
                <li class="list-inline-item">
                  <router-link to="/" class="text-uppercase fw-bold text-dark"
                    >Home</router-link
                  >
                </li>
                <li class="list-inline-item">
                  <router-link
                    to="/users/me"
                    class="text-uppercase fw-bold text-dark"
                    >My Profile</router-link
                  >
                </li>
                <li class="list-inline-item">
                  <span class="text-uppercase text-primary fw-bold"
                    >User Edit</span
                  >
                </li>
              </ul>
            </div>
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->
    </section>
    <!--end section-->
    <div class="position-relative">
      <div class="shape overflow-hidden text-white">
        <svg
          viewBox="0 0 2880 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </div>
    <!-- Hero End -->

    <!-- Job Detail Start -->
    <section class="section">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-10 col-md-7">
            <div class="card custom-form border-0">
              <div class="card-body p-0">
                <form
                  v-on:submit.prevent="updateUser(user)"
                  class="rounded shadow p-4"
                >
                  <div class="row">
                    <div class="col-md-6">
                      <div class="mb-3">
                        <label class="form-label"
                          >Your Name :<span class="text-danger">*</span></label
                        >
                        <input
                          v-model="user.name"
                          name="name"
                          id="name"
                          type="text"
                          class="form-control"
                          placeholder="Name :"
                        />
                      </div>
                    </div>
                    <!--end col-->
                    <div class="col-md-6">
                      <div class="mb-3">
                        <label class="form-label"
                          >Your Location :<span class="text-danger"
                            >*</span
                          ></label
                        >
                        <input
                          v-model="user.location"
                          name="location"
                          id="location"
                          type="text"
                          class="form-control"
                          placeholder="Your location :"
                        />
                      </div>
                    </div>
                    <!--end col-->
                    <div class="col-md-6">
                      <div class="mb-3">
                        <label class="form-label"
                          >Image URL :<span class="text-danger">*</span></label
                        >
                        <input
                          v-model="user.image_url"
                          name="image_url"
                          id="image_url"
                          type="text"
                          class="form-control"
                          placeholder="Image URL :"
                        />
                      </div>
                    </div>
                    <!--end col-->
                  </div>
                  <!--end row-->
                  <div class="row">
                    <div class="col-sm-12">
                      <input
                        type="submit"
                        id="submit"
                        name="send"
                        class="submitBnt btn btn-primary"
                        value="Update"
                      />
                    </div>
                    <!--end col-->
                  </div>
                  <!--end row-->
                </form>
                <!--end form-->
              </div>
            </div>
            <!--end custom-form-->
          </div>
        </div>
      </div>
      <!--end container-->
    </section>
    <!--end section-->
    <!-- Job Detail End -->
    <!-- <h1>Update User</h1>
    <form v-on:submit.prevent="updateUser(user)">
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      Name:
      <input type="text" v-model="user.name" />
      Location:
      <input type="text" v-model="user.location" />
      Image:
      <input type="text" v-model="user.image_url" />
      <input type="submit" value="Update" />
    </form> -->
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      user: {},
      errors: [],
      editUserParams: {},
    };
  },
  created: function () {
    axios.get("/users/" + this.$route.params.id).then((response) => {
      console.log("users show", response);
      this.user = response.data;
    });
  },
  methods: {
    updateUser: function (user) {
      var editUserParams = user;
      axios
        .patch("/users/me", editUserParams)
        .then((response) => {
          console.log("users update", response);
          this.$router.push("/users/" + user.id);
        })
        .catch((error) => {
          console.log("users update error", error.response);
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
