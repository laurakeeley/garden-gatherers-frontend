<template>
  <div class="meetups-show">
    <h2>{{ meetup.title }}</h2>
    <p>{{ meetup.location }}</p>
    <p>{{ meetup.time }}</p>
    <img v-bind:src="meetup.image_url" v-bind:alt="meetup.title" /> <br />
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
