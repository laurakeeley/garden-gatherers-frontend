<template>
  <div class="meetups-show">
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
                <h4 class="title">{{ meetup.title }}</h4>
                <ul class="mt-3 list-unstyled">
                  <li class="list-inline-item text-muted">
                    <i class="uil uil-airplay align-middle text-primary h5"></i>
                    <a
                      href="https://1.envato.market/4n73n"
                      target="_blank"
                      class="text-muted"
                      >{{ meetup.time }}</a
                    >
                  </li>
                  <li class="list-inline-item text-muted">
                    <i
                      class="uil uil-map-marker align-middle text-primary h5"
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
                  <span class="text-uppercase text-primary fw-bold"
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
    <div class="col-lg-8 col-md-7 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
      <div class="ms-lg-4">
        <h5>Job Description:</h5>
        <p class="text-muted">
          One disadvantage of Lorum Ipsum is that in Latin certain letters
          appear more frequently than others - which creates a distinct visual
          impression. Moreover, in Latin only words at the beginning of
          sentences are capitalized.
        </p>
        <p class="text-muted">
          This means that Lorem Ipsum cannot accurately represent, for example,
          German, in which all nouns are capitalized. Thus, Lorem Ipsum has only
          limited suitability as a visual filler for German texts. If the fill
          text is intended to illustrate the characteristics of different
          typefaces.
        </p>
        <p class="text-muted">
          It sometimes makes sense to select texts containing the various
          letters and symbols specific to the output language.
        </p>

        <h5 class="mt-4">Responsibilities and Duties:</h5>
        <p class="text-muted">
          It sometimes makes sense to select texts containing the various
          letters and symbols specific to the output language.
        </p>
        <ul class="list-unstyled">
          <li class="text-muted">
            <i
              data-feather="arrow-right"
              class="fea icon-sm text-success me-2"
            ></i
            >Participate in requirements analysis
          </li>
          <li class="text-muted">
            <i
              data-feather="arrow-right"
              class="fea icon-sm text-success me-2"
            ></i
            >Write clean, scalable code using C# and .NET frameworks
          </li>
          <li class="text-muted">
            <i
              data-feather="arrow-right"
              class="fea icon-sm text-success me-2"
            ></i
            >Test and deploy applications and systems
          </li>
          <li class="text-muted">
            <i
              data-feather="arrow-right"
              class="fea icon-sm text-success me-2"
            ></i
            >Revise, update, refactor and debug code
          </li>
          <li class="text-muted">
            <i
              data-feather="arrow-right"
              class="fea icon-sm text-success me-2"
            ></i
            >Improve existing software
          </li>
          <li class="text-muted">
            <i
              data-feather="arrow-right"
              class="fea icon-sm text-success me-2"
            ></i
            >Develop documentation throughout the software development life
            cycle (SDLC)
          </li>
          <li class="text-muted">
            <i
              data-feather="arrow-right"
              class="fea icon-sm text-success me-2"
            ></i
            >Serve as an expert on applications and provide technical support
          </li>
        </ul>

        <h5 class="mt-4">Required Experience, Skills and Qualifications:</h5>
        <p class="text-muted">
          It sometimes makes sense to select texts containing the various
          letters and symbols specific to the output language.
        </p>
        <ul class="list-unstyled">
          <li class="text-muted">
            <i
              data-feather="arrow-right"
              class="fea icon-sm text-success me-2"
            ></i
            >Proven experience as a .NET Developer or Application Developer
          </li>
          <li class="text-muted">
            <i
              data-feather="arrow-right"
              class="fea icon-sm text-success me-2"
            ></i
            >good understanding of SQL and Relational Databases, specifically
            Microsoft SQL Server.
          </li>
          <li class="text-muted">
            <i
              data-feather="arrow-right"
              class="fea icon-sm text-success me-2"
            ></i
            >Experience designing, developing and creating RESTful web services
            and APIs
          </li>
          <li class="text-muted">
            <i
              data-feather="arrow-right"
              class="fea icon-sm text-success me-2"
            ></i
            >Basic know how of Agile process and practices
          </li>
          <li class="text-muted">
            <i
              data-feather="arrow-right"
              class="fea icon-sm text-success me-2"
            ></i
            >Good understanding of object-oriented programming.
          </li>
          <li class="text-muted">
            <i
              data-feather="arrow-right"
              class="fea icon-sm text-success me-2"
            ></i
            >Good understanding of concurrent programming.
          </li>
          <li class="text-muted">
            <i
              data-feather="arrow-right"
              class="fea icon-sm text-success me-2"
            ></i
            >Sound knowledge of application architecture and design.
          </li>
          <li class="text-muted">
            <i
              data-feather="arrow-right"
              class="fea icon-sm text-success me-2"
            ></i
            >Excellent problem solving and analytical skills
          </li>
        </ul>
      </div>
    </div>
    <!--end col-->
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
