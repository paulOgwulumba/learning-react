import "./styles.css";
import CardsWrapper from "./CardsWrapper";

function Card() {
  return (
    <div className="App">
      <CardsWrapper cardsNumber="5" />
      <button onClick={() => window.location.reload()}>Reload Cards</button>
    </div>
  );
}

export default Card;
