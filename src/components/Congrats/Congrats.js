import React from 'react';

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
                    <p>Great! you guesses the word</p>
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

export default Congrats;
