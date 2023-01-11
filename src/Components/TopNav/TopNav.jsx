import React from 'react'
import './topnav.css'
import { GiGoldStack, GiGoldBar } from 'react-icons/gi'
import { ImSpinner8 } from 'react-icons/im'
export default function TopNav({address, connect, canConnect, connecting}){
  const handleConnect = () => {
    if(canConnect){
      connect()
    }
  }
  return(
    <div className = 'nav'>
      <div className='logo'>
        <GiGoldStack /> Gold Rush  <GiGoldBar />
      </div>
      <div className='address-div'>
        <button onClick={handleConnect}>
          {/* <FaWallet /> */}
          <img 
            src='/myalgo-logo.png'
            alt=''
          />
          <div title={ address ? `Click to switch wallet` : ''} className='address'>
            { 
              connecting ? 
                'Connect Wallet'
                :
              address ? 
                address
                :
                'Connect Wallet'
            }
          </div>
          {
            connecting && 
            <ImSpinner8 className='spinner'/>
          }
        </button>
      </div>
    </div>
  )
}