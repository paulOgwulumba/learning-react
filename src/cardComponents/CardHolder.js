import CardSkeleton from "./Card";
import { colors, numbers, symbols } from "./data";
import { blackJackGame } from "../utils/constants";
import useRandomValueFromArray from "./useRandomValueFromArray";

// takes in num of card to display on the screen - https://blog.devgenius.io/react-js-tutorial-how-to-implement-a-shuffle-card-game-from-scratch-c994277d38b3
const CardHolder = ({ cards = [] }) => {
  
  return (
    <div className="card-wrapper">
      {cards.map((numb, index) => {
        const randomSymbols = symbols[Math.floor(Math.random() * symbols.length)];
        const _numb = blackJackGame.cardsDisplayMap[numb] || 0;

        return (
          <CardSkeleton
            key={index}
            name={randomSymbols.name}
            number={_numb}
            color={
              randomSymbols.name === "spade" || randomSymbols.name === "club"
                ? `${colors[1].color}`
                : `${colors[0].color}`
            }
            symbol={randomSymbols.symbol}
          />
        );
      })}
    </div>
  );
};

export default CardHolder;
