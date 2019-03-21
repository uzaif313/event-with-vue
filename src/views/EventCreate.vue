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
  computed: mapState({
    userName: state => state.user.name,
    userId: state => state.user.id,
    categories: state => state.categories
  })
}
</script>

<style scoped></style>
