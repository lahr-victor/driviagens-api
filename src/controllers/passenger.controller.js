import httpStatus from 'http-status';
import passengerService from '../services/passenger.service.js';

async function create(req, res) {
  const { firstName, lastName } = req.body;
  passengerService.create(firstName, lastName);

  res.sendStatus(httpStatus.CREATED);
}

async function readTravels(req, res) {
  const { name } = req.query;
  const travels = await passengerService.readTravels(name);

  res.send(travels).status(httpStatus.OK);
}

const passengerController = { create, readTravels };
export default passengerController;
