import React from 'react';
import { shallow } from 'enzyme';
import UsernameInput from './UsernameInput';

describe('UsernameInput component', () => {
  it('renders UsernameInput', () => {
    const wrapper = shallow(<UsernameInput 
      username="mikeymasonic"
      onUsernameChange={() => {}}
      onUsernameSubmit={() => {}}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
