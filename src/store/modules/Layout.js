import palette from 'google-palette'

const state = {
  ranks: ['rank1', 'rank2', 'rank3'],
  sections: [
    {
      name: 'main hall',
      rows: [
        {
          row: 1,
          seats: [
            {
              seat: 1,
              rank: 'rank1'
            },
            {
              seat: 3,
              rank: 'rank1'
            },
            {
              seat: 4,
              rank: 'rank1'
            },
            {
              seat: 2,
              rank: 'rank1'
            }
          ]
        },
        {
          row: 2,
          seats: [
            {
              seat: 1,
              rank: 'rank1'
            },
            {
              seat: 3,
              rank: 'rank1'
            },
            {
              seat: 5,
              rank: 'rank1'
            },
            {
              seat: 6,
              rank: 'rank1'
            },
            {
              seat: 4,
              rank: 'rank1'
            },
            {
              seat: 2,
              rank: 'rank1'
            }
          ]
        },
        {
          row: 3, seats: [
            {
              seat: 1,
              rank: 'rank2'
            },
            {
              seat: 3,
              rank: 'rank2'
            },
            {
              seat: 5,
              rank: 'rank2'
            },
            {
              seat: 6,
              rank: 'rank2'
            },
            {
              seat: 4,
              rank: 'rank2'
            },
            {
              seat: 2,
              rank: 'rank2'
            }
          ]
        }
      ]
    },
    {
      name: '1st balcony',
      rows: [
        {
          row: 1,
          seats: [
            {
              seat: 1,
              rank: 'rank3'
            },
            {
              seat: 3,
              rank: 'rank3'
            },
            {
              seat: 4,
              rank: 'rank3'
            },
            {
              seat: 2,
              rank: 'rank3'
            }
          ]
        }
      ]
    }
  ]
}

const getters = {
  seatRankColor: (state) => (rank) => {
    const ranksPalette = palette("cb-Pastel1", state.ranks.length)
    const rankIndex = state.ranks.indexOf(rank)
    if (rankIndex !== -1) {
      return "#" + ranksPalette[rankIndex]
    }
  },
  sections: (state) => state.sections
}

export default {
  state,
  getters
}


