import React, { Component } from 'react';
import Flashcard from './Flashcard';
import '../styles/GameBoard.css';

const emojis = ['🐶', '🐱', '🐰', '🦊', '🐻', '🐼', '🦁', '🐵'];

class GameBoard extends Component {
  constructor() {
    super();
    this.state = {
      cards: [],
      flippedCards: [],
      matched: [],
      disabled: false
    };
  }

  componentDidMount() {
    this.shuffleCards();
  }

  shuffleCards = () => {
    const doubled = [...emojis, ...emojis].map((emoji, index) => ({
      id: index,
      emoji,
      matched: false,
    }));
    const shuffled = doubled.sort(() => 0.5 - Math.random());
    this.setState({ cards: shuffled, flippedCards: [], matched: [] });
  };

  handleCardClick = (index) => {
    const { flippedCards, cards, disabled } = this.state;
    if (disabled || flippedCards.includes(index) || cards[index].matched) return;

    const newFlipped = [...flippedCards, index];
    this.setState({ flippedCards: newFlipped }, () => {
      if (newFlipped.length === 2) {
        this.checkMatch(newFlipped);
      }
    });
  };

  checkMatch = ([first, second]) => {
    const { cards, matched } = this.state;
    this.setState({ disabled: true });
    if (cards[first].emoji === cards[second].emoji) {
      this.setState({
        matched: [...matched, first, second],
        flippedCards: [],
        disabled: false,
      });
    } else {
      setTimeout(() => this.setState({ flippedCards: [], disabled: false }), 1000);
    }
  };

  render() {
    const { cards, flippedCards, matched } = this.state;
    return (
      <div className="game-board">
        {cards.map((card, index) => (
          <Flashcard
            key={card.id}
            emoji={card.emoji}
            flipped={flippedCards.includes(index) || matched.includes(index)}
            onClick={() => this.handleCardClick(index)}
          />
        ))}
      </div>
    );
  }
}

export default GameBoard;