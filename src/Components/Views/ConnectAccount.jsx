import React from "react";
import Loader from "../Loader/Loader";
import './index.css'

export default function ConnectAccount({connect}){
  connect()
  return(
    <div className = 'div connect'>
      <h3>If it takes more than a minute, kindly refresh your page</h3>
      <Loader>Connecting Account</Loader>
    </div>
  )
}