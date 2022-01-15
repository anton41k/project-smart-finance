class AppError extends Error {
    constructor(message) {
      super(message)
      this.status = 400
    }
  };

  class WrongParametersError extends AppError {
    constructor(message) {
      super(message)
      this.status = 400
    }
  };
  
  class NotFoundError extends AppError {
    constructor(message) {
      super(message)
      this.status = 404
    }
  };
  
  
  class RegistrationConflictError extends AppError {
    constructor(message) {
      super(message)
      this.status = 409
    }
  };
  
  class NotAuthorizedError extends AppError {
    constructor(message) {
      super(message)
      this.status = 401
    }
  };
  
  module.exports = {
    AppError,
    NotFoundError,
    WrongParametersError,
    RegistrationConflictError,
    NotAuthorizedError
  };