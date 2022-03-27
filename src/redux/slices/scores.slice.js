import { createSlice } from "@reduxjs/toolkit"

export const scoreSlice = createSlice({
  name: 'scores',
  initialState: {
    you: {
      round1: 0,
      round2: 0,
      round3: 0
    },
    them: {
      round1: 0,
      round2: 0,
      round3: 0
    }
  },
  reducers: {
    setScore: (state, action) => {
      state = { ...state, [action.payload.who]: {
        ...state[action.payload.who], [action.payload.round]: action.payload.score
      }}
    } 
  }
})

export const selectScore = state => state.scores;

export const { setScore } = scoreSlice.actions

export default scoreSlice.reducer