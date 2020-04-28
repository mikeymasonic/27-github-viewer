import React from 'react';
import PropTypes from 'prop-types';

const Repo = ({ name, html_url }) => (
  <ul>
    <li>{name}</li>
    <li>{html_url}</li>
  </ul>
);

Repo.propTypes = {
  name: PropTypes.string.isRequired,
  html_url: PropTypes.string.isRequired
};

export default Repo;
