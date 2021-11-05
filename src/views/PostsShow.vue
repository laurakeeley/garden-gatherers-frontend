<template>
  <div class="posts-show">
    <div>
      <h2>{{ post.title }}</h2>
      <p>Author:</p>
      <router-link :to="`/users/${post.user.id}`">{{
        post.user.name
      }}</router-link>
      <p>Category: {{ post.category.name }}</p>
      <div v-if="$parent.getUserId() == post.user_id">
        <router-link :to="`/posts/${post.id}/edit`">Edit</router-link>
        <br />
        <button v-on:click="destroyPost()">Delete Post</button>
      </div>
      <img v-bind:src="post.image_url" v-bind:alt="post.title" />
      <div v-html="post.body"></div>
      <p>Created: {{ calendarDate(post.created_at) }}</p>
      <p>Updated: {{ relativeDate(post.updated_at) }}</p>
    </div>
    <h3>Comments</h3>
    <div>
      <form v-on:submit.prevent="createComment()">
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
      <router-link :to="`/users/${comment.user.id}`">{{
        comment.user.name
      }}</router-link>
      <p>{{ comment.user.location }}</p>
      <img v-bind:src="comment.user.image_url" v-bind:alt="comment.user" />
      <div v-if="$parent.getUserId() == comment.user.id">
        <button v-on:click="editComment(comment)">Edit</button>
        <br />
        <button v-on:click="destroyComment(comment)">Delete Comment</button>
      </div>
    </div>
    <dialog id="comment-details">
      <form method="dialog">
        <h1>Edit Comment</h1>
        <p>Body: <input type="text" v-model="currentComment.body" /></p>
        <p>
          Image Url:
          <input type="text" v-model="currentComment.image_url" />
        </p>
        <button v-on:click="updateComment(currentComment)">Update</button>
        <button>Close</button>
      </form>
    </dialog>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
import dayjs from "dayjs";

var relativeTime = require("dayjs/plugin/relativeTime");
dayjs.extend(relativeTime);

var calendar = require("dayjs/plugin/calendar");
dayjs.extend(calendar);

export default {
  data: function () {
    return {
      post: [],
      errors: [],
      newCommentParams: {
        post_id: this.$route.params.id,
      },
      currentComment: {},
      editCommentParams: {},
    };
  },
  created: function () {
    axios.get("/posts/" + this.$route.params.id).then((response) => {
      console.log("posts show", response.data);
      this.post = response.data;
    });
  },
  methods: {
    relativeDate: function (updated_at) {
      return dayjs(updated_at).fromNow();
    },
    calendarDate: function (created_at) {
      return dayjs(created_at).calendar();
    },
    createComment: function () {
      axios
        .post("/comments", this.newCommentParams)
        .then((response) => {
          console.log("new comment", response.data);
          this.post.comments.push(response.data);
        })
        .catch((error) => {
          this.status = error.response.status;
          this.errors = error.response.data.errors;
        });
    },
    editComment: function (comment) {
      console.log(comment);
      this.currentComment = comment;
      document.querySelector("#comment-details").showModal();
    },
    updateComment: function (comment) {
      var editCommentParams = comment;
      axios
        .patch("/comments/" + this.currentComment.id, editCommentParams)
        .then((response) => {
          console.log("comments update", response);
        })
        .catch((error) => {
          console.log("comments update error", error.response);
        });
    },
    destroyPost: function () {
      axios.delete("/posts/" + this.$route.params.id).then((response) => {
        console.log(response.data);
        this.$router.push("/");
      });
    },
    destroyComment: function (comment) {
      axios.delete("/comments/" + comment.id).then((response) => {
        console.log(response.data);
      });
    },
  },
};
</script>
