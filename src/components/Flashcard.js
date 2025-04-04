import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Flashcard.css';

const Flashcard = ({ emoji, flipped, onClick }) => {
  return (
    <div className={`flashcard ${flipped ? 'flipped' : ''}`} onClick={onClick}>
      <div className="inner">
        <div className="front"></div>
        <div className="back">{emoji}</div>
      </div>
    </div>
  );
};

Flashcard.propTypes = {
  emoji: PropTypes.string.isRequired,
  flipped: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Flashcard;