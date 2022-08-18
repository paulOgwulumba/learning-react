import { GameOutcome } from "../utils/constants";

export function GameOutcomeView ({ outcome }) {
    return (
      <div>
        <h2>
            {
                outcome === GameOutcome.WINNER?
                `You win!!! Good job`
                :
                outcome === GameOutcome.LOSS?
                `You lose! Oops. Better luck next time.`
                :
                `It was a draw...`
            }
        </h2>
        <button onClick={() => window.location.reload()}>
          Refresh Game
        </button>
      </div>
    );
  }
  