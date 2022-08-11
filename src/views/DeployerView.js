import React from "react";
import { Board, Button } from "../components/";

export function DeployerView({ blackJackGame, deployerCard, deployHit, drop }) {
  return (
    <div className="Deployer">
      <div className="Depolyer__Board">
        <Board
          player="Deployer"
          class="Dealer__Class"
          card={deployerCard}
          score={blackJackGame["deployer"]["scorespan"]}
        />
        <Board
          player="Attacher"
          class="Attacher__class"
          // card = {attacherCard}
          // score = {blackJackGame['attacher']['scorespan']}
        />
      </div>
      <Button text="Hit" type="Button__hit" click={deployHit} />
      <Button text="Stand" type="Button__stand" click={drop} />
    </div>
  );
}
