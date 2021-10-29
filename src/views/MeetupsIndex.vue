<template>
  <div class="meetups-index">
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
