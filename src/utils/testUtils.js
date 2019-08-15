import checkPropTypes from 'check-prop-types';

/**
 * Factory Function to create a ShallowWrapper for the Ccongrats component
 * @function Setup
 * @param {ShallowWrapper} wrapper- Enzyme Shallow Wrapper
 * @param {String} val - Value of data-test attribute for search
 * @returns {ShallowWrapper} 
 */
export const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test="${val}"]`);

export const checkProps = (component, comformingProps) => {
    const propError = checkPropTypes(
        component.propTypes, 
        comformingProps,
        'prop',
        component.name
    );
    expect(propError).toBeUndefined();
}