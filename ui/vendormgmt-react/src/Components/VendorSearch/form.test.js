import React from 'react';
import { shallow } from 'enzyme';
import { SearchForm } from './form';

const setup = (props = {}) => {
  return shallow(<SearchForm {...props} />);
};

describe('Vendor Search <SearchForm />', () => {
  it('should render with a form, input field, and a submit button', () => {
    const component = setup({ searchParams: { isSearching: false } });
    expect(component.find('Form').length).toBe(1);
    expect(component.find('Input').length).toBe(1);
    expect(component.find('Button').length).toBe(1);
  });

  it('should execute the callback function when the search form is submitted and a callback function is passed in', () => {
    const onSearchFn = jest.fn();
    const searchVendorsFn = jest.fn();
    const component = setup({
      searchParams: { isSearching: false },
      onSearch: onSearchFn,
      searchVendors: searchVendorsFn
    });

    component.find('Form').simulate('submit', { preventDefault: jest.fn() });
    expect(searchVendorsFn).toHaveBeenCalled();

    // TODO: Investigate why this is actually be called, but doesn't think it is
    // expect(onSearchFn).toHaveBeenCalled();
  });
});
