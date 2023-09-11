import cityRepository from '../repositories/city.repository.js';
import duplicate from '../errors/duplicate.error.js';

async function create(name) {
  const existingCity = await cityRepository.validateByName(name);
  if (existingCity) throw duplicate(name);

  return cityRepository.create(name);
}

const cityService = { create };
export default cityService;
