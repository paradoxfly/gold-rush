import React, { useRef, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { selectTime } from '../../redux/slices/time.slice'
import { Constants } from '../../utils/constants'
import './canvas.css'

export default function Canvas ({action}){
  const canvasRef = useRef(null)

  const draw = (action, context) => {
    if(action.type === 'action/drawRectangle'){
      context.fillStyle = action.payload.color;
      context.fillRect(
        action.payload.x,
        action.payload.y,
        action.payload.width,
        action.payload.height
      )
    } else if(action.type === 'action/clearRectangle'){
      context.clearRect(
        action.payload.x,
        action.payload.y,
        action.payload.width,
        action.payload.height
      )
    } else if(action.type === 'action/drawStageArea'){
      //[x,y,width,height,color]
      for(let rect of action.payload){
        context.fillStyle = rect[4];
        context.fillRect(
          rect[0],
          rect[1],
          rect[2],
          rect[3]
        )
      }
    } else if(action.type === 'action/clearCanvas'){
      let canvasWidth = Constants.CANVAS_WIDTH * Constants.SCALE_FACTOR
      let canvasHeight = Constants.CANVAS_HEIGHT * Constants.SCALE_FACTOR
      context.clearRect(0, 0, canvasWidth, canvasHeight);
    }
  }

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    draw(action, context)
  }, [action])
  
  return (
    <div>
      <p>Time: {useSelector(selectTime).time}</p>
      <canvas ref={canvasRef}  className='canvas' width='1120px' height='630px'/>
    </div>
  )
}
