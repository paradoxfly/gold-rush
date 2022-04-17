import React from 'react'
import './index.css'

export default function DeployerOrAttacher(props){
  const {utils} = props;
    return (
      <div className = 'div'>
        <h2>Please select a role:</h2>
        <h5>
          <button
            onClick={() => utils.selectDeployer()}
          >Deployer</button>
          <br /> Set the wager, deploy the contract.
        </h5>
        <h5>
          <button
            onClick={() => utils.selectAttacher()}
          >Attacher</button>
          <br /> Attach to the Deployer's contract.
        </h5>
      </div>
    );
}