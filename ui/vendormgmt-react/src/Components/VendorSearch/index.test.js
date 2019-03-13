import React from 'react';
import {shallow} from 'enzyme';
import VendorSearch from './index';
import VendorSearchForm from './form';

const setup = (props={}) => {
  return shallow(<VendorSearch {...props} />);
};

describe('<VendorSearch />', () => {
  let component;

  beforeEach(() => {
    component = setup();
  });

  afterEach(() => {
    component = null;
  });

  it('should render the search form', () => {
    expect(component.contains(<VendorSearchForm />)).toBe(true);
  });
});
