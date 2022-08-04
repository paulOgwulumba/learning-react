"reach 0.1";

// Enum value that we use to represent the current outcome of the game
const [isOutcome, B_WINS, DRAW, A_WINS, CONTINUE] = makeEnum(4);

const winner = (cardAlice, cardBob) => {
  if (cardAlice === cardBob) {
    return DRAW;
  } else if (
    (cardAlice < 21 && cardBob < 21 && cardAlice > cardBob) ||
    (cardAlice < 21 && cardBob > 21)
  ) {
    return A_WINS;
  } else if (
    (cardAlice < 21 && cardBob < 21 && cardAlice < cardBob) ||
    (cardAlice > 21 && cardBob < 21)
  ) {
    return B_WINS;
  } else return CONTINUE;
};

const Player = {
  ...hasRandom,
  dealCard: Fun([], UInt),
  seeOutcome: Fun([UInt], Null),
  seeCards: Fun([UInt, UInt], Null),
  informTimeout: Fun([], Null),
};

export const main = Reach.App(() => {
  const Alice = Participant("Alice", {
    ...Player,
    wager: UInt,
    deadline: UInt,
  });
  const Bob = Participant("Bob", {
    ...Player,
    acceptWager: Fun([UInt], Null),
  });

  init();

  const informTimeout = () => {
    each([Alice, Bob], () => {
      interact.informTimeout();
    });
  };

  Alice.only(() => {
    const wager = declassify(interact.wager);
    const deadline = declassify(interact.deadline);
  });

  Alice.publish(wager, deadline).pay(wager);

  commit();

  Bob.only(() => {
    interact.acceptWager(wager);
  });

  Bob.pay(wager).timeout(relativeTime(deadline), () =>
    closeTo(Alice, informTimeout)
  );

  // invariant(balance() == 2 * wager && isOutcome(outcome));

  commit();

  Alice.only(() => {
    const _aliceCard = interact.dealCard();
    const [_commitAlice, _saltAlice] = makeCommitment(interact, _aliceCard);
    const commitAlice = declassify(_commitAlice);
  });

  Alice.publish(commitAlice).timeout(relativeTime(deadline), () =>
    closeTo(Bob, informTimeout)
  );

  commit();

  unknowable(Bob, Alice(_aliceCard, _saltAlice));

  Bob.only(() => {
    const bobCard = declassify(interact.dealCard());
  });

  Bob.publish(bobCard).timeout(relativeTime(deadline), () =>
    closeTo(Alice, informTimeout)
  );

  commit();

  Alice.only(() => {
    const saltAlice = declassify(_saltAlice);
    const aliceCard = declassify(_aliceCard);
  });

  Alice.publish(saltAlice, aliceCard).timeout(relativeTime(deadline), () =>
    closeTo(Bob, informTimeout)
  );

  checkCommitment(commitAlice, saltAlice, aliceCard);

  const outcome = winner(aliceCard, bobCard);

  if (outcome == DRAW) {
    transfer(wager).to(Alice);
    transfer(wager).to(Bob);
  } else {
    transfer(2 * wager).to(outcome == A_WINS ? Alice : Bob);
  }

  commit();

  each([Alice, Bob], () => {
    interact.seeOutcome(outcome);
    interact.seeCards(aliceCard, bobCard);
  });
});
