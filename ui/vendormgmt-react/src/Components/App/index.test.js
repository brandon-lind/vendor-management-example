import React from 'react';
import { shallow } from 'enzyme';
import App from './index';

const setup = (props = {}) => {
  return shallow(<App {...props} />);
};

describe('<App />', () => {
  it('generates the basic application structure', () => {
    const component = setup();

    expect(component.find('header').length).toBe(1);
    expect(component.find('div.app-content').length).toBe(1);
    expect(component.find('footer').length).toBe(1);
  });
});
