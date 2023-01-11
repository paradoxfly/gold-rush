import React, { useEffect, useState } from 'react';
import { Views } from './utils/constants';
import './App.css';

//Components or Views
import TopNav from './Components/TopNav/TopNav';
import FundAccount from './Components/Views/FundAccount';
import DeployerOrAttacher from './Components/Views/DeployerOrAttacher';
import Attach from './Components/Views/Attacher';
import Deploy from './Components/Views/Deployer';

//Reach
import * as backend from './build/index.main.mjs'
import {loadStdlib} from '@reach-sh/stdlib';
import MyAlgoConnect from '@randlabs/myalgo-connect'
import { useRecoilState } from 'recoil';
import { connect, connecting as connectLoader } from './recoil/state';

const reach = loadStdlib('ALGO');
reach.setWalletFallback(reach.walletFallback( { providerEnv: 'TestNet', MyAlgoConnect } ));
const { standardUnit } = reach;
const defaults = { defaultFundAmt: '10', defaultWager: '3', standardUnit };

// localStorage.clear()

function App(){
  const [ view, setView ] = useState(Views.DEPLOYER_OR_ATTACHER)
  const [canConnect, setCanConnect] = useRecoilState(connect)
  const [connecting, setConnecting] = useRecoilState(connectLoader)
  const [ account, setAccount ] = useState({})
  const [ balance, setBalance ] = useState(0)
  const [ address, setAddress ] = useState('')

  const connectAccount = async () => {
    try {
      setConnecting(true)
      const account = await reach.getDefaultAccount();
      localStorage.setItem('connected', 'yes')
      localStorage.setItem('account', JSON.stringify(account.networkAccount))
      const balanceAtomic = await reach.balanceOf(account);
      const balance = reach.formatCurrency(balanceAtomic, 4);
      setAddress(account.networkAccount.addr)
      setAccount(account);
      setBalance(balance);
      setConnecting(false)
    } catch (error) {
      console.log(error)
      setConnecting(false)
    }
  }

  const selectDeployer =  async () => {
    await connectAccount()
    setView(Views.DEPLOY)
  }

  const selectAttacher = async () => {
    await connectAccount()
    setView(Views.ATTACH)
  }

  const playAgain = async () => {
    setView(Views.DEPLOYER_OR_ATTACHER)
  }

  const attach = (ctcInfoStr, attacher) => {
    const ctc = account.contract(backend, JSON.parse(ctcInfoStr));
    setCanConnect(false)
    backend.Bob(ctc, attacher);
  }
  
  const deploy = async (deployer, wager) => {
    const ctc = account.contract(backend);
    const deadline = {ETH: 10, ALGO: 100, CFX: 1000}[reach.connector];
    deployer.setWagerAndDeadline(reach.parseCurrency(wager), deadline)
    backend.Alice(ctc, deployer)
    setCanConnect(false)
    return JSON.stringify(await ctc.getInfo(), null, 2);
  }

  const utils = { connectAccount, selectDeployer, selectAttacher, playAgain,attach, deploy }

  useEffect(() => {
    const connected = localStorage.getItem('connected')
    if(connected === 'yes'){
      reach.connectAccount(JSON.parse(localStorage.getItem(('account'))))
        .then(acc => {
          setAddress(acc.networkAccount.addr)
          setAccount(acc)
        })
    }
  }, [])

  return (
    <div className="App">
      <TopNav connecting={connecting} address={address} connect={utils.connectAccount} canConnect={canConnect}/>

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
