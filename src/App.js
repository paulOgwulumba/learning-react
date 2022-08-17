import * as backend from "./build/index.main.mjs";
import { loadStdlib } from "@reach-sh/stdlib";
import { ALGO_MyAlgoConnect as MyAlgoConnect } from "@reach-sh/stdlib";

import "./App.css";
import { views } from "./utils/constants.js";
import { useState } from "react";

//views
import {
  AcceptWager,
  Attaching,
  ConnectAccount,
  Deploying,
  DeployOrAttach,
  PasteContractInfo,
  SetWager,
  Timeout,
  WaitForAttacher,
} from "./views/";

const reach = loadStdlib("ALGO");
reach.setWalletFallback(
  reach.walletFallback({ providerEnv: "TestNet", MyAlgoConnect })
);
const { standardUnit } = reach;

function App() {
  const [view, setView] = useState(views.CONNECT_ACCOUNT);
  const [account, setAccount] = useState({});
  const [contractInfo, setContractInfo] = useState("");
  const [isAlice, setIsAlice] = useState(true);
  const [wager, setWager] = useState();
  const [resolver, setResolver] = useState();

  const reachFunctions = {
    connect: async (secret, mnemonic = false) => {
      let result = "";
      try {
        const account = mnemonic
          ? await reach.newAccountFromMnemonic(secret)
          : await reach.getDefaultAccount();
        setAccount(account);
        setView(views.DEPLOY_OR_ATTACH);
        result = "success";
      } catch (error) {
        result = "failed";
      }
      return result;
    },

    setAsDeployer: (deployer = true) => {
      if (deployer) {
        setIsAlice(true);
        setView(views.SET_WAGER);
      } else {
        setIsAlice(false);
        setView(views.PASTE_CONTRACT_INFO);
      }
    },

    deploy: async (wager) => {
      const contract = account.contract(backend);
      const deadline = { ETH: 10, ALGO: 100, CFX: 1000 }[reach.connector];
      Alice.wager = reach.parseCurrency(wager);
      Alice.deadline = deadline;
      backend.Alice(contract, Alice);
      setView(views.DEPLOYING);
      setContractInfo(JSON.stringify(await contract.getInfo(), null, 2));
    },

    attach: (contractInfo) => {
      const contract = account.contract(backend, JSON.parse(contractInfo));
      backend.Bob(contract, Bob);
    },
  };

  const Player = {
    random: () => reach.hasRandom.random(),
    informTimeout: () => {
      setView(views.TIME_OUT);
    },
  };

  const Alice = {
    ...Player,

    wager: 0,

    deadline: 0,

    setWagerAndDeadline: (wager, deadline) => {
      this.wager = wager;
      this.deadline = deadline;
    },

    waitingForAttacher: () => {
      setView(views.WAIT_FOR_ATTACHER);
    },
  };

  const Bob = {
    ...Player,

    acceptWager: async (wager) => {
      setView(views.ACCEPT_WAGER);
      setWager(reach.formatCurrency(wager, 4));
      return new Promise((resolve) => {
        setResolver({
          resolve: () => {
            setView(views.ATTACHING);
            resolve();
          },
        });
      });
    },
  };

  return (
    <div className="App">
      <div className="topnav">
        <h1>BlackJack UI</h1>
      </div>

      {view === views.CONNECT_ACCOUNT && (
        <ConnectAccount connect={reachFunctions.connect} />
      )}

      {view === views.DEPLOY_OR_ATTACH && (
        <DeployOrAttach setAsDeployer={reachFunctions.setAsDeployer} />
      )}

      {view === views.SET_WAGER && <SetWager deploy={reachFunctions.deploy} />}

      {view === views.DEPLOYING && <Deploying />}

      {view === views.WAIT_FOR_ATTACHER && (
        <WaitForAttacher contractInfo={contractInfo} />
      )}

      {view === views.PASTE_CONTRACT_INFO && (
        <PasteContractInfo attach={reachFunctions.attach} />
      )}

      {view === views.ACCEPT_WAGER && (
        <AcceptWager
          wager={wager}
          standardUnit={standardUnit}
          accept={resolver.resolve}
          decline={() => setView(views.DEPLOY_OR_ATTACH)}
        />
      )}

      {view === views.ATTACHING && <Attaching />}
    </div>
  );
}

export default App;
