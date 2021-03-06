import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import { findByTestAttr, checkProps } from '../../utils/testUtils'
import Congrats from './Congrats'
Enzyme.configure({ adapter: new EnzymeAdapter() })

const defaultProps = { success:false }

/**
 * Factory Function to create a ShallowWrapper for the Ccongrats component
 * @function Setup
 * @param {object} props - Component props specific to this setup
 * @returns {ShallowWrapper} 
 */
const setup = (props={}) => {
    const setupProps = { ...defaultProps, ...props };
    return shallow(<Congrats {...setupProps}/>)
}


test('Rendering without errors', ()=>{
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'component-congrats');
    expect(component.length).toBe(1);
})

test('Renders no text when success props is false', ()=>{
    const wrapper = setup({ success:false });
    const component = findByTestAttr(wrapper, 'component-congrats');

    expect(component.text()).toBe('');
})

test('Renders non-empty congrats message when success prop is true', ()=>{
    const wrapper = setup({ success:true });
    const message = findByTestAttr(wrapper, 'congrats-message');

    expect(message.text().length).not.toBe(0);
})

test('Doesn´t throw warning with expected props', () => {
    const expectedProps = { success: false };
    checkProps(Congrats, expectedProps)
})

