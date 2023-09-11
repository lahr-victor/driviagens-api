import { Router } from 'express';
import passengerRouter from './passenger.route.js';
import cityRouter from './city.route.js';
import flightRouter from './flight.route.js';
import travelRouter from './travel.route.js';

const indexRouter = Router();

indexRouter.use(passengerRouter);
indexRouter.use(cityRouter);
indexRouter.use(flightRouter);
indexRouter.use(travelRouter);

export default indexRouter;
