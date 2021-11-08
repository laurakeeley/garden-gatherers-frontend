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
                  <i class="mdi mdi-tag"></i>
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
                <a href="javascript:void(0)" class="text-dark">{{
                  post.title
                }}</a>
              </h2>
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
                          >3 Comments</a
                        >
                      </li>
                    </ul>
                  </div>
                  <!--end col-->

                  <div class="col-sm-6 mt-4 mt-sm-0">
                    <ul class="list-inline text-sm-end mb-0">
                      <li class="list-inline-item me-1 text-muted">Share :</li>
                      <li class="list-inline-item me-1">
                        <a href="javascript:void(0)" class="text-muted"
                          ><i class="mdi mdi-facebook"></i
                        ></a>
                      </li>
                      <li class="list-inline-item me-1">
                        <a href="javascript:void(0)" class="text-muted"
                          ><i class="mdi mdi-twitter"></i
                        ></a>
                      </li>
                      <li class="list-inline-item me-1">
                        <a href="javascript:void(0)" class="text-muted"
                          ><i class="mdi mdi-instagram"></i
                        ></a>
                      </li>
                      <li class="list-inline-item me-1">
                        <a href="javascript:void(0)" class="text-muted"
                          ><i class="mdi mdi-linkedin"></i
                        ></a>
                      </li>
                      <li class="list-inline-item">
                        <a href="javascript:void(0)" class="text-muted"
                          ><i class="mdi mdi-skype"></i
                        ></a>
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
          <div class="col-lg-8 mt-4 pt-2">
            <!-- Recent Post Start -->
            <div class="row">
              <div class="col-12">
                <div class="section-title">
                  <h5 class="mb-0">Related post or news :</h5>
                </div>
              </div>
              <!--end col-->
            </div>
            <!--end row-->

            <div class="row">
              <div class="col-md-6 mt-4 pt-2">
                <div class="card blog-post rounded border-0 shadow">
                  <div
                    class="blog-img d-block overflow-hidden position-relative"
                  >
                    <img
                      src="images/blog/02.jpg"
                      class="img-fluid rounded-top"
                      alt=""
                    />
                    <div class="overlay rounded-top bg-dark"></div>
                    <div class="post-meta">
                      <a
                        href="javascript:void(0)"
                        class="text-light d-block text-end like"
                        ><i class="mdi mdi-heart"></i> 33</a
                      >
                      <a href="javascript:void(0)" class="text-light read-more"
                        >Read More <i class="mdi mdi-chevron-right"></i
                      ></a>
                    </div>
                  </div>
                  <div class="content p-3">
                    <small class="text-muted p float-end">19th Oct, 19</small>
                    <small
                      ><a href="javascript:void(0)" class="text-primary"
                        >Event</a
                      ></small
                    >
                    <h4 class="mt-2">
                      <a href="javascript:void(0)" class="text-dark title"
                        >Become more money-minded</a
                      >
                    </h4>
                    <p class="text-muted mt-2">
                      There is now an abundance of readable dummy texts. These
                      are usually used when a text is required purely to fill a
                      space.
                    </p>
                    <div class="pt-3 mt-3 border-top d-flex">
                      <img
                        src="images/client/04.jpg"
                        class="
                          img-fluid
                          avatar avatar-ex-sm
                          rounded-pill
                          me-3
                          shadow
                        "
                        alt=""
                      />
                      <div class="author mt-2">
                        <h6 class="mb-0">
                          <a href="javascript:void(0)" class="text-dark name"
                            >Joya Aafri</a
                          >
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
                <!--end blog post-->
              </div>
              <!--end col-->

              <div class="col-md-6 mt-4 pt-2">
                <div class="card blog-post rounded border-0 shadow">
                  <div
                    class="blog-img d-block overflow-hidden position-relative"
                  >
                    <img
                      src="images/blog/03.jpg"
                      class="img-fluid rounded-top"
                      alt=""
                    />
                    <div class="overlay rounded-top bg-dark"></div>
                    <div class="post-meta">
                      <a
                        href="javascript:void(0)"
                        class="text-light d-block text-end like"
                        ><i class="mdi mdi-heart"></i> 33</a
                      >
                      <a href="javascript:void(0)" class="text-light read-more"
                        >Read More <i class="mdi mdi-chevron-right"></i
                      ></a>
                    </div>
                  </div>
                  <div class="content p-3">
                    <small class="text-muted p float-end">19th Oct, 19</small>
                    <small
                      ><a href="javascript:void(0)" class="text-primary"
                        >Software</a
                      ></small
                    >
                    <h4 class="mt-2">
                      <a href="javascript:void(0)" class="text-dark title"
                        >Quick guide on business with friends.</a
                      >
                    </h4>
                    <p class="text-muted mt-2">
                      There is now an abundance of readable dummy texts. These
                      are usually used when a text is required purely to fill a
                      space.
                    </p>
                    <div class="pt-3 mt-3 border-top d-flex">
                      <img
                        src="images/client/01.jpg"
                        class="
                          img-fluid
                          avatar avatar-ex-sm
                          rounded-pill
                          me-3
                          shadow
                        "
                        alt=""
                      />
                      <div class="author mt-2">
                        <h6 class="mb-0">
                          <a href="javascript:void(0)" class="text-dark name"
                            >Martin Sobhe</a
                          >
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
                <!--end blog post-->
              </div>
              <!--end col-->
            </div>
            <!--end row-->
            <!-- Recent Post Start -->

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
              <div class="col-12 mt-4 pt-2">
                <div class="p-4 shadow rounded">
                  <ul class="media-list list-unstyled mb-0">
                    <li class="comment-desk">
                      <a href="#" class="float-end text-muted"
                        ><i class="mdi mdi-reply"></i>&nbsp; Reply</a
                      >
                      <div class="commentor">
                        <a class="float-start pe-3" href="#">
                          <img
                            src="images/client/01.jpg"
                            class="img-fluid avatar avatar-small rounded-pill"
                            alt=""
                          />
                        </a>
                        <div class="overflow-hidden d-block">
                          <h4 class="media-heading mb-0">
                            <a href="javascript:void(0)" class="text-dark"
                              >Lorenzo Peterson</a
                            >
                          </h4>
                          <small class="text-muted"
                            >20th October, 2019 at 01:25 pm</small
                          >
                        </div>
                      </div>
                      <div class="mt-3">
                        <p class="text-muted fst-italic p-3 bg-light rounded">
                          " There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form, by injected humour "
                        </p>
                      </div>
                    </li>

                    <li class="comment-desk mt-4">
                      <a href="#" class="float-end text-muted"
                        ><i class="mdi mdi-reply"></i>&nbsp; Reply</a
                      >
                      <div class="commentor">
                        <a class="float-start pe-3" href="#">
                          <img
                            src="images/client/02.jpg"
                            class="img-fluid avatar avatar-small rounded-pill"
                            alt=""
                          />
                        </a>
                        <div class="overflow-hidden d-block">
                          <h4 class="media-heading mb-0">
                            <a href="javascript:void(0)" class="text-dark"
                              >Tammy Camacho</a
                            >
                          </h4>
                          <small class="text-muted"
                            >20th October, 2019 at 05:44 pm</small
                          >
                        </div>
                      </div>
                      <div class="mt-3">
                        <p class="text-muted fst-italic p-3 bg-light rounded">
                          " There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form, by injected humour "
                        </p>
                      </div>
                    </li>

                    <li class="comment-desk mt-4">
                      <a href="#" class="float-end text-muted"
                        ><i class="mdi mdi-reply"></i>&nbsp; Reply</a
                      >
                      <div class="commentor">
                        <a class="float-start pe-3" href="#">
                          <img
                            src="images/client/03.jpg"
                            class="img-fluid avatar avatar-small rounded-pill"
                            alt=""
                          />
                        </a>
                        <div class="overflow-hidden d-block">
                          <h4 class="media-heading mb-0">
                            <a href="javascript:void(0)" class="text-dark"
                              >Tammy Camacho</a
                            >
                          </h4>
                          <small class="text-muted"
                            >21th October, 2019 at 03:44 pm</small
                          >
                        </div>
                      </div>
                      <div class="mt-3">
                        <p class="text-muted fst-italic p-3 bg-light rounded">
                          " There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form, by injected humour "
                        </p>
                      </div>

                      <ul class="ps-4 ps-md-5 list-unstyled sub-comment">
                        <li class="comment-desk mt-4">
                          <a href="#" class="float-end text-muted"
                            ><i class="mdi mdi-reply"></i>&nbsp; Reply</a
                          >
                          <div class="commentor">
                            <a class="float-start pe-3" href="#">
                              <img
                                src="images/client/04.jpg"
                                class="
                                  img-fluid
                                  avatar avatar-small
                                  rounded-pill
                                "
                                alt=""
                              />
                            </a>
                            <div class="overflow-hidden d-block">
                              <h4 class="media-heading mb-0">
                                <a href="javascript:void(0)" class="text-dark"
                                  >Calvin Camacho</a
                                >
                              </h4>
                              <small class="text-muted"
                                >21th October, 2019 at 05:55 pm</small
                              >
                            </div>
                          </div>
                          <div class="mt-3">
                            <p
                              class="text-muted fst-italic p-3 bg-light rounded"
                            >
                              " There are many variations of passages of Lorem
                              Ipsum available, but the majority have suffered
                              alteration in some form, by injected humour "
                            </p>
                          </div>
                        </li>

                        <li class="comment-desk mt-4">
                          <a href="#" class="float-end text-muted"
                            ><i class="mdi mdi-reply"></i>&nbsp; Reply</a
                          >
                          <div class="commentor">
                            <a class="float-start pe-3" href="#">
                              <img
                                src="images/client/03.jpg"
                                class="
                                  img-fluid
                                  avatar avatar-small
                                  rounded-pill
                                "
                                alt=""
                              />
                            </a>
                            <div class="overflow-hidden d-block">
                              <h4 class="media-heading mb-0">
                                <a href="javascript:void(0)" class="text-dark"
                                  >Tammy Camacho</a
                                >
                              </h4>
                              <small class="text-muted"
                                >22th October, 2019 at 05:44 pm</small
                              >
                            </div>
                          </div>
                          <div class="mt-3">
                            <p
                              class="text-muted fst-italic p-3 bg-light rounded"
                            >
                              " There are many variations of passages of Lorem
                              Ipsum available, but the majority have suffered
                              alteration in some form, by injected humour "
                            </p>
                          </div>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <!-- Comments End -->

            <!-- Leave Comments Start -->
            <div class="row">
              <div class="col-12 mt-4 pt-2">
                <div class="section-title">
                  <h5 class="mb-0">Leave A Comment :</h5>
                </div>
              </div>
              <!--end col-->
            </div>
            <!--end row-->

            <div class="row">
              <div class="col-12 mt-4 pt-2">
                <form class="p-4 shadow rounded">
                  <div class="row">
                    <div class="col-md-12">
                      <div class="mb-3">
                        <label class="form-label">Your Comment</label>
                        <textarea
                          id="message"
                          placeholder="Your Comment"
                          rows="5"
                          name="message"
                          class="form-control"
                          required=""
                        ></textarea>
                      </div>
                    </div>
                    <!--end col-->

                    <div class="col-md-6">
                      <div class="mb-3">
                        <label class="form-label"
                          >Name <span class="text-danger">*</span></label
                        >
                        <input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Name"
                          class="form-control"
                          required=""
                        />
                      </div>
                    </div>
                    <!--end col-->

                    <div class="col-md-6">
                      <div class="mb-3">
                        <label class="form-label"
                          >Your Email <span class="text-danger">*</span></label
                        >
                        <input
                          id="email"
                          type="email"
                          placeholder="Email"
                          name="email"
                          class="form-control"
                          required=""
                        />
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
          </div>
          <!--end col-->

          <div class="col-lg-4 mt-4 pt-2">
            <div class="section-title">
              <h5 class="mb-0">Sidebar :</h5>
            </div>

            <div class="sidebar mt-4 pt-2">
              <div class="p-4 rounded shadow">
                <!-- Author -->
                <div class="widget text-center mb-4 pb-2">
                  <img
                    src="images/client/05.jpg"
                    class="img-fluid avatar avatar-large rounded-pill"
                    alt=""
                  />
                  <h4 class="widget-title mt-3">Meriam Shobhe</h4>
                  <p class="text-muted mt-3 mb-0">
                    Obviously I'M Web Designer. Web Developer with over 3 years
                    of experience.
                  </p>
                </div>
                <!-- Author -->

                <!-- CATAGORIES -->
                <div class="widget mb-4 pb-2">
                  <h4 class="widget-title text-center mb-4">Catagories :</h4>
                  <ul class="list-unstyled mb-0 catagory">
                    <li>
                      <a href="jvascript:void(0)">Finance</a>
                      <span class="float-end">13</span>
                    </li>
                    <li>
                      <a href="jvascript:void(0)">Business</a>
                      <span class="float-end">09</span>
                    </li>
                    <li>
                      <a href="jvascript:void(0)">Blog</a>
                      <span class="float-end">18</span>
                    </li>
                    <li>
                      <a href="jvascript:void(0)">Corporate</a>
                      <span class="float-end">20</span>
                    </li>
                    <li>
                      <a href="jvascript:void(0)">Investment</a>
                      <span class="float-end">22</span>
                    </li>
                  </ul>
                </div>
                <!-- CATAGORIES -->

                <!-- RECENT POST -->
                <div class="widget mb-4 pb-2">
                  <h4 class="widget-title mb-4">Recent Post :</h4>
                  <div class="clearfix post-recent">
                    <div class="post-recent-thumb float-start">
                      <a href="jvascript:void(0)">
                        <img
                          alt="img"
                          src="images/blog/07.jpg"
                          class="img-fluid rounded"
                      /></a>
                    </div>
                    <div class="post-recent-content float-start">
                      <a href="jvascript:void(0)">Consultant Business</a
                      ><span class="text-muted mt-2">15th June, 2019</span>
                    </div>
                  </div>
                  <div class="clearfix post-recent">
                    <div class="post-recent-thumb float-start">
                      <a href="jvascript:void(0)">
                        <img
                          alt="img"
                          src="images/blog/08.jpg"
                          class="img-fluid rounded"
                      /></a>
                    </div>
                    <div class="post-recent-content float-start">
                      <a href="jvascript:void(0)"
                        >Look On The Glorious Balance</a
                      >
                      <span class="text-muted mt-2">15th June, 2019</span>
                    </div>
                  </div>
                  <div class="clearfix post-recent">
                    <div class="post-recent-thumb float-start">
                      <a href="jvascript:void(0)">
                        <img
                          alt="img"
                          src="images/blog/01.jpg"
                          class="img-fluid rounded"
                      /></a>
                    </div>
                    <div class="post-recent-content float-start">
                      <a href="jvascript:void(0)">Research Financial.</a>
                      <span class="text-muted mt-2">15th June, 2019</span>
                    </div>
                  </div>
                </div>
                <!-- RECENT POST -->

                <!-- TAG CLOUDS -->
                <div class="widget text-center mb-4 pb-2">
                  <h4 class="widget-title mb-4">Tags Cloud :</h4>
                  <div class="tagcloud">
                    <a href="jvascript:void(0)" class="rounded">Business</a>
                    <a href="jvascript:void(0)" class="rounded">Finance</a>
                    <a href="jvascript:void(0)" class="rounded">Marketing</a>
                    <a href="jvascript:void(0)" class="rounded">Fashion</a>
                    <a href="jvascript:void(0)" class="rounded">Bride</a>
                    <a href="jvascript:void(0)" class="rounded">Lifestyle</a>
                    <a href="jvascript:void(0)" class="rounded">Travel</a>
                    <a href="jvascript:void(0)" class="rounded">Beauty</a>
                    <a href="jvascript:void(0)" class="rounded">Video</a>
                    <a href="jvascript:void(0)" class="rounded">Audio</a>
                  </div>
                </div>
                <!-- TAG CLOUDS -->

                <!-- SOCIAL -->
                <div class="widget text-center">
                  <h4 class="widget-title mb-4">Follow us :</h4>
                  <ul class="list-unstyled social-icon social mb-0">
                    <li class="list-inline-item">
                      <a href="jvascript:void(0)" class="rounded"
                        ><i class="mdi mdi-facebook"></i
                      ></a>
                    </li>
                    <li class="list-inline-item">
                      <a href="jvascript:void(0)" class="rounded"
                        ><i class="mdi mdi-instagram"></i
                      ></a>
                    </li>
                    <li class="list-inline-item">
                      <a href="jvascript:void(0)" class="rounded"
                        ><i class="mdi mdi-twitter"></i
                      ></a>
                    </li>
                    <li class="list-inline-item">
                      <a href="jvascript:void(0)" class="rounded"
                        ><i class="mdi mdi-vimeo"></i
                      ></a>
                    </li>
                    <li class="list-inline-item">
                      <a href="jvascript:void(0)" class="rounded"
                        ><i class="mdi mdi-linkedin"></i
                      ></a>
                    </li>
                    <li class="list-inline-item">
                      <a href="jvascript:void(0)" class="rounded"
                        ><i class="mdi mdi-google-plus"></i
                      ></a>
                    </li>
                  </ul>
                </div>
                <!-- SOCIAL -->
              </div>
            </div>
          </div>
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
