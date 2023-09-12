import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat.js';
import cityRepository from '../repositories/city.repository.js';
import flightRepository from '../repositories/flight.repository.js';
import notFoundError from '../errors/notFound.error.js';
import incompatibleError from '../errors/incompatible.error.js';
import incompleteError from '../errors/incomplete.error.js';
import invalidError from '../errors/invalid.error.js';

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

async function readAll(origin, destination, smallerDate, biggerDate) {
  if ((biggerDate && !smallerDate) || (!biggerDate && smallerDate)) {
    throw incompleteError('Date interval');
  }

  let formattedBiggerDate;
  let formattedSmallerDate;

  if (biggerDate && smallerDate) {
    formattedBiggerDate = dayjs(biggerDate, 'DD-MM-YYYY').toISOString();
    formattedSmallerDate = dayjs(smallerDate, 'DD-MM-YYYY').toISOString();

    if (formattedSmallerDate > formattedBiggerDate) {
      throw invalidError('Date interval');
    }
  }

  const flights = await flightRepository.readAll(
    origin,
    destination,
    formattedSmallerDate,
    formattedBiggerDate,
  );
  return flights;
}

const flightService = { create, readAll };
export default flightService;
