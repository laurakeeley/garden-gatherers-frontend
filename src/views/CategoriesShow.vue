<template>
  <div class="categories-show">
    <h1>{{ category.name }}</h1>
    <router-link :to="`/posts/new?category=${category.id}`"
      >New Post</router-link
    >
    <!-- <button v-on:click="newPost()">New Post</button> -->

    <div v-for="post in category.posts" v-bind:key="post.id">
      <h2>
        <router-link :to="`/posts/${post.id}`">{{ post.title }}</router-link>
      </h2>
      <p>Author:</p>
      <router-link :to="`/users/${post.user.id}`">{{
        post.user.name
      }}</router-link>
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

export default {
  data: function () {
    return {
      category: [],
    };
  },
  created: function () {
    axios.get("/categories/" + this.$route.params.id).then((response) => {
      console.log("categories show", response.data);
      this.category = response.data;
    });
  },
  methods: {},
};
</script>
