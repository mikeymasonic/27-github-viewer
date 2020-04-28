import React, { Component } from 'react';
import UsernameInput from '../../components/UsernameInput/UsernameInput.jsx';
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
    return (
      <>
        <UsernameInput username={this.state.username} onUsernameChange={this.handleUsernameChange} onUsernameSubmit={this.handleUsernameSubmit} />
      </>
    );
  }
}
