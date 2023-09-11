import joi from 'joi';

const create = joi.object({
  firstName: joi
    .string()
    .trim()
    .min(2)
    .max(100)
    .required(),

  lastName: joi
    .string()
    .trim()
    .min(2)
    .max(100)
    .required(),
});

const passengerSchema = { create };
export default passengerSchema;