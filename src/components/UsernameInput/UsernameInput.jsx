import React from 'react';
import PropTypes from 'prop-types';

const UsernameInput = ({ username, onUserChange }) => (
  <>
    <input type="text" name="username" value={username} onChange={onUserChange} />
  </>
);

UsernameInput.propTypes = {
  username: PropTypes.string.isRequired,
  onUserChange: PropTypes.func.isRequired
};

export default UsernameInput;
