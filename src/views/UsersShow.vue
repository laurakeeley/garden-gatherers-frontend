<template>
  <div class="users-show">
    <!-- Hero Start -->
    <section
      class="bg-profile bg-light d-table w-100"
      style="background: url('/images/flowers zoomed.jpg') center center"
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
                      <h2 class="title mb-0">{{ user.name }}</h2>
                      <small class="text-secondary h6 mb-2"
                        ><a
                          href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin"
                          class="video-play-icon h6 text-secondary googlemap"
                          ><i class="mdi mdi-map-marker"></i>
                          {{ user.location }}</a
                        ></small
                      >

                      <div v-if="$parent.getUserId() == user.id" class="row">
                        <ul
                          class="
                            col
                            container-filter
                            categories-filter
                            list-unstyled
                            mb-0
                          "
                          id="filter"
                        >
                          <li class="list-inline-item">
                            <router-link
                              :to="`/users/${user.id}/edit`"
                              class="
                                categories-name
                                tab-active
                                border
                                d-block
                                text-dark
                                rounded
                                mx-1
                                px-3
                              "
                              >Edit</router-link
                            >
                          </li>
                          <li class="list-inline-item">
                            <router-link
                              to="/"
                              class="
                                categories-name
                                tab-active
                                border
                                d-block
                                text-dark
                                rounded
                                mx-1
                                px-3
                              "
                              v-on:click="destroyUser()"
                              >Delete</router-link
                            >
                          </li>
                        </ul>
                      </div>
                      <!--end row-->
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

    <section class="section">
      <div class="container">
        <!-- SEARCH -->
        <div class="widget mb-4 pb-2">
          <div class="row">
            <div id="search2" class="col-md-4">
              <form role="search" method="get" id="searchform">
                <div>
                  <input
                    type="text"
                    v-model="postAttribute"
                    class="form-control"
                    name="s"
                    id="s"
                    placeholder="Search Posts..."
                  />
                  <ul
                    class="
                      col
                      container-filter
                      categories-filter
                      list-unstyled
                      mb-0
                      mt-1
                    "
                    id="filter"
                  >
                    <li class="list-inline-item">
                      <a
                        class="
                          categories-name
                          tab-active
                          border
                          d-block
                          text-dark
                          rounded
                          mx-1
                          px-3
                          active
                        "
                        type="submit"
                        id="searchsubmit"
                        >Search</a
                      >
                    </li>
                  </ul>
                </div>
              </form>
            </div>
          </div>
        </div>
        <!-- SEARCH -->
        <div class="row">
          <router-link
            :to="`/posts/${post.id}`"
            v-for="post in filterBy(user.posts, postAttribute)"
            v-bind:key="post.id"
            class="col-lg-3 col-md-6"
          >
            <div class="feature p-4 shadow rounded text-center">
              <img
                v-bind:src="post.image_url"
                v-bind:alt="post.title"
                class="img-fluid rounded-top"
              />
              <div class="content">
                <h4 class="title mt-3">{{ post.title }}</h4>
                <p
                  v-html="`${post.body.slice(0, 100)}...`"
                  key=""
                  class="text-muted mt-2 mb-0"
                ></p>
              </div>
            </div>
          </router-link>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->
    </section>
    <!--end section-->

    <!-- <div>
      <div v-if="$parent.getUserId() == user.id">
        <button :to="`/users/${user.id}/edit`">Edit</button>
        <br />
        <button v-on:click="destroyUser()">Delete User</button>
      </div>
    </div> -->
    <!-- <div>Search: <input type="text" v-model="postAttribute" /></div>
    <div
      v-for="post in filterBy(user.posts, postAttribute)"
      v-bind:key="post.id"
    >
      <h2>
        <router-link :to="`/posts/${post.id}`">{{ post.title }}</router-link>
      </h2>
      <p>{{ post.body }}</p> -->
    <!-- <p>Category: {{ post.category.title }}</p> -->
    <!-- <img v-bind:src="post.image_url" v-bind:alt="post.title" />
      <p>Created: {{ calendarDate(post.created_at) }}</p>
      <p>Updated: {{ relativeDate(post.updated_at) }}</p>
    </div> -->
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
