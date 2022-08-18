import CardSkeleton from "./Card";
import { colors, numbers, symbols } from "./data";
import { blackJackGame } from "../utils/constants";

// takes in num of card to display on the screen - https://blog.devgenius.io/react-js-tutorial-how-to-implement-a-shuffle-card-game-from-scratch-c994277d38b3
const CardHolder = ({ cards = [] }) => {
  return (
    <div className="card-wrapper">
      {cards.map((value, index) => {
        const _numb = blackJackGame.cardsDisplayMap[value.card] || 0;

        return (
          <CardSkeleton
            key={index}
            name={value.symbol.name}
            number={_numb}
            color={
              value.symbol.name === "spade" || value.symbol.name === "club"
                ? `${colors[1].color}`
                : `${colors[0].color}`
            }
            symbol={value.symbol.symbol}
          />
        );
      })}
    </div>
  );
};

export default CardHolder;
