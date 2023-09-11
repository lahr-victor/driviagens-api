import coreJoi from 'joi';
import joiDate from '@joi/date';

const joi = coreJoi.extend(joiDate);

const create = joi.object({
  origin: joi
    .number()
    .integer()
    .required(),

  destination: joi
    .number()
    .integer()
    .required(),

  date: joi
    .date()
    .format(['DD-MM-YYYY', 'DD/MM/YYYY'])
    .greater('now')
    .required(),
});

const flightSchema = { create };
export default flightSchema;
