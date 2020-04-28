import React, { Component } from 'react';
import UsernameInput from '../../components/UsernameInput/UsernameInput.jsx';
import UsernameInfo from '../../components/UsernameInfo/UsernameInfo.jsx';
import Repos from '../../components/Repos/Repos.jsx';
import { getUser } from '../../services/githubAPI.js';

export default class UsernameEnter extends Component {

  state = {
    username: '',
    user: {
      avatar_url: '',
      login: '',
      followers: 0,
      following: 0,
      html_url: ''
    },
    search: false
  }

  handleUsernameChange = ({ target }) => {
    this.setState({ username: target.value });
  };

  handleUsernameSubmit = () => {
    getUser(this.state.username)
      .then(user => this.setState({ user, search: true }));
  };

  render() {
    let userRequested = '';
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

    if(this.state.search) {
      userRequested = 
      <>
        <UsernameInfo {...this.state.user} />
        <Repos repos={repos} />
      </>;

    }
    return (
      <>
        <UsernameInput username={this.state.username} onUsernameChange={this.handleUsernameChange} onUsernameSubmit={this.handleUsernameSubmit} />
        {userRequested}
      </>
    );
  }
}
