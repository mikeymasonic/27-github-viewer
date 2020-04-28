import React from 'react';
import PropTypes from 'prop-types';

const UsernameInfo = ({ avatar_url, login, followers, following, html_url }) => (
  <figure>
    <img src={avatar_url} alt={login} />
    <figcaption>
      <p>{login}</p>
      <p>{followers}</p>
      <p>{following}</p>
      <p><a href={html_url} target="_blank" rel="noopener noreferrer">link</a></p>
    </figcaption>
  </figure>
);

UsernameInfo.propTypes = {
  avatar_url: PropTypes.string.isRequired,
  login: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  following: PropTypes.number.isRequired,
  html_url: PropTypes.string.isRequired,
};

export default UsernameInfo;
