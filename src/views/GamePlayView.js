import CardsWrapper from "../cardComponents/CardsWrapper"
import CardHolder from "../cardComponents/CardHolder"

export function GamePlayView () {
    return (
        <div>
            <CardHolder cards={['A', 'K', 'Q', '6']}/>
        </div>
    )
}