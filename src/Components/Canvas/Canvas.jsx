import React, { useRef, useEffect } from 'react'
import { Constants, RECTANGLE_ACTIONS } from '../../utils/constants'
import './canvas.css'

export default function Canvas ({rectangle}){
  const canvasRef = useRef(null)
  // console.log(rectangle)

  const draw = (action, context) => {
    // if(action.type === 'action/drawRectangle'){
    if(action.action === RECTANGLE_ACTIONS.DRAW_RECTANGLE){
      context.fillStyle = action.color;
      context.fillRect(
        action.x,
        action.y,
        action.width,
        action.height
      )
    // } else if(action.type === 'action/clearRectangle'){
    } else if(action.action === RECTANGLE_ACTIONS.CLEAR_RECTANGLE){
      context.clearRect(
        action.x,
        action.y,
        action.width,
        action.height
      )
    // } else if(action.type === 'action/drawStageArea'){
    } else if(action.action === RECTANGLE_ACTIONS.DRAW_STAGE){
      //[x,y,width,height,color]
      for(let rect of action.rectangles){
        context.fillStyle = rect[4];
        context.fillRect(
          rect[0],
          rect[1],
          rect[2],
          rect[3]
        )
      }
    // } else if(action.type === 'action/clearCanvas'){
    } else if(action.action === RECTANGLE_ACTIONS.CLEAR_CANVAS){
      let canvasWidth = Constants.CANVAS_WIDTH * Constants.SCALE_FACTOR
      let canvasHeight = Constants.CANVAS_HEIGHT * Constants.SCALE_FACTOR
      context.clearRect(0, 0, canvasWidth, canvasHeight);
    }
  }

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    draw(rectangle, context)
  }, [rectangle])
  
  return (
    <div>
      <canvas ref={canvasRef}  className='canvas' width='1120px' height='630px'/>
    </div>
  )
}
