import { Router } from 'express';
import schemaValidator from '../middlewares/schemaValidator.middleware.js';
import travelSchema from '../schemas/travel.schema.js';
import travelController from '../controllers/travel.controller.js';

const travelRouter = Router();

travelRouter.post(
  '/travels',
  schemaValidator.body(travelSchema.create),
  travelController.create,
);

export default travelRouter;
