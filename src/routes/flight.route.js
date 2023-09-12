import { Router } from 'express';
import schemaValidator from '../middlewares/schemaValidator.middleware.js';
import flightSchema from '../schemas/flight.schema.js';
import flightController from '../controllers/flight.controller.js';

const flightRouter = Router();

flightRouter.post(
  '/flights',
  schemaValidator.body(flightSchema.create),
  flightController.create,
);

flightRouter.get(
  '/flights',
  schemaValidator.query(flightSchema.readAll),
  flightController.readAll,
);

export default flightRouter;
