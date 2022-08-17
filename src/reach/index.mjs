import { loadStdlib, ask } from "@reach-sh/stdlib";
import * as backend from "./build/index.main.mjs";
const stdlib = loadStdlib();

const isAlice = await ask.ask(`Are you Alice?`, ask.yesno);
const who = isAlice ? "Alice" : "Bob";

console.log(`Starting BlackJack as ${who}`);

let acc = null;
const createAcc = await ask.ask(
  `Would you like to create an account? (only possible on devnet)`,
  ask.yesno
);
if (createAcc) {
  acc = await stdlib.newTestAccount(stdlib.parseCurrency(1000));
} else {
  const secret = await ask.ask(`What is your account secret?`, (x) => x);
  acc = await stdlib.newAccountFromSecret(secret);
}

let ctc = null;
if (isAlice) {
  ctc = acc.contract(backend);
  ctc.getInfo().then((info) => {
    console.log(`The contract is deployed as = ${JSON.stringify(info)}`);
  });
} else {
  const info = await ask.ask(
    `Please paste the contract information:`,
    JSON.parse
  );
  ctc = acc.contract(backend, info);
}

const fmt = (x) => stdlib.formatCurrency(x, 4);
const getBalance = async () => fmt(await stdlib.balanceOf(acc));

const before = await getBalance();
console.log(`Your balance is ${before}`);

const interact = { ...stdlib.hasRandom };

interact.informTimeout = () => {
  console.log(`There was a timeout.`);
  process.exit(1);
};

if (isAlice) {
  const amt = await ask.ask(
    `How much do you want to wager?`,
    stdlib.parseCurrency
  );
  interact.wager = amt;
  interact.deadline = { ETH: 100, ALGO: 100, CFX: 1000 }[stdlib.connector];
} else {
  interact.acceptWager = async (amt) => {
    const accepted = await ask.ask(
      `Do you accept the wager of ${fmt(amt)}?`,
      ask.yesno
    );
    if (!accepted) {
      process.exit(0);
    }
  };
}
let blackJackGame = {
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
    A: [1, 11],
  },
};

const randomCards = () => {
  let randomCard = blackJackGame["cards"][Math.floor(Math.random() * 12)];
  let cardValue = blackJackGame.cardsMap[randomCard];

  if (isAlice) {
    blackJackGame.deployer.cards += randomCard;
    blackJackGame.deployer.score += cardValue;
  } else {
    blackJackGame.attacher.cards += randomCard;
    blackJackGame.attacher.score += cardValue;
  }

  console.log(
    `You picked card: ${randomCard} and total is ${
      isAlice ? blackJackGame.deployer.score : blackJackGame.attacher.score
    }`
  );
};
//use async because of await ask.ask
(interact.dealCards = async () => {
  if (isAlice) {
    randomCards();
    randomCards();

    while (blackJackGame.deployer.score < 15) {
      console.log("Pick extra card because you have less than 17 cards");
      randomCards();
    }
    return [blackJackGame.deployer.score, blackJackGame.deployer.cards];
  } else 
    randomCards();
    randomCards();

    let playOn = true;
    while (playOn) {
      playOn = await ask.ask(
        `Would you like to draw more card? y/n`,
        ask.yesno
      );

      if (playOn) {
        randomCards();
      }
    }
    return [blackJackGame.attacher.score, blackJackGame.attacher.cards];
  }
}),
  (interact.seeOutcome = (outcome) => {
    if (parseInt(outcome) === 0) {
      console.log(isAlice ? "You win" : "You lost");
    } else {
      console.log("It was a tie");
    }
  }),
  (interact.viewOpponentCards = (card) => {
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
    console.log(
      isAlice
        ? `Bob played ${returnedCards.split("")}`
        : `Alice played ${returnedCards.split("")}`
    );
  }),
  (interact.revealCards = () => {
    return blackJackGame.deployer.cards;
  });

const part = isAlice ? ctc.p.Alice : ctc.p.Bob;
await part(interact);
const balAfter = await getBalance();
console.log(`Your balance is now ${balAfter}`);
console.log("Goodbye, Alice and Bob!");
ask.done();