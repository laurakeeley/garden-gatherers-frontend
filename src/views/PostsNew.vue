<template>
  <div class="posts-new">
    <h1>New Post</h1>

    <form v-on:submit.prevent="createPost()">
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      Title:
      <input type="text" v-model="newPostParams.title" />
      Image:
      <input type="text" v-model="newPostParams.image_url" />
      <select v-model="newPostParams.category_id">
        <!-- inline object literal -->
        <option
          v-for="category in categories"
          v-bind:key="category.id"
          v-bind:value="category.id"
        >
          {{ category.name }}
        </option>
      </select>
      <div id="froala-editor">
        <froala
          id="edit"
          tag="textarea"
          :config="config"
          v-model="newPostParams.body"
        ></froala>
      </div>
      <input type="submit" value="Create" />
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      newPostParams: {},
      errors: [],
      categories: [],
      config: {
        events: {
          "froalaEditor.initialized": function () {
            console.log("initialized");
          },
        },
      },
    };
  },
  created: function () {
    this.newPostParams.category_id = this.$route.query.category;
    axios.get("/categories/").then((response) => {
      console.log("categories index", response.data);
      this.categories = response.data;
    });
  },
  methods: {
    createPost: function () {
      axios
        .post("/posts", this.newPostParams)
        .then((response) => {
          console.log("posts create", response);
          this.$router.push("/");
        })
        .catch((error) => {
          console.log("posts create error", error.response);
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
