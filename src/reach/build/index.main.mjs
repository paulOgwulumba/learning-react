// Automatically generated with Reach 0.1.11 (7d2358ff)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (7d2358ff)';
export const _backendVersion = 17;

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
  const ctc2 = stdlib.T_Digest;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1, ctc1],
      3: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1],
      5: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc2, ctc1],
      7: [ctc0, ctc1, ctc0, ctc1, ctc2, ctc1, ctc1]
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
  const ctc1 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Address;
  
  
  const v263 = stdlib.protect(ctc0, interact.deadline, 'for Alice\'s interact field deadline');
  const v264 = stdlib.protect(ctc0, interact.wager, 'for Alice\'s interact field wager');
  
  const txn1 = await (ctc.sendrecv({
    args: [v264, v263],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:54:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [v264, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v268, v269], secs: v271, time: v270, didSend: v31, from: v267 } = txn1;
      
      sim_r.txns.push({
        amt: v268,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v280 = stdlib.add(v270, v269);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v268, v269], secs: v271, time: v270, didSend: v31, from: v267 } = txn1;
  ;
  const v280 = stdlib.add(v270, v269);
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: ['time', v280],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v267, v268, v269, v280],
      evt_cnt: 0,
      funcNum: 2,
      lct: v270,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v446, time: v445, didSend: v238, from: v444 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v267,
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
    const {data: [], secs: v446, time: v445, didSend: v238, from: v444 } = txn3;
    ;
    ;
    stdlib.protect(ctc3, await interact.informTimeout(), {
      at: './index.rsh:45:29:application',
      fs: ['at ./index.rsh:44:9:application call to [unknown function] (defined at: ./index.rsh:44:27:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:43:28:function exp)', 'at ./index.rsh:63:12:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
      msg: 'informTimeout',
      who: 'Alice'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v286, time: v285, didSend: v40, from: v284 } = txn2;
    const v288 = stdlib.add(v268, v268);
    ;
    const v295 = stdlib.add(v285, v269);
    const v299 = stdlib.protect(ctc0, await interact.dealCard(), {
      at: './index.rsh:71:41:application',
      fs: ['at ./index.rsh:70:13:application call to [unknown function] (defined at: ./index.rsh:70:17:function exp)'],
      msg: 'dealCard',
      who: 'Alice'
      });
    const v300 = stdlib.protect(ctc0, await interact.random(), {
      at: 'reach standard library:64:31:application',
      fs: ['at ./index.rsh:72:54:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:70:13:application call to [unknown function] (defined at: ./index.rsh:70:17:function exp)'],
      msg: 'random',
      who: 'Alice'
      });
    const v301 = stdlib.digest(ctc1, [v300, v299]);
    
    const txn3 = await (ctc.sendrecv({
      args: [v267, v268, v269, v284, v288, v295, v301],
      evt_cnt: 1,
      funcNum: 3,
      lct: v285,
      onlyIf: true,
      out_tys: [ctc2],
      pay: [stdlib.checkedBigNumberify('./index.rsh:76:9:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v304], secs: v306, time: v305, didSend: v54, from: v303 } = txn3;
        
        ;
        const v314 = stdlib.add(v305, v269);
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: ['time', v295],
      tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc0, ctc2],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.sendrecv({
        args: [v267, v268, v269, v284, v288, v295],
        evt_cnt: 0,
        funcNum: 4,
        lct: v285,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v428, time: v427, didSend: v207, from: v426 } = txn4;
          
          ;
          sim_r.txns.push({
            kind: 'from',
            to: v284,
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
      const {data: [], secs: v428, time: v427, didSend: v207, from: v426 } = txn4;
      ;
      const v429 = stdlib.addressEq(v267, v426);
      const v430 = stdlib.addressEq(v284, v426);
      const v431 = v429 ? true : v430;
      stdlib.assert(v431, {
        at: 'reach standard library:200:11:dot',
        fs: ['at ./index.rsh:77:12:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
        msg: 'sender correct',
        who: 'Alice'
        });
      ;
      stdlib.protect(ctc3, await interact.informTimeout(), {
        at: './index.rsh:45:29:application',
        fs: ['at ./index.rsh:44:9:application call to [unknown function] (defined at: ./index.rsh:44:27:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:43:28:function exp)', 'at ./index.rsh:77:12:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
        msg: 'informTimeout',
        who: 'Alice'
        });
      
      return;
      
      }
    else {
      const {data: [v304], secs: v306, time: v305, didSend: v54, from: v303 } = txn3;
      ;
      const v307 = stdlib.addressEq(v267, v303);
      stdlib.assert(v307, {
        at: './index.rsh:76:9:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Alice'
        });
      const v314 = stdlib.add(v305, v269);
      const txn4 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 5,
        out_tys: [ctc0],
        timeoutAt: ['time', v314],
        waitIfNotPresent: false
        }));
      if (txn4.didTimeout) {
        const txn5 = await (ctc.sendrecv({
          args: [v267, v268, v269, v284, v288, v304, v314],
          evt_cnt: 0,
          funcNum: 6,
          lct: v305,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v410, time: v409, didSend: v173, from: v408 } = txn5;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v267,
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
          tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc2, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v410, time: v409, didSend: v173, from: v408 } = txn5;
        ;
        const v411 = stdlib.addressEq(v267, v408);
        const v412 = stdlib.addressEq(v284, v408);
        const v413 = v411 ? true : v412;
        stdlib.assert(v413, {
          at: 'reach standard library:200:11:dot',
          fs: ['at ./index.rsh:89:12:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
          msg: 'sender correct',
          who: 'Alice'
          });
        ;
        stdlib.protect(ctc3, await interact.informTimeout(), {
          at: './index.rsh:45:29:application',
          fs: ['at ./index.rsh:44:9:application call to [unknown function] (defined at: ./index.rsh:44:27:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:43:28:function exp)', 'at ./index.rsh:89:12:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
          msg: 'informTimeout',
          who: 'Alice'
          });
        
        return;
        
        }
      else {
        const {data: [v320], secs: v322, time: v321, didSend: v64, from: v319 } = txn4;
        ;
        const v323 = stdlib.addressEq(v284, v319);
        stdlib.assert(v323, {
          at: './index.rsh:88:7:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Alice'
          });
        const v330 = stdlib.add(v321, v269);
        const txn5 = await (ctc.sendrecv({
          args: [v267, v268, v284, v288, v304, v320, v330, v300, v299],
          evt_cnt: 2,
          funcNum: 7,
          lct: v321,
          onlyIf: true,
          out_tys: [ctc0, ctc0],
          pay: [stdlib.checkedBigNumberify('./index.rsh:99:9:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [v335, v336], secs: v338, time: v337, didSend: v74, from: v334 } = txn5;
            
            ;
            let v342;
            const v343 = stdlib.eq(v336, v320);
            if (v343) {
              v342 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
              }
            else {
              const v344 = stdlib.lt(v336, stdlib.checkedBigNumberify('./index.rsh:10:18:decimal', stdlib.UInt_max, '21'));
              const v345 = stdlib.lt(v320, stdlib.checkedBigNumberify('./index.rsh:10:34:decimal', stdlib.UInt_max, '21'));
              const v346 = v344 ? v345 : false;
              const v347 = stdlib.gt(v336, v320);
              const v348 = v346 ? v347 : false;
              const v350 = stdlib.gt(v320, stdlib.checkedBigNumberify('./index.rsh:11:34:decimal', stdlib.UInt_max, '21'));
              const v351 = v344 ? v350 : false;
              const v352 = v348 ? true : v351;
              if (v352) {
                v342 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
                }
              else {
                const v356 = stdlib.lt(v336, v320);
                const v357 = v346 ? v356 : false;
                const v358 = stdlib.gt(v336, stdlib.checkedBigNumberify('./index.rsh:16:18:decimal', stdlib.UInt_max, '21'));
                const v360 = v358 ? v345 : false;
                const v361 = v357 ? true : v360;
                if (v361) {
                  v342 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
                  }
                else {
                  v342 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '3');
                  }
                }
              }
            const v362 = stdlib.eq(v342, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
            if (v362) {
              sim_r.txns.push({
                kind: 'from',
                to: v267,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'from',
                to: v284,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }
            else {
              const v377 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:111:14:decimal', stdlib.UInt_max, '2'), v268);
              const v378 = stdlib.eq(v342, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
              const v379 = v378 ? v267 : v284;
              sim_r.txns.push({
                kind: 'from',
                to: v379,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: ['time', v330],
          tys: [ctc4, ctc0, ctc4, ctc0, ctc2, ctc0, ctc0, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        if (txn5.didTimeout) {
          const txn6 = await (ctc.sendrecv({
            args: [v267, v268, v284, v288, v304, v320, v330],
            evt_cnt: 0,
            funcNum: 8,
            lct: v321,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v392, time: v391, didSend: v139, from: v390 } = txn6;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v284,
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
            tys: [ctc4, ctc0, ctc4, ctc0, ctc2, ctc0, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v392, time: v391, didSend: v139, from: v390 } = txn6;
          ;
          const v393 = stdlib.addressEq(v267, v390);
          const v394 = stdlib.addressEq(v284, v390);
          const v395 = v393 ? true : v394;
          stdlib.assert(v395, {
            at: 'reach standard library:200:11:dot',
            fs: ['at ./index.rsh:100:12:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
            msg: 'sender correct',
            who: 'Alice'
            });
          ;
          stdlib.protect(ctc3, await interact.informTimeout(), {
            at: './index.rsh:45:29:application',
            fs: ['at ./index.rsh:44:9:application call to [unknown function] (defined at: ./index.rsh:44:27:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:43:28:function exp)', 'at ./index.rsh:100:12:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
            msg: 'informTimeout',
            who: 'Alice'
            });
          
          return;
          
          }
        else {
          const {data: [v335, v336], secs: v338, time: v337, didSend: v74, from: v334 } = txn5;
          ;
          const v339 = stdlib.addressEq(v267, v334);
          stdlib.assert(v339, {
            at: './index.rsh:99:9:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Alice'
            });
          const v340 = stdlib.digest(ctc1, [v335, v336]);
          const v341 = stdlib.digestEq(v304, v340);
          stdlib.assert(v341, {
            at: 'reach standard library:69:17:application',
            fs: ['at ./index.rsh:103:18:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
            msg: null,
            who: 'Alice'
            });
          let v342;
          const v343 = stdlib.eq(v336, v320);
          if (v343) {
            v342 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
            }
          else {
            const v344 = stdlib.lt(v336, stdlib.checkedBigNumberify('./index.rsh:10:18:decimal', stdlib.UInt_max, '21'));
            const v345 = stdlib.lt(v320, stdlib.checkedBigNumberify('./index.rsh:10:34:decimal', stdlib.UInt_max, '21'));
            const v346 = v344 ? v345 : false;
            const v347 = stdlib.gt(v336, v320);
            const v348 = v346 ? v347 : false;
            const v350 = stdlib.gt(v320, stdlib.checkedBigNumberify('./index.rsh:11:34:decimal', stdlib.UInt_max, '21'));
            const v351 = v344 ? v350 : false;
            const v352 = v348 ? true : v351;
            if (v352) {
              v342 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
              }
            else {
              const v356 = stdlib.lt(v336, v320);
              const v357 = v346 ? v356 : false;
              const v358 = stdlib.gt(v336, stdlib.checkedBigNumberify('./index.rsh:16:18:decimal', stdlib.UInt_max, '21'));
              const v360 = v358 ? v345 : false;
              const v361 = v357 ? true : v360;
              if (v361) {
                v342 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
                }
              else {
                v342 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '3');
                }
              }
            }
          const v362 = stdlib.eq(v342, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
          if (v362) {
            ;
            ;
            stdlib.protect(ctc3, await interact.seeOutcome(v342), {
              at: './index.rsh:117:24:application',
              fs: ['at ./index.rsh:116:7:application call to [unknown function] (defined at: ./index.rsh:116:25:function exp)'],
              msg: 'seeOutcome',
              who: 'Alice'
              });
            stdlib.protect(ctc3, await interact.seeCards(v336, v320), {
              at: './index.rsh:118:22:application',
              fs: ['at ./index.rsh:116:7:application call to [unknown function] (defined at: ./index.rsh:116:25:function exp)'],
              msg: 'seeCards',
              who: 'Alice'
              });
            
            return;
            }
          else {
            const v377 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:111:14:decimal', stdlib.UInt_max, '2'), v268);
            const v378 = stdlib.eq(v342, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
            const v379 = v378 ? v267 : v284;
            ;
            stdlib.protect(ctc3, await interact.seeOutcome(v342), {
              at: './index.rsh:117:24:application',
              fs: ['at ./index.rsh:116:7:application call to [unknown function] (defined at: ./index.rsh:116:25:function exp)'],
              msg: 'seeOutcome',
              who: 'Alice'
              });
            stdlib.protect(ctc3, await interact.seeCards(v336, v320), {
              at: './index.rsh:118:22:application',
              fs: ['at ./index.rsh:116:7:application call to [unknown function] (defined at: ./index.rsh:116:25:function exp)'],
              msg: 'seeCards',
              who: 'Alice'
              });
            
            return;
            }}
        
        }
      
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
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc4 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v268, v269], secs: v271, time: v270, didSend: v31, from: v267 } = txn1;
  ;
  const v280 = stdlib.add(v270, v269);
  stdlib.protect(ctc1, await interact.acceptWager(v268), {
    at: './index.rsh:59:25:application',
    fs: ['at ./index.rsh:58:11:application call to [unknown function] (defined at: ./index.rsh:58:15:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v267, v268, v269, v280],
    evt_cnt: 0,
    funcNum: 1,
    lct: v270,
    onlyIf: true,
    out_tys: [],
    pay: [v268, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v286, time: v285, didSend: v40, from: v284 } = txn2;
      
      const v288 = stdlib.add(v268, v268);
      sim_r.txns.push({
        amt: v268,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v295 = stdlib.add(v285, v269);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: ['time', v280],
    tys: [ctc4, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v267, v268, v269, v280],
      evt_cnt: 0,
      funcNum: 2,
      lct: v270,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v446, time: v445, didSend: v238, from: v444 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v267,
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
    const {data: [], secs: v446, time: v445, didSend: v238, from: v444 } = txn3;
    ;
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:45:29:application',
      fs: ['at ./index.rsh:44:9:application call to [unknown function] (defined at: ./index.rsh:44:27:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:43:28:function exp)', 'at ./index.rsh:63:12:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
      msg: 'informTimeout',
      who: 'Bob'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v286, time: v285, didSend: v40, from: v284 } = txn2;
    const v288 = stdlib.add(v268, v268);
    ;
    const v295 = stdlib.add(v285, v269);
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc2],
      timeoutAt: ['time', v295],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.sendrecv({
        args: [v267, v268, v269, v284, v288, v295],
        evt_cnt: 0,
        funcNum: 4,
        lct: v285,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v428, time: v427, didSend: v207, from: v426 } = txn4;
          
          ;
          sim_r.txns.push({
            kind: 'from',
            to: v284,
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
      const {data: [], secs: v428, time: v427, didSend: v207, from: v426 } = txn4;
      ;
      const v429 = stdlib.addressEq(v267, v426);
      const v430 = stdlib.addressEq(v284, v426);
      const v431 = v429 ? true : v430;
      stdlib.assert(v431, {
        at: 'reach standard library:200:11:dot',
        fs: ['at ./index.rsh:77:12:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
        msg: 'sender correct',
        who: 'Bob'
        });
      ;
      stdlib.protect(ctc1, await interact.informTimeout(), {
        at: './index.rsh:45:29:application',
        fs: ['at ./index.rsh:44:9:application call to [unknown function] (defined at: ./index.rsh:44:27:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:43:28:function exp)', 'at ./index.rsh:77:12:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
        msg: 'informTimeout',
        who: 'Bob'
        });
      
      return;
      
      }
    else {
      const {data: [v304], secs: v306, time: v305, didSend: v54, from: v303 } = txn3;
      ;
      const v307 = stdlib.addressEq(v267, v303);
      stdlib.assert(v307, {
        at: './index.rsh:76:9:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Bob'
        });
      const v314 = stdlib.add(v305, v269);
      const v318 = stdlib.protect(ctc0, await interact.dealCard(), {
        at: './index.rsh:85:49:application',
        fs: ['at ./index.rsh:84:11:application call to [unknown function] (defined at: ./index.rsh:84:15:function exp)'],
        msg: 'dealCard',
        who: 'Bob'
        });
      
      const txn4 = await (ctc.sendrecv({
        args: [v267, v268, v269, v284, v288, v304, v314, v318],
        evt_cnt: 1,
        funcNum: 5,
        lct: v305,
        onlyIf: true,
        out_tys: [ctc0],
        pay: [stdlib.checkedBigNumberify('./index.rsh:88:7:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v320], secs: v322, time: v321, didSend: v64, from: v319 } = txn4;
          
          ;
          const v330 = stdlib.add(v321, v269);
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: ['time', v314],
        tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc2, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      if (txn4.didTimeout) {
        const txn5 = await (ctc.sendrecv({
          args: [v267, v268, v269, v284, v288, v304, v314],
          evt_cnt: 0,
          funcNum: 6,
          lct: v305,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v410, time: v409, didSend: v173, from: v408 } = txn5;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v267,
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
          tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc2, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v410, time: v409, didSend: v173, from: v408 } = txn5;
        ;
        const v411 = stdlib.addressEq(v267, v408);
        const v412 = stdlib.addressEq(v284, v408);
        const v413 = v411 ? true : v412;
        stdlib.assert(v413, {
          at: 'reach standard library:200:11:dot',
          fs: ['at ./index.rsh:89:12:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
          msg: 'sender correct',
          who: 'Bob'
          });
        ;
        stdlib.protect(ctc1, await interact.informTimeout(), {
          at: './index.rsh:45:29:application',
          fs: ['at ./index.rsh:44:9:application call to [unknown function] (defined at: ./index.rsh:44:27:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:43:28:function exp)', 'at ./index.rsh:89:12:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
          msg: 'informTimeout',
          who: 'Bob'
          });
        
        return;
        
        }
      else {
        const {data: [v320], secs: v322, time: v321, didSend: v64, from: v319 } = txn4;
        ;
        const v323 = stdlib.addressEq(v284, v319);
        stdlib.assert(v323, {
          at: './index.rsh:88:7:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Bob'
          });
        const v330 = stdlib.add(v321, v269);
        const txn5 = await (ctc.recv({
          didSend: false,
          evt_cnt: 2,
          funcNum: 7,
          out_tys: [ctc0, ctc0],
          timeoutAt: ['time', v330],
          waitIfNotPresent: false
          }));
        if (txn5.didTimeout) {
          const txn6 = await (ctc.sendrecv({
            args: [v267, v268, v284, v288, v304, v320, v330],
            evt_cnt: 0,
            funcNum: 8,
            lct: v321,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v392, time: v391, didSend: v139, from: v390 } = txn6;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v284,
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
            tys: [ctc4, ctc0, ctc4, ctc0, ctc2, ctc0, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v392, time: v391, didSend: v139, from: v390 } = txn6;
          ;
          const v393 = stdlib.addressEq(v267, v390);
          const v394 = stdlib.addressEq(v284, v390);
          const v395 = v393 ? true : v394;
          stdlib.assert(v395, {
            at: 'reach standard library:200:11:dot',
            fs: ['at ./index.rsh:100:12:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
            msg: 'sender correct',
            who: 'Bob'
            });
          ;
          stdlib.protect(ctc1, await interact.informTimeout(), {
            at: './index.rsh:45:29:application',
            fs: ['at ./index.rsh:44:9:application call to [unknown function] (defined at: ./index.rsh:44:27:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:43:28:function exp)', 'at ./index.rsh:100:12:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
            msg: 'informTimeout',
            who: 'Bob'
            });
          
          return;
          
          }
        else {
          const {data: [v335, v336], secs: v338, time: v337, didSend: v74, from: v334 } = txn5;
          ;
          const v339 = stdlib.addressEq(v267, v334);
          stdlib.assert(v339, {
            at: './index.rsh:99:9:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Bob'
            });
          const v340 = stdlib.digest(ctc3, [v335, v336]);
          const v341 = stdlib.digestEq(v304, v340);
          stdlib.assert(v341, {
            at: 'reach standard library:69:17:application',
            fs: ['at ./index.rsh:103:18:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
            msg: null,
            who: 'Bob'
            });
          let v342;
          const v343 = stdlib.eq(v336, v320);
          if (v343) {
            v342 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
            }
          else {
            const v344 = stdlib.lt(v336, stdlib.checkedBigNumberify('./index.rsh:10:18:decimal', stdlib.UInt_max, '21'));
            const v345 = stdlib.lt(v320, stdlib.checkedBigNumberify('./index.rsh:10:34:decimal', stdlib.UInt_max, '21'));
            const v346 = v344 ? v345 : false;
            const v347 = stdlib.gt(v336, v320);
            const v348 = v346 ? v347 : false;
            const v350 = stdlib.gt(v320, stdlib.checkedBigNumberify('./index.rsh:11:34:decimal', stdlib.UInt_max, '21'));
            const v351 = v344 ? v350 : false;
            const v352 = v348 ? true : v351;
            if (v352) {
              v342 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
              }
            else {
              const v356 = stdlib.lt(v336, v320);
              const v357 = v346 ? v356 : false;
              const v358 = stdlib.gt(v336, stdlib.checkedBigNumberify('./index.rsh:16:18:decimal', stdlib.UInt_max, '21'));
              const v360 = v358 ? v345 : false;
              const v361 = v357 ? true : v360;
              if (v361) {
                v342 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
                }
              else {
                v342 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '3');
                }
              }
            }
          const v362 = stdlib.eq(v342, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
          if (v362) {
            ;
            ;
            stdlib.protect(ctc1, await interact.seeOutcome(v342), {
              at: './index.rsh:117:24:application',
              fs: ['at ./index.rsh:116:7:application call to [unknown function] (defined at: ./index.rsh:116:25:function exp)'],
              msg: 'seeOutcome',
              who: 'Bob'
              });
            stdlib.protect(ctc1, await interact.seeCards(v336, v320), {
              at: './index.rsh:118:22:application',
              fs: ['at ./index.rsh:116:7:application call to [unknown function] (defined at: ./index.rsh:116:25:function exp)'],
              msg: 'seeCards',
              who: 'Bob'
              });
            
            return;
            }
          else {
            const v377 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:111:14:decimal', stdlib.UInt_max, '2'), v268);
            const v378 = stdlib.eq(v342, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
            const v379 = v378 ? v267 : v284;
            ;
            stdlib.protect(ctc1, await interact.seeOutcome(v342), {
              at: './index.rsh:117:24:application',
              fs: ['at ./index.rsh:116:7:application call to [unknown function] (defined at: ./index.rsh:116:25:function exp)'],
              msg: 'seeOutcome',
              who: 'Bob'
              });
            stdlib.protect(ctc1, await interact.seeCards(v336, v320), {
              at: './index.rsh:118:22:application',
              fs: ['at ./index.rsh:116:7:application call to [unknown function] (defined at: ./index.rsh:116:25:function exp)'],
              msg: 'seeCards',
              who: 'Bob'
              });
            
            return;
            }}
        
        }
      
      }
    
    }
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiAOAAEDCCAFB3gVAlAoWDAmAwEAAQEAIjUAMRhBBNkqZEkiWzUBJVs1AjYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARdJgQQMQAKySYEGDEABwkkhBgxAAWdJJQxAAFYlEkQhBjQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDVyggNf+ABBf82y6wMgY0AyEHWw9ENANXACAxABI0/zEAEhFEsSKyATQDgUhbsggjshA0/7IHs0ID8UghBjQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDSUpXACA1/yEEWzX+VyggNf2BcFs1/Ek1BUkiWzX7JVs1+oAEgmt7djT7FlA0+hZQsDIGNAMhB1sMRDT/MQASRDQDV1AgNPsWNPoWUAESRDT6NPwSQQAGIzX5QgBMNPohCAw1+DT8IQgMNfc0+DT3EEk19jT6NPwNEDT4NPwhCA0QEUEAByEJNflCAB009jT6NPwMEDT6IQgNNPcQEUEABiI1+UIAAyQ1+TT5IxJBACOxIrIBNP6yCCOyEDT/sgezsSKyATT+sggjshA0/bIHs0IDBLEisgEhCTT+C7III7IQNP00/zT5IQkSTbIHs0IC5kghBTQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDVwAgNf+ABGG0rAywMgY0AyEHWw9ENP8xABI0A1cwIDEAEhFEsSKyATQDIQpbsggjshA0/7IHs0ICkkkhBQxAAJJIIQU0ARJENARJIhJMNAISEUQoZClkUEk1A0lKSVcAIDX/IQRbNf5XMCA1/SEKWzX8V1ggNftJNQUXNfqABIGqms80+hZQsDIGNAMhB1sMRDT9MQASRDIGNAMhC1sINfk0/zT+FlA0/VA0/BZQNPtQNPoWUDT5FlAoSwFXAH9nKUsBV38BZ0ghBjUBMgY1AkICFUgkNAESRDQESSISTDQCEhFEKGRJNQNXMCA1/4AEkSc087AyBjQDIQxbD0Q0A1cAIDEAEjT/MQASEUSxIrIBNAMhCluyCCOyEDT/sgezQgGpSSEJDEAAzUkkDEAAiUgkNAESRDQESSISTDQCEhFEKGRJNQNJSklXACA1/yEEWzX+IQtbNf1XMCA1/CEKWzX7STUFNfqABBPu6lE0+lCwMgY0AyEMWwxENP8xABJEMgY0/Qg1+TT/NP4WUDT9FlA0/FA0+xZQNPpQNPkWUChLAVcAf2cpSwFXfwFnSCEFNQEyBjUCQgEvSCM0ARJENARJIhJMNAISEUQoZDUDgARBsUBNsDIGNAMhDVsPRLEisgE0AyEEW7III7IQNANXACCyB7NCANVJIwxAAHBIIzQBEkQ0BEkiEkw0AhIRRChkSTUDSUlXACA1/yEEWzX+IQtbNf2ABJqLkXSwMgY0AyENWwxENP5JCDX8NP6IAPoyBjT9CDX7NP80/hZQNP0WUDEAUDT8FlA0+xZQKEsBVwBgZ0gkNQEyBjUCQgB7SIGgjQaIAMQiNAESRDQESSISTDQCEhFESTUFSSJbNf8lWzX+gASs0R/DNP8WUDT+FlCwNP+IAJQyBjT+CDX9MQA0/xZQNP4WUDT9FlAoSwFXADhnSCM1ATIGNQJCABwxGSEFEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQqNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEJDE1EkQiMTYSRCIxNxJEIjUBIjUCQv+vNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 128,
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
                "name": "v268",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v269",
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
                "name": "v268",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v269",
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
                "internalType": "uint256",
                "name": "v304",
                "type": "uint256"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
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
            "components": [
              {
                "internalType": "uint256",
                "name": "v320",
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
            "components": [
              {
                "internalType": "uint256",
                "name": "v335",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v336",
                "type": "uint256"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e7",
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
    "name": "_reach_e8",
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
                "internalType": "uint256",
                "name": "v304",
                "type": "uint256"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T8",
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
                "name": "v320",
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
        "internalType": "struct T5",
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
            "components": [
              {
                "internalType": "uint256",
                "name": "v335",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v336",
                "type": "uint256"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T13",
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
    "name": "_reach_m8",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162001b4c38038062001b4c83398101604081905262000026916200024b565b6000808055436003556040805160208082018352928152815133815284518185015284840151805182850152909301516060840152905190917fa736757a943474ef5983bb0422ab3a1e64bcd39e99635f4430c7765118231f95919081900360800190a16020820151516200009f903414600762000144565b6020808301510151620000b39043620002ab565b81526040805160808082018352600060208084018281528486018381526060808701858152338089528b860180515186525186015184528a5182526001968790554390965588518086019690965292518589015290519084015251828401528451808303909301835260a0909101909352805191926200013a92600292909101906200016e565b505050506200030f565b816200016a5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200017c90620002d2565b90600052602060002090601f016020900481019282620001a05760008555620001eb565b82601f10620001bb57805160ff1916838001178555620001eb565b82800160010185558215620001eb579182015b82811115620001eb578251825591602001919060010190620001ce565b50620001f9929150620001fd565b5090565b5b80821115620001f95760008155600101620001fe565b604080519081016001600160401b03811182821017156200024557634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360608112156200025f57600080fd5b6200026962000214565b835181526040601f19830112156200028057600080fd5b6200028a62000214565b60208581015182526040909501518582015293810193909352509092915050565b60008219821115620002cd57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c90821680620002e757607f821691505b602082108114156200030957634e487b7160e01b600052602260045260246000fd5b50919050565b61182d806200031f6000396000f3fe60806040526004361061009a5760003560e01c806383230757116100615780638323075714610113578063a7661d5414610128578063ab53f2c61461013b578063c79800371461015e578063e533a29d14610171578063f4cedab01461018457005b80631e93b0f1146100a35780632c10a159146100c7578063422eb85c146100da578063552d7b8e146100ed5780637eea518c1461010057005b366100a157005b005b3480156100af57600080fd5b506003545b6040519081526020015b60405180910390f35b6100a16100d536600461143b565b610197565b6100a16100e836600461145e565b610402565b6100a16100fb36600461143b565b6107b3565b6100a161010e36600461143b565b6109fc565b34801561011f57600080fd5b506001546100b4565b6100a161013636600461143b565b610b7a565b34801561014757600080fd5b50610150610d15565b6040516100be929190611470565b6100a161016c36600461143b565b610db2565b6100a161017f36600461143b565b610f49565b6100a161019236600461143b565b6110e4565b6101a76001600054146009611328565b6101c1813515806101ba57506001548235145b600a611328565b6000808055600280546101d3906114cd565b80601f01602080910402602001604051908101604052809291908181526020018280546101ff906114cd565b801561024c5780601f106102215761010080835404028352916020019161024c565b820191906000526020600020905b81548152906001019060200180831161022f57829003601f168201915b50505050508060200190518101906102649190611555565b9050610283604051806040016040528060008152602001600081525090565b61029482606001514310600b611328565b7f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f133846040516102c59291906115ce565b60405180910390a160208201516102dc9080611621565b815260208201516102f09034146008611328565b60408201516102ff9043611621565b8160200181815250506103536040518060c0016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b0316815260200160008152602001600081525090565b82516001600160a01b0390811680835260208086015181850190815260408088015181870190815233606080890191825289516080808b019182528b88015160a0808d019182526003600055436001558751998a019a909a529651958801959095529251908601525190951690830152925191810191909152905160c082015260e0015b604051602081830303815290604052600290805190602001906103fb92919061134d565b5050505050565b6104126007600054146027611328565b61042c8135158061042557506001548235145b6028611328565b60008080556002805461043e906114cd565b80601f016020809104026020016040519081016040528092919081815260200182805461046a906114cd565b80156104b75780601f1061048c576101008083540402835291602001916104b7565b820191906000526020600020905b81548152906001019060200180831161049a57829003601f168201915b50505050508060200190518101906104cf9190611639565b6040805160808101825260008082526020820181905291810182905260608101919091529091506105078260c0015143106029611328565b604080513381528435602080830191909152850135818301529084013560608201527f443eedfa7cb93bcf21ba813a200d6756eee22aa1d3e6f8f9e753ebc0faaa84aa9060800160405180910390a161056234156024611328565b815161057a906001600160a01b031633146025611328565b604080516105c6916105a091602080880135928801359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c8360800151146026611328565b60a0820151604084013514156105df57600181526106b3565b601560408085013582116020840181905260a0850151929092109083015261060857600061060e565b80604001515b15156060820181905261062257600061062e565b60a08201516040840135115b61064f578060200151610642576000610652565b60158260a0015111610652565b60015b1561066057600281526106b3565b806060015161067057600061067c565b60a08201516040840135105b61069d5760156040840135116106935760006106a0565b80604001516106a0565b60015b156106ae57600081526106b3565b600381525b80516001141561075857815160208301516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156106fa573d6000803e3d6000fd5b5081604001516001600160a01b03166108fc83602001519081150290604051600060405180830381858888f1935050505015801561073c573d6000803e3d6000fd5b5060008080556001819055610753906002906113d1565b505050565b805160021461076b57816040015161076e565b81515b6001600160a01b03166108fc8360200151600261078b91906116ab565b6040518115909202916000818181858888f1935050505015801561073c573d6000803e3d6000fd5b6107c3600560005414601c611328565b6107dd813515806107d657506001548235145b601d611328565b6000808055600280546107ef906114cd565b80601f016020809104026020016040519081016040528092919081815260200182805461081b906114cd565b80156108685780601f1061083d57610100808354040283529160200191610868565b820191906000526020600020905b81548152906001019060200180831161084b57829003601f168201915b505050505080602001905181019061088091906116ca565b90506108986040518060200160405280600081525090565b6108a98260c001514310601e611328565b7f643bb8428ae07277421f7600c8b7dc078704f1cfd6d7aaedbe23c2d5754675d333846040516108da92919061173c565b60405180910390a16108ee3415601a611328565b6060820151610909906001600160a01b03163314601b611328565b60408201516109189043611621565b81526040805160e081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c081019190915282516001600160a01b03908116808352602080860151818501908152606080880151851660408088019182526080808b0151848a0190815260a0808d0151838c019081528e890135828d019081528d5160c0808f0191825260076000554360015587519b8c019c909c529851958a01959095529451909916948701949094529251928501929092525194830194909452925191810191909152905160e0820152610100016103d7565b610a0c600160005414600d611328565b610a2681351580610a1f57506001548235145b600e611328565b600080805560028054610a38906114cd565b80601f0160208091040260200160405190810160405280929190818152602001828054610a64906114cd565b8015610ab15780601f10610a8657610100808354040283529160200191610ab1565b820191906000526020600020905b815481529060010190602001808311610a9457829003601f168201915b5050505050806020019051810190610ac99190611555565b9050610add8160600151431015600f611328565b7f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d9503383604051610b0e9291906115ce565b60405180910390a1610b223415600c611328565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610b5f573d6000803e3d6000fd5b5060008080556001819055610b76906002906113d1565b5050565b610b8a6003600054146017611328565b610ba481351580610b9d57506001548235145b6018611328565b600080805560028054610bb6906114cd565b80601f0160208091040260200160405190810160405280929190818152602001828054610be2906114cd565b8015610c2f5780601f10610c0457610100808354040283529160200191610c2f565b820191906000526020600020905b815481529060010190602001808311610c1257829003601f168201915b5050505050806020019051810190610c479190611763565b9050610c5b8160a001514310156019611328565b7faa99e317c364fb804a6b7e67b51beee98735c62eb3df9d8182015e63bb1907223383604051610c8c9291906115ce565b60405180910390a1610ca034156015611328565b8051610cd4906001600160a01b03163314610cca5760608201516001600160a01b03163314610ccd565b60015b6016611328565b80606001516001600160a01b03166108fc82608001519081150290604051600060405180830381858888f19350505050158015610b5f573d6000803e3d6000fd5b600060606000546002808054610d2a906114cd565b80601f0160208091040260200160405190810160405280929190818152602001828054610d56906114cd565b8015610da35780601f10610d7857610100808354040283529160200191610da3565b820191906000526020600020905b815481529060010190602001808311610d8657829003601f168201915b50505050509050915091509091565b610dc26005600054146021611328565b610ddc81351580610dd557506001548235145b6022611328565b600080805560028054610dee906114cd565b80601f0160208091040260200160405190810160405280929190818152602001828054610e1a906114cd565b8015610e675780601f10610e3c57610100808354040283529160200191610e67565b820191906000526020600020905b815481529060010190602001808311610e4a57829003601f168201915b5050505050806020019051810190610e7f91906116ca565b9050610e938160c001514310156023611328565b7fcd07fe458c2837261baccc27af099290b4cb172153fe5860de83985111590dae3383604051610ec49291906115ce565b60405180910390a1610ed83415601f611328565b8051610f0c906001600160a01b03163314610f025760608201516001600160a01b03163314610f05565b60015b6020611328565b805160808201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610b5f573d6000803e3d6000fd5b610f59600760005414602c611328565b610f7381351580610f6c57506001548235145b602d611328565b600080805560028054610f85906114cd565b80601f0160208091040260200160405190810160405280929190818152602001828054610fb1906114cd565b8015610ffe5780601f10610fd357610100808354040283529160200191610ffe565b820191906000526020600020905b815481529060010190602001808311610fe157829003601f168201915b50505050508060200190518101906110169190611639565b905061102a8160c00151431015602e611328565b7f772efef3dd9f242d63a20972cf033b16c5cb6bd8c21b19d32246dd861fb60776338360405161105b9291906115ce565b60405180910390a161106f3415602a611328565b80516110a3906001600160a01b031633146110995760408201516001600160a01b0316331461109c565b60015b602b611328565b80604001516001600160a01b03166108fc82606001519081150290604051600060405180830381858888f19350505050158015610b5f573d6000803e3d6000fd5b6110f46003600054146012611328565b61110e8135158061110757506001548235145b6013611328565b600080805560028054611120906114cd565b80601f016020809104026020016040519081016040528092919081815260200182805461114c906114cd565b80156111995780601f1061116e57610100808354040283529160200191611199565b820191906000526020600020905b81548152906001019060200180831161117c57829003601f168201915b50505050508060200190518101906111b19190611763565b90506111c96040518060200160405280600081525090565b6111da8260a0015143106014611328565b7f96fec920882ac36be2ad80273a3572d38922662f78edb2ef77dc6748d3fd2cc1338460405161120b92919061173c565b60405180910390a161121f34156010611328565b8151611237906001600160a01b031633146011611328565b60408201516112469043611621565b81526040805160e081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c081019190915282516001600160a01b039081168083526020808601518185019081526040808801518187019081526060808a015187168189019081526080808c0151818b019081528d88013560a0808d019182528d5160c0808f0191825260056000554360015589519b8c019c909c529851978a0197909752945193880193909352905190971696850196909652945190830152925191810191909152905160e0820152610100016103d7565b81610b765760405163100960cb60e01b81526004810182905260240160405180910390fd5b828054611359906114cd565b90600052602060002090601f01602090048101928261137b57600085556113c1565b82601f1061139457805160ff19168380011785556113c1565b828001600101855582156113c1579182015b828111156113c15782518255916020019190600101906113a6565b506113cd92915061140e565b5090565b5080546113dd906114cd565b6000825580601f106113ed575050565b601f01602090049060005260206000209081019061140b919061140e565b50565b5b808211156113cd576000815560010161140f565b60006040828403121561143557600080fd5b50919050565b60006040828403121561144d57600080fd5b6114578383611423565b9392505050565b60006060828403121561143557600080fd5b82815260006020604081840152835180604085015260005b818110156114a457858101830151858201606001528201611488565b818111156114b6576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c908216806114e157607f821691505b6020821081141561143557634e487b7160e01b600052602260045260246000fd5b60405160e0810167ffffffffffffffff8111828210171561153357634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b038116811461155057600080fd5b919050565b60006080828403121561156757600080fd5b6040516080810181811067ffffffffffffffff8211171561159857634e487b7160e01b600052604160045260246000fd5b6040526115a483611539565b81526020830151602082015260408301516040820152606083015160608201528091505092915050565b6001600160a01b0383168152813560208083019190915260608201908301358015158082146115fc57600080fd5b80604085015250509392505050565b634e487b7160e01b600052601160045260246000fd5b600082198211156116345761163461160b565b500190565b600060e0828403121561164b57600080fd5b611653611502565b61165c83611539565b81526020830151602082015261167460408401611539565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c08201528091505092915050565b60008160001904831182151516156116c5576116c561160b565b500290565b600060e082840312156116dc57600080fd5b6116e4611502565b6116ed83611539565b8152602083015160208201526040830151604082015261170f60608401611539565b60608201526080830151608082015260a083015160a082015260c083015160c08201528091505092915050565b6001600160a01b038316815260608101611457602083018480358252602090810135910152565b600060c0828403121561177557600080fd5b60405160c0810181811067ffffffffffffffff821117156117a657634e487b7160e01b600052604160045260246000fd5b6040526117b283611539565b815260208301516020820152604083015160408201526117d460608401611539565b60608201526080830151608082015260a083015160a0820152809150509291505056fea2646970667358221220d5d801bd9c55b58588a28e4ec3c867610fa63ce151eaa8767a3a1787beab306764736f6c634300080c0033`,
  BytecodeLen: 6988,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:56:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: 'reach standard library:202:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:63:12:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:68:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: 'reach standard library:202:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:77:12:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:80:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: 'reach standard library:202:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:89:12:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:92:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: 'reach standard library:202:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:100:12:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './index.rsh:114:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  10: {
    at: './index.rsh:114:11:after expr stmt semicolon',
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
