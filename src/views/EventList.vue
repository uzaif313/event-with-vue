<template>
  <div>
    <h1>Event for {{user.user.name}}</h1>
    <EventCard v-for="event in events" v-bind:key="event.id" :event="event" />
    <template v-if="page != 1">
      <router-link
        :to="{ name: 'event-list', query: { page: page - 1 } }"
        rel="prev"
        >Prev</router-link
      >|
    </template>
    <template v-if="is_next">
      <router-link
        :to="{ name: 'event-list', query: { page: page + 1 } }"
        rel="next"
        >Next</router-link
      >
    </template>
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'
import { mapState } from 'vuex'
export default {
  components: {
    EventCard
  },
  created() {
    this.$store.dispatch('fetchEvents', {
      perPage: 3,
      page: this.page
    })
  },
  computed: {
    page() {
      return parseInt(this.$route.query.page) || 1
    },
    is_next() {
      return this.eventsTotal > this.page * 3
    },
    ...mapState(['events']),
    ...mapState(['eventsTotal','user'])
  }
}
</script>

<style scoped></style>
