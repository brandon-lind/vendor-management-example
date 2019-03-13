import React from 'react';
import { shallow } from 'enzyme';
import SearchForm from './form';

const setup = (props={}) => {
  return shallow(<SearchForm {...props} />);
};

describe('Vendor Search <SearchForm />', () => {
  it('should render with a form, input field, and a submit button', () => {
    const component = setup();
    expect(component.find('Form').length).toBe(1);
    expect(component.find('Input').length).toBe(1);
    expect(component.find('Button').length).toBe(1);
  });
  
  it('should pass back the search terms when the search form is submitted and a callback function is passed in', () => {
    const onSearchFn = jest.fn();
    const component = setup({
      onSearch: onSearchFn
    });

    component.find('Input').simulate('change', { target: { name: 'searchTerms', value: 'Hello' } })
    component.find('Form').simulate('submit', { preventDefault: jest.fn() });
    expect(onSearchFn).toHaveBeenCalledWith({ 'searchTerms':'Hello'});
  });
});

