import React, { Component } from 'react';
import UsernameInput from '../../components/UsernameInput/UsernameInput.jsx';

export default class UsernameEnter extends Component {

  state = {
    username: ''
  }

  handleUsernameChange = ({ target }) => {
    this.setState({ username: target.value });
  };

  handleUsernameSubmit = () => {

  };

  render() {
    return (
      <>
        <UsernameInput username={this.state.username} onUsernameChange={this.handleUsernameChange} onUsernameSubmit={this.handleUsernameSubmit} />
      </>
    );
  }
}
