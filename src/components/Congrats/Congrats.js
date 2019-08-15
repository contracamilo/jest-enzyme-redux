import React from 'react';
import PropTypes from 'prop-types';

/**
 * Functional react component for congratulatory message
 * @function
 * @param {object} props - React Props
 * @returns {JSX.Element} - Rendered component (or null if success' prop) is set
 */

const Congrats = (props) => {
    if (props.success) {
        return (
            <div data-test={"component-congrats"}>
                <span data-test={"congrats-message"}>
                    <p>Great! you guessed the word</p>
                </span>
            </div>
        );
    } else {
        return (
            <div data-test={"component-congrats"}>
                <span data-test={"congrats-message"}>
                    
                </span>
            </div>
        )
    }

}

Congrats.propTypes = {
    success: PropTypes.bool.isRequired,
}

export default Congrats;
