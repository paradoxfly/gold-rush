// Automatically generated with Reach 0.1.9 (d3fd55fe)
/* eslint-disable */
export const _version = '0.1.9';
export const _versionHash = '0.1.9 (d3fd55fe)';
export const _backendVersion = 11;

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
  
  
  const v187 = stdlib.protect(ctc0, interact.deadline, 'for Alice\'s interact field deadline');
  const v188 = stdlib.protect(ctc0, interact.wager, 'for Alice\'s interact field wager');
  
  const txn1 = await (ctc.sendrecv({
    args: [v188, v187],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:85:9:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [v188, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v192, v193], secs: v195, time: v194, didSend: v31, from: v191 } = txn1;
      
      sim_r.txns.push({
        amt: v192,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v204 = stdlib.add(v194, v193);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v192, v193], secs: v195, time: v194, didSend: v31, from: v191 } = txn1;
  ;
  const v204 = stdlib.add(v194, v193);
  stdlib.protect(ctc1, await interact.informWaitingForAttacher(), {
    at: './index.rsh:89:42:application',
    fs: ['at ./index.rsh:89:42:application call to [unknown function] (defined at: ./index.rsh:89:42:function exp)', 'at ./index.rsh:89:42:application call to "liftedInteract" (defined at: ./index.rsh:89:42:application)'],
    msg: 'informWaitingForAttacher',
    who: 'Alice'
    });
  
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: ['time', v204],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v191, v192, v204],
      evt_cnt: 0,
      funcNum: 2,
      lct: v194,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v307, time: v306, didSend: v153, from: v305 } = txn3;
        
        ;
        sim_r.txns.push({
          amt: v192,
          kind: 'from',
          to: v191,
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
    const {data: [], secs: v307, time: v306, didSend: v153, from: v305 } = txn3;
    ;
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:76:29:application',
      fs: ['at ./index.rsh:75:9:application call to [unknown function] (defined at: ./index.rsh:75:27:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:74:28:function exp)', 'at ./index.rsh:96:51:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
      msg: 'informTimeout',
      who: 'Alice'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v211, time: v210, didSend: v44, from: v209 } = txn2;
    ;
    stdlib.protect(ctc1, await interact.informAcceptedWager(), {
      at: './index.rsh:98:37:application',
      fs: ['at ./index.rsh:98:37:application call to [unknown function] (defined at: ./index.rsh:98:37:function exp)', 'at ./index.rsh:98:37:application call to "liftedInteract" (defined at: ./index.rsh:98:37:application)'],
      msg: 'informAcceptedWager',
      who: 'Alice'
      });
    
    let v215 = stdlib.checkedBigNumberify('./index.rsh:101:50:decimal', stdlib.UInt_max, 0);
    let v216 = stdlib.checkedBigNumberify('./index.rsh:101:53:decimal', stdlib.UInt_max, 0);
    let v217 = stdlib.checkedBigNumberify('./index.rsh:101:56:decimal', stdlib.UInt_max, 0);
    let v218 = v210;
    
    while (await (async () => {
      const v229 = stdlib.lt(v215, stdlib.checkedBigNumberify('./index.rsh:103:17:decimal', stdlib.UInt_max, 3));
      
      return v229;})()) {
      const txn3 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 4,
        out_tys: [ctc0],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v234], secs: v236, time: v235, didSend: v67, from: v233 } = txn3;
      ;
      const v237 = stdlib.addressEq(v209, v233);
      stdlib.assert(v237, {
        at: './index.rsh:110:9:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Alice'
        });
      stdlib.protect(ctc1, await interact.opponentReplay(v234), {
        at: './index.rsh:115:30:application',
        fs: ['at ./index.rsh:114:15:application call to [unknown function] (defined at: ./index.rsh:114:19:function exp)'],
        msg: 'opponentReplay',
        who: 'Alice'
        });
      const v240 = stdlib.protect(ctc0, await interact.getTime(), {
        at: './index.rsh:116:52:application',
        fs: ['at ./index.rsh:114:15:application call to [unknown function] (defined at: ./index.rsh:114:19:function exp)'],
        msg: 'getTime',
        who: 'Alice'
        });
      
      const txn4 = await (ctc.sendrecv({
        args: [v191, v192, v209, v215, v216, v217, v234, v240],
        evt_cnt: 1,
        funcNum: 5,
        lct: v235,
        onlyIf: true,
        out_tys: [ctc0],
        pay: [stdlib.checkedBigNumberify('./index.rsh:118:11:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v242], secs: v244, time: v243, didSend: v77, from: v241 } = txn4;
          
          ;
          const v245 = stdlib.addressEq(v191, v241);
          ;
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc2, ctc0, ctc2, ctc0, ctc0, ctc0, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [v242], secs: v244, time: v243, didSend: v77, from: v241 } = txn4;
      ;
      const v245 = stdlib.addressEq(v191, v241);
      stdlib.assert(v245, {
        at: './index.rsh:118:11:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Alice'
        });
      const txn5 = await (ctc.recv({
        didSend: false,
        evt_cnt: 0,
        funcNum: 6,
        out_tys: [],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [], secs: v250, time: v249, didSend: v85, from: v248 } = txn5;
      ;
      const v251 = stdlib.addressEq(v209, v248);
      stdlib.assert(v251, {
        at: './index.rsh:124:9:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Alice'
        });
      const v252 = stdlib.add(v215, stdlib.checkedBigNumberify('./index.rsh:126:57:decimal', stdlib.UInt_max, 1));
      const v253 = stdlib.add(v216, v242);
      const v254 = stdlib.add(v217, v234);
      const cv215 = v252;
      const cv216 = v253;
      const cv217 = v254;
      const cv218 = v249;
      
      v215 = cv215;
      v216 = cv216;
      v217 = cv217;
      v218 = cv218;
      
      continue;
      
      
      
      
      
      }
    let v255;
    const v256 = stdlib.eq(v216, v217);
    if (v256) {
      v255 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
      }
    else {
      const v257 = stdlib.gt(v216, v217);
      if (v257) {
        v255 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0);
        }
      else {
        v255 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2);
        }
      }
    const v258 = stdlib.eq(v255, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
    if (v258) {
      const v261 = 'draw            ';
      stdlib.protect(ctc1, await interact.showWinner(v261), {
        at: './index.rsh:29:26:application',
        fs: ['at ./index.rsh:28:9:application call to [unknown function] (defined at: ./index.rsh:28:27:function exp)', 'at ./index.rsh:132:12:application call to "payWinner" (defined at: ./index.rsh:26:48:function exp)'],
        msg: 'showWinner',
        who: 'Alice'
        });
      
      ;
      ;
      return;
      }
    else {
      const v276 = stdlib.eq(v255, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
      if (v276) {
        const v277 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:35:14:decimal', stdlib.UInt_max, 2), v192);
        ;
        const v284 = 'alice           ';
        stdlib.protect(ctc1, await interact.showWinner(v284), {
          at: './index.rsh:37:26:application',
          fs: ['at ./index.rsh:36:9:application call to [unknown function] (defined at: ./index.rsh:36:27:function exp)', 'at ./index.rsh:132:12:application call to "payWinner" (defined at: ./index.rsh:26:48:function exp)'],
          msg: 'showWinner',
          who: 'Alice'
          });
        
        return;
        }
      else {
        const v291 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:41:14:decimal', stdlib.UInt_max, 2), v192);
        ;
        const v298 = 'bob             ';
        stdlib.protect(ctc1, await interact.showWinner(v298), {
          at: './index.rsh:43:26:application',
          fs: ['at ./index.rsh:42:9:application call to [unknown function] (defined at: ./index.rsh:42:27:function exp)', 'at ./index.rsh:132:12:application call to "payWinner" (defined at: ./index.rsh:26:48:function exp)'],
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
  const {data: [v192, v193], secs: v195, time: v194, didSend: v31, from: v191 } = txn1;
  ;
  const v204 = stdlib.add(v194, v193);
  stdlib.protect(ctc1, await interact.acceptWager(v192), {
    at: './index.rsh:93:25:application',
    fs: ['at ./index.rsh:92:11:application call to [unknown function] (defined at: ./index.rsh:92:15:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v191, v192, v204],
    evt_cnt: 0,
    funcNum: 1,
    lct: v194,
    onlyIf: true,
    out_tys: [],
    pay: [v192, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v211, time: v210, didSend: v44, from: v209 } = txn2;
      
      sim_r.txns.push({
        amt: v192,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v215 = stdlib.checkedBigNumberify('./index.rsh:101:50:decimal', stdlib.UInt_max, 0);
      const v216 = stdlib.checkedBigNumberify('./index.rsh:101:53:decimal', stdlib.UInt_max, 0);
      const v217 = stdlib.checkedBigNumberify('./index.rsh:101:56:decimal', stdlib.UInt_max, 0);
      const v218 = v210;
      
      if (await (async () => {
        const v229 = stdlib.lt(v215, stdlib.checkedBigNumberify('./index.rsh:103:17:decimal', stdlib.UInt_max, 3));
        
        return v229;})()) {
        sim_r.isHalt = false;
        }
      else {
        let v255;
        const v256 = stdlib.eq(v216, v217);
        if (v256) {
          v255 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
          }
        else {
          const v257 = stdlib.gt(v216, v217);
          if (v257) {
            v255 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0);
            }
          else {
            v255 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2);
            }
          }
        const v258 = stdlib.eq(v255, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
        if (v258) {
          
          sim_r.txns.push({
            amt: v192,
            kind: 'from',
            to: v191,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            amt: v192,
            kind: 'from',
            to: v209,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }
        else {
          const v276 = stdlib.eq(v255, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
          if (v276) {
            const v277 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:35:14:decimal', stdlib.UInt_max, 2), v192);
            sim_r.txns.push({
              amt: v277,
              kind: 'from',
              to: v191,
              tok: undefined /* Nothing */
              });
            
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            const v291 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:41:14:decimal', stdlib.UInt_max, 2), v192);
            sim_r.txns.push({
              amt: v291,
              kind: 'from',
              to: v209,
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
    timeoutAt: ['time', v204],
    tys: [ctc2, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v191, v192, v204],
      evt_cnt: 0,
      funcNum: 2,
      lct: v194,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v307, time: v306, didSend: v153, from: v305 } = txn3;
        
        ;
        sim_r.txns.push({
          amt: v192,
          kind: 'from',
          to: v191,
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
    const {data: [], secs: v307, time: v306, didSend: v153, from: v305 } = txn3;
    ;
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:76:29:application',
      fs: ['at ./index.rsh:75:9:application call to [unknown function] (defined at: ./index.rsh:75:27:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:74:28:function exp)', 'at ./index.rsh:96:51:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
      msg: 'informTimeout',
      who: 'Bob'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v211, time: v210, didSend: v44, from: v209 } = txn2;
    ;
    let v215 = stdlib.checkedBigNumberify('./index.rsh:101:50:decimal', stdlib.UInt_max, 0);
    let v216 = stdlib.checkedBigNumberify('./index.rsh:101:53:decimal', stdlib.UInt_max, 0);
    let v217 = stdlib.checkedBigNumberify('./index.rsh:101:56:decimal', stdlib.UInt_max, 0);
    let v218 = v210;
    
    while (await (async () => {
      const v229 = stdlib.lt(v215, stdlib.checkedBigNumberify('./index.rsh:103:17:decimal', stdlib.UInt_max, 3));
      
      return v229;})()) {
      const v232 = stdlib.protect(ctc0, await interact.getTime(), {
        at: './index.rsh:108:50:application',
        fs: ['at ./index.rsh:107:13:application call to [unknown function] (defined at: ./index.rsh:107:17:function exp)'],
        msg: 'getTime',
        who: 'Bob'
        });
      
      const txn3 = await (ctc.sendrecv({
        args: [v191, v192, v209, v215, v216, v217, v232],
        evt_cnt: 1,
        funcNum: 4,
        lct: v218,
        onlyIf: true,
        out_tys: [ctc0],
        pay: [stdlib.checkedBigNumberify('./index.rsh:110:9:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn3) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v234], secs: v236, time: v235, didSend: v67, from: v233 } = txn3;
          
          ;
          const v237 = stdlib.addressEq(v209, v233);
          ;
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc2, ctc0, ctc2, ctc0, ctc0, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [v234], secs: v236, time: v235, didSend: v67, from: v233 } = txn3;
      ;
      const v237 = stdlib.addressEq(v209, v233);
      stdlib.assert(v237, {
        at: './index.rsh:110:9:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Bob'
        });
      const txn4 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 5,
        out_tys: [ctc0],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v242], secs: v244, time: v243, didSend: v77, from: v241 } = txn4;
      ;
      const v245 = stdlib.addressEq(v191, v241);
      stdlib.assert(v245, {
        at: './index.rsh:118:11:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Bob'
        });
      stdlib.protect(ctc1, await interact.opponentReplay(v242), {
        at: './index.rsh:122:30:application',
        fs: ['at ./index.rsh:121:13:application call to [unknown function] (defined at: ./index.rsh:121:17:function exp)'],
        msg: 'opponentReplay',
        who: 'Bob'
        });
      
      const txn5 = await (ctc.sendrecv({
        args: [v191, v192, v209, v215, v216, v217, v234, v242],
        evt_cnt: 0,
        funcNum: 6,
        lct: v243,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:124:9:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn5) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v250, time: v249, didSend: v85, from: v248 } = txn5;
          
          ;
          const v251 = stdlib.addressEq(v209, v248);
          ;
          const v252 = stdlib.add(v215, stdlib.checkedBigNumberify('./index.rsh:126:57:decimal', stdlib.UInt_max, 1));
          const v253 = stdlib.add(v216, v242);
          const v254 = stdlib.add(v217, v234);
          const cv215 = v252;
          const cv216 = v253;
          const cv217 = v254;
          const cv218 = v249;
          
          await (async () => {
            const v215 = cv215;
            const v216 = cv216;
            const v217 = cv217;
            const v218 = cv218;
            
            if (await (async () => {
              const v229 = stdlib.lt(v215, stdlib.checkedBigNumberify('./index.rsh:103:17:decimal', stdlib.UInt_max, 3));
              
              return v229;})()) {
              sim_r.isHalt = false;
              }
            else {
              let v255;
              const v256 = stdlib.eq(v216, v217);
              if (v256) {
                v255 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
                }
              else {
                const v257 = stdlib.gt(v216, v217);
                if (v257) {
                  v255 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0);
                  }
                else {
                  v255 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2);
                  }
                }
              const v258 = stdlib.eq(v255, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
              if (v258) {
                
                sim_r.txns.push({
                  amt: v192,
                  kind: 'from',
                  to: v191,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  amt: v192,
                  kind: 'from',
                  to: v209,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }
              else {
                const v276 = stdlib.eq(v255, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
                if (v276) {
                  const v277 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:35:14:decimal', stdlib.UInt_max, 2), v192);
                  sim_r.txns.push({
                    amt: v277,
                    kind: 'from',
                    to: v191,
                    tok: undefined /* Nothing */
                    });
                  
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }
                else {
                  const v291 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:41:14:decimal', stdlib.UInt_max, 2), v192);
                  sim_r.txns.push({
                    amt: v291,
                    kind: 'from',
                    to: v209,
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
      const {data: [], secs: v250, time: v249, didSend: v85, from: v248 } = txn5;
      ;
      const v251 = stdlib.addressEq(v209, v248);
      stdlib.assert(v251, {
        at: './index.rsh:124:9:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Bob'
        });
      const v252 = stdlib.add(v215, stdlib.checkedBigNumberify('./index.rsh:126:57:decimal', stdlib.UInt_max, 1));
      const v253 = stdlib.add(v216, v242);
      const v254 = stdlib.add(v217, v234);
      const cv215 = v252;
      const cv216 = v253;
      const cv217 = v254;
      const cv218 = v249;
      
      v215 = cv215;
      v216 = cv216;
      v217 = cv217;
      v218 = cv218;
      
      continue;
      
      
      
      
      
      }
    let v255;
    const v256 = stdlib.eq(v216, v217);
    if (v256) {
      v255 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
      }
    else {
      const v257 = stdlib.gt(v216, v217);
      if (v257) {
        v255 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0);
        }
      else {
        v255 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2);
        }
      }
    const v258 = stdlib.eq(v255, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
    if (v258) {
      const v264 = 'draw            ';
      stdlib.protect(ctc1, await interact.showWinner(v264), {
        at: './index.rsh:29:26:application',
        fs: ['at ./index.rsh:28:9:application call to [unknown function] (defined at: ./index.rsh:28:27:function exp)', 'at ./index.rsh:132:12:application call to "payWinner" (defined at: ./index.rsh:26:48:function exp)'],
        msg: 'showWinner',
        who: 'Bob'
        });
      
      ;
      ;
      return;
      }
    else {
      const v276 = stdlib.eq(v255, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
      if (v276) {
        const v277 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:35:14:decimal', stdlib.UInt_max, 2), v192);
        ;
        const v287 = 'alice           ';
        stdlib.protect(ctc1, await interact.showWinner(v287), {
          at: './index.rsh:37:26:application',
          fs: ['at ./index.rsh:36:9:application call to [unknown function] (defined at: ./index.rsh:36:27:function exp)', 'at ./index.rsh:132:12:application call to "payWinner" (defined at: ./index.rsh:26:48:function exp)'],
          msg: 'showWinner',
          who: 'Bob'
          });
        
        return;
        }
      else {
        const v291 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:41:14:decimal', stdlib.UInt_max, 2), v192);
        ;
        const v301 = 'bob             ';
        stdlib.protect(ctc1, await interact.showWinner(v301), {
          at: './index.rsh:43:26:application',
          fs: ['at ./index.rsh:42:9:application call to [unknown function] (defined at: ./index.rsh:42:27:function exp)', 'at ./index.rsh:132:12:application call to "payWinner" (defined at: ./index.rsh:26:48:function exp)'],
          msg: 'showWinner',
          who: 'Bob'
          });
        
        return;
        }}}
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiAOAAECIAhIUFgFBglgBygmAgEAACI1ADEYQQODKWRJIls1ASEEWzUCNhoAF0lBAAciNQQjNQYANhoCFzUENhoDNhoBF0mBBAxAAWVJIQgMQADkSSEJDEAAWSEJEkQhCjQBEkQ0BEkiEkw0AhIRRChkSTUDVyggNf+ABGG0rAywNP8xABJENANXACA0AyVbNP80AyEFWyMINAMhBls0A4FoWwg0AyEHWzQDIQtbCDIGQgHlSCEENAESRDQESSISTDQCEhFEKGRJNQNJSkpJVwAgNf8lWzX+VyggNf0hBVs1/CEGWzX7IQdbNfohC1s1+Uk1BRc1+IAEgaqazzT4FlCwNP8xABJENP80/hZQNP1QNPwWUDT7FlA0+hZQNPkWUDT4FlAoSwFXAHBnSCEKNQEyBjUCQgI1SCEMNAESRDQESSISTDQCEhFEKGRJNQNJSkpXACA1/yVbNf5XKCA1/SEFWzX8IQZbNfshB1s1+kk1BRc1+YAE+YuveDT5FlCwNP0xABJENP80/hZQNP1QNPwWUDT7FlA0+hZQNPkWUChLAVcAaGdIIQQ1ATIGNQJCAbtJIwxAAIVJJAxAAD8kEkQjNAESRDQESSISTDQCEhFEKGQ1A4AEQbFATbAyBjQDIQ1bD0SxIrIBNAMlW7III7IQNANXACCyB7NCAVRIIzQBEkQ0BEkiEkw0AhIRRChkSTUDJVs1/4AEmouRdLAyBjQDIQ1bDEQ0/4gBfjQDVwAgNP8xACIiIjIGQgBcSCI0ARJENARJIhJMNAISEURJNQVJIls1/yEEWzX+gASs0R/DNP8WUDT+FlCwgaCNBogBOTT/iAE0MgY0/gg1/TEANP8WUDT9FlAoSwFXADBnSCM1ATIGNQJCANQ1/zX+Nf01/DX7Nfo1+TT8gQMMQQAoNPk0+hZQNPtQNPwWUDT9FlA0/hZQKEsBVwBgZ0ghDDUBMgY1AkIAljT9NP4SQQAGIzX4QgARNP00/g1BAAYiNfhCAAMkNfg0+CMSQQAjsSKyATT6sggjshA0+bIHs7EisgE0+rIII7IQNPuyB7NCADE0+CQSQQAVsSKyASQ0+guyCCOyEDT5sgezQgAVsSKyASQ0+guyCCOyEDT7sgezQgAAMRkhCBJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKTQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iNQEiNQJC/8M0AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 112,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v192",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v193",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v192",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v193",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v234",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v242",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v234",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v242",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x6080604052604051620015f2380380620015f2833981016040819052620000269162000237565b600080805543600355604080516020810190915290815260408051835181526020808501518051828401520151918101919091527f80c0078efe412e5091172e0df54decefb16131f320816d23b64aede2bf8e9e4b9060600160405180910390a16020820151516200009c903414600762000130565b6020808301510151620000b0904362000297565b815260408051606080820183526000602080840182815284860183815233808752898401515183528851825260019485905543909455865192830193909352519481019490945251908301529060800160405160208183030381529060405260029080519060200190620001269291906200015a565b50505050620002fb565b81620001565760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200016890620002be565b90600052602060002090601f0160209004810192826200018c5760008555620001d7565b82601f10620001a757805160ff1916838001178555620001d7565b82800160010185558215620001d7579182015b82811115620001d7578251825591602001919060010190620001ba565b50620001e5929150620001e9565b5090565b5b80821115620001e55760008155600101620001ea565b604080519081016001600160401b03811182821017156200023157634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360608112156200024b57600080fd5b6200025562000200565b835181526040601f19830112156200026c57600080fd5b6200027662000200565b60208581015182526040909501518582015293810193909352509092915050565b60008219821115620002b957634e487b7160e01b600052601160045260246000fd5b500190565b600181811c90821680620002d357607f821691505b60208210811415620002f557634e487b7160e01b600052602260045260246000fd5b50919050565b6112e7806200030b6000396000f3fe6080604052600436106100795760003560e01c8063832307571161004b57806383230757146100df578063a209ad4e146100f4578063ab53f2c614610107578063c79800371461012a57005b80631e93b0f1146100825780632c10a159146100a6578063552d7b8e146100b95780637eea518c146100cc57005b3661008057005b005b34801561008e57600080fd5b506003545b6040519081526020015b60405180910390f35b6100806100b4366004610f1c565b61013d565b6100806100c7366004610f1c565b6102c4565b6100806100da366004610f1c565b610547565b3480156100eb57600080fd5b50600154610093565b610080610102366004610f1c565b6106c3565b34801561011357600080fd5b5061011c6108f1565b60405161009d929190610f3f565b610080610138366004610f1c565b61098e565b61014d6001600054146009610b52565b6101678135158061016057506001548235145b600a610b52565b60008080556002805461017990610f9c565b80601f01602080910402602001604051908101604052809291908181526020018280546101a590610f9c565b80156101f25780601f106101c7576101008083540402835291602001916101f2565b820191906000526020600020905b8154815290600101906020018083116101d557829003601f168201915b505050505080602001905181019061020a9190610fed565b905061021d81604001514310600b610b52565b7f79ca1a789d797004bc78dff9632d64e202e102f2d008dcc20c5a645ef7d4a7d18260405161024c919061105c565b60405180910390a1610265816020015134146008610b52565b61026d610dd5565b815181516001600160a01b03909116905260208083015182518201528151336040918201528183018051600090819052815190930183905280519091019190915251436060909101526102bf81610b77565b505050565b6102d46008600054146016610b52565b6102ee813515806102e757506001548235145b6017610b52565b60008080556002805461030090610f9c565b80601f016020809104026020016040519081016040528092919081815260200182805461032c90610f9c565b80156103795780601f1061034e57610100808354040283529160200191610379565b820191906000526020600020905b81548152906001019060200180831161035c57829003601f168201915b50505050508060200190518101906103919190611086565b6040805184358152602080860135908201529192507f4dadf1945cf19fcec67ccb7e31757a1ad0bc533fae9b7a76582523cb8bf28f4e910160405180910390a16103dd34156014610b52565b80516103f5906001600160a01b031633146015610b52565b61044f60405180610100016040528060006001600160a01b031681526020016000815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081525090565b81516001600160a01b0390811682526020808401518184015260408085015190921682840152606080850151908401526080808501519084015260a0808501519084015260c080850151908401528481013560e0840152600960005543600155905161051d9183910160006101008201905060018060a01b038084511683526020840151602084015280604085015116604084015250606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015292915050565b60405160208183030381529060405260029080519060200190610541929190610e2e565b50505050565b610557600160005414600d610b52565b6105718135158061056a57506001548235145b600e610b52565b60008080556002805461058390610f9c565b80601f01602080910402602001604051908101604052809291908181526020018280546105af90610f9c565b80156105fc5780601f106105d1576101008083540402835291602001916105fc565b820191906000526020600020905b8154815290600101906020018083116105df57829003601f168201915b50505050508060200190518101906106149190610fed565b90506106288160400151431015600f610b52565b7f82e152e8b1d7e41adffbddbd5b2fe2e130356df9b7ab7d06526a80d7888af3e182604051610657919061105c565b60405180910390a161066b3415600c610b52565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156106a8573d6000803e3d6000fd5b50600080805560018190556106bf90600290610eb2565b5050565b6106d36007600054146012610b52565b6106ed813515806106e657506001548235145b6013610b52565b6000808055600280546106ff90610f9c565b80601f016020809104026020016040519081016040528092919081815260200182805461072b90610f9c565b80156107785780601f1061074d57610100808354040283529160200191610778565b820191906000526020600020905b81548152906001019060200180831161075b57829003601f168201915b50505050508060200190518101906107909190611124565b6040805184358152602080860135908201529192507f7d7741a24b17d1850d95beda5136388f520bc575ba9499f2f40fdfa7647ad82f910160405180910390a16107dc34156010610b52565b60408101516107f7906001600160a01b031633146011610b52565b6108496040518060e0016040528060006001600160a01b031681526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081525090565b81516001600160a01b0390811680835260208085015181850190815260408087015185168187019081526060808901518189019081526080808b0151818b0190815260a0808d0151818d019081528e8a013560c0808f0191825260086000554360015589519b8c019c909c529851978a01979097529451909916928701929092525190850152945194830194909452925191810191909152905160e08201526101000161051d565b60006060600054600280805461090690610f9c565b80601f016020809104026020016040519081016040528092919081815260200182805461093290610f9c565b801561097f5780601f106109545761010080835404028352916020019161097f565b820191906000526020600020905b81548152906001019060200180831161096257829003601f168201915b50505050509050915091509091565b61099e600960005414601a610b52565b6109b8813515806109b157506001548235145b601b610b52565b6000808055600280546109ca90610f9c565b80601f01602080910402602001604051908101604052809291908181526020018280546109f690610f9c565b8015610a435780601f10610a1857610100808354040283529160200191610a43565b820191906000526020600020905b815481529060010190602001808311610a2657829003601f168201915b5050505050806020019051810190610a5b91906111b8565b90507f4df267dd1a05b613b05cdeee7d7e028d3842cff6f4e5a9d9dde2cdaf4156275982604051610a8c919061105c565b60405180910390a1610aa034156018610b52565b6040810151610abb906001600160a01b031633146019610b52565b610ac3610dd5565b815181516001600160a01b039182169052602080840151835190910152604080840151835192169101526060820151610afe9060019061127a565b60208201515260e08201516080830151610b18919061127a565b602080830151015260c082015160a0830151610b34919061127a565b6020820180516040019190915251436060909101526102bf81610b77565b816106bf5760405163100960cb60e01b81526004810182905260240160405180910390fd5b60408051602081019091526000815260208201515160031115610c8757610bdf6040518060c0016040528060006001600160a01b031681526020016000815260200160006001600160a01b031681526020016000815260200160008152602001600081525090565b8251516001600160a01b0390811682528351602090810151818401528451604090810151909216828401528085018051516060850152805182015160808501525182015160a0840152600760005543600155905161051d9183910181516001600160a01b0390811682526020808401519083015260408084015190911690820152606080830151908201526080808301519082015260a0918201519181019190915260c00190565b60208083015160408101519101511415610ca45760018152610cc6565b60208083015160408101519101511115610cc15760008152610cc6565b600281525b805160011415610d5457815180516020909101516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610d10573d6000803e3d6000fd5b50815160408082015160209092015190516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156106a8573d6000803e3d6000fd5b805160021415610dab57815180516020909101516001600160a01b03909116906108fc90610d83906002611292565b6040518115909202916000818181858888f193505050501580156106a8573d6000803e3d6000fd5b8160000151604001516001600160a01b03166108fc8360000151602001516002610d839190611292565b6040805160a08101825260009181018281526060820183905260808201929092529081908152602001610e296040518060800160405280600081526020016000815260200160008152602001600081525090565b905290565b828054610e3a90610f9c565b90600052602060002090601f016020900481019282610e5c5760008555610ea2565b82601f10610e7557805160ff1916838001178555610ea2565b82800160010185558215610ea2579182015b82811115610ea2578251825591602001919060010190610e87565b50610eae929150610eef565b5090565b508054610ebe90610f9c565b6000825580601f10610ece575050565b601f016020900490600052602060002090810190610eec9190610eef565b50565b5b80821115610eae5760008155600101610ef0565b600060408284031215610f1657600080fd5b50919050565b600060408284031215610f2e57600080fd5b610f388383610f04565b9392505050565b82815260006020604081840152835180604085015260005b81811015610f7357858101830151858201606001528201610f57565b81811115610f85576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c90821680610fb057607f821691505b60208210811415610f1657634e487b7160e01b600052602260045260246000fd5b80516001600160a01b0381168114610fe857600080fd5b919050565b600060608284031215610fff57600080fd5b6040516060810181811067ffffffffffffffff8211171561103057634e487b7160e01b600052604160045260246000fd5b60405261103c83610fd1565b815260208301516020820152604083015160408201528091505092915050565b8135815260408101602083013580151580821461107857600080fd5b806020850152505092915050565b600060e0828403121561109857600080fd5b60405160e0810181811067ffffffffffffffff821117156110c957634e487b7160e01b600052604160045260246000fd5b6040526110d583610fd1565b8152602083015160208201526110ed60408401610fd1565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c08201528091505092915050565b600060c0828403121561113657600080fd5b60405160c0810181811067ffffffffffffffff8211171561116757634e487b7160e01b600052604160045260246000fd5b60405261117383610fd1565b81526020830151602082015261118b60408401610fd1565b6040820152606083015160608201526080830151608082015260a083015160a08201528091505092915050565b60006101008083850312156111cc57600080fd5b6040519081019067ffffffffffffffff821181831017156111fd57634e487b7160e01b600052604160045260246000fd5b8160405261120a84610fd1565b81526020840151602082015261122260408501610fd1565b6040820152606084015160608201526080840151608082015260a084015160a082015260c084015160c082015260e084015160e0820152809250505092915050565b634e487b7160e01b600052601160045260246000fd5b6000821982111561128d5761128d611264565b500190565b60008160001904831182151516156112ac576112ac611264565b50029056fea264697066735822122038c83135492937668e7d7844c3c0168bf1ddef0c3ea4793e10248abdfc8ebb3c64736f6c634300080c0033`,
  BytecodeLen: 5618,
  Which: `oD`,
  version: 6,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:87:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: 'reach standard library:191:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:96:51:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:134:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:134:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:134:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:104:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: './index.rsh:111:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './index.rsh:119:13:after expr stmt semicolon',
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
