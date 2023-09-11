import { Router } from 'express';
import schemaValidator from '../middlewares/schemaValidator.middleware.js';
import flightSchema from '../schemas/flight.schema.js';
import flightController from '../controllers/flight.controller.js';

const flightRouter = Router();

flightRouter.post(
  '/flights',
  schemaValidator(flightSchema.create),
  flightController.create,
);

export default flightRouter;