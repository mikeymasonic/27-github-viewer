import React from 'react';
import PropTypes from 'prop-types';

const Repo = ({ name, html_url }) => (
  <ul>
    <h3>{name}</h3>
    <li><a href={html_url} target="_blank" rel="noopener noreferrer">link</a></li>
  </ul>
);

Repo.propTypes = {
  name: PropTypes.string.isRequired,
  html_url: PropTypes.string.isRequired
};

export default Repo;
