import React from "react";
import './index.css'

export default function ConnectAccount({connect}){
  connect()
  return(
    <div className = 'div connect'>
      <h2>Please Wait While We Connect To Your Account...</h2>
      <h3>If it takes more than a minute, kindly refresh your page</h3>
    </div>
  )
}