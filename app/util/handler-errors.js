const handlerError = (e) => {
  let status = 500;
  let code = 'INTERNAL_SERVER_ERROR';
  let message = e.message || 'internal server error not handled';
  if (e.name === 'SequelizeUniqueConstraintError') {
    status = 409;
    code = 'DATABASE_CONSTRAIN_ERROR';
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
