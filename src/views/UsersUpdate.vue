<template>
  <div class="users-update">
    <h1>Update User</h1>
    <form v-on:submit.prevent="updateUser(user)">
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      Name:
      <input type="text" v-model="user.name" />
      Location:
      <input type="text" v-model="user.location" />
      Image:
      <input type="text" v-model="user.image_url" />
      <input type="submit" value="Update" />
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      user: {},
      errors: [],
      editUserParams: {},
    };
  },
  created: function () {
    axios.get("/users/" + this.$route.params.id).then((response) => {
      console.log("users show", response);
      this.user = response.data;
    });
  },
  methods: {
    updateUser: function (user) {
      var editUserParams = user;
      axios
        .patch("/users/me", editUserParams)
        .then((response) => {
          console.log("users update", response);
          this.$router.push("/users/" + user.id);
        })
        .catch((error) => {
          console.log("users update error", error.response);
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
