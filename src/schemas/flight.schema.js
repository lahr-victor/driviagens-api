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

const readAll = joi.object({
  origin: joi
    .string()
    .trim()
    .min(2)
    .max(50)
    .optional(),

  destination: joi
    .string()
    .trim()
    .min(2)
    .max(50)
    .optional(),

  'smaller-date': joi
    .date()
    .format(['DD-MM-YYYY', 'DD/MM/YYYY'])
    .optional(),

  'bigger-date': joi
    .date()
    .format(['DD-MM-YYYY', 'DD/MM/YYYY'])
    .optional(),
});

const flightSchema = { create, readAll };
export default flightSchema;
