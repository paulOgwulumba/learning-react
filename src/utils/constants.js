const views = {
  CONNECT_ACCOUNT: "Connect account",
  DEPLOY_OR_ATTACH: "Deploy or attach",

  //Deployer
  SET_WAGER: "Set wager",
  DEPLOYING: "Deploying",
  WAIT_FOR_ATTACHER: "Wait for attacher",

  //Attacher
  PASTE_CONTRACT_INFO: "Paste contract info",
  ACCEPT_WAGER: "Accept wager",
  ATTACHING: "Attaching",

  //GENERIC
  GAME_PLAY: "Game play",


  // OLD
  WAIT_FOR_TURN: "Wait for turn",
  PLAY_TURN: "Play turn",
  TIME_OUT: "Timeout",
  SEE_WINNER: "See winner",
};

const GameOutcome = {
  UNDECIDED: 'undecided',
  WINNER: 'win',
  DRAW: 'draw',
  LOSS: 'loss',
}

const blackJackGame = {
  deployer: {
    cards: "",
    score: 0,
  },
  attacher: {
    cards: "",
    score: 0,
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
    A: 1,
  },
  cardsDisplayMap: {
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    J: 11,
    Q: 12,
    K: 13,
    A: 1,
  }
}

export { views, GameOutcome, blackJackGame };
