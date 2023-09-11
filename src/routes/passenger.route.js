import { Router } from 'express';
import schemaValidator from '../middlewares/schemaValidator.middleware.js';
import passengerSchema from '../schemas/passenger.schema.js';
import passengerController from '../controllers/passenger.controller.js';

const passengerRouter = Router();

passengerRouter.post(
  '/passengers',
  schemaValidator(passengerSchema.create),
  passengerController.create,
);

export default passengerRouter;
