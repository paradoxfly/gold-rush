import { createSlice } from "@reduxjs/toolkit"
import { Constants } from "../../utils/constants"

export const actionSlice = createSlice({
  name: 'action',
  initialState: {
    action: {
      type: 'action/drawRectangle',
      payload: {
        x: 0 * Constants.SCALE_FACTOR,
        y: 0 * Constants.SCALE_FACTOR,
        width: 0 * Constants.SCALE_FACTOR,
        height: 0 * Constants.SCALE_FACTOR,
        color: 'maroon'
      }
    }
  },
  reducers: {
    drawRectangle: (state, action) => {
      const { x, y, width, height, ...rest } = action.payload
      state.action = {
        type: 'action/drawRectangle',
        payload: {
          x: (x-1) * Constants.SCALE_FACTOR,
          y: (y-1) * Constants.SCALE_FACTOR,
          width: width * Constants.SCALE_FACTOR,
          height: height * Constants.SCALE_FACTOR,
          ...rest
        }
      }
    },
    clearRectangle: (state, action) => {
      const { x, y, width, height } = action.payload
      state.action = {
        type: 'action/clearRectangle',
        payload: {
          x: (x-1) * Constants.SCALE_FACTOR,
          y: (y-1) * Constants.SCALE_FACTOR,
          width: width * Constants.SCALE_FACTOR,
          height: height * Constants.SCALE_FACTOR,
        }
      }
    },
    drawStageArea: (state, action) => {
      const payload = action.payload.map(array => {
        //array = [x, y, width, height, color]
        array[0] = (array[0] - 1) * Constants.SCALE_FACTOR
        array[1] = (array[1] - 1) * Constants.SCALE_FACTOR
        array[2] = array[2] * Constants.SCALE_FACTOR
        array[3] = array[3] * Constants.SCALE_FACTOR
        return array
      })
      state.action = {
        type: 'action/drawStageArea',
        payload: [...payload]
      }
    },
    clearCanvasReducer: (state) => {
      state.action = {
        type: 'action/clearCanvas'
      }
    },
  }
})

export const selectAction = state => state.action;

export const { drawRectangle, clearRectangle, drawStageArea, clearCanvasReducer } = actionSlice.actions

export default actionSlice.reducer