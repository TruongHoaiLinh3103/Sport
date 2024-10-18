import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  Parkour: 0,
  Body: 0,
  Miu : 0
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    EDIT_PARKOUR: (state, action) => {
      let Parkour = state.Parkour;
      Parkour = Parkour !== action.payload ? Parkour = action.payload : Parkour
      state.Parkour = Parkour
    },
    EDIT_BODY: (state, action) => {
      let Body = state.Body;
      Body = Body !== action.payload ? Body = action.payload : Body
      state.Body = Body
    },
    EDIT_MIU: (state, action) => {
      let Miu = state.Miu;
      Miu = Miu !== action.payload ? Miu = action.payload : Miu
      state.Miu = Miu
    }
  },
})

// Action creators are generated for each case reducer function
export const { EDIT_PARKOUR, EDIT_BODY, EDIT_MIU } = counterSlice.actions

export default counterSlice.reducer