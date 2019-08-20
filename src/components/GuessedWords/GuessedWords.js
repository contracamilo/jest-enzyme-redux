import React from 'react'
import PropTypes from 'prop-types';

const GuessedWords = () => {
  return (
    <div>
      
    </div>
  )
}

GuessedWords.propTypes = {
    GuessedWords: PropTypes.arrayOf(
        PropTypes.shape({
            GuessedWord: PropTypes.string.isRequired,
            letterMatchCount: PropTypes.number.isRequired,
        })
    ).isRequired
}

export default GuessedWords;
