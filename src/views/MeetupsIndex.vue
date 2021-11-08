<template>
  <div class="meetups-index">
    <!-- Hero Start -->
    <section
      class="bg-half-170 bg-light d-table w-100"
      style="background: url('images/bg.jpg') center center"
    >
      <div class="bg-overlay bg-overlay-white"></div>
      <div class="container">
        <div class="row mt-5 text-center align-items-center">
          <div class="col-sm-6">
            <div class="text-sm-start">
              <div class="page-next-level">
                <h4 class="title">Meetups</h4>
                <p class="text-muted mb-0">
                  We present and write attractive blog posts
                </p>
              </div>
            </div>
          </div>
          <!--end col-->

          <div class="col-sm-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
            <div class="page-next-level text-sm-end">
              <ul class="page-next ps-0 mb-0">
                <li class="list-inline-item">
                  <router-link to="/" class="text-uppercase fw-bold text-dark"
                    >Home</router-link
                  >
                </li>
                <li class="list-inline-item">
                  <span class="text-uppercase text-primary fw-bold"
                    >Meetups</span
                  >
                </li>
              </ul>
            </div>
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->
    </section>
    <!--end section-->
    <div class="position-relative">
      <div class="shape overflow-hidden text-white">
        <svg
          viewBox="0 0 2880 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </div>
    <!-- Hero End -->

    <section class="section">
      <div class="container">
        <div class="row align-items-end mb-4 pb-2">
          <div class="col-lg-9 col-md-8">
            <div class="section-title">
              <h4 class="title mb-4">Latest Job or Vacancy list</h4>
              <p class="text-muted para-desc mb-0">
                Explore and learn more about everything from machine learning
                and global payments to scaling your team.
              </p>
            </div>
          </div>
          <!--end col-->

          <div class="col-lg-3 col-md-4 mt-4 mt-sm-0 pt-2 pt-sm-0">
            <div class="form custom-form">
              <div class="mb-0">
                <label class="form-label">Types of jobs :</label>
                <select
                  class="form-select mt-2"
                  aria-label="Default select example"
                >
                  <option selected>All Jobs</option>
                  <option>Full Time</option>
                  <option>Part Time</option>
                  <option>Remote</option>
                  <option>Work From Home</option>
                </select>
              </div>
            </div>
          </div>
          <!--end col-->
        </div>
        <!--end row-->

        <div class="row">
          <div
            v-for="meetup in meetups"
            v-bind:key="meetup.id"
            class="col-lg-4 col-md-6 col-12 mt-4 pt-2"
          >
            <div class="card border-0 bg-light rounded shadow">
              <div class="card-body p-4">
                <h5>{{ meetup.title }}</h5>
                <div class="mt-3">
                  <span class="text-muted d-block"
                    ><i
                      class="uil uil-airplay align-middle text-primary h5"
                    ></i>
                    <a
                      href="https://1.envato.market/4n73n"
                      target="_blank"
                      class="text-muted"
                      >{{ meetup.time }}</a
                    ></span
                  >
                  <span class="text-muted d-block"
                    ><i
                      class="uil uil-map-marker align-middle text-primary h5"
                    ></i>
                    {{ meetup.location }}</span
                  >
                </div>

                <div class="mt-3">
                  <a href="page-job-detail.html" class="btn btn-primary"
                    >View Details</a
                  >
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

    <div v-for="meetup in meetups" v-bind:key="meetup.id">
      <h2>{{ meetup.title }}</h2>
      <p>{{ meetup.location }}</p>
      <p>{{ meetup.time }}</p>
      <img v-bind:src="meetup.image_url" v-bind:alt="meetup.title" /> <br />
      <router-link :to="`/meetups/${meetup.id}`">More Info</router-link>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      meetups: [],
    };
  },
  created: function () {
    this.indexMeetups();
  },
  methods: {
    indexMeetups: function () {
      axios.get("/meetups").then((response) => {
        console.log("meetups index", response);
        this.meetups = response.data;
      });
    },
  },
};
</script>
