<template>
  <div class="categories-show">
    <!-- Start Blog -->
    <section class="section">
      <h1>{{ category.name }}</h1>
      <div class="container">
        <!-- SEARCH -->
        <div class="widget mb-4 pb-2">
          <div id="search2" class="widget-search mb-0">
            <form role="search" method="get" id="searchform" class="searchform">
              <div>
                <input
                  type="text"
                  v-model="postAttribute"
                  class="border rounded"
                  name="s"
                  id="s"
                  placeholder="Search Keywords..."
                />
                <input type="submit" id="searchsubmit" value="Search" />
              </div>
            </form>
          </div>
        </div>
        <!-- SEARCH -->
        <div class="row">
          <div
            v-for="post in filterBy(category.posts, postAttribute)"
            v-bind:key="post.id"
            class="col-lg-4 col-md-6 mb-4 pb-2"
          >
            <div class="card blog-post rounded border-0 shadow">
              <div class="blog-img d-block overflow-hidden position-relative">
                <img
                  v-bind:src="post.image_url"
                  v-bind:alt="post.title"
                  class="img-fluid rounded-top"
                />
                <div class="overlay rounded-top bg-dark"></div>
                <div class="post-meta">
                  <router-link
                    :to="`/posts/${post.id}`"
                    class="text-light read-more"
                    >Read More <i class="mdi mdi-chevron-right"></i
                  ></router-link>
                </div>
              </div>
              <div class="content p-3">
                <small class="text-muted p float-end">{{
                  calendarDate(post.created_at)
                }}</small>
                <!-- <small
                  ><a href="javascript:void(0)" class="text-primary">{{
                    post.category.name
                  }}</a></small
                > -->
                <h4 class="mt-2">
                  <router-link
                    :to="`/posts/${post.id}`"
                    class="text-dark title"
                    >{{ post.title }}</router-link
                  >
                </h4>
                <div v-html="post.body" class="text-muted mt-2"></div>
                <div class="pt-3 mt-3 border-top d-flex">
                  <img
                    v-bind:src="post.user.image_url"
                    v-bind:alt="post.user.name"
                    class="
                      img-fluid
                      avatar avatar-ex-sm
                      rounded-pill
                      me-3
                      shadow
                    "
                  />
                  <div class="author mt-2">
                    <h6 class="mb-0">
                      <router-link
                        :to="`/users/${post.user.id}`"
                        class="text-dark name"
                        >{{ post.user.name }}</router-link
                      >
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <!--end blog post-->
          </div>
          <!--end col-->
        </div>
        <!--end row-->

        <div class="row text-center">
          <div class="col-12">
            <ul class="pagination justify-content-center mb-0 list-unstyled">
              <li><a href="#" class="pe-3 ps-3 pt-2 pb-2 border"> Prev</a></li>
              <li class="active">
                <a href="#" class="pe-3 ps-3 pt-2 pb-2 border">1</a>
              </li>
              <li><a href="#" class="pe-3 ps-3 pt-2 pb-2 border">2</a></li>
              <li><a href="#" class="pe-3 ps-3 pt-2 pb-2 border">3</a></li>
              <li><a href="#" class="pe-3 ps-3 pt-2 pb-2 border">4</a></li>
              <li><a href="#" class="pe-3 ps-3 pt-2 pb-2 border">Next </a></li>
            </ul>
            <!--end pagination-->
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->
    </section>
    <!--end section-->
    <!-- End Blog -->

    <!-- <div>Search: <input type="text" v-model="postAttribute" /></div> -->
    <!-- <router-link :to="`/posts/new?category=${category.id}`"
      >New Post</router-link
    > -->

    <!-- <div
      v-for="post in filterBy(category.posts, postAttribute)"
      v-bind:key="post.id"
    > -->
    <!-- <h2>
        <router-link :to="`/posts/${post.id}`">{{ post.title }}</router-link>
      </h2>
      <p>Author:</p>
      <router-link :to="`/users/${post.user.id}`">{{
        post.user.name
      }}</router-link>
      <p>{{ post.body }}</p> -->
    <!-- <img v-bind:src="post.image_url" v-bind:alt="post.title" /> -->
    <!-- <p>Created: {{ calendarDate(post.created_at) }}</p>
      <p>Updated: {{ relativeDate(post.updated_at) }}</p>
    </div> -->
  </div>
</template>

<style></style>

<script>
import axios from "axios";
import Vue2Filters from "vue2-filters";
import dayjs from "dayjs";

var relativeTime = require("dayjs/plugin/relativeTime");
dayjs.extend(relativeTime);

var calendar = require("dayjs/plugin/calendar");
dayjs.extend(calendar);

export default {
  mixins: [Vue2Filters.mixin],
  data: function () {
    return {
      category: [],
      postAttribute: "",
    };
  },
  created: function () {
    axios.get("/categories/" + this.$route.params.id).then((response) => {
      console.log("categories show", response.data);
      this.category = response.data;
    });
  },
  methods: {
    relativeDate: function (updated_at) {
      return dayjs(updated_at).fromNow();
    },
    calendarDate: function (created_at) {
      return dayjs(created_at).calendar();
    },
  },
};
</script>
