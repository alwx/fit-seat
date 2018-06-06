import palette from 'google-palette'

const state = {
  groups: [
    {
      id: '+31611111111',
      seats: [
        {
          section: 'main hall',
          row: 1,
          seat: 4
        },
        {
          section: 'main hall',
          row: 1,
          seat: 2
        },
        {
          section: 'main hall',
          row: 2,
          seat: 2
        },
        {
          section: 'main hall',
          row: 2,
          seat: 4
        }
      ]
    },
    {
      id: '+31622222222',
      seats: [
        {
          section: 'main hall',
          row: 2,
          seat: 6
        },
        {
          section: 'main hall',
          row: 2,
          seat: 5
        }
      ]
    }
  ]
}

const getters = {
  groups: (state) => state.groups,
  seatsPalette: (state) => {
    return palette("cb-Dark2", state.groups.length)
  },
  seatGroupIndex: (state) => (section, row, seat) => {
    for (let i = 0; i < state.groups.length; i++) {
      for (const s of state.groups[i].seats) {
        if (s.section === section && s.row === row && s.seat === seat) {
          return i
        }
      }
    }
    return -1
  },
  seatGroupColor: (state, getters) => (index) => {
    if (index !== -1) {
      return "#" + getters.seatsPalette[index]
    }
  }
}

export default {
  state,
  getters
}
