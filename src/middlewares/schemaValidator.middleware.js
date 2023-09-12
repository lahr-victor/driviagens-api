import unprocessableError from '../errors/unprocessable.error.js';

function body(schema) {
  return (req, res, next) => {
    const validation = schema.validate(req.body, { abortEarly: false });

    if (validation.error) {
      const errors = validation.error.details.map((detail) => detail.message);
      throw unprocessableError(errors);
    }

    return next();
  };
}

function query(schema) {
  return (req, res, next) => {
    const validation = schema.validate(req.query, { abortEarly: false });

    if (validation.error) {
      const errors = validation.error.details.map((detail) => detail.message);
      throw unprocessableError(errors);
    }

    return next();
  };
}

const schemaValidator = { body, query };
export default schemaValidator;
