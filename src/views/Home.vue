<template>
  <div class="home">
    <div>
      Search: <input type="text" v-model="sortAttribute" list="posts" />
    </div>
    <div v-for="post in filterBy(posts, postAttribute)" v-bind:key="post.id">
      <h2>
        <router-link :to="`/posts/${post.id}`">{{ post.title }}</router-link>
      </h2>
      <p>Author:</p>
      <router-link :to="`/users/${post.user.id}`">{{
        post.user.name
      }}</router-link>
      <p>Category: {{ post.category.name }}</p>
      <p>{{ post.body }}</p>
      <img v-bind:src="post.image_url" v-bind:alt="post.title" />
      <p>{{ post.created_at }}</p>
      <p>{{ post.updated_at }}</p>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
import Vue2Filters from "vue2-filters";

export default {
  mixins: [Vue2Filters.mixin],
  data: function () {
    return {
      posts: [],
      postAttribute: "",
    };
  },
  created: function () {
    this.indexPosts();
  },
  methods: {
    indexPosts: function () {
      axios.get("/posts").then((response) => {
        console.log("posts index", response);
        this.posts = response.data;
      });
    },
  },
};
</script>
