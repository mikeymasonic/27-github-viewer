import React from 'react';
import { shallow } from 'enzyme';
import UsernameInfo from './UsernameInfo';

describe('UsernameInfo component', () => {
  it('renders UsernameInfo', () => {
    const wrapper = shallow(<UsernameInfo 
      avatar_url="https://avatars2.githubusercontent.com/u/35716186?v=4"
      login="mikeymasonic"
      followers={5}
      following={4}
      html_url="https://github.com/mikeymasonic"/>);
    expect(wrapper).toMatchSnapshot();
  });
});
