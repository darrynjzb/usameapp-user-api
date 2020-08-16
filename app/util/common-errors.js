class DomainError extends Error {
  constructor(code, msg, metadata = undefined) {
    super(msg);
    // Ensure the name of this error is the same as the class name
    this.name = this.constructor.name;
    // Add code in error
    this.code = code;

    this.addMetadata(metadata);
    // This clips the constructor invocation from the stack trace.
    // It's not absolutely essential, but it does make the stack trace a little nicer.
    //  @see Node.js reference (bottom)
    Error.captureStackTrace(this, this.constructor);
  }

  addMetadata(metadata) {
    if (!metadata) {
      return;
    }
    if (!this.metadata) {
      this.metadata = [];
    }
    if (!Array.isArray(this.metadata)) {
      const temp = this.metadata;
      this.metadata = [];
      this.metadata.unshift(temp);
    }
    if (Array.isArray(metadata)) {
      this.metadata.unshift(...metadata);
    } else {
      this.metadata.unshift(metadata);
    }
  }
}
// Error form badrequest
class BadRequestError extends DomainError {
  constructor(code, msg, metadata = undefined) {
    super(code, msg, metadata);
    this.status = 400;
  }
}

// Credencial autetification are ivalid
class UnauthorizedError extends DomainError {
  constructor(code, msg, metadata = undefined) {
    super(code, msg, metadata);
    this.status = 401;
  }
}

class ForbiddenError extends DomainError {
  constructor(code, msg, metadata = undefined) {
    super(code, msg, metadata);
    this.status = 403;
  }
}

class NotFoundError extends DomainError {
  constructor(code, msg, metadata = undefined) {
    super(code, msg, metadata);
    this.status = 404;
  }
}

class TimeoutError extends DomainError {
  constructor(code, msg, metadata = undefined) {
    super(code, msg, metadata);
    this.status = 408;
  }
}
class ConnectionError extends DomainError {
  constructor(code, msg, metadata = undefined) {
    super(code, msg, metadata);
    this.status = 500;
  }
}

class AppError extends DomainError {
  constructor(code, msg, metadata = undefined) {
    super(code, msg, metadata);
    this.status = 500;
  }
}

module.exports = {
  BadRequestError,
  UnauthorizedError,
  ForbiddenError,
  NotFoundError,
  TimeoutError,
  ConnectionError,
  AppError
};
