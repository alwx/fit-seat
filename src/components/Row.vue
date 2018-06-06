<template>
  <div class="row">
    <seat-view
      v-for="(seat, index) in row.seats"
      v-bind:key="index"
      v-bind:sectionName="sectionName"
      v-bind:rowNumber="row.row"
      v-bind:seat="seat">
    </seat-view>
  </div>
</template>

<script>
  import SeatView from './Seat.vue'

  export default {
    props: {
      row: Object,
      sectionName: String,
    },
    components: {
      SeatView
    }
  }
</script>

<style lang="scss" scoped>
  div.row {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
</style>
