import React, { Component } from 'react';
import UsernameInput from '../../components/UsernameInput/UsernameInput.jsx';
import UsernameInfo from '../../components/UsernameInfo/UsernameInfo.jsx';
import Repos from '../../components/Repos/Repos.jsx';
import { getUser, getRepos } from '../../services/githubAPI.js';

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
    repos: [],
    search: false
  }

  handleUsernameChange = ({ target }) => {
    this.setState({ username: target.value });
  };

  handleUsernameSubmit = () => {
    getUser(this.state.username)
      .then(user => this.setState({ user }));
    getRepos(this.state.username)
      .then(repos => this.setState({ repos, search: true }));
  };

  render() {
    let userRequested = '';

    if(this.state.search) {
      userRequested = 
      <>
        <UsernameInfo {...this.state.user} />
        <Repos repos={this.state.repos} />
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
