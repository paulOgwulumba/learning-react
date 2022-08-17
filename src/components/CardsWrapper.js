import Card from "./Card";
import { colors, symbols } from "../data";

// takes in num of card to display on the screen - https://blog.devgenius.io/react-js-tutorial-how-to-implement-a-shuffle-card-game-from-scratch-c994277d38b3
const CardsWrapper = ({ cardsNumber }) => {
  return (
    <div className="card-wrapper">
      {[...Array(Number(cardsNumber))].map((_numb, index) => {
        index += 1;
        const randomSymbols =
          symbols[Math.floor(Math.random() * symbols.length)];
        return (
          <Card
            key={index}
            name={randomSymbols.name}
            color={
              randomSymbols.name === "spade" || randomSymbols.name === "club"
                ? `${colors[1].color}`
                : `${colors[0].color}`
            }
            symbol={randomSymbols.symbol}
            number={index}
          />
        );
      })}
    </div>
  );
};

export default CardsWrapper;
