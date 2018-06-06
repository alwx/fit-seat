<template>
  <div class="app">
    <section-view
      v-for="(section, index) in sections"
      v-bind:key="index"
      v-bind:section="section">
    </section-view>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import SectionView from './components/Section.vue'

  export default {
    name: 'app',
    components: {
      SectionView
    },
    computed: {
      ...mapGetters([
        'sections'
      ])
    }
  }
</script>

<style lang="scss">
  body {
    font-family: sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
