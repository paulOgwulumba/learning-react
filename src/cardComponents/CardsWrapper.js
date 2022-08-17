import CardSkeleton from "./Card";
import { colors, numbers, symbols } from "./data";
import useRandomValueFromArray from "./useRandomValueFromArray";

// takes in num of card to display on the screen - https://blog.devgenius.io/react-js-tutorial-how-to-implement-a-shuffle-card-game-from-scratch-c994277d38b3
const CardsWrapper = ({ cardsNumber }) => {
  const cardNumbers = cardsNumber;
  const { randomValueFromArray } = useRandomValueFromArray();
  return (
    <div className="card-wrapper">
      {[...Array(Number(cardNumbers))].map((_numb, index) => {
        index += 1;
        const randomSymbols =
          symbols[Math.floor(Math.random() * symbols.length)];
        return (
          <CardSkeleton
            key={index}
            name={randomSymbols.name}
            number={randomValueFromArray(numbers).number}
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

export default CardsWrapper;
