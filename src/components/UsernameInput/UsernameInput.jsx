import React from 'react';
import PropTypes from 'prop-types';

const UsernameInput = ({ username, onUsernameChange, onUsernameSubmit }) => (
  <>
    <input type="text" name="username" value={username} onChange={onUsernameChange} />
    <input type="button" name="search" value="Search" onChange={onUsernameSubmit} />
  </>
);

UsernameInput.propTypes = {
  username: PropTypes.string.isRequired,
  onUsernameChange: PropTypes.func.isRequired,
  onUsernameSubmit: PropTypes.func.isRequired
};

export default UsernameInput;
