export const drawRectAction = (x, y, width, height, color) => {
  return({
    type: 'action/drawRectangle',
    payload: {
      x: x,
      y: y,
      width: width,
      height: height,
      color: color
    }
  })
}

export const clearRectAction = (x, y, width, height) => {
  return({
    type: 'action/clearRectangle',
    payload: {
      x: x,
      y: y,
      width: width,
      height: height
    }
  })
}

export const drawStageAction = (array) => {
  return({
    type: 'action/drawStageArea',
    payload: [...array]
  })
}