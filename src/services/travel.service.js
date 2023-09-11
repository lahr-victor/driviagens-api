import passengerRepository from '../repositories/passenger.repository.js';
import flightRepository from '../repositories/flight.repository.js';
import travelRepository from '../repositories/travel.repository.js';
import notFound from '../errors/notFound.error.js';

async function create(passengerId, flightId) {
  const existingPassenger = await passengerRepository.validateById(passengerId);
  if (!existingPassenger) throw notFound('Passenger');

  const existingFlight = await flightRepository.validateById(flightId);
  if (!existingFlight) throw notFound('Flight');

  return travelRepository.create(passengerId, flightId);
}

const travelService = { create };
export default travelService;
