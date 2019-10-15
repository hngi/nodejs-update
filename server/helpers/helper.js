const extractErrors = (errors) => {
  const validationErrors = [];
  errors.map((error) => validationErrors.push(error.msg));
  return validationErrors;
}

module.exports = extractErrors;
