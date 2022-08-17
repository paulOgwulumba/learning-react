import * as backend from "./build/index.main.mjs";
import { loadStdlib } from "@reach-sh/stdlib";
import { ALGO_MyAlgoConnect as MyAlgoConnect } from "@reach-sh/stdlib";

import "./App.css";
import { views, Loader } from "./utils/";
import { createContext, useState } from "react";

//screens
import {
  ConnectAccount,
  PasteContractInfo,
  SelectRole,
  TestView,
  WaitForAttacher,
} from "./screens/";

//views
import {
  AttacherView,
  SetWager,
  Deploying,
  DeployerView,
  AcceptWager,
  Timeout,
  Attaching,
} from "./views/";
import { Header, State, Board, Button, Card, Intro } from "./components";

const reach = loadStdlib("ALGO");
reach.setWalletFallback(
  reach.walletFallback({ providerEnv: "TestNet", MyAlgoConnect })
);
const { standardUnit } = reach;

function App() {
  const [view, setView] = useState(views.CONNECT_ACCOUNT);
  const [account, setAccount] = useState({});
  const [resolver, setResolver] = useState();
  const [contractInfo, setContractInfo] = useState();
  const [wager, setWager] = useState();
  const [outcome, setOutcome] = useState();
  const [toggleDisplay, setToggleDisplay] = useState(true);
  const [player, setPlayer] = useState("");
  const [deployerCard, setDeployerCard] = useState([]);
  const [attacherCard, setAttacherCard] = useState([]);
  const [deployerScore, setDeployerScore] = useState(0);
  const [attacherScore, setattacherScore] = useState(0);
  const [text, setText] = useState("let's Play");
  const [isHit, setIsHit] = useState(false);
  const [isDrop, setIsDrop] = useState(false);
  const UserContext = createContext();

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
        setView(views.SET_WAGER);
      } else {
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
      setView(views.WAIT_FOR_ATTACHER);
    },

    attach: (contractInfo) => {
      const contract = account.contract(backend, JSON.parse(contractInfo));
      backend.Bob(contract, Bob);
    },
  };

  let blackJackGame = {
    deployer: {
      cards: deployerCard,
      score: deployerScore,
    },
    attacher: {
      cards: attacherCard,
      score: attacherScore,
    },
    cards: ["2", "3", "4", "5", "6", "7", "8", "9", "10", "K", "Q", "J", "A"],
    cardsMap: {
      2: 2,
      3: 3,
      4: 4,
      5: 5,
      6: 6,
      7: 7,
      8: 8,
      9: 9,
      10: 10,
      K: 10,
      J: 10,
      Q: 10,
      A: [1, 11],
    },
  };

  // randomCards generator
  const randomCards = () => {
    // let randomIndex = Math.floor(Math.random() * 13);
    let randomCard = blackJackGame["cards"][Math.floor(Math.random() * 12)];
    let cardValue = blackJackGame.cardsMap[randomCard];
    return randomCard;
  };

  //Update Score
  function updateScore(card, initialScore, activeScore) {
    if (card === "A") {
      if (initialScore + blackJackGame["cardsMap"][card][1] > 21) {
        activeScore(
          (prevScore) => prevScore + blackJackGame["cardsMap"][card][0]
        );
      } else if (initialScore + blackJackGame["cardsMap"][card][1] <= 21) {
        activeScore(
          (prevScore) => prevScore + blackJackGame["cardsMap"][card][1]
        );
      }
    } else {
      activeScore((prevScore) => prevScore + blackJackGame["cardsMap"][card]);
    }
  }

  function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }

  // AutoCard function
  useEffect(() => {
    for (let i = 0; i < 2; i++) {
      setTimeout(() => {
        if (i == 1) {
          let card = randomCards();
          setDeployerCard((prevCard) => [...prevCard, <Card card={card} />]);
          updateScore(card, deployerScore, setDeployerScore);
          setDeployerCard((prevCard) => (prevCard += card));
        }
      }, 3000);
      setTimeout(() => {
        if (i == 2) {
          let card = randomCards();
          setDeployerCard((prevCard) => [...prevCard, <Card card={card} />]);
          updateScore(card, deployerScore, setDeployerScore);
        }
      }, 3000);
    }
  }, []);
  //Deployer function
  const deployHit = () => {
    if (deployerScore <= 16 && isDrop === false) {
      let card = randomCards();
      setDeployerCard((prevCard) => [...prevCard, <Card card={card} />]);
      updateScore(card, deployerScore, setDeployerScore);
      setIsHit(true);
      setDeployerCard((prevCard) => (prevCard += card));
    }
    return [deployerScore, deployerCard];
  };

  //set deployer score logicyar
  if (deployerScore <= 21) {
    blackJackGame["deployer"]["scorespan"] = deployerScore;
  } else {
    blackJackGame["deployer"]["scorespan"] = "Burst!";
  }

  // Attacher function
  const attacherHit = () => {
    if (attacherScore <= 21 && isDrop === false) {
      let card = randomCards();
      setAttacherCard((prevCard) => [...prevCard, <Card card={card} />]);
      updateScore(card, attacherScore, setattacherScore);
      setIsHit(true);
    }
  };

  // set attacher score logic
  if (attacherScore <= 21) {
    blackJackGame["attacher"]["scorespan"] = attacherScore;
  } else {
    blackJackGame["attacher"]["scorespan"] = "Burst!";
  }

  //Drop function
  const drop = () => {
    if (isHit === true) {
      player === "Deployer"
        ? setText("Waiting for Attacher...")
        : setText("Waiting for Deployer...");
      setTimeout(() => {
        setText("Waiting For Result..");
      }, 5000);
      setIsDrop(true);
    }
  };

  //Participant Objects
  const Player = {
    random: () => reach.hasRandom.random(),
    test: () => setView(views.TEST_VIEW),

    seeOutcome: (outcomeHex) => {
      const outcome = parseInt(outcomeHex);
      setOutcome(outcome);
      setView(views.SEE_WINNER);
    },

    informTimeout: () => {
      setView(views.TIME_OUT);
    },
    viewOpponentCards: (card) => {
      // removeExtraCommas because we set bytes(8);

      let splittedCard = card.split("");
      let returnedCards = "";
      // check if it is a character
      splittedCard.forEach((char) => {
        //check if the char in array is among accepted cards
        if (blackJackGame.cards.indexOf(char) > -1) {
          returnedCards += char;
        }
      });
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
    dealCards: async () => {
      deployHit();
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

  // useEffect(()=>{
  //     resolver.resolve(setView(views.DEPLOYER_BOARD));
  // }, [ resolver])

  const OUTCOME = ["Alice Wins!!!", "Draw !!!", "Bob Wins!!!"];
  return (
    <div className="App">
      <div className="top">
        <Header
          text2="BlackJack"
          span="Game"
          spanClass="Intro__span"
          class2="Intro__sub"
        />
      </div>
      {/* <header className="App-header">
        {view === views.CONNECT_ACCOUNT && (
          <ConnectAccount connect={reachFunctions.connect} />
        )}

        {view === views.DEPLOY_OR_ATTACH && (
          <SelectRole
            deploy={reachFunctions.setAsDeployer}
            attach={() => setView(views.PASTE_CONTRACT_INFO)}
          />
        )}

        {view === views.SET_WAGER && (
          <SetWager deploy={reachFunctions.deploy} />
        )}

        {view === views.DEPLOYING && <Deploying />}

        {view === views.WAIT_FOR_ATTACHER && (
          <WaitForAttacher info={contractInfo} />
        )}

        {view === views.PASTE_CONTRACT_INFO && (
          <PasteContractInfo attach={reachFunctions.attach} />
        )}

        {view === views.ACCEPT_WAGER && (
          <AcceptWager
            wager={wager}
            standardUnit={standardUnit}
            // accept={() => setView(views.DEPLOYER_BOARD)}
            accept={resolver.resolve} 
            decline={() => setView(views.DEPLOY_OR_ATTACH)}
          />
        )}

        {view === views.ATTACHING && <Attaching />}
        {view === views.DEPLOYER_BOARD && (
          <DeployerView
            blackJackGame={blackJackGame}
            deployerCard={deployerCard}
            deployHit={deployHit}
            drop={drop}
          />
        )}
      </header> */}
      <section>
        <div className="App__board">
          {outcome !== "" && (
            <State text={OUTCOME[outcome]} type="header_state" />
          )}
          {player === "Attacher" && (
            <AttacherView
              blackJackGame={blackJackGame}
              attacherCard={attacherCard}
            />
          )}

          <DeployerView
            blackJackGame={blackJackGame}
            deployerCard={deployerCard}
            deployHit={deployHit}
            score={deployerScore}
          />
        </div>
        <div className="Button">
          {player === "Deployer" && (
            <Button text="Hit" type="Button__hit" click={deployHit} />
          )}
          {player === "Attacher" && (
            <Button text="Hit" type="Button__hit" click={attacherHit} />
          )}
          <Button text="Stand" type="Button__stand" click={drop} />
        </div>
      </section>
    </div>
  );
}

export default App;
