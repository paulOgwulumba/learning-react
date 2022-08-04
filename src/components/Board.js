import React from 'react'

function Board({player, card, score}) {
  return (
    <div className='Board'>
    <h1 className='Board__player'>{player}: <span className={score == 'Burst!' ? 'span__red' : 'span__white'}>{score}</span></h1>
    <div className='Board__card'>
      {card}
    </div>
    </div>
  )
}

export default Board