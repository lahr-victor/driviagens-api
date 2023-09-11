import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat.js';
import cityRepository from '../repositories/city.repository.js';
import flightRepository from '../repositories/flight.repository.js';
import notFoundError from '../errors/notFound.error.js';
import incompatibleError from '../errors/incompatible.error.js';

dayjs.extend(customParseFormat);

async function create(origin, destination, date) {
  const existingOrigin = await cityRepository.validateById(origin);
  if (!existingOrigin) throw notFoundError('Origin');

  const existingDestination = await cityRepository.validateById(destination);
  if (!existingDestination) throw notFoundError('Destination');

  if (origin === destination) throw incompatibleError('Flights');

  const formattedDate = dayjs(date, 'DD-MM-YYYY').toISOString();

  return flightRepository.create(origin, destination, formattedDate);
}

const flightService = { create };
export default flightService;
