import joi from 'joi';

const create = joi.object({
  passengerId: joi
    .number()
    .integer()
    .required(),

  flightId: joi
    .number()
    .integer()
    .required(),
});

const travelSchema = { create };
export default travelSchema;
