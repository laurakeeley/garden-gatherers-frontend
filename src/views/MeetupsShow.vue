<template>
  <div class="meetups-show">
    <!-- Hero Start -->
    <section
      class="bg-half-170 bg-light d-table w-100"
      style="
        background: url('https://images.pexels.com/photos/712876/pexels-photo-712876.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500')
          center center;
      "
    >
      <div class="bg-overlay bg-overlay-white"></div>
      <div class="container">
        <div class="row mt-5 text-center align-items-center">
          <div class="col-sm-6">
            <div class="text-sm-start">
              <div class="page-next-level">
                <h4 class="title">{{ meetup.title }}</h4>
                <ul class="mt-3 list-unstyled">
                  <li class="list-inline-item text-muted">
                    <i
                      class="uil uil-airplay align-middle text-secondary h5"
                    ></i>
                    <a
                      href="https://1.envato.market/4n73n"
                      target="_blank"
                      class="text-dark"
                      >{{ meetup.time }}</a
                    >
                  </li>
                  <li class="list-inline-item text-dark">
                    <i
                      class="uil uil-map-marker align-middle text-secondary h5"
                    ></i>
                    {{ meetup.location }}
                  </li>
                </ul>
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
                  <router-link
                    to="/meetups"
                    class="text-uppercase fw-bold text-dark"
                    >Meetups</router-link
                  >
                </li>
                <li class="list-inline-item">
                  <span class="text-uppercase text-secondary fw-bold"
                    >Meetup Details</span
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
    <div class="container mt-100 mt-60">
      <div class="row align-items-center">
        <div class="col-lg-5 col-md-6">
          <img
            v-bind:src="meetup.image_url"
            v-bind:alt="meetup.title"
            class="rounded img-fluid shadow"
          />
        </div>
        <!--end col-->

        <div class="col-lg-7 col-md-6 mt-4 mb-4 mt-sm-0 pt-2 pt-sm-0">
          <div class="section-title ms-md-4">
            <p class="text-dark para-desc">
              {{ meetup.info }}
            </p>
          </div>
        </div>
        <!--end col-->
      </div>
      <!--end row-->
    </div>
    <!--end container-->
    <!-- <h2>{{ meetup.title }}</h2>
    <p>{{ meetup.location }}</p>
    <p>{{ meetup.time }}</p>
    <img v-bind:src="meetup.image_url" v-bind:alt="meetup.title" /> <br /> -->
  </div>
</template>

<style></style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      meetup: [],
    };
  },
  created: function () {
    axios.get("/meetups/" + this.$route.params.id).then((response) => {
      console.log("meetups show", response);
      this.meetup = response.data;
    });
  },
  methods: {},
};
</script>
