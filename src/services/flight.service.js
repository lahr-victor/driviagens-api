import cityRepository from '../repositories/city.repository.js';
import flightRepository from '../repositories/flight.repository.js';
import notFound from '../errors/notFound.error.js';
import incompatible from '../errors/incompatible.error.js';

async function create(origin, destination, date) {
  const existingOrigin = await cityRepository.validateById(origin);
  if (!existingOrigin) throw notFound('Origin');

  const existingDestination = await cityRepository.validateById(destination);
  if (!existingDestination) throw notFound('Destination');

  if (origin === destination) throw incompatible('Flights');

  return flightRepository.create(origin, destination, date);
}

const flightService = { create };
export default flightService;