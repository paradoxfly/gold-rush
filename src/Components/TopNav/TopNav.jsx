import React from 'react'
import './topnav.css'
import { GiGoldStack, GiGoldBar } from 'react-icons/gi'
export default function TopNav(){
  return(
    <div className = 'nav'>
      <h1>
        <GiGoldStack /> Gold Rush  <GiGoldBar />
      </h1>
    </div>
  )
}