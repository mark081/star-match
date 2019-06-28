/* eslint-disable no-mixed-spaces-and-tabs */
import React, { useState} from 'react';
import Game from '../components/Game';

// STAR MATCH - V9

export  const App = () => {
  const [gameId, setGameId] = useState(1);
  return (
    <Game key={gameId} startNewGame={() => setGameId(gameId + 1)}/>
  );
};
