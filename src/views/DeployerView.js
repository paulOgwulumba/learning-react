import React from "react";
import Board from "../components/Board";

function DeployerView({ blackJackGame, deployerCard }) {
  return (
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
  );
}

export default DeployerView;
