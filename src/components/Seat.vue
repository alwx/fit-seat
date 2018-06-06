<template>
  <div class="seat"
       v-bind:style="{ backgroundColor: seatRankColor(seat.rank) }">
    <div v-bind:style="{ backgroundColor: seatGroupColor }"
         v-bind:class="{ occupied: seatGroupIndex > -1 }">
      {{ seat.seat }}
      <span class="tooltip" v-if="seatGroupIndex > -1">
        {{ seatGroupText }}
      </span>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    props: {
      sectionName: String,
      rowNumber: Number,
      seat: Object
    },
    computed: {
      ...mapGetters([
        'seatRankColor'
      ]),
      seatGroupIndex () {
        return this.$store.getters.seatGroupIndex(this.sectionName, this.rowNumber, this.seat.seat)
      },
      seatGroupColor () {
        return this.$store.getters.seatGroupColor(this.seatGroupIndex)
      },
      seatGroupText () {
        return this.$store.getters.groups[this.seatGroupIndex].id
      }
    }
  }
</script>

<style lang="scss" scoped>
  div.seat {
    background-color: white;
    border-radius: 4px;
    margin: 4px;
    line-height: 20px;
    font-size: 12px;
    cursor: default;

    div {
      width: 20px;
      height: 20px;
      margin: 4px;
      border-radius: 4px;

      &.occupied {
        color: white;
      }
    }

    .tooltip {
      visibility: hidden;
      background-color: black;
      color: #fff;
      text-align: center;
      border-radius: 6px;
      padding: 5px 10px;
      margin-left: 15px;
      margin-top:  -5px;
      opacity: 0.7;

      position: absolute;
      z-index: 1;
    }

    &:hover .tooltip {
      visibility: visible;
    }
  }
</style>
