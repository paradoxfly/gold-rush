import React from 'react'
import './canvas.css'

export default function Canvas ({canvasRef}){
  
  return (
    <div>
      <canvas ref={canvasRef}  className='canvas' width='1120px' height='630px'/>
    </div>
  )
}
