// Automatically generated with Reach 0.1.11 (6e495417)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (6e495417)';
export const _backendVersion = 18;

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
      1: [ctc0, ctc1, ctc1, ctc1],
      3: [ctc0, ctc1, ctc1, ctc0, ctc1],
      4: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1],
      6: [ctc0, ctc1, ctc0, ctc1, ctc1, ctc1]
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
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc2 = stdlib.T_Tuple([ctc0, ctc1]);
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Address;
  
  
  const v250 = stdlib.protect(ctc0, interact.deadline, 'for Alice\'s interact field deadline');
  const v251 = stdlib.protect(ctc0, interact.wager, 'for Alice\'s interact field wager');
  
  const txn1 = await (ctc.sendrecv({
    args: [v251, v250],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:49:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [v251, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v255, v256], secs: v258, time: v257, didSend: v31, from: v254 } = txn1;
      
      sim_r.txns.push({
        amt: v255,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v267 = stdlib.add(v257, v256);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v255, v256], secs: v258, time: v257, didSend: v31, from: v254 } = txn1;
  ;
  const v267 = stdlib.add(v257, v256);
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: ['time', v267],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v254, v255, v256, v267],
      evt_cnt: 0,
      funcNum: 2,
      lct: v257,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v431, time: v430, didSend: v227, from: v429 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v254,
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
      tys: [ctc4, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v431, time: v430, didSend: v227, from: v429 } = txn3;
    ;
    ;
    stdlib.protect(ctc3, await interact.informTimeout(), {
      at: './index.rsh:40:29:application',
      fs: ['at ./index.rsh:39:9:application call to [unknown function] (defined at: ./index.rsh:39:27:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:38:28:function exp)', 'at ./index.rsh:58:12:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
      msg: 'informTimeout',
      who: 'Alice'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v273, time: v272, didSend: v40, from: v271 } = txn2;
    const v275 = stdlib.add(v255, v255);
    ;
    const v278 = stdlib.protect(ctc2, await interact.dealCards(), {
      at: './index.rsh:64:70:application',
      fs: ['at ./index.rsh:63:13:application call to [unknown function] (defined at: ./index.rsh:63:17:function exp)'],
      msg: 'dealCards',
      who: 'Alice'
      });
    const v279 = v278[stdlib.checkedBigNumberify('./index.rsh:64:70:application', stdlib.UInt_max, '0')];
    const v280 = v278[stdlib.checkedBigNumberify('./index.rsh:64:70:application', stdlib.UInt_max, '1')];
    stdlib.protect(ctc0, await interact.random(), {
      at: 'reach standard library:64:31:application',
      fs: ['at ./index.rsh:66:54:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:63:13:application call to [unknown function] (defined at: ./index.rsh:63:17:function exp)'],
      msg: 'random',
      who: 'Alice'
      });
    
    const txn3 = await (ctc.sendrecv({
      args: [v254, v255, v256, v271, v275, v280],
      evt_cnt: 1,
      funcNum: 3,
      lct: v272,
      onlyIf: true,
      out_tys: [ctc1],
      pay: [stdlib.checkedBigNumberify('./index.rsh:72:9:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v287], secs: v289, time: v288, didSend: v58, from: v286 } = txn3;
        
        ;
        const v297 = stdlib.add(v288, v256);
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc1],
      waitIfNotPresent: false
      }));
    const {data: [v287], secs: v289, time: v288, didSend: v58, from: v286 } = txn3;
    ;
    const v290 = stdlib.addressEq(v254, v286);
    stdlib.assert(v290, {
      at: './index.rsh:72:9:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Alice'
      });
    const v297 = stdlib.add(v288, v256);
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 2,
      funcNum: 4,
      out_tys: [ctc0, ctc1],
      timeoutAt: ['time', v297],
      waitIfNotPresent: false
      }));
    if (txn4.didTimeout) {
      const txn5 = await (ctc.sendrecv({
        args: [v254, v255, v256, v271, v275, v297],
        evt_cnt: 0,
        funcNum: 5,
        lct: v288,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn5) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v413, time: v412, didSend: v196, from: v411 } = txn5;
          
          ;
          sim_r.txns.push({
            kind: 'from',
            to: v254,
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
        tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v413, time: v412, didSend: v196, from: v411 } = txn5;
      ;
      const v414 = stdlib.addressEq(v254, v411);
      const v415 = stdlib.addressEq(v271, v411);
      const v416 = v414 ? true : v415;
      stdlib.assert(v416, {
        at: 'reach standard library:200:11:dot',
        fs: ['at ./index.rsh:84:18:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
        msg: 'sender correct',
        who: 'Alice'
        });
      ;
      stdlib.protect(ctc3, await interact.informTimeout(), {
        at: './index.rsh:40:29:application',
        fs: ['at ./index.rsh:39:9:application call to [unknown function] (defined at: ./index.rsh:39:27:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:38:28:function exp)', 'at ./index.rsh:84:18:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
        msg: 'informTimeout',
        who: 'Alice'
        });
      
      return;
      
      }
    else {
      const {data: [v308, v309], secs: v311, time: v310, didSend: v77, from: v307 } = txn4;
      ;
      const v312 = stdlib.addressEq(v271, v307);
      stdlib.assert(v312, {
        at: './index.rsh:82:7:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Alice'
        });
      const v319 = stdlib.add(v310, v256);
      stdlib.protect(ctc3, await interact.viewOpponentCards(v309), {
        at: './index.rsh:91:31:application',
        fs: ['at ./index.rsh:89:13:application call to [unknown function] (defined at: ./index.rsh:89:17:function exp)'],
        msg: 'viewOpponentCards',
        who: 'Alice'
        });
      const v323 = stdlib.protect(ctc1, await interact.revealCards(), {
        at: './index.rsh:92:60:application',
        fs: ['at ./index.rsh:89:13:application call to [unknown function] (defined at: ./index.rsh:89:17:function exp)'],
        msg: 'revealCards',
        who: 'Alice'
        });
      
      const txn5 = await (ctc.sendrecv({
        args: [v254, v255, v271, v275, v308, v319, v279, v323],
        evt_cnt: 2,
        funcNum: 6,
        lct: v310,
        onlyIf: true,
        out_tys: [ctc0, ctc1],
        pay: [stdlib.checkedBigNumberify('./index.rsh:95:9:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn5) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v325, v326], secs: v328, time: v327, didSend: v88, from: v324 } = txn5;
          
          ;
          let v331;
          const v332 = stdlib.gt(v308, stdlib.checkedBigNumberify('./index.rsh:6:18:decimal', stdlib.UInt_max, '21'));
          const v333 = stdlib.lt(v325, stdlib.checkedBigNumberify('./index.rsh:6:38:decimal', stdlib.UInt_max, '22'));
          const v334 = stdlib.gt(v325, v308);
          const v335 = v333 ? v334 : false;
          const v336 = v332 ? true : v335;
          if (v336) {
            v331 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
            }
          else {
            const v337 = stdlib.lt(v308, stdlib.checkedBigNumberify('./index.rsh:9:20:decimal', stdlib.UInt_max, '22'));
            const v338 = stdlib.gt(v308, v325);
            const v339 = stdlib.gt(v325, stdlib.checkedBigNumberify('./index.rsh:9:65:decimal', stdlib.UInt_max, '21'));
            const v340 = v338 ? true : v339;
            const v341 = v337 ? v340 : false;
            if (v341) {
              v331 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
              }
            else {
              v331 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
              }
            }
          
          const v346 = stdlib.eq(v331, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
          if (v346) {
            const v347 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:109:14:decimal', stdlib.UInt_max, '2'), v255);
            const v351 = stdlib.sub(v275, v347);
            sim_r.txns.push({
              kind: 'from',
              to: v254,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'from',
              to: v254,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            const v359 = stdlib.eq(v331, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
            if (v359) {
              const v360 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:111:15:decimal', stdlib.UInt_max, '3'), v255);
              const v361 = stdlib.div(v360, stdlib.checkedBigNumberify('./index.rsh:111:28:decimal', stdlib.UInt_max, '2'));
              const v365 = stdlib.sub(v275, v361);
              sim_r.txns.push({
                kind: 'from',
                to: v271,
                tok: undefined /* Nothing */
                });
              const v366 = stdlib.div(v255, stdlib.checkedBigNumberify('./index.rsh:112:22:decimal', stdlib.UInt_max, '2'));
              const v370 = stdlib.sub(v365, v366);
              sim_r.txns.push({
                kind: 'from',
                to: v254,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'from',
                to: v254,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }
            else {
              const v381 = stdlib.sub(v275, v255);
              sim_r.txns.push({
                kind: 'from',
                to: v271,
                tok: undefined /* Nothing */
                });
              const v385 = stdlib.sub(v381, v255);
              sim_r.txns.push({
                kind: 'from',
                to: v254,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'from',
                to: v254,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: ['time', v319],
        tys: [ctc4, ctc0, ctc4, ctc0, ctc0, ctc0, ctc0, ctc1],
        waitIfNotPresent: false
        }));
      if (txn5.didTimeout) {
        const txn6 = await (ctc.sendrecv({
          args: [v254, v255, v271, v275, v308, v319],
          evt_cnt: 0,
          funcNum: 7,
          lct: v310,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn6) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v395, time: v394, didSend: v162, from: v393 } = txn6;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v271,
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
          tys: [ctc4, ctc0, ctc4, ctc0, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v395, time: v394, didSend: v162, from: v393 } = txn6;
        ;
        const v396 = stdlib.addressEq(v254, v393);
        const v397 = stdlib.addressEq(v271, v393);
        const v398 = v396 ? true : v397;
        stdlib.assert(v398, {
          at: 'reach standard library:200:11:dot',
          fs: ['at ./index.rsh:97:18:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
          msg: 'sender correct',
          who: 'Alice'
          });
        ;
        stdlib.protect(ctc3, await interact.informTimeout(), {
          at: './index.rsh:40:29:application',
          fs: ['at ./index.rsh:39:9:application call to [unknown function] (defined at: ./index.rsh:39:27:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:38:28:function exp)', 'at ./index.rsh:97:18:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
          msg: 'informTimeout',
          who: 'Alice'
          });
        
        return;
        
        }
      else {
        const {data: [v325, v326], secs: v328, time: v327, didSend: v88, from: v324 } = txn5;
        ;
        const v329 = stdlib.addressEq(v254, v324);
        stdlib.assert(v329, {
          at: './index.rsh:95:9:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Alice'
          });
        let v331;
        const v332 = stdlib.gt(v308, stdlib.checkedBigNumberify('./index.rsh:6:18:decimal', stdlib.UInt_max, '21'));
        const v333 = stdlib.lt(v325, stdlib.checkedBigNumberify('./index.rsh:6:38:decimal', stdlib.UInt_max, '22'));
        const v334 = stdlib.gt(v325, v308);
        const v335 = v333 ? v334 : false;
        const v336 = v332 ? true : v335;
        if (v336) {
          v331 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
          }
        else {
          const v337 = stdlib.lt(v308, stdlib.checkedBigNumberify('./index.rsh:9:20:decimal', stdlib.UInt_max, '22'));
          const v338 = stdlib.gt(v308, v325);
          const v339 = stdlib.gt(v325, stdlib.checkedBigNumberify('./index.rsh:9:65:decimal', stdlib.UInt_max, '21'));
          const v340 = v338 ? true : v339;
          const v341 = v337 ? v340 : false;
          if (v341) {
            v331 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
            }
          else {
            v331 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
            }
          }
        stdlib.protect(ctc3, await interact.seeOutcome(v331), {
          at: './index.rsh:105:24:application',
          fs: ['at ./index.rsh:104:7:application call to [unknown function] (defined at: ./index.rsh:104:25:function exp)'],
          msg: 'seeOutcome',
          who: 'Alice'
          });
        
        const v346 = stdlib.eq(v331, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
        if (v346) {
          const v347 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:109:14:decimal', stdlib.UInt_max, '2'), v255);
          const v351 = stdlib.sub(v275, v347);
          ;
          ;
          return;
          }
        else {
          const v359 = stdlib.eq(v331, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
          if (v359) {
            const v360 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:111:15:decimal', stdlib.UInt_max, '3'), v255);
            const v361 = stdlib.div(v360, stdlib.checkedBigNumberify('./index.rsh:111:28:decimal', stdlib.UInt_max, '2'));
            const v365 = stdlib.sub(v275, v361);
            ;
            const v366 = stdlib.div(v255, stdlib.checkedBigNumberify('./index.rsh:112:22:decimal', stdlib.UInt_max, '2'));
            const v370 = stdlib.sub(v365, v366);
            ;
            ;
            return;
            }
          else {
            const v381 = stdlib.sub(v275, v255);
            ;
            const v385 = stdlib.sub(v381, v255);
            ;
            ;
            return;
            }}}
      
      }
    
    
    
    }
  
  
  
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
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc3 = stdlib.T_Tuple([ctc0, ctc2]);
  const ctc4 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v255, v256], secs: v258, time: v257, didSend: v31, from: v254 } = txn1;
  ;
  const v267 = stdlib.add(v257, v256);
  stdlib.protect(ctc1, await interact.acceptWager(v255), {
    at: './index.rsh:54:25:application',
    fs: ['at ./index.rsh:53:11:application call to [unknown function] (defined at: ./index.rsh:53:15:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v254, v255, v256, v267],
    evt_cnt: 0,
    funcNum: 1,
    lct: v257,
    onlyIf: true,
    out_tys: [],
    pay: [v255, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v273, time: v272, didSend: v40, from: v271 } = txn2;
      
      const v275 = stdlib.add(v255, v255);
      sim_r.txns.push({
        amt: v255,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: ['time', v267],
    tys: [ctc4, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v254, v255, v256, v267],
      evt_cnt: 0,
      funcNum: 2,
      lct: v257,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v431, time: v430, didSend: v227, from: v429 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v254,
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
      tys: [ctc4, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v431, time: v430, didSend: v227, from: v429 } = txn3;
    ;
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:40:29:application',
      fs: ['at ./index.rsh:39:9:application call to [unknown function] (defined at: ./index.rsh:39:27:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:38:28:function exp)', 'at ./index.rsh:58:12:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
      msg: 'informTimeout',
      who: 'Bob'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v273, time: v272, didSend: v40, from: v271 } = txn2;
    const v275 = stdlib.add(v255, v255);
    ;
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc2],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v287], secs: v289, time: v288, didSend: v58, from: v286 } = txn3;
    ;
    const v290 = stdlib.addressEq(v254, v286);
    stdlib.assert(v290, {
      at: './index.rsh:72:9:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Bob'
      });
    const v297 = stdlib.add(v288, v256);
    stdlib.protect(ctc1, await interact.viewOpponentCards(v287), {
      at: './index.rsh:76:33:application',
      fs: ['at ./index.rsh:76:33:application call to [unknown function] (defined at: ./index.rsh:76:33:function exp)', 'at ./index.rsh:76:33:application call to "liftedInteract" (defined at: ./index.rsh:76:33:application)'],
      msg: 'viewOpponentCards',
      who: 'Bob'
      });
    
    const v302 = stdlib.protect(ctc3, await interact.dealCards(), {
      at: './index.rsh:79:75:application',
      fs: ['at ./index.rsh:78:11:application call to [unknown function] (defined at: ./index.rsh:78:15:function exp)'],
      msg: 'dealCards',
      who: 'Bob'
      });
    const v303 = v302[stdlib.checkedBigNumberify('./index.rsh:79:75:application', stdlib.UInt_max, '0')];
    const v304 = v302[stdlib.checkedBigNumberify('./index.rsh:79:75:application', stdlib.UInt_max, '1')];
    
    const txn4 = await (ctc.sendrecv({
      args: [v254, v255, v256, v271, v275, v297, v303, v304],
      evt_cnt: 2,
      funcNum: 4,
      lct: v288,
      onlyIf: true,
      out_tys: [ctc0, ctc2],
      pay: [stdlib.checkedBigNumberify('./index.rsh:82:7:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn4) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v308, v309], secs: v311, time: v310, didSend: v77, from: v307 } = txn4;
        
        ;
        const v319 = stdlib.add(v310, v256);
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: ['time', v297],
      tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc0, ctc0, ctc2],
      waitIfNotPresent: false
      }));
    if (txn4.didTimeout) {
      const txn5 = await (ctc.sendrecv({
        args: [v254, v255, v256, v271, v275, v297],
        evt_cnt: 0,
        funcNum: 5,
        lct: v288,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn5) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v413, time: v412, didSend: v196, from: v411 } = txn5;
          
          ;
          sim_r.txns.push({
            kind: 'from',
            to: v254,
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
        tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v413, time: v412, didSend: v196, from: v411 } = txn5;
      ;
      const v414 = stdlib.addressEq(v254, v411);
      const v415 = stdlib.addressEq(v271, v411);
      const v416 = v414 ? true : v415;
      stdlib.assert(v416, {
        at: 'reach standard library:200:11:dot',
        fs: ['at ./index.rsh:84:18:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
        msg: 'sender correct',
        who: 'Bob'
        });
      ;
      stdlib.protect(ctc1, await interact.informTimeout(), {
        at: './index.rsh:40:29:application',
        fs: ['at ./index.rsh:39:9:application call to [unknown function] (defined at: ./index.rsh:39:27:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:38:28:function exp)', 'at ./index.rsh:84:18:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
        msg: 'informTimeout',
        who: 'Bob'
        });
      
      return;
      
      }
    else {
      const {data: [v308, v309], secs: v311, time: v310, didSend: v77, from: v307 } = txn4;
      ;
      const v312 = stdlib.addressEq(v271, v307);
      stdlib.assert(v312, {
        at: './index.rsh:82:7:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Bob'
        });
      const v319 = stdlib.add(v310, v256);
      const txn5 = await (ctc.recv({
        didSend: false,
        evt_cnt: 2,
        funcNum: 6,
        out_tys: [ctc0, ctc2],
        timeoutAt: ['time', v319],
        waitIfNotPresent: false
        }));
      if (txn5.didTimeout) {
        const txn6 = await (ctc.sendrecv({
          args: [v254, v255, v271, v275, v308, v319],
          evt_cnt: 0,
          funcNum: 7,
          lct: v310,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn6) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v395, time: v394, didSend: v162, from: v393 } = txn6;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v271,
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
          tys: [ctc4, ctc0, ctc4, ctc0, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v395, time: v394, didSend: v162, from: v393 } = txn6;
        ;
        const v396 = stdlib.addressEq(v254, v393);
        const v397 = stdlib.addressEq(v271, v393);
        const v398 = v396 ? true : v397;
        stdlib.assert(v398, {
          at: 'reach standard library:200:11:dot',
          fs: ['at ./index.rsh:97:18:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
          msg: 'sender correct',
          who: 'Bob'
          });
        ;
        stdlib.protect(ctc1, await interact.informTimeout(), {
          at: './index.rsh:40:29:application',
          fs: ['at ./index.rsh:39:9:application call to [unknown function] (defined at: ./index.rsh:39:27:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:38:28:function exp)', 'at ./index.rsh:97:18:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
          msg: 'informTimeout',
          who: 'Bob'
          });
        
        return;
        
        }
      else {
        const {data: [v325, v326], secs: v328, time: v327, didSend: v88, from: v324 } = txn5;
        ;
        const v329 = stdlib.addressEq(v254, v324);
        stdlib.assert(v329, {
          at: './index.rsh:95:9:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Bob'
          });
        stdlib.protect(ctc1, await interact.viewOpponentCards(v326), {
          at: './index.rsh:100:33:application',
          fs: ['at ./index.rsh:100:33:application call to [unknown function] (defined at: ./index.rsh:100:33:function exp)', 'at ./index.rsh:100:33:application call to "liftedInteract" (defined at: ./index.rsh:100:33:application)'],
          msg: 'viewOpponentCards',
          who: 'Bob'
          });
        
        let v331;
        const v332 = stdlib.gt(v308, stdlib.checkedBigNumberify('./index.rsh:6:18:decimal', stdlib.UInt_max, '21'));
        const v333 = stdlib.lt(v325, stdlib.checkedBigNumberify('./index.rsh:6:38:decimal', stdlib.UInt_max, '22'));
        const v334 = stdlib.gt(v325, v308);
        const v335 = v333 ? v334 : false;
        const v336 = v332 ? true : v335;
        if (v336) {
          v331 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
          }
        else {
          const v337 = stdlib.lt(v308, stdlib.checkedBigNumberify('./index.rsh:9:20:decimal', stdlib.UInt_max, '22'));
          const v338 = stdlib.gt(v308, v325);
          const v339 = stdlib.gt(v325, stdlib.checkedBigNumberify('./index.rsh:9:65:decimal', stdlib.UInt_max, '21'));
          const v340 = v338 ? true : v339;
          const v341 = v337 ? v340 : false;
          if (v341) {
            v331 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
            }
          else {
            v331 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
            }
          }
        stdlib.protect(ctc1, await interact.seeOutcome(v331), {
          at: './index.rsh:105:24:application',
          fs: ['at ./index.rsh:104:7:application call to [unknown function] (defined at: ./index.rsh:104:25:function exp)'],
          msg: 'seeOutcome',
          who: 'Bob'
          });
        
        const v346 = stdlib.eq(v331, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
        if (v346) {
          const v347 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:109:14:decimal', stdlib.UInt_max, '2'), v255);
          const v351 = stdlib.sub(v275, v347);
          ;
          ;
          return;
          }
        else {
          const v359 = stdlib.eq(v331, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
          if (v359) {
            const v360 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:111:15:decimal', stdlib.UInt_max, '3'), v255);
            const v361 = stdlib.div(v360, stdlib.checkedBigNumberify('./index.rsh:111:28:decimal', stdlib.UInt_max, '2'));
            const v365 = stdlib.sub(v275, v361);
            ;
            const v366 = stdlib.div(v255, stdlib.checkedBigNumberify('./index.rsh:112:22:decimal', stdlib.UInt_max, '2'));
            const v370 = stdlib.sub(v365, v366);
            ;
            ;
            return;
            }
          else {
            const v381 = stdlib.sub(v275, v255);
            ;
            const v385 = stdlib.sub(v381, v255);
            ;
            ;
            return;
            }}}
      
      }
    
    
    
    }
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiARAAECIAQGWFADKAgHSBUWBTAmAgEAACI1ADEYQQSaKWRJIls1ASEKWzUCNhoAF0lBAAciNQQjNQYANhoCFzUENhoDNhoBF0khBAxAApBJIQUMQAGpSSELDEAAVCELEkQhBTQBEkQ0BEkiEkw0AhIRRChkSTUDVyggNf+ABOIbs6mwMgY0AyEGWw9ENANXACAxABI0/zEAEhFEsSKyATQDIQxbsggjshA0/7IHs0IDuUghBTQBEkQ0BEkiEkw0AhIRRChkSTUDSUpJVwAgNf8lWzX+VyggNf0hDFs1/CEHWzX7STUFSSJbNfpXCAg1+YAE+lEiFzT6FlA0+VCwMgY0AyEGWwxENP8xABJENPshDQ00+iEODDT6NPsNEBFBAAYiNfhCAB00+yEODDT7NPoNNPohDQ0REEEABiQ1+EIAAyM1+DT4IhJBACwkNP4LNfexIrIBNPeyCCOyEDT/sgezsSKyATT8NPcJsggjshA0/7IHs0IC8zT4JBJBAEghCDT+CyQKNfexIrIBNPeyCCOyEDT9sgezNP4kCjX2sSKyATT2sggjshA0/7IHs7EisgE0/DT3CTT2CbIII7IQNP+yB7NCAqSxIrIBNP6yCCOyEDT9sgezsSKyATT+sggjshA0/7IHs7EisgE0/DT+CTT+CbIII7IQNP+yB7NCAmtJIQ8MQABRSCEENAESRDQESSISTDQCEhFEKGRJNQNXACA1/4AEzJmSXLAyBjQDIQZbD0Q0/zEAEjQDVzAgMQASEUSxIrIBNAMhB1uyCCOyEDT/sgezQgITSCEENAESRDQESSISTDQCEhFEKGRJNQNJSlcAIDX/JVs1/lcwIDX9IQdbNfxJNQVJIls1+1cICDX6gAQTk9TuNPsWUDT6ULAyBjQDIQZbDEQ0/TEAEkQyBjQDIQlbCDX5NP80/hZQNP1QNPwWUDT7FlA0+RZQKEsBVwBgZ0ghBTUBMgY1AkIBp0kkDEAAukkhCAxAAHZIIQg0ARJENARJIhJMNAISEUQoZEk1A0lKSVcAIDX/JVs1/iEJWzX9VzAgNfwhB1s1+0k1BTX6gAQLJ4i+NPpQsDT/MQASRDIGNP0INfk0/zT+FlA0/RZQNPxQNPsWUDT5FlAoSwFXAGBnSCEENQEyBjUCQgEkSCM0ARJENARJIhJMNAISEUQoZDUDgARBsUBNsDIGNAMhEFsPRLEisgE0AyVbsggjshA0A1cAILIHs0IAy0kjDEAAZUgjNAESRDQESSISTDQCEhFEKGRJNQNJSVcAIDX/JVs1/iEJWzX9gASai5F0sDIGNAMhEFsMRDT+SQg1/DT+iADxNP80/hZQNP0WUDEAUDT8FlAoSwFXAFhnSCEINQEyBjUCQgB8SIGgjQaIAMUiNAESRDQESSISTDQCEhFESTUFSSJbNf8hCls1/oAErNEfwzT/FlA0/hZQsDT/iACUMgY0/gg1/TEANP8WUDT+FlA0/RZQKEsBVwA4Z0gjNQEyBjUCQgAcMRkhDxJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKTQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRCQxNRJEIjE2EkQiMTcSRCI1ASI1AkL/rzQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 96,
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
                "name": "v255",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v256",
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
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
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
                "name": "v255",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v256",
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
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
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
        "internalType": "struct T5",
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
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
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
        "internalType": "struct T5",
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
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
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
                "components": [
                  {
                    "internalType": "bytes8",
                    "name": "elem0",
                    "type": "bytes8"
                  }
                ],
                "internalType": "struct T7",
                "name": "v287",
                "type": "tuple"
              }
            ],
            "internalType": "struct T8",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
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
                "name": "v308",
                "type": "uint256"
              },
              {
                "components": [
                  {
                    "internalType": "bytes8",
                    "name": "elem0",
                    "type": "bytes8"
                  }
                ],
                "internalType": "struct T7",
                "name": "v309",
                "type": "tuple"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T12",
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
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
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
        "internalType": "struct T5",
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
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
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
                "name": "v325",
                "type": "uint256"
              },
              {
                "components": [
                  {
                    "internalType": "bytes8",
                    "name": "elem0",
                    "type": "bytes8"
                  }
                ],
                "internalType": "struct T7",
                "name": "v326",
                "type": "tuple"
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
    "name": "_reach_e6",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
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
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e7",
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
        "internalType": "struct T5",
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
        "internalType": "struct T5",
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
                "components": [
                  {
                    "internalType": "bytes8",
                    "name": "elem0",
                    "type": "bytes8"
                  }
                ],
                "internalType": "struct T7",
                "name": "v287",
                "type": "tuple"
              }
            ],
            "internalType": "struct T8",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
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
                "name": "v308",
                "type": "uint256"
              },
              {
                "components": [
                  {
                    "internalType": "bytes8",
                    "name": "elem0",
                    "type": "bytes8"
                  }
                ],
                "internalType": "struct T7",
                "name": "v309",
                "type": "tuple"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T12",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T5",
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
            "components": [
              {
                "internalType": "uint256",
                "name": "v325",
                "type": "uint256"
              },
              {
                "components": [
                  {
                    "internalType": "bytes8",
                    "name": "elem0",
                    "type": "bytes8"
                  }
                ],
                "internalType": "struct T7",
                "name": "v326",
                "type": "tuple"
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
    "name": "_reach_m6",
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
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m7",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162001a4538038062001a4583398101604081905262000026916200024b565b6000808055436003556040805160208082018352928152815133815284518185015284840151805182850152909301516060840152905190917fa736757a943474ef5983bb0422ab3a1e64bcd39e99635f4430c7765118231f95919081900360800190a16020820151516200009f903414600762000144565b6020808301510151620000b39043620002ab565b81526040805160808082018352600060208084018281528486018381526060808701858152338089528b860180515186525186015184528a5182526001968790554390965588518086019690965292518589015290519084015251828401528451808303909301835260a0909101909352805191926200013a92600292909101906200016e565b505050506200030f565b816200016a5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200017c90620002d2565b90600052602060002090601f016020900481019282620001a05760008555620001eb565b82601f10620001bb57805160ff1916838001178555620001eb565b82800160010185558215620001eb579182015b82811115620001eb578251825591602001919060010190620001ce565b50620001f9929150620001fd565b5090565b5b80821115620001f95760008155600101620001fe565b604080519081016001600160401b03811182821017156200024557634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360608112156200025f57600080fd5b6200026962000214565b835181526040601f19830112156200028057600080fd5b6200028a62000214565b60208581015182526040909501518582015293810193909352509092915050565b60008219821115620002cd57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c90821680620002e757607f821691505b602082108114156200030957634e487b7160e01b600052602260045260246000fd5b50919050565b611726806200031f6000396000f3fe60806040526004361061008f5760003560e01c80638e314769116100565780638e3147691461010a578063ab53f2c61461011d578063bd80fa0414610140578063bf2c5b2414610153578063ebfaeee51461016657005b80631e93b0f1146100985780632754e351146100bc5780632c10a159146100cf5780637eea518c146100e257806383230757146100f557005b3661009657005b005b3480156100a457600080fd5b506003545b6040519081526020015b60405180910390f35b6100966100ca36600461129d565b610179565b6100966100dd36600461129d565b6103b8565b6100966100f036600461129d565b6105d0565b34801561010157600080fd5b506001546100a9565b61009661011836600461129d565b61074e565b34801561012957600080fd5b506101326108e5565b6040516100b39291906112c0565b61009661014e36600461132f565b610982565b61009661016136600461129d565b610bae565b61009661017436600461132f565b610d49565b610189600360005414601261118a565b6101a38135158061019c57506001548235145b601361118a565b6000808055600280546101b59061134b565b80601f01602080910402602001604051908101604052809291908181526020018280546101e19061134b565b801561022e5780601f106102035761010080835404028352916020019161022e565b820191906000526020600020905b81548152906001019060200180831161021157829003601f168201915b505050505080602001905181019061024691906113d3565b905061025e6040518060200160405280600081525090565b7ff612951e6c1530ea6c8423f892ba3c90a42a7a42349da8930e850d762eb21a6e338460405161028f92919061147d565b60405180910390a16102a33415601061118a565b81516102bb906001600160a01b03163314601161118a565b60408201516102ca90436114bf565b81526040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a081019190915282516001600160a01b039081168083526020808601518185019081526040808801518187019081526060808a015187168189019081526080808c0151818b019081528b5160a0808d019182526004600055436001558751998a019a909a529651958801959095529251918601919091525190951694830194909452925191810191909152905160c082015260e0015b604051602081830303815290604052600290805190602001906103b19291906111af565b5050505050565b6103c8600160005414600961118a565b6103e2813515806103db57506001548235145b600a61118a565b6000808055600280546103f49061134b565b80601f01602080910402602001604051908101604052809291908181526020018280546104209061134b565b801561046d5780601f106104425761010080835404028352916020019161046d565b820191906000526020600020905b81548152906001019060200180831161045057829003601f168201915b505050505080602001905181019061048591906114d7565b905061049d6040518060200160405280600081525090565b6104ae82606001514310600b61118a565b7f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f133846040516104df929190611550565b60405180910390a160208201516104f690806114bf565b8152602082015161050a903414600861118a565b61054e6040518060a0016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b03168152602001600081525090565b82516001600160a01b031681526020808401518183015260408085015181840152336060840152835160808401526003600055436001555161038d9183910181516001600160a01b0390811682526020808401519083015260408084015190830152606080840151909116908201526080918201519181019190915260a00190565b6105e0600160005414600d61118a565b6105fa813515806105f357506001548235145b600e61118a565b60008080556002805461060c9061134b565b80601f01602080910402602001604051908101604052809291908181526020018280546106389061134b565b80156106855780601f1061065a57610100808354040283529160200191610685565b820191906000526020600020905b81548152906001019060200180831161066857829003601f168201915b505050505080602001905181019061069d91906114d7565b90506106b18160600151431015600f61118a565b7f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d95033836040516106e2929190611550565b60405180910390a16106f63415600c61118a565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610733573d6000803e3d6000fd5b506000808055600181905561074a90600290611233565b5050565b61075e600460005414601b61118a565b6107788135158061077157506001548235145b601c61118a565b60008080556002805461078a9061134b565b80601f01602080910402602001604051908101604052809291908181526020018280546107b69061134b565b80156108035780601f106107d857610100808354040283529160200191610803565b820191906000526020600020905b8154815290600101906020018083116107e657829003601f168201915b505050505080602001905181019061081b919061158d565b905061082f8160a00151431015601d61118a565b7fbe731e9f2a129299a212b8ec3ac324fa99671cd00a5a827cbd3d4fe6d7ad541d3383604051610860929190611550565b60405180910390a16108743415601961118a565b80516108a8906001600160a01b0316331461089e5760608201516001600160a01b031633146108a1565b60015b601a61118a565b805160808201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610733573d6000803e3d6000fd5b6000606060005460028080546108fa9061134b565b80601f01602080910402602001604051908101604052809291908181526020018280546109269061134b565b80156109735780601f1061094857610100808354040283529160200191610973565b820191906000526020600020905b81548152906001019060200180831161095657829003601f168201915b50505050509050915091509091565b610992600460005414601661118a565b6109ac813515806109a557506001548235145b601761118a565b6000808055600280546109be9061134b565b80601f01602080910402602001604051908101604052809291908181526020018280546109ea9061134b565b8015610a375780601f10610a0c57610100808354040283529160200191610a37565b820191906000526020600020905b815481529060010190602001808311610a1a57829003601f168201915b5050505050806020019051810190610a4f919061158d565b9050610a676040518060200160405280600081525090565b610a788260a001514310601861118a565b7f1680f1f49bab5bce70fda067a0e2ef3df5bfbefb13a6c3c5c3026cc5f0ddc7b13384604051610aa9929190611613565b60405180910390a1610abd3415601461118a565b6060820151610ad8906001600160a01b03163314601561118a565b6040820151610ae790436114bf565b81526040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a081019190915282516001600160a01b03908116808352602080860151818501908152606080880151851660408088019182526080808b0151848a019081528c870135828b019081528b5160a0808d019182526006600055436001558551998a019a909a529651938801939093529251909716928501929092525194830194909452925191810191909152905160c082015260e00161038d565b610bbe600660005414602561118a565b610bd881351580610bd157506001548235145b602661118a565b600080805560028054610bea9061134b565b80601f0160208091040260200160405190810160405280929190818152602001828054610c169061134b565b8015610c635780601f10610c3857610100808354040283529160200191610c63565b820191906000526020600020905b815481529060010190602001808311610c4657829003601f168201915b5050505050806020019051810190610c7b9190611630565b9050610c8f8160a00151431015602761118a565b7f3a35e33c7cbe4475e726117e3691b4a75ad6c9b28c29c59a1ef792dd449861bb3383604051610cc0929190611550565b60405180910390a1610cd43415602361118a565b8051610d08906001600160a01b03163314610cfe5760408201516001600160a01b03163314610d01565b60015b602461118a565b80604001516001600160a01b03166108fc82606001519081150290604051600060405180830381858888f19350505050158015610733573d6000803e3d6000fd5b610d59600660005414602061118a565b610d7381351580610d6c57506001548235145b602161118a565b600080805560028054610d859061134b565b80601f0160208091040260200160405190810160405280929190818152602001828054610db19061134b565b8015610dfe5780601f10610dd357610100808354040283529160200191610dfe565b820191906000526020600020905b815481529060010190602001808311610de157829003601f168201915b5050505050806020019051810190610e169190611630565b9050610e436040518060800160405280600081526020016000815260200160008152602001600081525090565b610e548260a001514310602261118a565b7f743720a8a8019f9562e650b473c07df59b61ff6da2f3717d30f4f175c28a25383384604051610e85929190611613565b60405180910390a1610e993415601e61118a565b8151610eb1906001600160a01b03163314601f61118a565b6015826080015111610ee0576016602084013510610ed0576000610ee3565b6080820151602084013511610ee3565b60015b15610ef15760008152610f36565b6016826080015110610f04576000610f23565b6080820151602084013510610f20576015602084013511610f23565b60015b15610f315760028152610f36565b600181525b8051610ff4576020820151610f4c906002611698565b6020820181905282516040516001600160a01b039091169180156108fc02916000818181858888f19350505050158015610f8a573d6000803e3d6000fd5b5081600001516001600160a01b03166108fc82602001518460600151610fb091906116b7565b6040518115909202916000818181858888f19350505050158015610fd8573d6000803e3d6000fd5b5060008080556001819055610fef90600290611233565b505050565b8051600214156110e0576002826020015160036110119190611698565b61101b91906116ce565b60408083018290528381015190516001600160a01b039091169180156108fc02916000818181858888f1935050505015801561105b573d6000803e3d6000fd5b506002826020015161106d91906116ce565b6060820181905282516040516001600160a01b039091169180156108fc02916000818181858888f193505050501580156110ab573d6000803e3d6000fd5b5081600001516001600160a01b03166108fc8260600151836040015185606001516110d691906116b7565b610fb091906116b7565b81604001516001600160a01b03166108fc83602001519081150290604051600060405180830381858888f19350505050158015611121573d6000803e3d6000fd5b50815160208301516040516001600160a01b039092169181156108fc0291906000818181858888f1935050505015801561115f573d6000803e3d6000fd5b5081600001516001600160a01b03166108fc8360200151846020015185606001516110d691906116b7565b8161074a5760405163100960cb60e01b81526004810182905260240160405180910390fd5b8280546111bb9061134b565b90600052602060002090601f0160209004810192826111dd5760008555611223565b82601f106111f657805160ff1916838001178555611223565b82800160010185558215611223579182015b82811115611223578251825591602001919060010190611208565b5061122f929150611270565b5090565b50805461123f9061134b565b6000825580601f1061124f575050565b601f01602090049060005260206000209081019061126d9190611270565b50565b5b8082111561122f5760008155600101611271565b60006040828403121561129757600080fd5b50919050565b6000604082840312156112af57600080fd5b6112b98383611285565b9392505050565b82815260006020604081840152835180604085015260005b818110156112f4578581018301518582016060015282016112d8565b81811115611306576000606083870101525b50601f01601f191692909201606001949350505050565b60006060828403121561129757600080fd5b60006060828403121561134157600080fd5b6112b9838361131d565b600181811c9082168061135f57607f821691505b6020821081141561129757634e487b7160e01b600052602260045260246000fd5b60405160c0810167ffffffffffffffff811182821017156113b157634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146113ce57600080fd5b919050565b600060a082840312156113e557600080fd5b60405160a0810181811067ffffffffffffffff8211171561141657634e487b7160e01b600052604160045260246000fd5b604052611422836113b7565b81526020830151602082015260408301516040820152611444606084016113b7565b6060820152608083015160808201528091505092915050565b80356001600160c01b0319811680821461147657600080fd5b9092525050565b6001600160a01b0383168152813560208083019190915260608201906112b9906040840190850161145d565b634e487b7160e01b600052601160045260246000fd5b600082198211156114d2576114d26114a9565b500190565b6000608082840312156114e957600080fd5b6040516080810181811067ffffffffffffffff8211171561151a57634e487b7160e01b600052604160045260246000fd5b604052611526836113b7565b81526020830151602082015260408301516040820152606083015160608201528091505092915050565b6001600160a01b03831681528135602080830191909152606082019083013580151580821461157e57600080fd5b80604085015250509392505050565b600060c0828403121561159f57600080fd5b6115a7611380565b6115b0836113b7565b815260208301516020820152604083015160408201526115d2606084016113b7565b60608201526080830151608082015260a083015160a08201528091505092915050565b803582526020810135602083015261074a604083016040830161145d565b6001600160a01b0383168152608081016112b960208301846115f5565b600060c0828403121561164257600080fd5b61164a611380565b611653836113b7565b81526020830151602082015261166b604084016113b7565b6040820152606083015160608201526080830151608082015260a083015160a08201528091505092915050565b60008160001904831182151516156116b2576116b26114a9565b500290565b6000828210156116c9576116c96114a9565b500390565b6000826116eb57634e487b7160e01b600052601260045260246000fd5b50049056fea2646970667358221220fc87fd8129b9bdf0166b47112d9a1d9c5bad8157f13cb10db1219e1cecad3eb064736f6c634300080c0033`,
  BytecodeLen: 6725,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:51:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: 'reach standard library:202:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:58:12:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:61:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:74:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: 'reach standard library:202:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:84:18:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:87:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: 'reach standard library:202:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:97:18:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  8: {
    at: './index.rsh:120:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './index.rsh:120:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  10: {
    at: './index.rsh:120:11:after expr stmt semicolon',
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
