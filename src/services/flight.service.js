import cityRepository from '../repositories/city.repository.js';
import flightRepository from '../repositories/flight.repository.js';
import notFoundError from '../errors/notFound.error.js';
import incompatibleError from '../errors/incompatible.error.js';

async function create(origin, destination, date) {
  const existingOrigin = await cityRepository.validateById(origin);
  if (!existingOrigin) throw notFoundError('Origin');

  const existingDestination = await cityRepository.validateById(destination);
  if (!existingDestination) throw notFoundError('Destination');

  if (origin === destination) throw incompatibleError('Flights');

  return flightRepository.create(origin, destination, date);
}

const flightService = { create };
export default flightService;
