<template>
  <div class="users-show">
    <div>
      <h1>{{ user.name }}</h1>
      <!-- <router-link :to="`/posts/new`">New Post</router-link> -->
      <h3>{{ user.location }}</h3>
      <img v-bind:src="user.image_url" v-bind:alt="user.name" />
    </div>
    <div v-for="post in user.posts" v-bind:key="post.id">
      <h2>{{ post.title }}</h2>
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
      user: [],
    };
  },
  created: function () {
    axios.get("/users/" + this.$route.params.id).then((response) => {
      console.log("users show", response);
      this.user = response.data;
    });
  },
  methods: {},
};
</script>
