import React from 'react'

export default function AcceptTerms(props){
  const { wager, standardUnit, acceptTerms} = props
  return(
    <>
      <h4>The terms of the game are:</h4>
        <h3>Wager: {wager} {standardUnit}</h3> 
        <button
          onClick={acceptTerms} className='large-button'
        >Accept terms and pay wager</button>
    </>
  )
}