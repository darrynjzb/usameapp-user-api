function setResponseWithError(res, status, message, code = 'ERROR') {
  return res.status(status).send({ code, message });
}

function setResponseWithOk(res, status, message, code = 'OK') {
  return res.status(status).send({ code, message });
}

function setResponseRaw(res, status, message) {
  return res.status(status).send(message);
}

module.exports.setResponseWithError = setResponseWithError;
module.exports.setResponseWithOk = setResponseWithOk;
module.exports.setResponseRaw = setResponseRaw;
