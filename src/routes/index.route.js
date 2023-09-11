import { Router } from 'express';
import passengerRouter from './passenger.route.js';

const indexRouter = Router();

indexRouter.use(passengerRouter);

export default indexRouter;