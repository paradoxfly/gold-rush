// Automatically generated with Reach 0.1.13 (f79282c4)
/* eslint-disable */
export const _version = '0.1.13';
export const _versionHash = '0.1.13 (f79282c4)';
export const _backendVersion = 27;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1],
      7: [ctc0, ctc1, ctc0, ctc1, ctc1, ctc1],
      8: [ctc0, ctc1, ctc0, ctc1, ctc1, ctc1, ctc1],
      9: [ctc0, ctc1, ctc0, ctc1, ctc1, ctc1, ctc1, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Address;
  
  
  const v194 = stdlib.protect(ctc0, interact.deadline, 'for Alice\'s interact field deadline');
  const v195 = stdlib.protect(ctc0, interact.wager, 'for Alice\'s interact field wager');
  
  const txn1 = await (ctc.sendrecv({
    args: [v195, v194],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:92:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [v195, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v199, v200], secs: v202, time: v201, didSend: v31, from: v198 } = txn1;
      
      sim_r.txns.push({
        amt: v199,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v211 = stdlib.safeAdd(v201, v200);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v199, v200], secs: v202, time: v201, didSend: v31, from: v198 } = txn1;
  ;
  const v211 = stdlib.safeAdd(v201, v200);
  stdlib.protect(ctc1, await interact.informWaitingForAttacher(), {
    at: './index.rsh:96:42:application',
    fs: ['at ./index.rsh:96:42:application call to [unknown function] (defined at: ./index.rsh:96:42:function exp)', 'at ./index.rsh:96:42:application call to "liftedInteract" (defined at: ./index.rsh:96:42:application)'],
    msg: 'informWaitingForAttacher',
    who: 'Alice'
    });
  
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: ['time', v211],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v198, v199, v211],
      evt_cnt: 0,
      funcNum: 2,
      lct: v201,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v319, time: v318, didSend: v160, from: v317 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v198,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc2, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v319, time: v318, didSend: v160, from: v317 } = txn3;
    ;
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:77:29:application',
      fs: ['at ./index.rsh:76:9:application call to [unknown function] (defined at: ./index.rsh:76:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:75:28:function exp)', 'at ./index.rsh:103:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeout',
      who: 'Alice'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v218, time: v217, didSend: v44, from: v216 } = txn2;
    ;
    stdlib.protect(ctc1, await interact.informAcceptedWager(), {
      at: './index.rsh:105:37:application',
      fs: ['at ./index.rsh:105:37:application call to [unknown function] (defined at: ./index.rsh:105:37:function exp)', 'at ./index.rsh:105:37:application call to "liftedInteract" (defined at: ./index.rsh:105:37:application)'],
      msg: 'informAcceptedWager',
      who: 'Alice'
      });
    
    let v222 = stdlib.checkedBigNumberify('./index.rsh:108:50:decimal', stdlib.UInt_max, '0');
    let v223 = stdlib.checkedBigNumberify('./index.rsh:108:53:decimal', stdlib.UInt_max, '0');
    let v224 = stdlib.checkedBigNumberify('./index.rsh:108:56:decimal', stdlib.UInt_max, '0');
    let v225 = v217;
    
    let txn3 = txn2;
    while (await (async () => {
      const v236 = stdlib.lt(v222, stdlib.checkedBigNumberify('./index.rsh:110:17:decimal', stdlib.UInt_max, '3'));
      
      return v236;})()) {
      stdlib.protect(ctc1, await interact.informNewRound(), {
        at: './index.rsh:83:30:application',
        fs: ['at ./index.rsh:82:9:application call to [unknown function] (defined at: ./index.rsh:82:27:function exp)', 'at ./index.rsh:113:19:application call to "informNewRound" (defined at: ./index.rsh:81:29:function exp)'],
        msg: 'informNewRound',
        who: 'Alice'
        });
      
      const txn4 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 4,
        out_tys: [ctc0],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v246], secs: v248, time: v247, didSend: v74, from: v245 } = txn4;
      ;
      const v249 = stdlib.addressEq(v216, v245);
      stdlib.assert(v249, {
        at: './index.rsh:119:9:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Alice'
        });
      stdlib.protect(ctc1, await interact.opponentReplay(v246), {
        at: './index.rsh:124:30:application',
        fs: ['at ./index.rsh:123:15:application call to [unknown function] (defined at: ./index.rsh:123:19:function exp)'],
        msg: 'opponentReplay',
        who: 'Alice'
        });
      const v252 = stdlib.protect(ctc0, await interact.getTime(), {
        at: './index.rsh:125:52:application',
        fs: ['at ./index.rsh:123:15:application call to [unknown function] (defined at: ./index.rsh:123:19:function exp)'],
        msg: 'getTime',
        who: 'Alice'
        });
      
      const txn5 = await (ctc.sendrecv({
        args: [v198, v199, v216, v222, v223, v224, v246, v252],
        evt_cnt: 1,
        funcNum: 5,
        lct: v247,
        onlyIf: true,
        out_tys: [ctc0],
        pay: [stdlib.checkedBigNumberify('./index.rsh:127:11:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn5) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v254], secs: v256, time: v255, didSend: v84, from: v253 } = txn5;
          
          ;
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc2, ctc0, ctc2, ctc0, ctc0, ctc0, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [v254], secs: v256, time: v255, didSend: v84, from: v253 } = txn5;
      ;
      const v257 = stdlib.addressEq(v198, v253);
      stdlib.assert(v257, {
        at: './index.rsh:127:11:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Alice'
        });
      const txn6 = await (ctc.recv({
        didSend: false,
        evt_cnt: 0,
        funcNum: 6,
        out_tys: [],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [], secs: v262, time: v261, didSend: v92, from: v260 } = txn6;
      ;
      const v263 = stdlib.addressEq(v216, v260);
      stdlib.assert(v263, {
        at: './index.rsh:133:9:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Alice'
        });
      const v264 = stdlib.safeAdd(v222, stdlib.checkedBigNumberify('./index.rsh:135:57:decimal', stdlib.UInt_max, '1'));
      const v265 = stdlib.safeAdd(v223, v254);
      const v266 = stdlib.safeAdd(v224, v246);
      const cv222 = v264;
      const cv223 = v265;
      const cv224 = v266;
      const cv225 = v261;
      
      v222 = cv222;
      v223 = cv223;
      v224 = cv224;
      v225 = cv225;
      
      txn3 = txn6;
      continue;
      
      
      
      
      
      }
    const v268 = stdlib.eq(v223, v224);
    const v269 = stdlib.gt(v223, v224);
    const v332 = v269 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
    const v267 = v268 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1') : v332;
    const v270 = stdlib.eq(v267, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
    if (v270) {
      const v273 = 'draw            ';
      stdlib.protect(ctc1, await interact.showWinner(v273), {
        at: './index.rsh:29:26:application',
        fs: ['at ./index.rsh:28:9:application call to [unknown function] (defined at: ./index.rsh:28:27:function exp)', 'at ./index.rsh:141:12:application call to "payWinner" (defined at: ./index.rsh:26:48:function exp)'],
        msg: 'showWinner',
        who: 'Alice'
        });
      
      ;
      ;
      return;
      }
    else {
      const v288 = stdlib.eq(v267, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
      if (v288) {
        const v289 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:35:14:decimal', stdlib.UInt_max, '2'), v199);
        ;
        const v296 = 'alice           ';
        stdlib.protect(ctc1, await interact.showWinner(v296), {
          at: './index.rsh:37:26:application',
          fs: ['at ./index.rsh:36:9:application call to [unknown function] (defined at: ./index.rsh:36:27:function exp)', 'at ./index.rsh:141:12:application call to "payWinner" (defined at: ./index.rsh:26:48:function exp)'],
          msg: 'showWinner',
          who: 'Alice'
          });
        
        return;
        }
      else {
        const v303 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:41:14:decimal', stdlib.UInt_max, '2'), v199);
        ;
        const v310 = 'bob             ';
        stdlib.protect(ctc1, await interact.showWinner(v310), {
          at: './index.rsh:43:26:application',
          fs: ['at ./index.rsh:42:9:application call to [unknown function] (defined at: ./index.rsh:42:27:function exp)', 'at ./index.rsh:141:12:application call to "payWinner" (defined at: ./index.rsh:26:48:function exp)'],
          msg: 'showWinner',
          who: 'Alice'
          });
        
        return;
        }}}
  
  
  
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v199, v200], secs: v202, time: v201, didSend: v31, from: v198 } = txn1;
  ;
  const v211 = stdlib.safeAdd(v201, v200);
  stdlib.protect(ctc1, await interact.acceptWager(v199), {
    at: './index.rsh:100:25:application',
    fs: ['at ./index.rsh:99:11:application call to [unknown function] (defined at: ./index.rsh:99:15:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v198, v199, v211],
    evt_cnt: 0,
    funcNum: 1,
    lct: v201,
    onlyIf: true,
    out_tys: [],
    pay: [v199, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v218, time: v217, didSend: v44, from: v216 } = txn2;
      
      sim_r.txns.push({
        amt: v199,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v222 = stdlib.checkedBigNumberify('./index.rsh:108:50:decimal', stdlib.UInt_max, '0');
      const v223 = stdlib.checkedBigNumberify('./index.rsh:108:53:decimal', stdlib.UInt_max, '0');
      const v224 = stdlib.checkedBigNumberify('./index.rsh:108:56:decimal', stdlib.UInt_max, '0');
      const v225 = v217;
      
      if (await (async () => {
        const v236 = stdlib.lt(v222, stdlib.checkedBigNumberify('./index.rsh:110:17:decimal', stdlib.UInt_max, '3'));
        
        return v236;})()) {
        sim_r.isHalt = false;
        }
      else {
        const v268 = stdlib.eq(v223, v224);
        const v269 = stdlib.gt(v223, v224);
        const v332 = v269 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
        const v267 = v268 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1') : v332;
        const v270 = stdlib.eq(v267, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
        if (v270) {
          
          sim_r.txns.push({
            kind: 'from',
            to: v198,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'from',
            to: v216,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }
        else {
          const v288 = stdlib.eq(v267, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
          if (v288) {
            const v289 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:35:14:decimal', stdlib.UInt_max, '2'), v199);
            sim_r.txns.push({
              kind: 'from',
              to: v198,
              tok: undefined /* Nothing */
              });
            
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            const v303 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:41:14:decimal', stdlib.UInt_max, '2'), v199);
            sim_r.txns.push({
              kind: 'from',
              to: v216,
              tok: undefined /* Nothing */
              });
            
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }}}
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: ['time', v211],
    tys: [ctc2, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v198, v199, v211],
      evt_cnt: 0,
      funcNum: 2,
      lct: v201,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v319, time: v318, didSend: v160, from: v317 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v198,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc2, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v319, time: v318, didSend: v160, from: v317 } = txn3;
    ;
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:77:29:application',
      fs: ['at ./index.rsh:76:9:application call to [unknown function] (defined at: ./index.rsh:76:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:75:28:function exp)', 'at ./index.rsh:103:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeout',
      who: 'Bob'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v218, time: v217, didSend: v44, from: v216 } = txn2;
    ;
    let v222 = stdlib.checkedBigNumberify('./index.rsh:108:50:decimal', stdlib.UInt_max, '0');
    let v223 = stdlib.checkedBigNumberify('./index.rsh:108:53:decimal', stdlib.UInt_max, '0');
    let v224 = stdlib.checkedBigNumberify('./index.rsh:108:56:decimal', stdlib.UInt_max, '0');
    let v225 = v217;
    
    let txn3 = txn2;
    while (await (async () => {
      const v236 = stdlib.lt(v222, stdlib.checkedBigNumberify('./index.rsh:110:17:decimal', stdlib.UInt_max, '3'));
      
      return v236;})()) {
      stdlib.protect(ctc1, await interact.informNewRound(), {
        at: './index.rsh:83:30:application',
        fs: ['at ./index.rsh:82:9:application call to [unknown function] (defined at: ./index.rsh:82:27:function exp)', 'at ./index.rsh:113:19:application call to "informNewRound" (defined at: ./index.rsh:81:29:function exp)'],
        msg: 'informNewRound',
        who: 'Bob'
        });
      
      const v244 = stdlib.protect(ctc0, await interact.getTime(), {
        at: './index.rsh:117:50:application',
        fs: ['at ./index.rsh:116:13:application call to [unknown function] (defined at: ./index.rsh:116:17:function exp)'],
        msg: 'getTime',
        who: 'Bob'
        });
      
      const txn4 = await (ctc.sendrecv({
        args: [v198, v199, v216, v222, v223, v224, v244],
        evt_cnt: 1,
        funcNum: 4,
        lct: v225,
        onlyIf: true,
        out_tys: [ctc0],
        pay: [stdlib.checkedBigNumberify('./index.rsh:119:9:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v246], secs: v248, time: v247, didSend: v74, from: v245 } = txn4;
          
          ;
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc2, ctc0, ctc2, ctc0, ctc0, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [v246], secs: v248, time: v247, didSend: v74, from: v245 } = txn4;
      ;
      const v249 = stdlib.addressEq(v216, v245);
      stdlib.assert(v249, {
        at: './index.rsh:119:9:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Bob'
        });
      const txn5 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 5,
        out_tys: [ctc0],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v254], secs: v256, time: v255, didSend: v84, from: v253 } = txn5;
      ;
      const v257 = stdlib.addressEq(v198, v253);
      stdlib.assert(v257, {
        at: './index.rsh:127:11:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Bob'
        });
      stdlib.protect(ctc1, await interact.opponentReplay(v254), {
        at: './index.rsh:131:30:application',
        fs: ['at ./index.rsh:130:13:application call to [unknown function] (defined at: ./index.rsh:130:17:function exp)'],
        msg: 'opponentReplay',
        who: 'Bob'
        });
      
      const txn6 = await (ctc.sendrecv({
        args: [v198, v199, v216, v222, v223, v224, v246, v254],
        evt_cnt: 0,
        funcNum: 6,
        lct: v255,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:133:9:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn6) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v262, time: v261, didSend: v92, from: v260 } = txn6;
          
          ;
          const v264 = stdlib.safeAdd(v222, stdlib.checkedBigNumberify('./index.rsh:135:57:decimal', stdlib.UInt_max, '1'));
          const v265 = stdlib.safeAdd(v223, v254);
          const v266 = stdlib.safeAdd(v224, v246);
          const cv222 = v264;
          const cv223 = v265;
          const cv224 = v266;
          const cv225 = v261;
          
          await (async () => {
            const v222 = cv222;
            const v223 = cv223;
            const v224 = cv224;
            const v225 = cv225;
            
            if (await (async () => {
              const v236 = stdlib.lt(v222, stdlib.checkedBigNumberify('./index.rsh:110:17:decimal', stdlib.UInt_max, '3'));
              
              return v236;})()) {
              sim_r.isHalt = false;
              }
            else {
              const v268 = stdlib.eq(v223, v224);
              const v269 = stdlib.gt(v223, v224);
              const v332 = v269 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
              const v267 = v268 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1') : v332;
              const v270 = stdlib.eq(v267, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
              if (v270) {
                
                sim_r.txns.push({
                  kind: 'from',
                  to: v198,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'from',
                  to: v216,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }
              else {
                const v288 = stdlib.eq(v267, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
                if (v288) {
                  const v289 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:35:14:decimal', stdlib.UInt_max, '2'), v199);
                  sim_r.txns.push({
                    kind: 'from',
                    to: v198,
                    tok: undefined /* Nothing */
                    });
                  
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }
                else {
                  const v303 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:41:14:decimal', stdlib.UInt_max, '2'), v199);
                  sim_r.txns.push({
                    kind: 'from',
                    to: v216,
                    tok: undefined /* Nothing */
                    });
                  
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }}}})();
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc2, ctc0, ctc2, ctc0, ctc0, ctc0, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v262, time: v261, didSend: v92, from: v260 } = txn6;
      ;
      const v263 = stdlib.addressEq(v216, v260);
      stdlib.assert(v263, {
        at: './index.rsh:133:9:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Bob'
        });
      const v264 = stdlib.safeAdd(v222, stdlib.checkedBigNumberify('./index.rsh:135:57:decimal', stdlib.UInt_max, '1'));
      const v265 = stdlib.safeAdd(v223, v254);
      const v266 = stdlib.safeAdd(v224, v246);
      const cv222 = v264;
      const cv223 = v265;
      const cv224 = v266;
      const cv225 = v261;
      
      v222 = cv222;
      v223 = cv223;
      v224 = cv224;
      v225 = cv225;
      
      txn3 = txn6;
      continue;
      
      
      
      
      
      }
    const v268 = stdlib.eq(v223, v224);
    const v269 = stdlib.gt(v223, v224);
    const v332 = v269 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
    const v267 = v268 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1') : v332;
    const v270 = stdlib.eq(v267, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
    if (v270) {
      const v276 = 'draw            ';
      stdlib.protect(ctc1, await interact.showWinner(v276), {
        at: './index.rsh:29:26:application',
        fs: ['at ./index.rsh:28:9:application call to [unknown function] (defined at: ./index.rsh:28:27:function exp)', 'at ./index.rsh:141:12:application call to "payWinner" (defined at: ./index.rsh:26:48:function exp)'],
        msg: 'showWinner',
        who: 'Bob'
        });
      
      ;
      ;
      return;
      }
    else {
      const v288 = stdlib.eq(v267, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
      if (v288) {
        const v289 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:35:14:decimal', stdlib.UInt_max, '2'), v199);
        ;
        const v299 = 'alice           ';
        stdlib.protect(ctc1, await interact.showWinner(v299), {
          at: './index.rsh:37:26:application',
          fs: ['at ./index.rsh:36:9:application call to [unknown function] (defined at: ./index.rsh:36:27:function exp)', 'at ./index.rsh:141:12:application call to "payWinner" (defined at: ./index.rsh:26:48:function exp)'],
          msg: 'showWinner',
          who: 'Bob'
          });
        
        return;
        }
      else {
        const v303 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:41:14:decimal', stdlib.UInt_max, '2'), v199);
        ;
        const v313 = 'bob             ';
        stdlib.protect(ctc1, await interact.showWinner(v313), {
          at: './index.rsh:43:26:application',
          fs: ['at ./index.rsh:42:9:application call to [unknown function] (defined at: ./index.rsh:42:27:function exp)', 'at ./index.rsh:141:12:application call to "payWinner" (defined at: ./index.rsh:26:48:function exp)'],
          msg: 'showWinner',
          who: 'Bob'
          });
        
        return;
        }}}
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [`_reachp_0((uint64,uint64,uint64))void`, `_reachp_1((uint64))void`, `_reachp_2((uint64))void`, `_reachp_4((uint64,uint64))void`, `_reachp_5((uint64,uint64))void`, `_reachp_6((uint64))void`],
    pure: [],
    sigs: [`_reachp_0((uint64,uint64,uint64))void`, `_reachp_1((uint64))void`, `_reachp_2((uint64))void`, `_reachp_4((uint64,uint64))void`, `_reachp_5((uint64,uint64))void`, `_reachp_6((uint64))void`]
    },
  GlobalNumByteSlice: 2,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `CCAMAAEIAiBIUFgQB2AJJgIAAQAxGEEC9ShkSSJbNQEkWzUCKWSCBgR1DuQGBIxAgLoEmUBBBgSkcTyWBN/ZIygE+NiPIzYaAI4GAosCrAKhAmwCgAKWADEANRU0DCJbNQ00DCRbNRQ0DCEIWzULgAT3cRNNNA0WUDQUFlA0CxZQsDQNiAMiNBSIAycyBjQLCDUNNBU0FBZQNA0WUIFAr1AjMgY1AjUBKUxXAHBnKDQBFjQCFlBnMRkiEkSIAyI0A0AACoAEFR98dTQEULAjQzEANRMjNAESRIgC8zQLFzUMgATVFRkUNAwWULA0DIgCuDIGNA0MRDQUiAK3IiIiMgY1DzUQNRE1EjQSgQMMQQIkNBU0FBZQNBNQNBIWUDQRFlA0EBZQIQivUCEJMgZC/3MjNAESRIgCljQLFzUMgASXTvcXNAwWULA0DIgCWzIGNA0PRDQUNBWIAkoxGYEFEkSIAn0iMgoyCYgCgUL/UCEJNAESRElXACA1FUkhBFs1FElXKCA1E0khBVs1EkkhBls1ESEHWzUQNAsiWzUMNAskWzUOgAQQRq1zNAwWUDQOFlCwNAyIAfE0EzEAEkQ0FTQUFlA0E1A0EhZQNBEWUDQQFlA0DhZQJK9QJDIGQv7EJDQBEkRJVwAgNRVJIQRbNRRJVyggNRNJIQVbNRJJIQZbNRFJIQdbNRAhCls1DjQLIls1DDQLJFs1DYAEs1H3jzQMFlA0DRZQsDQMiAF7NBUxABJENBU0FBZQNBNQNBIWUDQRFlA0EBZQNA4WUDQNFlAhCzIGQv5MIQs0ARJESVcAIDUVSSEEWzUUSVcoIDUTSSEFWzUSSSEGWzURSSEHWzUQSSEKWzUOgWhbNQ00Cxc1DIAEcO3vejQMFlCwNAyIAQc0EzEAEkQ0EiMINBE0DQg0EDQOCDIGNQ81EDURNRJC/kaIANuBoI0GNAYINQY2GgE1DEL9gYgAxzYaATULQv3uiAC8NhoBNQtC/kSIALE2GgE1C0L+d4gApjYaATULQv7diACbNhoBNQtC/0oiMTQSRCUxNRJEIjE2EkQiMTcSRIgAfIFwryIiQv13MRkiEkRC/Y8lIjQRNBANTSM0ETQQEk1JNQsjEkEAETQUNBWIAFI0FDQTiABLQv3+NAslEkEADCU0FAs0FYgAOEL96yU0FAs0E4gALEL93yKyASOyELIHsgiziUiJTAlJNQYyCYgAEYkJSUH/7kk1BogAE4kjNQOJsUL/00kiEkw0AhIRRIkxFjQAIwhJNQAJRwI4BzIKEkQ4ECMSRDgIEkSJSVcAIDUVSSEEWzUUgShbNQ2JNAY0B0oPQf+gQv+osbIJQv+J`,
  appApprovalMap: {
    0: `2`,
    1: `2`,
    10: `2`,
    100: `31`,
    1000: `624`,
    1001: `624`,
    1002: `625`,
    1003: `625`,
    1004: `625`,
    1005: `627`,
    1006: `628`,
    1007: `628`,
    1008: `629`,
    101: `32`,
    102: `33`,
    103: `33`,
    104: `34`,
    105: `34`,
    106: `35`,
    107: `35`,
    108: `36`,
    109: `37`,
    11: `2`,
    110: `37`,
    111: `38`,
    112: `38`,
    113: `38`,
    114: `38`,
    115: `38`,
    116: `38`,
    117: `39`,
    118: `39`,
    119: `40`,
    12: `2`,
    120: `41`,
    121: `42`,
    122: `42`,
    123: `43`,
    124: `44`,
    125: `45`,
    126: `45`,
    127: `46`,
    128: `47`,
    129: `48`,
    13: `2`,
    130: `50`,
    131: `50`,
    132: `51`,
    133: `51`,
    134: `51`,
    135: `52`,
    136: `52`,
    137: `53`,
    138: `53`,
    139: `53`,
    14: `2`,
    140: `56`,
    141: `56`,
    142: `57`,
    143: `57`,
    144: `58`,
    145: `59`,
    146: `59`,
    147: `61`,
    148: `61`,
    149: `62`,
    15: `2`,
    150: `62`,
    151: `63`,
    152: `64`,
    153: `65`,
    154: `65`,
    155: `66`,
    156: `67`,
    157: `68`,
    158: `68`,
    159: `69`,
    16: `2`,
    160: `70`,
    161: `71`,
    162: `72`,
    163: `72`,
    164: `74`,
    165: `74`,
    166: `75`,
    167: `75`,
    168: `76`,
    169: `77`,
    17: `2`,
    170: `78`,
    171: `78`,
    172: `78`,
    173: `79`,
    174: `80`,
    175: `81`,
    176: `81`,
    177: `82`,
    178: `83`,
    179: `83`,
    18: `2`,
    180: `84`,
    181: `85`,
    182: `86`,
    183: `87`,
    184: `87`,
    185: `88`,
    186: `89`,
    187: `90`,
    188: `92`,
    189: `92`,
    19: `2`,
    190: `92`,
    191: `94`,
    192: `94`,
    193: `95`,
    194: `95`,
    195: `95`,
    196: `97`,
    197: `97`,
    198: `97`,
    199: `97`,
    2: `2`,
    20: `4`,
    200: `97`,
    201: `97`,
    202: `98`,
    203: `98`,
    204: `99`,
    205: `100`,
    206: `102`,
    207: `103`,
    208: `105`,
    209: `105`,
    21: `4`,
    210: `106`,
    211: `106`,
    212: `107`,
    213: `108`,
    214: `108`,
    215: `109`,
    216: `110`,
    217: `111`,
    218: `111`,
    219: `111`,
    22: `5`,
    220: `112`,
    221: `112`,
    222: `113`,
    223: `114`,
    224: `114`,
    225: `115`,
    226: `115`,
    227: `115`,
    228: `115`,
    229: `115`,
    23: `5`,
    230: `115`,
    231: `116`,
    232: `116`,
    233: `117`,
    234: `118`,
    235: `119`,
    236: `121`,
    237: `121`,
    238: `122`,
    239: `122`,
    24: `5`,
    240: `122`,
    241: `123`,
    242: `123`,
    243: `124`,
    244: `124`,
    245: `125`,
    246: `126`,
    247: `127`,
    248: `127`,
    249: `128`,
    25: `6`,
    250: `128`,
    251: `128`,
    252: `131`,
    253: `132`,
    254: `133`,
    255: `134`,
    256: `134`,
    257: `135`,
    258: `135`,
    259: `136`,
    26: `7`,
    260: `136`,
    261: `137`,
    262: `137`,
    263: `138`,
    264: `138`,
    265: `140`,
    266: `140`,
    267: `141`,
    268: `141`,
    269: `142`,
    27: `8`,
    270: `143`,
    271: `143`,
    272: `143`,
    273: `145`,
    274: `145`,
    275: `146`,
    276: `146`,
    277: `147`,
    278: `148`,
    279: `149`,
    28: `9`,
    280: `149`,
    281: `150`,
    282: `151`,
    283: `151`,
    284: `152`,
    285: `153`,
    286: `154`,
    287: `154`,
    288: `155`,
    289: `156`,
    29: `10`,
    290: `157`,
    291: `157`,
    292: `158`,
    293: `159`,
    294: `160`,
    295: `160`,
    296: `161`,
    297: `162`,
    298: `163`,
    299: `163`,
    3: `2`,
    30: `11`,
    300: `164`,
    301: `164`,
    302: `165`,
    303: `165`,
    304: `165`,
    305: `167`,
    306: `168`,
    307: `168`,
    308: `169`,
    309: `170`,
    31: `11`,
    310: `171`,
    311: `171`,
    312: `171`,
    313: `172`,
    314: `172`,
    315: `173`,
    316: `174`,
    317: `174`,
    318: `175`,
    319: `175`,
    32: `12`,
    320: `175`,
    321: `175`,
    322: `175`,
    323: `175`,
    324: `176`,
    325: `176`,
    326: `177`,
    327: `178`,
    328: `179`,
    329: `181`,
    33: `13`,
    330: `181`,
    331: `182`,
    332: `182`,
    333: `182`,
    334: `183`,
    335: `183`,
    336: `184`,
    337: `184`,
    338: `185`,
    339: `186`,
    34: `14`,
    340: `187`,
    341: `187`,
    342: `189`,
    343: `189`,
    344: `190`,
    345: `190`,
    346: `190`,
    347: `192`,
    348: `192`,
    349: `193`,
    35: `14`,
    350: `193`,
    351: `194`,
    352: `195`,
    353: `197`,
    354: `197`,
    355: `197`,
    356: `199`,
    357: `200`,
    358: `200`,
    359: `201`,
    36: `15`,
    360: `201`,
    361: `202`,
    362: `202`,
    363: `202`,
    364: `203`,
    365: `203`,
    366: `203`,
    367: `205`,
    368: `205`,
    369: `206`,
    37: `16`,
    370: `206`,
    371: `207`,
    372: `208`,
    373: `210`,
    374: `211`,
    375: `211`,
    376: `211`,
    377: `212`,
    378: `212`,
    379: `213`,
    38: `18`,
    380: `214`,
    381: `214`,
    382: `215`,
    383: `216`,
    384: `216`,
    385: `217`,
    386: `218`,
    387: `218`,
    388: `218`,
    389: `219`,
    39: `18`,
    390: `219`,
    391: `220`,
    392: `221`,
    393: `221`,
    394: `222`,
    395: `223`,
    396: `223`,
    397: `224`,
    398: `225`,
    399: `225`,
    4: `2`,
    40: `18`,
    400: `226`,
    401: `227`,
    402: `227`,
    403: `228`,
    404: `228`,
    405: `229`,
    406: `230`,
    407: `230`,
    408: `231`,
    409: `231`,
    41: `18`,
    410: `232`,
    411: `233`,
    412: `234`,
    413: `234`,
    414: `235`,
    415: `235`,
    416: `236`,
    417: `237`,
    418: `238`,
    419: `238`,
    42: `18`,
    420: `239`,
    421: `239`,
    422: `239`,
    423: `239`,
    424: `239`,
    425: `239`,
    426: `240`,
    427: `240`,
    428: `241`,
    429: `242`,
    43: `18`,
    430: `243`,
    431: `243`,
    432: `244`,
    433: `245`,
    434: `246`,
    435: `248`,
    436: `248`,
    437: `249`,
    438: `249`,
    439: `249`,
    44: `18`,
    440: `250`,
    441: `250`,
    442: `251`,
    443: `251`,
    444: `252`,
    445: `253`,
    446: `257`,
    447: `257`,
    448: `258`,
    449: `258`,
    45: `18`,
    450: `259`,
    451: `260`,
    452: `261`,
    453: `261`,
    454: `262`,
    455: `263`,
    456: `263`,
    457: `264`,
    458: `265`,
    459: `266`,
    46: `18`,
    460: `266`,
    461: `267`,
    462: `268`,
    463: `269`,
    464: `269`,
    465: `270`,
    466: `271`,
    467: `272`,
    468: `272`,
    469: `273`,
    47: `18`,
    470: `274`,
    471: `275`,
    472: `276`,
    473: `277`,
    474: `278`,
    475: `279`,
    476: `279`,
    477: `280`,
    478: `280`,
    479: `280`,
    48: `18`,
    480: `282`,
    481: `283`,
    482: `283`,
    483: `284`,
    484: `285`,
    485: `287`,
    486: `288`,
    487: `288`,
    488: `288`,
    489: `289`,
    49: `18`,
    490: `289`,
    491: `290`,
    492: `291`,
    493: `291`,
    494: `292`,
    495: `293`,
    496: `293`,
    497: `294`,
    498: `295`,
    499: `295`,
    5: `2`,
    50: `18`,
    500: `295`,
    501: `296`,
    502: `296`,
    503: `297`,
    504: `298`,
    505: `298`,
    506: `299`,
    507: `300`,
    508: `300`,
    509: `301`,
    51: `18`,
    510: `302`,
    511: `302`,
    512: `303`,
    513: `304`,
    514: `304`,
    515: `305`,
    516: `306`,
    517: `306`,
    518: `307`,
    519: `308`,
    52: `18`,
    520: `308`,
    521: `309`,
    522: `309`,
    523: `310`,
    524: `311`,
    525: `311`,
    526: `312`,
    527: `312`,
    528: `313`,
    529: `314`,
    53: `18`,
    530: `315`,
    531: `315`,
    532: `316`,
    533: `316`,
    534: `317`,
    535: `318`,
    536: `319`,
    537: `319`,
    538: `320`,
    539: `320`,
    54: `18`,
    540: `320`,
    541: `320`,
    542: `320`,
    543: `320`,
    544: `321`,
    545: `321`,
    546: `322`,
    547: `323`,
    548: `324`,
    549: `324`,
    55: `18`,
    550: `325`,
    551: `326`,
    552: `327`,
    553: `329`,
    554: `329`,
    555: `330`,
    556: `330`,
    557: `330`,
    558: `331`,
    559: `331`,
    56: `18`,
    560: `332`,
    561: `332`,
    562: `333`,
    563: `334`,
    564: `338`,
    565: `338`,
    566: `339`,
    567: `339`,
    568: `340`,
    569: `341`,
    57: `18`,
    570: `342`,
    571: `342`,
    572: `343`,
    573: `344`,
    574: `344`,
    575: `345`,
    576: `346`,
    577: `347`,
    578: `347`,
    579: `348`,
    58: `18`,
    580: `349`,
    581: `350`,
    582: `350`,
    583: `351`,
    584: `352`,
    585: `353`,
    586: `353`,
    587: `354`,
    588: `355`,
    589: `356`,
    59: `18`,
    590: `356`,
    591: `357`,
    592: `358`,
    593: `359`,
    594: `359`,
    595: `360`,
    596: `360`,
    597: `361`,
    598: `361`,
    599: `361`,
    6: `2`,
    60: `18`,
    600: `363`,
    601: `363`,
    602: `364`,
    603: `364`,
    604: `365`,
    605: `366`,
    606: `368`,
    607: `369`,
    608: `369`,
    609: `369`,
    61: `18`,
    610: `370`,
    611: `370`,
    612: `371`,
    613: `372`,
    614: `372`,
    615: `373`,
    616: `374`,
    617: `374`,
    618: `375`,
    619: `376`,
    62: `18`,
    620: `376`,
    621: `376`,
    622: `377`,
    623: `377`,
    624: `378`,
    625: `379`,
    626: `379`,
    627: `380`,
    628: `381`,
    629: `381`,
    63: `18`,
    630: `382`,
    631: `383`,
    632: `383`,
    633: `384`,
    634: `385`,
    635: `385`,
    636: `386`,
    637: `387`,
    638: `387`,
    639: `388`,
    64: `18`,
    640: `389`,
    641: `389`,
    642: `390`,
    643: `391`,
    644: `391`,
    645: `392`,
    646: `393`,
    647: `393`,
    648: `394`,
    649: `394`,
    65: `18`,
    650: `395`,
    651: `396`,
    652: `396`,
    653: `397`,
    654: `397`,
    655: `398`,
    656: `399`,
    657: `399`,
    658: `400`,
    659: `400`,
    66: `18`,
    660: `400`,
    661: `400`,
    662: `400`,
    663: `400`,
    664: `401`,
    665: `401`,
    666: `402`,
    667: `403`,
    668: `404`,
    669: `406`,
    67: `18`,
    670: `406`,
    671: `407`,
    672: `407`,
    673: `407`,
    674: `408`,
    675: `408`,
    676: `409`,
    677: `409`,
    678: `410`,
    679: `411`,
    68: `18`,
    680: `414`,
    681: `414`,
    682: `415`,
    683: `416`,
    684: `417`,
    685: `417`,
    686: `418`,
    687: `418`,
    688: `419`,
    689: `420`,
    69: `18`,
    690: `420`,
    691: `421`,
    692: `421`,
    693: `422`,
    694: `423`,
    695: `423`,
    696: `424`,
    697: `424`,
    698: `425`,
    699: `425`,
    7: `2`,
    70: `19`,
    700: `426`,
    701: `426`,
    702: `427`,
    703: `427`,
    704: `428`,
    705: `428`,
    706: `428`,
    707: `430`,
    708: `430`,
    709: `430`,
    71: `19`,
    710: `431`,
    711: `431`,
    712: `431`,
    713: `431`,
    714: `433`,
    715: `433`,
    716: `434`,
    717: `435`,
    718: `435`,
    719: `436`,
    72: `19`,
    720: `436`,
    721: `436`,
    722: `437`,
    723: `437`,
    724: `438`,
    725: `438`,
    726: `438`,
    727: `440`,
    728: `440`,
    729: `440`,
    73: `20`,
    730: `441`,
    731: `441`,
    732: `441`,
    733: `442`,
    734: `442`,
    735: `443`,
    736: `443`,
    737: `443`,
    738: `445`,
    739: `445`,
    74: `20`,
    740: `445`,
    741: `446`,
    742: `446`,
    743: `446`,
    744: `447`,
    745: `447`,
    746: `448`,
    747: `448`,
    748: `448`,
    749: `450`,
    75: `20`,
    750: `450`,
    751: `450`,
    752: `451`,
    753: `451`,
    754: `451`,
    755: `452`,
    756: `452`,
    757: `453`,
    758: `453`,
    759: `453`,
    76: `20`,
    760: `455`,
    761: `455`,
    762: `455`,
    763: `456`,
    764: `456`,
    765: `456`,
    766: `457`,
    767: `457`,
    768: `458`,
    769: `458`,
    77: `20`,
    770: `458`,
    771: `460`,
    772: `460`,
    773: `460`,
    774: `461`,
    775: `461`,
    776: `461`,
    777: `462`,
    778: `462`,
    779: `463`,
    78: `20`,
    780: `463`,
    781: `463`,
    782: `465`,
    783: `466`,
    784: `466`,
    785: `467`,
    786: `468`,
    787: `469`,
    788: `470`,
    789: `470`,
    79: `20`,
    790: `471`,
    791: `472`,
    792: `473`,
    793: `474`,
    794: `474`,
    795: `475`,
    796: `476`,
    797: `477`,
    798: `478`,
    799: `478`,
    8: `2`,
    80: `20`,
    800: `479`,
    801: `480`,
    802: `481`,
    803: `481`,
    804: `481`,
    805: `482`,
    806: `482`,
    807: `483`,
    808: `484`,
    809: `485`,
    81: `20`,
    810: `486`,
    811: `486`,
    812: `486`,
    813: `488`,
    814: `488`,
    815: `489`,
    816: `490`,
    817: `491`,
    818: `493`,
    819: `493`,
    82: `20`,
    820: `493`,
    821: `495`,
    822: `496`,
    823: `497`,
    824: `497`,
    825: `498`,
    826: `498`,
    827: `499`,
    828: `500`,
    829: `501`,
    83: `20`,
    830: `502`,
    831: `502`,
    832: `503`,
    833: `503`,
    834: `504`,
    835: `505`,
    836: `506`,
    837: `507`,
    838: `507`,
    839: `508`,
    84: `20`,
    840: `509`,
    841: `510`,
    842: `510`,
    843: `510`,
    844: `511`,
    845: `511`,
    846: `513`,
    847: `513`,
    848: `514`,
    849: `514`,
    85: `20`,
    850: `514`,
    851: `515`,
    852: `515`,
    853: `517`,
    854: `517`,
    855: `518`,
    856: `518`,
    857: `518`,
    858: `519`,
    859: `519`,
    86: `20`,
    860: `519`,
    861: `521`,
    862: `521`,
    863: `522`,
    864: `523`,
    865: `524`,
    866: `524`,
    867: `524`,
    868: `525`,
    869: `526`,
    87: `22`,
    870: `526`,
    871: `527`,
    872: `529`,
    873: `529`,
    874: `530`,
    875: `530`,
    876: `530`,
    877: `531`,
    878: `531`,
    879: `531`,
    88: `24`,
    880: `533`,
    881: `534`,
    882: `534`,
    883: `535`,
    884: `537`,
    885: `537`,
    886: `538`,
    887: `538`,
    888: `538`,
    889: `539`,
    89: `24`,
    890: `539`,
    891: `539`,
    892: `541`,
    893: `542`,
    894: `542`,
    895: `543`,
    896: `544`,
    897: `544`,
    898: `545`,
    899: `545`,
    9: `2`,
    90: `25`,
    900: `546`,
    901: `546`,
    902: `547`,
    903: `548`,
    904: `550`,
    905: `551`,
    906: `553`,
    907: `554`,
    908: `555`,
    909: `556`,
    91: `25`,
    910: `556`,
    911: `557`,
    912: `557`,
    913: `558`,
    914: `558`,
    915: `558`,
    916: `559`,
    917: `561`,
    918: `562`,
    919: `563`,
    92: `26`,
    920: `563`,
    921: `563`,
    922: `564`,
    923: `565`,
    924: `565`,
    925: `566`,
    926: `566`,
    927: `566`,
    928: `567`,
    929: `569`,
    93: `26`,
    930: `570`,
    931: `570`,
    932: `571`,
    933: `573`,
    934: `574`,
    935: `574`,
    936: `574`,
    937: `576`,
    938: `577`,
    939: `578`,
    94: `27`,
    940: `579`,
    941: `580`,
    942: `580`,
    943: `581`,
    944: `582`,
    945: `583`,
    946: `584`,
    947: `587`,
    948: `587`,
    949: `588`,
    95: `28`,
    950: `588`,
    951: `589`,
    952: `590`,
    953: `591`,
    954: `592`,
    955: `592`,
    956: `593`,
    957: `594`,
    958: `594`,
    959: `595`,
    96: `29`,
    960: `595`,
    961: `596`,
    962: `596`,
    963: `597`,
    964: `598`,
    965: `599`,
    966: `599`,
    967: `600`,
    968: `601`,
    969: `602`,
    97: `29`,
    970: `603`,
    971: `603`,
    972: `604`,
    973: `605`,
    974: `606`,
    975: `608`,
    976: `609`,
    977: `609`,
    978: `609`,
    979: `610`,
    98: `30`,
    980: `610`,
    981: `611`,
    982: `612`,
    983: `612`,
    984: `613`,
    985: `614`,
    986: `614`,
    987: `615`,
    988: `615`,
    989: `616`,
    99: `30`,
    990: `617`,
    991: `617`,
    992: `618`,
    993: `620`,
    994: `620`,
    995: `621`,
    996: `621`,
    997: `622`,
    998: `623`,
    999: `624`
    },
  appClear: `CA==`,
  appClearMap: {
    },
  companionInfo: null,
  extraPages: 0,
  stateKeys: 1,
  stateSize: 112,
  unsupported: [],
  version: 13,
  warnings: []
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"internalType":"struct T0","name":"v435","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T2","name":"_a","type":"tuple"}],"name":"_reach_e1","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T2","name":"_a","type":"tuple"}],"name":"_reach_e2","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"indexed":false,"internalType":"struct T4","name":"_a","type":"tuple"}],"name":"_reach_e4","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"indexed":false,"internalType":"struct T4","name":"_a","type":"tuple"}],"name":"_reach_e5","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T2","name":"_a","type":"tuple"}],"name":"_reach_e6","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T2","name":"v438","type":"tuple"}],"name":"_reachp_1","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T2","name":"v441","type":"tuple"}],"name":"_reachp_2","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T4","name":"v444","type":"tuple"}],"name":"_reachp_4","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T4","name":"v447","type":"tuple"}],"name":"_reachp_5","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T2","name":"v450","type":"tuple"}],"name":"_reachp_6","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x60806200189e9081380391601f1980601f85011683019360018060401b0392848610848711176200033c57816060928692604098895283398101031262000352578351926200004e8462000357565b8051845260209385858301519286830193845201519486820195865243600355865191818301838110878211176200033c578852600080935260049060ff82541662000325577f4f453854b6a90dba7951e2aeeb8854b2b5f80576fe444dd363a967d18d9175e460808a5133815283518682015287518c8201528a516060820152a151801590811562000318575b5015620003015783513403620002ea57875193620000fa8562000357565b8285019784895289860191858352338752518952514301804311620002d757438110620002d35781526001808555438155895195516001600160a01b0316848701529751858a01525160608086019190915284526080840186811185821017620002c05788528351958611620002ad57600254908782811c92168015620002a2575b838310146200028f5750601f811162000243575b508093601f8611600114620001db57505091839491849394620001cf575b50501b916000199060031b1c1916176002555b5161152a9081620003748239f35b015192503880620001ae565b600283528183209493928692918316915b888383106200022857505050106200020e575b505050811b01600255620001c1565b015160001960f88460031b161c19169055388080620001ff565b858701518855909601959485019487935090810190620001ec565b60028352818320601f870160051c81019183881062000284575b601f0160051c019087905b8281106200027857505062000190565b84815501879062000268565b90915081906200025d565b634e487b7160e01b845260229052602483fd5b91607f16916200017c565b634e487b7160e01b835260419052602482fd5b634e487b7160e01b845260418252602484fd5b8480fd5b634e487b7160e01b855260118352602485fd5b602490600989519163100960cb60e01b8352820152fd5b602490600889519163100960cb60e01b8352820152fd5b90506001541438620000dc565b885163100960cb60e01b8152600781840152602490fd5b634e487b7160e01b600052604160045260246000fd5b600080fd5b606081019081106001600160401b038211176200033c5760405256fe608080604052600436101561001a575b50361561001857005b005b60003560e01c9081631e93b0f114611137575080632e92842114610d7b5780634b2f7b42146109cc578063573b8510146105df57806383230757146105c1578063ab53f2c61461054d578063e3342bfa146102095763f5a239bc1461007f573861000f565b60203660031901126102045760006040516100998161118c565b526100a3366112ae565b6001600054036101eb576100c76100b86111f9565b602080825183010191016112f2565b9060ff600454166101d2577f794b69bffed607ab45148da3c7f9c613ba8e4d2d82b625153563a3a2f536190a6040518061010284338361133c565b0390a15180159081156101c6575b50156101ad5760408101514310610194573461017b57600080808093602060018060a01b0382511691015190828215610172575bf1156101665760008055600060015561015b6113a5565b602060405160008152f35b6040513d6000823e3d90fd5b506108fc610144565b60405163100960cb60e01b815260136004820152602490fd5b60405163100960cb60e01b815260126004820152602490fd5b60405163100960cb60e01b815260116004820152602490fd5b90506001541438610110565b60405163100960cb60e01b815260106004820152602490fd5b60405163100960cb60e01b8152600f6004820152602490fd5b600080fd5b60403660031901126102045760006040516102238161118c565b5261022d3661148a565b6007600054036105345761023f6111f9565b60c0818051810103126102045760405191610259836111c3565b6020926102678484016112de565b8152604083015191848201928352610281606085016112de565b93604083019485526080810151906060840191825260c060a0820151916080860192835201519160a0850192835260ff6004541661051b577f2b488b46f65093e5cc34b7a23106f60902da34f9221ba5c98d129851d4f8efe6604051806102e98733836114c2565b0390a18351801590811561050f575b50156104f657346104dd5786516001600160a01b03919033908316036104c45760c0898380610325611356565b995116998a8a52519a828a019b8c5251169260408901938452519460608901958652519560808901968752519660a08901978852015196019586526008600055600197438955604051978a890152516040880152511660608601525160808501525160a08401525160c08301525160e082015260e081526103a5816111a7565b8051906001600160401b0382116104ae576103c1600254611152565b601f8111610472575b508390601f831160011461040d57928293918392600094610402575b50501b916000199060031b1c1916176002555b60405160008152f35b0151925085806103e6565b90601f19831691600260005283866000209360005b888883831061045b5750505010610442575b505050811b016002556103f9565b015160001960f88460031b161c19169055838080610434565b868601518855909601959485019487935001610422565b61049e90600260005285600020601f850160051c8101918786106104a4575b601f0160051c019061138e565b846103ca565b9091508190610491565b634e487b7160e01b600052604160045260246000fd5b60405163100960cb60e01b815260186004820152602490fd5b60405163100960cb60e01b815260176004820152602490fd5b60405163100960cb60e01b815260166004820152602490fd5b905060015414896102f8565b60405163100960cb60e01b815260156004820152602490fd5b60405163100960cb60e01b815260146004820152602490fd5b34610204576000366003190112610204576000546105696111f9565b6040519182528160206040818301528251908160408401526000935b8285106105a8575050606092506000838284010152601f80199101168101030190f35b8481018201518686016060015293810193859350610585565b34610204576000366003190112610204576020600154604051908152f35b6020806003193601126102045760006040516105fa8161118c565b52610604366112ae565b60019081600054036109b35761062961061b6111f9565b8480825183010191016112f2565b9060ff6004541661099a577fcf0e8bec53cd91fa87ecf8f6f405ac75914a22acdb92a3553ee5c294fee815966040518061066484338361133c565b0390a151801590811561098f575b501561097657604081015143101561095d5782810180513403610944578390610699611356565b9060018060a01b038094511682525182820190815260408201338152606083016000815260808401916000835260a0850193600085524360c08701526040516106e18161118c565b60008152600384511060001461085b5750938793600097938589989489986040519c8d9861070e8a6111c3565b8b8a528901978b895260a060408b019a8d8c52606081019d8e52608081019e8f52019d8e525116809d525186525116855251865251865251865260076000554388556040519689880152516040870152511660608501525160808401525160a08301525160c082015260c08152610784816111de565b8051906001600160401b0382116104ae576107a0600254611152565b601f811161082a575b508390601f83116001146107df579282939183926000946104025750501b916000199060031b1c19161760025560405160008152f35b90601f19831691600260005283866000209360005b8888838310610813575050501061044257505050811b016002556103f9565b8686015188559096019594850194879350016107f4565b61085590600260005285600020601f850160051c8101918786106104a457601f0160051c019061138e565b846107a9565b9391979594925095505190519081811460001461092d5750508580915b528086036108de57506000808084819451168651908282156108d5575bf115610166576000809392819392829351169051908282156108cc575bf11561016657600090818055556108c76113a5565b6103f9565b506108fc6108b2565b506108fc610895565b92600094918594938594936002869514851461091f5750610902915116915161141d565b908282156108cc57f11561016657600090818055556108c76113a5565b61090292505116915161141d565b111561093d5760005b8091610878565b6002610936565b60405163100960cb60e01b8152600e6004820152602490fd5b60405163100960cb60e01b8152600d6004820152602490fd5b60405163100960cb60e01b8152600c6004820152602490fd5b905082541484610672565b60405163100960cb60e01b8152600b6004820152602490fd5b60405163100960cb60e01b8152600a6004820152602490fd5b60403660031901126102045760006040516109e68161118c565b526109f03661148a565b600860005403610d6257610a026111f9565b60e0818051810103126102045760e060405191610a1e836111de565b610a2a602082016112de565b835260408101516020840152610a42606082016112de565b60408401526080810151606084015260a0810151608084015260c081015160a0840152015160c082015260ff60045416610d49577ff410ae3157431721924ef1b12812af4e6e901fb5ee3d00e646d08375df1ca36260405180610aa68533836114c2565b0390a181518015908115610d3d575b5015610d245734610d0b578051336001600160a01b0390911603610cf257602060405192610ae2846111a7565b60008452600082850152600060408501526000606085015260006080850152600060a0850152600060c0850152600060e085015260c060018060a01b0384511693848652838101518487015260018060a01b036040820151166040870152606081015160608701526080810151608087015260a081015160a0870152015160c0850152015160e0830152600960005560e06001924384556040519260208401526020810151604084015260018060a01b03604082015116606084015260608101516080840152608081015160a084015260a081015160c084015260c08101518284015201516101009081830152815261012081019060018060401b0391818110838211176104ae5760405280519182116104ae57610c01600254611152565b601f8111610cb5575b50602090601f8311600114610c4f57928293918392600094610c44575b50501b916000199060031b1c191617600255602060405160008152f35b015192508480610c27565b90601f1983169160026000528360206000209360005b87828210610c9c57505010610c83575b505050811b0160025561015b565b015160001960f88460031b161c19169055828080610c75565b8486015187559095019460209485019487935001610c65565b6002600052610cec906000805160206114fe833981519152601f850160051c810191602086106104a457601f0160051c019061138e565b83610c0a565b60405163100960cb60e01b8152601d6004820152602490fd5b60405163100960cb60e01b8152601c6004820152602490fd5b60405163100960cb60e01b8152601b6004820152602490fd5b90506001541483610ab5565b60405163100960cb60e01b8152601a6004820152602490fd5b60405163100960cb60e01b815260196004820152602490fd5b602080600319360112610204576000604051610d968161118c565b52610da0366112ae565b60096000540361111e57610db26111f9565b9061010090818380518101031261020457604051610dcf816111a7565b610dda8585016112de565b8152604084015192858201938452610df4606086016112de565b90604083019182526080860151936060840194855260a0870151946080850195865260c08801519260a0860193845260e08901519860c08701998a5201519160e0860192835260ff60045416611105577f85bba4f12ee548563e5364ae202a127c474a1931b802b9f898e735963540adcd60405180610e7484338361133c565b0390a15180159081156110f9575b50156110e057346110c75783516001600160a01b03979033908916036110ae57879081610ead611356565b975116875251948a87019586525116906040860191825251916001988984019384811161109857841061020457610ef3610f04928c9960608a01968752519051906114e9565b9460808801958652519051906114e9565b9360a086019485524360c0870152604051610f1e8161118c565b60008152600384511060001461085b5750938793600097938589989489986040519c8d98610f4b8a6111c3565b8b8a528901978b895260a060408b019a8d8c52606081019d8e52608081019e8f52019d8e525116809d525186525116855251865251865251865260076000554388556040519689880152516040870152511660608501525160808401525160a08301525160c082015260c08152610fc1816111de565b8051906001600160401b0382116104ae57610fdd600254611152565b601f8111611067575b508390601f831160011461101c579282939183926000946104025750501b916000199060031b1c19161760025560405160008152f35b90601f19831691600260005283866000209360005b8888838310611050575050501061044257505050811b016002556103f9565b868601518855909601959485019487935001611031565b61109290600260005285600020601f850160051c8101918786106104a457601f0160051c019061138e565b84610fe6565b634e487b7160e01b600052601160045260246000fd5b60405163100960cb60e01b815260226004820152602490fd5b60405163100960cb60e01b815260216004820152602490fd5b60405163100960cb60e01b8152600481018a9052602490fd5b9050600154148a610e82565b60405163100960cb60e01b8152601f6004820152602490fd5b60405163100960cb60e01b8152601e6004820152602490fd5b34610204576000366003190112610204576020906003548152f35b90600182811c92168015611182575b602083101461116c57565b634e487b7160e01b600052602260045260246000fd5b91607f1691611161565b602081019081106001600160401b038211176104ae57604052565b61010081019081106001600160401b038211176104ae57604052565b60c081019081106001600160401b038211176104ae57604052565b60e081019081106001600160401b038211176104ae57604052565b60405190600060025461120b81611152565b80855260019180831690811561128f5750600114611249575b5050829003601f01601f191682016001600160401b038111838210176104ae57604052565b600260009081526020935091836000805160206114fe8339815191525b83851061127b57505050508301013880611224565b805488860183015293019284908201611266565b919250506020925060ff191682850152151560051b8301013880611224565b60209060031901126102045760405190602082016001600160401b038111838210176104ae576040526004358252565b51906001600160a01b038216820361020457565b90816060910312610204576040519060608201906001600160401b038211838310176104ae576040918252611326816112de565b8352602081015160208401520151604082015290565b6001600160a01b0390911681529051602082015260400190565b60405190611363826111de565b8160c06000918281528260208201528260408201528260608201528260808201528260a08201520152565b818110611399575050565b6000815560010161138e565b6113b0600254611152565b806113b85750565b601f81116001146113cb57506000600255565b600260005261141090601f0160051c6000805160206114fe833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf61138e565b6000602081208160025555565b90600091600090801590811561143a575b50156114375750565b80fd5b909350600181901b6001600160ff1b038216820361147657809461146257046002143861142e565b634e487b7160e01b83526012600452602483fd5b634e487b7160e01b83526011600452602483fd5b60409060031901126102045760408051919082016001600160401b038111838210176104ae5760405260043582526024356020830152565b6001600160a01b039091168152815160208083019190915290910151604082015260600190565b91908201918281116110985782106102045756fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acea164736f6c6343000811000a`,
  BytecodeLen: 6302,
  version: 9,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:94:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:103:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:143:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:143:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:143:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:111:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: './index.rsh:120:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './index.rsh:128:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bob": Bob
  };
export const _APIs = {
  };
