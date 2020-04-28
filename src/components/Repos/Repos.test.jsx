import React from 'react';
import { shallow } from 'enzyme';
import Repos from './Repos';

describe('Repos component', () => {
  it('renders Repos', () => {
    const repos = [
      {
        id: 235044203,
        name: 'capTouch-Fader-Joystick-Midi-Device',
        html_url: 'https://github.com/mikeymasonic/capTouch-Fader-Joystick-Midi-Device'
      },
      {
        id: 247767043,
        name: 'arcade-button-midi-controller',
        html_url: 'https://github.com/mikeymasonic/arcade-button-midi-controller'
      }
    ];
    const wrapper = shallow(<Repos repos={repos}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
