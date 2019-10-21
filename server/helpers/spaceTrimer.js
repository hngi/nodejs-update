const spaceTrimer = data => {
  const spaces = /\s/g;
  return data !== undefined ? data.replace(spaces, '') : '';
};

module.exports = spaceTrimer;
