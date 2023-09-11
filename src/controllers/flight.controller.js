import httpStatus from 'http-status';
import flightService from '../services/flight.service.js';

async function create(req, res) {
  const { origin, destination, date } = req.body;
  await flightService.create(origin, destination, date);

  res.sendStatus(httpStatus.CREATED);
}

const flightController = { create };
export default flightController;
