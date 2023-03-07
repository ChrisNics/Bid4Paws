const createErrorObject = (statusCode, message) => {
  return {
    statusCode: statusCode,
    status: 'failed',
    message: message
  };
};

const handleCastErrorDB = (error) => {
  const message = `Invalid ${error.path} is ${error.value}.`;
  return createErrorObject(400, message);
};

const handleDuplicateFields = (error, modelName) => {
  const field = Object.keys(error.keyValue)[0];
  const message = `${modelName} with ${field} '${error.keyValue[field]}' already exists.`;
  return createErrorObject(400, message);
};

const handleValidationErrorDB = (error) => {
  const errors = Object.values(error.errors).map((el) => el.message);
  const message = `Invalid input data. ${errors.join('. ')}`;
  return createErrorObject(400, message);
};

const handleJWTError = () => {
  const message = 'Invalid Token. Please log in again';
  return createErrorObject(401, message);
};

const handleJWTExpiredError = () => {
  const message = 'Your token has expired! Please log in again';
  return createErrorObject(400, message);
};

const mongoDBErrorHandler = (res, error) => {
  console.log(error);
  if (error.name === 'ValidationError') {
    error = handleValidationErrorDB(error);
  } else if (error.name === 'CastError') {
    error = handleCastErrorDB(error);
  } else if (error.code === 11000) {
    error = handleDuplicateFields(error, 'User');
  } else if (error.name === 'JsonWebTokenError') {
    error = handleJWTError();
  } else if (error.name === 'TokenExpiredError') {
    error = handleJWTExpiredError();
  } else {
    error = createErrorObject(500, 'Something went wrong in the server');
  }

  return res
    .status(error.statusCode)
    .json({ status: error.status, message: error.message, data: null });
};

export default mongoDBErrorHandler;
