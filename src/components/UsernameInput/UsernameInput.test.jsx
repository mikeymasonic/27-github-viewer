import React from 'react';
import { shallow } from 'enzyme';
import UsernameInput from './UsernameInput';

describe('UsernameInput component', () => {
  it('renders UsernameInput', () => {
    const wrapper = shallow(<UsernameInput 
      username="mikeymasonic"
      onUserChange={() => {}}
      onUserSubmit={() => {}}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
