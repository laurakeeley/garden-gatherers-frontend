<template>
  <div class="posts-show">
    <div>
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
      <img v-bind:src="post.image_url" v-bind:alt="post.title" />
      <p>{{ post.created_at }}</p>
      <p>{{ post.updated_at }}</p>
    </div>
    <h3>Comments</h3>
    <div>
      <form v-on:submit.prevent="create_comment()">
        <ul>
          <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
        </ul>
        <div>
          <input type="body" v-model="newCommentParams.body" />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>

    <div v-for="comment in post.comments" v-bind:key="comment.id">
      <p>{{ comment.body }}</p>
      <p>{{ comment.image_url }}</p>
      <p>{{ comment.created_at }}</p>
      <p>{{ comment.updated_at }}</p>
      <p>{{ comment.user.name }}</p>
      <p>{{ comment.user.location }}</p>
      <img v-bind:src="comment.user.image_url" v-bind:alt="comment.user" />
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      post: [],
      errors: [],
      newCommentParams: {},
    };
  },
  created: function () {
    axios.get("/posts/" + this.$route.params.id).then((response) => {
      console.log("posts show", response);
      this.post = response.data;
    });
  },
  methods: {
    create_comment: function () {
      axios
        .post("/comments/new", this.newCommentParams)
        .then((response) => {
          console.log("new comment", response.data);
        })
        .catch((error) => {
          this.status = error.response.status;
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
