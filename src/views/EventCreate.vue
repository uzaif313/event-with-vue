<template>
  <div>
    <h1>Create an Event {{ userName }}</h1>
    <p>
      This Event is Created by
      {{ userName }}
    </p>
    <p>{{ userId }}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    userName() {
      console.log(this.$store.state.user)
      return this.$store.state.user.name
    },
    userId() {
      return this.$store.state.user.id
    }
  }
}
</script>

<style scoped></style>
