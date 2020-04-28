import React from 'react';
import { shallow } from 'enzyme';
import Repo from './Repo';

describe('Repo component', () => {
  it('renders Repo', () => {
    const wrapper = shallow(<Repo 
      name='loopr'
      html_url='https://github.com/mikeymasonic/loopr'/>);
    expect(wrapper).toMatchSnapshot();
  });
});
