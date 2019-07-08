import React from 'react';

const PlayAgain = props => (
  <div className="game-done">
    <div
      className={props.gameStatus === 'lost' ? 'game-lost' : 'game-won'}
    >
      {props.gameStatus === 'lost' ? 'Game Over' : 'Nice'}
    </div>
    <button onClick={props.onClick}>Play Again</button>
  </div>
);

export default PlayAgain;
