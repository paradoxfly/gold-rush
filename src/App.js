import React, { useEffect, useState } from 'react';
import { Views } from './utils/constants';
import './App.css';

//Components or Views
import TopNav from './Components/TopNav/TopNav';
import ConnectAccount from './Components/Views/ConnectAccount';
import FundAccount from './Components/Views/FundAccount';
import DeployerOrAttacher from './Components/Views/DeployerOrAttacher';
import Attach from './Components/Views/Attacher';
import Deploy from './Components/Views/Deployer';

//Reach
import * as backend from './build/index.main.mjs'
import {loadStdlib} from '@reach-sh/stdlib';
import MyAlgoConnect from '@randlabs/myalgo-connect'

const reach = loadStdlib('ALGO');
reach.setWalletFallback(reach.walletFallback( { providerEnv: 'TestNet', MyAlgoConnect } ));
const { standardUnit } = reach;
const defaults = { defaultFundAmt: '10', defaultWager: '3', standardUnit };

// localStorage.clear()

function App(){
  const [ view, setView ] = useState(Views.CONNECT_ACCOUNT)
  const [ account, setAccount ] = useState({})
  const [ balance, setBalance ] = useState(0)

  const utils = {

    connectAccount: async (secret, mnemonic = false) => {
      let result = ""
      try {
        const account = mnemonic ? await reach.newAccountFromMnemonic(secret) : await reach.getDefaultAccount();
        localStorage.setItem('connected', 'yes')
        localStorage.setItem('account', JSON.stringify(account.networkAccount))
        const balanceAtomic = await reach.balanceOf(account);
        const balance = reach.formatCurrency(balanceAtomic, 4);
        console.log(account)
        setAccount(account);
        setBalance(balance)
        if (await reach.canFundFromFaucet()) {
          setView(Views.FUND_ACCOUNT)
        } else {
          setView(Views.DEPLOYER_OR_ATTACHER)
        }
        result = 'success'
      } catch (error) {
        result = error.message
      }
      return result
    },

    fundAccount: async (fundAmount) => {
      await reach.fundFromFaucet(account, reach.parseCurrency(fundAmount));
      setView(Views.DEPLOYER_OR_ATTACHER)
    },

    skipFundAccount: async () => {
      setView(Views.DEPLOYER_OR_ATTACHER)
    },

    selectDeployer: async () => {
      setView(Views.DEPLOY)
    },

    selectAttacher: async () => {
      setView(Views.ATTACH)
    },

    playAgain: async () => {
      setView(Views.DEPLOYER_OR_ATTACHER)
    },

    attach: (ctcInfoStr, attacher) => {
      const ctc = account.contract(backend, JSON.parse(ctcInfoStr));
      backend.Bob(ctc, attacher);
    },
    
    deploy: async (deployer, wager) => {
      const ctc = account.contract(backend);
      const deadline = {ETH: 10, ALGO: 100, CFX: 1000}[reach.connector];
      deployer.setWagerAndDeadline(reach.parseCurrency(wager), deadline)
      backend.Alice(ctc, deployer)
      return JSON.stringify(await ctc.getInfo(), null, 2);
    }
  }

  useEffect(() => {
    const connected = localStorage.getItem('connected')
    if(connected === 'yes'){
      reach.connectAccount(JSON.parse(localStorage.getItem(('account'))))
        .then(acc => {
          console.log(acc)
          setAccount(acc)
        })
      setView(Views.DEPLOYER_OR_ATTACHER)
    }
  }, [])

  return (
    <div className="App">
      <TopNav />

      {
        view === Views.CONNECT_ACCOUNT ? 
        <ConnectAccount connect={utils.connectAccount}/>
        : null
      }

      {
        view === Views.FUND_ACCOUNT ?
        <FundAccount balance={balance}  defaultFundAmt={defaults.defaultFundAmt} standardUnit={defaults.standardUnit} utils={utils}/>
        : null
      }

      {
        view === Views.DEPLOYER_OR_ATTACHER ?
        <DeployerOrAttacher utils={utils}/>
        : null
      } 

      {
        view === Views.DEPLOY ? 
        <Deploy reach={reach} balance={balance} standardUnit={defaults.standardUnit} utils={utils} defaultWager={defaults.defaultWager}/>
        : null
      }

      {
        view === Views.ATTACH ? 
        <Attach reach={reach} balance={balance} standardUnit={defaults.standardUnit} utils={utils} />
        : null
      }     

    </div>
  );
}

export default App;
