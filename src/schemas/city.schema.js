import joi from 'joi';

const create = joi.object({
  name: joi
    .string()
    .trim()
    .min(2)
    .max(50)
    .required(),
});

const citySchema = { create };
export default citySchema;