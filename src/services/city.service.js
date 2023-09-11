import cityRepository from '../repositories/city.repository.js';
import duplicateError from '../errors/duplicate.error.js';

async function create(name) {
  const existingCity = await cityRepository.validateByName(name);
  if (existingCity) throw duplicateError(name);

  return cityRepository.create(name);
}

const cityService = { create };
export default cityService;
