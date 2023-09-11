import unprocessableEntity from '../errors/unprocessableEntity.error.js';

export default function schemaValidator(schema) {
  return (req, res, next) => {
    const validation = schema.validate(req.body, { abortEarly: false });

    if (validation.error) {
      const errors = validation.error.details.map((detail) => detail.message);
      throw unprocessableEntity(errors);
    }

    return next();
  };
}