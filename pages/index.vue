<template>
  <div>
    <h2>カウンター</h2>
    <h3>Count: {{ count }}</h3>
    <button type="button" @click="increment">Increment</button>
    <app-toggle-button/>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import AppToggleButton from '~/components/AppToggleButton'

export default {
  components: {
    AppToggleButton
  },
  computed: {
    ...mapGetters(['count'])
  },
  methods: {
    ...mapActions(['increment'])
  }
}
</script>
