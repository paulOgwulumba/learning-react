import "./App.css";
import { loadStdlib } from "@reach-sh/stdlib";
import { ALGO_MyAlgoConnect as MyAlgoConnect } from "@reach-sh/stdlib";
import * as backend from "./build/index.main.mjs";
import { createContext,useState } from "react";
import { views, Loader } from "./utils/";
import {
  ConnectAccount,
  PasteContractInfo,
  SelectRole,
  TestView,
  WaitForAttacher,
} from "./screens";

import Header from './components/Header';
import State from './components/State';
import Board from './components/Board';
import Button from './components/Button';
import Card from './components/Card';
import Intro from './components/Intro';
import AttacherView from './views/AttacherView';
import DeployerView from './views/DeployerView';

const reach = loadStdlib("ALGO");
reach.setWalletFallback(
  reach.walletFallback({ providerEnv: "TestNet", MyAlgoConnect })
);
const fmt = (x) => reach.formatCurrency(x, 4);

function App() {
  const [account, setAccount] = useState({});
  const [view, setView] = useState(views.CONNECT_ACCOUNT);
  const [contractInfo, setContractInfo] = useState();

  const reachFunctions = {
    connect: async (secret, mnemonic = false) => {
      let result = "";
      secret = secret.replaceAll(",", "");
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
        setView(views.SET_TOKEN_INFO);
      } else {
        setView(views.PASTE_CONTRACT_INFO);
      }
    },

    deploy: async () => {
      const contract = account.contract(backend);
      backend.Deployer(contract, Deployer);
      setView(views.DEPLOYING);
      const ctcInfo = JSON.stringify(await contract.getInfo(), null, 2);
      setContractInfo(ctcInfo);
      setView(views.WAIT_FOR_ATTACHER);
    },

    attach: (contractInfo) => {
      const contract = account.contract(backend, JSON.parse(contractInfo));
      backend.Attacher(contract, Attacher);
      setView(views.ATTACHING);
    },
  };

  //Participant Objects
  const Common = {
    random: () => reach.hasRandom.random(),

    test: () => setView(views.TEST_VIEW),
  };

  const Deployer = {
    ...Common,
  };

  const Attacher = {
    ...Common,
  };

  const [toggleDisplay, setToggleDisplay] = useState(true);
  const [player, setPlayer] = useState('')
  const [deployerCard, setDeployerCard] = useState([]);
  const [attacherCard, setAttacherCard] = useState([]);
  const [deployerScore, setDeployerScore] = useState(0)
  const [attacherScore, setattacherScore] = useState(0)
  const [text, setText] = useState("let's Play");
  const [isHit, setIsHit] = useState(false);
  const [isDrop, setIsDrop] = useState(false)
  const UserContext = createContext();
  let blackJackGame = {
    "deployer": {
      "scorespan": deployerScore,
      "score": deployerScore,
    },
    "attacher": {
      "scorespan": attacherScore,
      "score": attacherScore,
    },
    "cards": ['2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      'K',
      'Q',
      'J',
      'A'],
    "cardsMap": {
      '2': 2,
      '3': 3,
      '4': 4,
      '5': 5,
      '6': 6,
      '7': 7,
      '8': 8,
      '9': 9,
      '10': 10,
      'K': 10,
      'J': 10,
      'Q': 10,
      'A': [1,
        11]
    },
    'IsHit':false,
    'IsDrop':false,
  };

  // randomCards generator
const randomCards = () => {
  let randomIndex = Math.floor(Math.random() * 13)
  return blackJackGame['cards'][randomIndex];
  }

  //Update Score 
  function updateScore(card, initialScore, activeScore) {
    if (card === 'A') {
      if (initialScore + blackJackGame['cardsMap'][card][1] > 21) {
        activeScore(prevScore => prevScore + blackJackGame['cardsMap'][card][0])
      } else if (initialScore + blackJackGame['cardsMap'][card][1] <= 21){
        activeScore(prevScore => prevScore + blackJackGame['cardsMap'][card][1])
      }
    } else {
     activeScore(prevScore => prevScore+blackJackGame['cardsMap'][card])
     
    }
    
    }

 //Deployer function 
  const deployHit = () => {
    if (deployerScore <= 21 && isDrop === false) {
      let card = randomCards();
    setDeployerCard(prevCard => [...prevCard, <Card card= {card} />])
    updateScore(card, deployerScore, setDeployerScore)
    setIsHit(true)
    }
  }
  

//set deployer score logic
if (deployerScore <= 21) {
  blackJackGame['deployer']['scorespan'] = deployerScore
  } else {
  blackJackGame['deployer']['scorespan'] = "Burst!"
  }

// Attacher function
  const attacherHit = () => {
    if (attacherScore <= 21 && isDrop === false) {
      let card = randomCards();
    setAttacherCard(prevCard => [...prevCard, <Card card= {card} />])
    updateScore(card, attacherScore, setattacherScore)
    setIsHit(true)
    } 
  }

  // set attacher score logic 
if (attacherScore <= 21) {
  blackJackGame['attacher']['scorespan'] = attacherScore
  } else {
  blackJackGame['attacher']['scorespan'] = "Burst!"
  }

//Drop function 
const drop = () => {
  if (isHit === true) {
    player === 'Deployer' ? 
  setText('Waiting for Attacher...') : 
  setText('Waiting for Deployer...')
  setTimeout(() => {
    setText('Waiting For Result..')
  }, 5000)
  setIsDrop(true)
  }
  
}
  return (
    <div className="App">
        <Intro 
      display = {toggleDisplay}
      setDisplay = {setToggleDisplay}
      setPlayer = {setPlayer}
      />
      <section className={toggleDisplay == true ? 'hide' : 'show'}>
      <Header 
        text2='BlackJack'
        span = 'Game'
        spanClass = 'Intro__span'
        class2='Intro__sub'
        />
     <State 
     text = {text}
     />
     <div className='App__board'>
     {player === "Attacher" && <AttacherView 
      blackJackGame = {blackJackGame}
      attacherCard = {attacherCard}
      />}

     {player === "Deployer" && <DeployerView 
      blackJackGame = {blackJackGame}
      deployerCard = {deployerCard}
      />}
     </div>
     <div className='Button'>

    {player === 'Deployer' &&  <Button 
     text = "Hit"
     type = "Button__hit"
     click = {deployHit}
     />}
     {player === 'Attacher' &&  <Button 
     text = "Hit"
     type = "Button__hit"
     click = {attacherHit}
     /> }
     <Button 
     text="Stand"
     type= "Button__stand"
     click = {drop}
     />
     </div>
    
      </section>
    </div>
  );
}

export default App;
