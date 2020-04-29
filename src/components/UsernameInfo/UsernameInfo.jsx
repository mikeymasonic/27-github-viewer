import React from 'react';
import PropTypes from 'prop-types';

const UsernameInfo = ({ avatar_url, login, followers, following, html_url }) => (
  <figure>
    <img src={avatar_url} alt={login} />
    <figcaption>
      <h4>username:</h4> {login}
      <h4>followers:</h4> {followers}
      <h4>following:</h4> {following}
      <p><a href={html_url} target="_blank" rel="noopener noreferrer">github profile</a></p>
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
