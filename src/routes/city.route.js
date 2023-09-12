import { Router } from 'express';
import schemaValidator from '../middlewares/schemaValidator.middleware.js';
import citySchema from '../schemas/city.schema.js';
import cityController from '../controllers/city.controller.js';

const cityRouter = Router();

cityRouter.post(
  '/cities',
  schemaValidator.body(citySchema.create),
  cityController.create,
);

export default cityRouter;
