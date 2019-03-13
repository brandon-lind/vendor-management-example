import React from 'react';
import { shallow } from 'enzyme';
import VendorSearchForm from './form';

const setup = (props={}) => {
  return shallow(<VendorSearchForm {...props} />);
};

describe('<VendorSearchForm />', () => {
  it('should render with a form, input field, and a submit button', () => {
    const component = setup();
    expect(component.find('Form').length).toBe(1);
    expect(component.find('Input').length).toBe(1);
    expect(component.find('Button').length).toBe(1);
  });
  
  it('should pass back the search terms when the search form is submitted', () => {
    const onSearchFn = jest.fn();
    const component = setup({
      onSearch: onSearchFn
    });

    component.find('Input').simulate('change', { target: { name: 'searchTerms', value: 'Hello' } })
    component.find('Form').simulate('submit', { preventDefault: jest.fn() });
    expect(onSearchFn).toHaveBeenCalledWith({ 'searchTerms':'Hello'});
  });
});

