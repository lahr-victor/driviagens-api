import cityRepository from '../repositories/city.repository.js';
import conflict from '../errors/conflict.error.js';

async function create(name) {
  const existingCity = await cityRepository.validateExisting(name);
  if (existingCity) throw conflict(name);

  return cityRepository.create(name);
}

const cityService = { create };
export default cityService;

