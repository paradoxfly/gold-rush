import { drawRectangle, clearRectangle, drawStageArea, clearCanvasReducer } from "../slices/action.slice";
import { drawRectAction, clearRectAction, drawStageAction } from "../actions/action.action";

export function drawRect(x, y, width, height, color, dispatch){
  let { payload } = drawRectAction(x, y, width, height, color)
  dispatch( drawRectangle(payload) )
}

export function clearRect(x, y, width, height, dispatch){
  let { payload } = clearRectAction(x, y, width, height)
  dispatch( clearRectangle(payload) )
}

export function drawStage(objectsArray, dispatch){
  let { payload } = drawStageAction(objectsArray)
  dispatch( drawStageArea(payload) )
}

export function clearCanvas(dispatch){
  dispatch ( clearCanvasReducer() )
}