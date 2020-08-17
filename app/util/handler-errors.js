const handlerError = (e) => {
  const status = 500;
  const code = 'INTERNAL_SERVER_ERROR';
  let message = 'internal server error';
  if (e.message) {
    message = e.message;
  }
  return {
    status,
    message,
    code
  };
};

module.exports = {
  handlerError
};
