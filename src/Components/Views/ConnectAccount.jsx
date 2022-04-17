import React, { useState } from "react";
import Loader from "../Loader/Loader";
import './index.css'

export default function ConnectAccount({connect}){
  const [secret, setSecret] = useState('')
  const [ error, setError ] = useState(false)
  const [loading, setLoading] = useState(false)
  // connect()
  return(
    <div className = 'div connect'>
      <button onClick={e => {
        setLoading(true)
        connect()
      }}>
        Connect To MyAlgoConnect Wallet
      </button>
      <h3>OR</h3>
      <div className='mnemonic'>
        <span>Import Account By Mnemonic Key</span><br/>
        {
          error && <small className='error'>Invalid mnemonic key</small>
        }
        <br/>
        <textarea
          name='secret' 
          className={`ContractInfo ${error ? "error-box": ''}`}
          onChange={(event) => {
            setSecret(event.target.value)
          }}
          placeholder='Paste mnemonic key'
        /><br/>
        <button onClick={ async e => {
          setLoading(true)
          const con = await connect(secret.trim(), true)
          if(con === 'failed'){
            setLoading(false)
            setError(true)
          }
        }}>Connect To Account</button>
      </div>    
    
      {
        loading && <Loader>Connecting Account</Loader>
      }
      
    </div>
  )
}