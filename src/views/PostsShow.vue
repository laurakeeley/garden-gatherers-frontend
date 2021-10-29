<template>
  <div class="posts-show">
    <h2>{{ post.title }}</h2>
    <p>{{ post.body }}</p>
    <img v-bind:src="post.image_url" v-bind:alt="post.title" />
    <p>{{ post.created_at }}</p>
    <p>{{ post.updated_at }}</p>
  </div>
</template>

<style></style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      post: [],
    };
  },
  created: function () {
    axios.get("/posts/" + this.$route.params.id).then((response) => {
      console.log("posts show", response);
      this.post = response.data;
    });
  },
  methods: {},
};
</script>
