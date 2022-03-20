import React, { useState } from 'react'
import './index.css'

export default function FundAccount(props){
  const { balance, standardUnit, defaultFundAmt, utils } = props;
  const [ amount, setAmount ] = useState(defaultFundAmt)
  return (
    <div className='div'>
      <h2>Fund account</h2>
      <h3>Balance: {balance} {standardUnit}</h3>
      <hr />
      <h4>Would you like to fund your account with additional {standardUnit}?</h4>
      <p>(This only works on certain devnets)</p>
      <input
        min={0}
        type='number'
        placeholder={defaultFundAmt}
        value = {amount}
        onChange={(e) => {
          if(e.currentTarget.value === ''){
            setAmount(defaultFundAmt)
          }
          else setAmount(e.currentTarget.value)
        }}
      /><br/>
      <button onClick={() => utils.fundAccount(amount)}>Fund Account</button>
      <button onClick={() => utils.skipFundAccount()}>Skip</button>
    </div>
  );
}