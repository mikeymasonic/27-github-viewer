export const getUser = (username) => {
  return fetch(`https://cors-anywhere.herokuapp.com/https://api.github.com/users/${username}`)
    .then(res => res.json());
};

export const getRepos = (username) => {
  return fetch(`https://cors-anywhere.herokuapp.com/https://api.github.com/users/${username}/repos`)
    .then(res => res.json());
};
