import React from 'react';
import './loader.css';

export default function Loader(props){
  const textArray =  props.children.split("")
  return(
    <div className='back'>
      {
        textArray.map((text, index) => {
          return <span key={index}>{text}</span>
        })
      }
    </div>
  )
}