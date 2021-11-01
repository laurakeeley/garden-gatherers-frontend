<template>
  <div class="users-show">
    <div>
      <h1>{{ user.name }}</h1>
      <div v-if="$parent.getUserId() == user.id">
        <button :to="`/users/${user.id}/edit`">Edit</button>
        <br />
        <button v-on:click="destroyUser()">Delete User</button>
      </div>
      <h3>{{ user.location }}</h3>
      <img v-bind:src="user.image_url" v-bind:alt="user.name" />
    </div>
    <div v-for="post in user.posts" v-bind:key="post.id">
      <h2>
        <router-link :to="`/posts/${post.id}`">{{ post.title }}</router-link>
      </h2>
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
  methods: {
    destroyUser: function () {
      axios.delete("/users/me").then((response) => {
        console.log(response.data);
        this.$router.push("/");
      });
    },
  },
};
</script>
