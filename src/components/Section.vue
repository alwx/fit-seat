<template>
  <div class="hall">
    <h2>{{ section.name }}</h2>

    <row-view
      v-for="(row, index) in section.rows"
      v-bind:key="index"
      v-bind:row="row"
      v-bind:sectionName="section.name">
    </row-view>
  </div>
</template>

<script>
  import RowView from './Row.vue'

  export default {
    props: {
      section: Object
    },
    components: {
      RowView
    }
  }
</script>

<style lang="scss" scoped>
  div.hall {
    margin-bottom: 20px;

    h2 {
      font-size: 14px;
      font-weight: 600;
      margin: 10px 0;
    }
  }
</style>
