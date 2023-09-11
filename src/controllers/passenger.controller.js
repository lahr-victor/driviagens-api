import httpStatus from 'http-status';
import passengerService from '../services/passenger.service.js';

async function create(req, res) {
  const { firstName, lastName } = req.body;
  passengerService.create(firstName, lastName);
  res.sendStatus(httpStatus.CREATED);
}

const passengerController = { create };
export default passengerController;