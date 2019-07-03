/* eslint-disable no-mixed-spaces-and-tabs */
import React, { useState} from 'react';
import Game from '../components/Game';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';

// STAR MATCH - V9

export const App = () => {
  const [gameId, setGameId] = useState(1);
  return (
    <>
    <Game key={gameId} startNewGame={() => setGameId(gameId + 1)}/>
    <div>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
    </>
  );
};
