import React from 'react';
import GameBoard from './components/GameBoard';
import './styles/App.css';

const App = () => {
  return (
    <div className="app">
      <h1>🐾 Memory Flashcard Game</h1>
      <GameBoard />
    </div>
  );
};

export default App;
