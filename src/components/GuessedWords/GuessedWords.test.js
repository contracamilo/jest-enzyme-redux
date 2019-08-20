import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import { findByTestAttr, checkProps } from '../../utils/testUtils'
import GuessedWords from './GuessedWords'

Enzyme.configure({ adapter: new EnzymeAdapter() })

const defaultProps = {
    GuessedWords: [
        { GuessedWord: 'Train', letterMatchCount: 3 }
    ]
}

/**
 * Factory Function to create a ShallowWrapper for the GuessedWords component
 * @function Setup
 * @param {object} props - Component props specific to this setup
 * @returns {ShallowWrapper} 
 */
const setup = (props={}) => {
    const setupProps = {...defaultProps, ...props}
    return shallow(<GuessedWords {...setupProps}/>)
}


test('Does not throw a warning with the expected words', () => {
    checkProps(GuessedWords, defaultProps)
})

describe('if there are no words guessed', () => {})

describe('if there are words guessed', () => {})