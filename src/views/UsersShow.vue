<template>
  <div class="users-show">
    <!-- Hero Start -->
    <section
      class="bg-profile bg-light d-table w-100"
      style="background: url('/images/bg-profile.jpg') center center"
    >
      <div class="profile-overlay"></div>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-12">
            <div class="profile">
              <div class="row align-items-center">
                <div class="col-lg-2 col-md-3 text-md-start text-center">
                  <img
                    v-bind:src="user.image_url"
                    v-bind:alt="user.name"
                    class="img-fluid shadow mx-auto d-block rounded-pill"
                  />
                </div>
                <!--end col-->
                <div class="col-lg-10 col-md-9">
                  <div class="row align-items-center">
                    <div
                      class="col-md-8 text-md-start text-center mt-4 mt-sm-0"
                    >
                      <h3 class="title mb-0">{{ user.name }}</h3>
                      <small class="text-warning h6"
                        ><a
                          href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin"
                          class="video-play-icon h6 text-warning googlemap"
                          ><i class="mdi mdi-map-marker"></i>
                          {{ user.location }}</a
                        ></small
                      >
                      <div class="row">
                        <div v-if="$parent.getUserId() == user.id">
                          <router-link
                            :to="`/users/${user.id}/edit`"
                            class="btn btn-outline-primary btn-md"
                            >Edit</router-link
                          >
                          <button
                            v-on:click="destroyUser()"
                            class="btn btn-outline-danger btn-md"
                          >
                            Delete User
                          </button>
                        </div>
                      </div>
                    </div>
                    <!--end col-->
                  </div>
                  <!--end row-->
                </div>
                <!--end col-->
              </div>
              <!--end row-->
            </div>
            <!--end profile-->
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->
    </section>
    <!--end section-->
    <!-- Hero End -->

    <!-- Post Start -->
    <div class="row">
      <div class="col-12 mt-4 pt-2">
        <div
          v-for="post in filterBy(user.posts, postAttribute)"
          v-bind:key="post.id"
          class="profile-post rounded border position-relative overflow-hidden"
        >
          <div class="author d-flex bg-light p-3">
            <img
              v-bind:src="user.image_url"
              v-bind:alt="user.name"
              class="img-fluid avatar avatar-small rounded-pill me-3 shadow"
            />
            <div class="author mt-2 pt-1">
              <h6 class="mb-0">
                <a href="javascript:void(0)" class="text-dark">{{
                  user.name
                }}</a>
              </h6>
              <small class="text-muted"
                >Created: {{ calendarDate(post.created_at) }}</small
              >
              <br />
              <small
                v-if="post.created_at != post.updated_at"
                class="text-muted"
                >Updated {{ relativeDate(post.updated_at) }}</small
              >
            </div>
          </div>
          <div class="p-3">
            <h2>
              <router-link :to="`/posts/${post.id}`">{{
                post.title
              }}</router-link>
            </h2>
            <p v-html="post.body" class="text-muted mb-0"></p>
          </div>

          <div class="p-3">
            <span class="float-end"
              ><router-link
                :to="`/posts/${post.id}`"
                class="text-muted comments"
                ><i class="mdi mdi-comment-outline"></i>Comments</router-link
              ></span
            >
          </div>
        </div>
      </div>
      <!--end col-->
    </div>
    <!--end row-->

    <div>
      <div v-if="$parent.getUserId() == user.id">
        <button :to="`/users/${user.id}/edit`">Edit</button>
        <br />
        <button v-on:click="destroyUser()">Delete User</button>
      </div>
    </div>
    <div>Search: <input type="text" v-model="postAttribute" /></div>
    <div
      v-for="post in filterBy(user.posts, postAttribute)"
      v-bind:key="post.id"
    >
      <h2>
        <router-link :to="`/posts/${post.id}`">{{ post.title }}</router-link>
      </h2>
      <p>{{ post.body }}</p>
      <!-- <p>Category: {{ post.category.title }}</p> -->
      <img v-bind:src="post.image_url" v-bind:alt="post.title" />
      <p>Created: {{ calendarDate(post.created_at) }}</p>
      <p>Updated: {{ relativeDate(post.updated_at) }}</p>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
import Vue2Filters from "vue2-filters";
import dayjs from "dayjs";

export default {
  mixins: [Vue2Filters.mixin],
  data: function () {
    return {
      user: [],
      postAttribute: "",
    };
  },
  created: function () {
    axios.get("/users/" + this.$route.params.id).then((response) => {
      console.log("users show", response);
      this.user = response.data;
    });
  },
  methods: {
    relativeDate: function (updated_at) {
      return dayjs(updated_at).fromNow();
    },
    calendarDate: function (created_at) {
      return dayjs(created_at).calendar();
    },
    destroyUser: function () {
      axios.delete("/users/me").then((response) => {
        console.log(response.data);
        this.$router.push("/");
      });
    },
  },
};
</script>
