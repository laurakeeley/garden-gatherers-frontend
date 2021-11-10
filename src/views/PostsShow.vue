<template>
  <div class="posts-show">
    <!-- Hero Start -->
    <section class="bg-half-170 pb-0 d-table w-100">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <img
              v-bind:src="post.image_url"
              v-bind:alt="post.title"
              class="img-fluid rounded"
            />
          </div>
          <!--end col-->

          <div class="col-lg-6 mt-4 pt-2">
            <div class="title-heading ms-lg-4">
              <ul class="list-unstyled">
                <li class="list-inline-item h6 user text-muted me-2">
                  <i class="mdi mdi-sprout"></i>
                  <router-link
                    :to="`/categories/${post.category.id}`"
                    class="text-primary"
                    >{{ post.category.name }}</router-link
                  >
                </li>
                <li class="list-inline-item h6 date text-muted">
                  <i class="mdi mdi-calendar-check"></i
                  >{{ calendarDate(post.created_at) }}
                </li>
              </ul>
              <h2>
                <a class="text-dark">{{ post.title }}</a>
              </h2>
              <div v-if="$parent.getUserId() == post.user.id">
                <ul
                  class="
                    col
                    container-filter
                    categories-filter
                    list-unstyled
                    mb-0
                  "
                  id="filter"
                >
                  <li class="list-inline-item">
                    <router-link
                      :to="`/posts/${post.id}/edit`"
                      class="
                        categories-name
                        tab-active
                        border
                        d-block
                        text-dark
                        rounded
                        mx-1
                        px-3
                      "
                      >Edit</router-link
                    >
                  </li>
                  <li class="list-inline-item">
                    <router-link
                      to="/"
                      class="
                        categories-name
                        tab-active
                        border
                        d-block
                        text-dark
                        rounded
                        mx-1
                        px-3
                      "
                      v-on:click="destroyPost()"
                      >Delete</router-link
                    >
                  </li>
                </ul>
              </div>
              <!--end row-->
              <!-- <div class="row">
                <div v-if="$parent.getUserId() == post.user.id">
                  <router-link
                    :to="`/posts/${post.id}/edit`"
                    class="btn btn-outline-primary"
                    >Edit</router-link
                  >
                  <button
                    v-on:click="destroyPost()"
                    class="btn btn-outline-danger"
                  >
                    Delete Post
                  </button>
                </div>
              </div> -->

              <div class="mt-4">
                <div class="d-flex">
                  <img
                    v-bind:src="post.user.image_url"
                    v-bind:alt="post.user.name"
                    class="
                      img-fluid
                      avatar avatar-ex-sm
                      rounded-pill
                      me-3
                      shadow
                    "
                  />
                  <div class="author mt-2">
                    <h6 class="mb-0">
                      <router-link
                        :to="`/users/${post.user.id}`"
                        class="text-dark name"
                        >{{ post.user.name }}</router-link
                      >
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->
    </section>
    <!--end section-->
    <!-- Hero End -->
    <!-- Start  -->
    <section class="section-two">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-12">
            <div class="border rounded position-relative overflow-hidden">
              <div class="p-4 text-center bg-light">
                <div class="row align-items-center">
                  <div class="col-sm-6">
                    <ul class="mb-0 text-sm-start list-inline">
                      <li class="list-inline-item">
                        <a href="javascript:void(0)" class="text-dark"
                          ><i
                            class="mdi mdi-comment-outline text-primary me-2"
                          ></i
                          >{{ post.comments.length }} Comments</a
                        >
                      </li>
                    </ul>
                  </div>
                  <!--end col-->
                </div>
              </div>
              <div class="p-4">
                <p v-html="post.body" class="text-muted"></p>
              </div>
            </div>
          </div>
          <!--end col-->
        </div>
        <!--end row-->

        <div class="row">
          <div class="col-lg-12 mt-4 pt-2">
            <!--end row-->

            <!-- Leave Comments Start -->
            <div v-if="$parent.isLoggedIn()" class="row">
              <div class="col-12 mt-4 pt-2">
                <div class="section-title">
                  <h5 class="mb-0">Leave A Comment :</h5>
                  <ul>
                    <li v-for="error in errors" v-bind:key="error">
                      {{ error }}
                    </li>
                  </ul>
                </div>
              </div>
              <!--end col-->
            </div>
            <!--end row-->

            <div v-if="$parent.isLoggedIn()" class="row">
              <div class="col-12 mt-4 pt-2">
                <form
                  v-on:submit.prevent="createComment()"
                  class="p-4 shadow rounded"
                >
                  <div class="row">
                    <div class="col-md-12">
                      <div class="mb-3">
                        <label class="form-label">Your Comment</label>
                        <textarea
                          id="message"
                          v-model="newCommentParams.body"
                          placeholder="Your Comment"
                          rows="5"
                          name="message"
                          class="form-control"
                          required=""
                        ></textarea>
                      </div>
                    </div>
                    <!--end col-->

                    <div class="col-md-12">
                      <div class="send d-grid">
                        <button type="submit" class="btn btn-primary">
                          Send Comment
                        </button>
                      </div>
                    </div>
                    <!--end col-->
                  </div>
                  <!--end row-->
                </form>
                <!--end form-->
              </div>
              <!--end col-->
            </div>
            <!--end row-->
            <!-- Leave Comments End -->

            <!-- Comments Start -->
            <div class="row">
              <div class="col-12 mt-4 pt-2">
                <div class="section-title">
                  <h5 class="mb-0">Comments :</h5>
                </div>
              </div>
              <!--end col-->
            </div>
            <!--end row-->

            <div class="row">
              <div
                v-for="comment in post.comments"
                v-bind:key="comment.id"
                class="col-12 mt-4 pt-2"
              >
                <div class="p-4 shadow rounded">
                  <ul class="media-list list-unstyled mb-0">
                    <li class="comment-desk">
                      <a
                        v-if="$parent.getUserId() == comment.user.id"
                        v-on:click="destroyComment(comment)"
                        class="float-end text-muted"
                        >&nbsp; Delete</a
                      >
                      <a
                        v-if="$parent.getUserId() == comment.user.id"
                        v-on:click="editComment(comment)"
                        data-bs-toggle="modal"
                        data-bs-target="#comment-details"
                        class="float-end text-muted"
                        >&nbsp; Edit</a
                      >

                      <div class="commentor">
                        <a class="float-start pe-3" href="#">
                          <img
                            v-bind:src="comment.user.image_url"
                            v-bind:alt="comment.user"
                            class="img-fluid avatar avatar-small rounded-pill"
                          />
                        </a>
                        <div class="overflow-hidden d-block">
                          <h4 class="media-heading mb-0">
                            <router-link
                              :to="`/users/${comment.user.id}`"
                              class="text-dark"
                              >{{ comment.user.name }}</router-link
                            >
                          </h4>
                          <small class="text-muted">{{
                            comment.user.location
                          }}</small>
                          <br />
                          <small class="text-muted">{{
                            calendarDate(comment.created_at)
                          }}</small>
                        </div>
                      </div>
                      <div class="mt-3">
                        <p class="text-muted fst-italic p-3 bg-light rounded">
                          {{ comment.body }}
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <!-- Comments End -->
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->
    </section>
    <!--end section-->

    <!-- <div>
      <h2>{{ post.title }}</h2>
      <br />

      <p>Author:</p>
      <router-link :to="`/users/${post.user.id}`">{{
        post.user.name
      }}</router-link>
      <p>Category: {{ post.category.name }}</p>
      <div v-if="$parent.getUserId() == post.user.id">
        <router-link :to="`/posts/${post.id}/edit`">Edit</router-link>
        <br />
        <button v-on:click="destroyPost()">Delete Post</button>
      </div>
      <img v-bind:src="post.image_url" v-bind:alt="post.title" />
      <div v-html="post.body"></div>
      <p>Created: {{ calendarDate(post.created_at) }}</p>
      <p>Updated: {{ relativeDate(post.updated_at) }}</p>
    </div> -->
    <!-- <h3>Comments</h3>
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
    </div> -->
    <div
      class="modal fade"
      id="comment-details"
      tabindex="-1"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content video-modal rounded overflow-hidden">
          <div class="ratio ratio-16x9">
            <div class="row">
              <div class="col-12 mt-4 pt-2">
                <form class="p-4 shadow rounded">
                  <div class="row">
                    <div class="col-md-12">
                      <div class="mb-3">
                        <label class="form-label">Edit Comment</label>
                        <textarea
                          id="message"
                          v-model="currentComment.body"
                          rows="5"
                          name="message"
                          class="form-control"
                          required=""
                        ></textarea>
                      </div>
                    </div>
                    <!--end col-->

                    <div class="col-md-12">
                      <div class="mb-3">
                        <label class="form-label">Image</label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          v-model="currentComment.image_url"
                          class="form-control"
                        />
                      </div>
                    </div>
                    <!--end col-->

                    <!--end col-->

                    <div class="col-md-12">
                      <div class="send d-grid">
                        <button
                          v-on:click="updateComment(currentComment)"
                          class="btn btn-primary"
                        >
                          Update Comment
                        </button>
                      </div>
                    </div>
                    <!--end col-->
                  </div>
                  <!--end row-->
                </form>
                <!--end form-->
              </div>
              <!--end col-->
            </div>
          </div>
          <!--If you want to use the Vimeo link please try the above code-->
        </div>
      </div>
    </div>
    <!-- <dialog id="comment-details">
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
    </dialog> -->
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
          this.post.comments.unshift(response.data);
          this.newCommentParams = "";
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
        var index = this.post.comments.indexOf(comment);
        this.post.comments.splice(index, 1);
      });
    },
  },
};
</script>
