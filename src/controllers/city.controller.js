import httpStatus from 'http-status';
import cityService from '../services/city.service.js';

async function create(req, res) {
  const { name } = req.body;
  await cityService.create(name);

  res.sendStatus(httpStatus.CREATED);
}

const cityController = { create };
export default cityController;
