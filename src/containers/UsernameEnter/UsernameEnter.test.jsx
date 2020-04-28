import React from 'react';
import { shallow } from 'enzyme';
import UsernameEnter from './UsernameEnter';

describe('UsernameEnter component', () => {
  it('renders UsernameEnter', () => {
    const wrapper = shallow(<UsernameEnter 
      username="mikeymasonic"
      onUsernameChange={() => {}}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
