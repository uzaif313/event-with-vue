<template>
  <div>
    <h1>Create an Event {{ user.name }}</h1>
    <p>
      This Event is Created by
      {{ user.name }}
    </p>
    <p>{{ user.id }}</p>
    <pre>
      {{ getEvent(1) }}
      <hr>
      {{ getEvent(1) }}
      <hr>
      {{ getEvent(2) }}
    </pre>
    <p>There are {{ catLength }} Categories</p>
    <ul>
      <li v-for="cat in categories" :key="cat">{{ cat }}</li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    getEvent() {
      return this.$store.getters.getEventById
    },
    catLength() {
      return this.$store.getters.catLength
    },
    ...mapState({
      user: 'user',
      categories: 'categories'
    })
  }
}
</script>

<style scoped></style>
