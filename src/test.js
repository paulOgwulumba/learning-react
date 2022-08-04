const [Deployer, setDeployer] = useState(0);
const [attacherScore, setattacherScore] = useState(0);

// blackJackGame terms
let blackJackGame = {
  deployer: {
    scorespan: 0,
    score: 0,
  },
  attacher: {
    scorespan: 0,
    score: 0,
  },
  cards: ["2", "3", "4", "5", "6", "7", "8", "9", "10", "K", "Q", "J", "A"],
  cardsMap: {
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8,
    "9": 9,
    "10": 10,
    K: 10,
    J: 10,
    Q: 10,
    A: [1, 11],
  },
};

// game start logic
const [start, setStart] = useState(false);

// randomCards generator
const randomCards = () => {
  let randomIndex = Math.floor(Math.random() * 13);
  return blackJackGame["cards"][randomIndex];
};

// dealer card and player card
const [DeployerCard, setDeployerCard] = useState([]);
const [attacherCard, setattacherCard] = useState([]);

// score update function
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

// set player card function
const showattacherCard = (card) => {
  if (attacherScore <= 21) {
    setattacherCard((prevCard) => [...prevCard, <Card card={card} />]);
  }
};

// set player score logic
if (attacherScore <= 21) {
  blackJackGame["player"]["scorespan"] = attacherScore;
} else {
  blackJackGame["player"]["scorespan"] = "Burst!";
}

const attacherHit = () => {
  // if (start === true) {
  blackJackGame["start"] = true;
  let card = randomCards();
  updateScore(card, attacherScore, setattacherScore);
  showDeployerCard(card);
  // }
};

// set dealer card function
const showDeployerCard = (card) => {
  if (Deployer <= 21) {
    setDeployerCard((prevCard) => [
      ...prevCard,
      (prevCard[1] = ""),
      <Card card={card} />,
    ]);
  }
};
// set dealer score logic
if (Deployer <= 21) {
  blackJackGame["dealer"]["scorespan"] = Deployer;
} else {
  blackJackGame["dealer"]["scorespan"] = "Burst!";
}
const blackjackStand = () => {
  let card = randomCards();
  updateScore(card, Deployer, setDeployer);
  showDeployerCard(card);
};

const blackJackStart = () => {
  setDeployerCard([]);
  setattacherCard([]);
  setDeployer(0);
  setattacherScore(0);
  setStart(true);
  let count = 5;

  setTimeout(() => {
    for (let i = 0; i < count; i++) {
      if (i === 1) {
        let card = randomCards();
        setDeployerCard((prevCard) => [...prevCard, <Card card={card} />]);
        updateScore(card, Deployer, setDeployer);
      } else if (i === 2) {
        setTimeout(() => {
          let card = randomCards();
          setattacherCard((prevCard) => [...prevCard, <Card card={card} />]);
          updateScore(card, attacherScore, setattacherScore);
        }, 2000);
      } else if (i === 3) {
        setTimeout(() => {
          let card = randomCards();
          setDeployerCard((prevCard) => [...prevCard, <Card card="back" />]);
        }, 3000);
      } else if (i === 4) {
        setTimeout(() => {
          let card = randomCards();
          setattacherCard((prevCard) => [...prevCard, <Card card={card} />]);
          updateScore(card, attacherScore, setattacherScore);
        }, 4000);
      }
    }
  }, 1000);
};

const [playerBoard, setPlayerBoard] = useState("");
const [toggleDisplay, setToggleDisplay] = useState(true);
