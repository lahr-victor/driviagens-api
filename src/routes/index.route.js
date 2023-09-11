import { Router } from 'express';
import passengerRouter from './passenger.route.js';
import cityRouter from './city.route.js';

const indexRouter = Router();

indexRouter.use(passengerRouter);
indexRouter.use(cityRouter);

export default indexRouter;