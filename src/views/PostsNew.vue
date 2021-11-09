<template>
  <div class="posts-new">
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
                <h4 class="title">Create Post</h4>
                <p class="text-muted mb-0"></p>
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
                    to="/posts"
                    class="text-uppercase fw-bold text-dark"
                    >Posts</router-link
                  >
                </li>
                <li class="list-inline-item">
                  <span class="text-uppercase text-primary fw-bold"
                    >New Post</span
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
                  v-on:submit.prevent="createPost()"
                  class="rounded shadow p-4"
                >
                  <div class="row">
                    <div class="col-md-6">
                      <div class="mb-3">
                        <label class="form-label"
                          >Title :<span class="text-danger">*</span></label
                        >
                        <input
                          v-model="newPostParams.title"
                          name="name"
                          id="name"
                          type="text"
                          class="form-control"
                          placeholder="Post Title"
                        />
                      </div>
                      <div class="mb-3">
                        <label class="form-label">Category :</label>
                        <select
                          v-model="newPostParams.category_id"
                          class="form-select mt-2"
                          aria-label="Default select example"
                        >
                          <option
                            v-for="category in categories"
                            v-bind:key="category.id"
                            v-bind:value="category.id"
                            selected
                          >
                            {{ category.name }}
                          </option>
                        </select>
                      </div>
                    </div>
                    <!--end col-->
                  </div>
                  <div class="row">
                    <div class="mb-3">
                      <div id="froala-editor">
                        <froala
                          id="edit"
                          tag="textarea"
                          :config="config"
                          v-model="newPostParams.body"
                        ></froala>
                      </div>
                    </div>
                  </div>
                  <!--end row-->
                  <div class="row">
                    <div class="col-sm-12">
                      <input
                        type="submit"
                        id="submit"
                        name="send"
                        class="submitBnt btn btn-primary"
                        value="Create"
                      />
                      <ul>
                        <li v-for="error in errors" v-bind:key="error">
                          {{ error }}
                        </li>
                      </ul>
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
    <!-- <h1>New Post</h1> -->

    <!-- <form v-on:submit.prevent="createPost()">
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      Title:
      <input type="text" v-model="newPostParams.title" />
      Image:
      <input type="text" v-model="newPostParams.image_url" />
      <select v-model="newPostParams.category_id"> -->
    <!-- inline object literal -->
    <!-- <option
          v-for="category in categories"
          v-bind:key="category.id"
          v-bind:value="category.id"
        >
          {{ category.name }}
        </option>
      </select>
      <div id="froala-editor">
        <froala
          id="edit"
          tag="textarea"
          :config="config"
          v-model="newPostParams.body"
        ></froala>
      </div>
      <input type="submit" value="Create" />
    </form> -->
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      newPostParams: {},
      errors: [],
      categories: [],
      config: {
        events: {
          "froalaEditor.initialized": function () {
            console.log("initialized");
          },
        },
      },
    };
  },
  created: function () {
    this.newPostParams.category_id = this.$route.query.category;
    axios.get("/categories/").then((response) => {
      console.log("categories index", response.data);
      this.categories = response.data;
    });
  },
  methods: {
    createPost: function () {
      axios
        .post("/posts", this.newPostParams)
        .then((response) => {
          console.log("posts create", response);
          this.$router.push("/");
        })
        .catch((error) => {
          console.log("posts create error", error.response);
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
