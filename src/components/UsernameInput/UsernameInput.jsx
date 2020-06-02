import React from 'react';
import PropTypes from 'prop-types';

const UsernameInput = ({ username, onUsernameChange, onUsernameSubmit }) => (
  <>
    <h1>GitHub User Viewer</h1>
    <input type="text" name="username" placeholder="GitHub Username" value={username} onChange={onUsernameChange} />
    <input type="submit" name="search" value="Search" onClick={onUsernameSubmit} />
  </>

  // <form onSubmit={onUsernameSubmit}>
  //   <input type="username" name="username" value={username} onChange={onUsernameChange} />
  //   <button>Submit</button>
  // </form>
);

UsernameInput.propTypes = {
  username: PropTypes.string.isRequired,
  onUsernameChange: PropTypes.func.isRequired,
  onUsernameSubmit: PropTypes.func.isRequired
};

export default UsernameInput;
