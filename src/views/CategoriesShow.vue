<template>
  <div class="categories-show">
    <h1>{{ category.name }}</h1>
    <div>Search: <input type="text" v-model="postAttribute" /></div>
    <router-link :to="`/posts/new?category=${category.id}`"
      >New Post</router-link
    >
    <!-- <button v-on:click="newPost()">New Post</button> -->

    <div
      v-for="post in filterBy(category.posts, postAttribute)"
      v-bind:key="post.id"
    >
      <h2>
        <router-link :to="`/posts/${post.id}`">{{ post.title }}</router-link>
      </h2>
      <p>Author:</p>
      <router-link :to="`/users/${post.user.id}`">{{
        post.user.name
      }}</router-link>
      <p>{{ post.body }}</p>
      <img v-bind:src="post.image_url" v-bind:alt="post.title" />
      <p>Created: {{ calendarDate(post.created_at) }}</p>
      <p>Updated: {{ relativeDate(post.updated_at) }}</p>
    </div>
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
