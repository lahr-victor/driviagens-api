import overflowError from '../errors/overflow.error.js';
import passengerRepository from '../repositories/passenger.repository.js';

function create(firstName, lastName) {
  return passengerRepository.create(firstName, lastName);
}

async function readTravels(name) {
  const travels = await passengerRepository.readTravels(name);
  if (travels.length > 10) throw overflowError();

  return travels;
}

const passengerService = { create, readTravels };
export default passengerService;
