import React from 'react'
import './index.css'

export default function DeployerOrAttacher(props){
  const {utils} = props;
    return (
      <div className = 'div'>
        <h2>Please select a role:</h2>
        <h4>
          <button
            onClick={() => utils.selectDeployer()}
          >Deployer</button>
          <br /> Set the wager, deploy the contract.
        </h4>
        <h4>
          <button
            onClick={() => utils.selectAttacher()}
          >Attacher</button>
          <br /> Attach to the Deployer's contract.
        </h4>
      </div>
    );
}