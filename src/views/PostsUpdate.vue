<template>
  <div class="posts-update">
    <h1>Update Post</h1>
    <form v-on:submit.prevent="updatePost(post)">
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      Title:
      <input type="text" v-model="post.title" />
      Body:
      <input type="text" v-model="post.body" />
      Image:
      <input type="text" v-model="post.image_url" />
      <input type="submit" value="Update" />
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      post: {},
      errors: [],
      editPostParams: {},
    };
  },
  created: function () {
    axios.get("/posts/" + this.$route.params.id).then((response) => {
      console.log("posts show", response);
      this.post = response.data;
    });
  },
  methods: {
    updatePost: function (post) {
      var editPostParams = post;
      axios
        .patch("/posts/" + this.$route.params.id, editPostParams)
        .then((response) => {
          console.log("posts update", response);
          this.$router.push("/posts/" + post.id);
        })
        .catch((error) => {
          console.log("posts update error", error.response);
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
