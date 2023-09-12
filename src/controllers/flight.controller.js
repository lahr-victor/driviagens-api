import dayjs from 'dayjs';
import httpStatus from 'http-status';
import flightService from '../services/flight.service.js';

async function create(req, res) {
  const { origin, destination, date } = req.body;
  await flightService.create(origin, destination, date);

  res.sendStatus(httpStatus.CREATED);
}

async function readAll(req, res) {
  const { origin, destination, 'smaller-date': smallerDate, 'bigger-date': biggerDate } = req.query;
  const flights = await flightService.readAll(origin, destination, smallerDate, biggerDate);

  const formattedFlights = flights.map((flight) => {
    const date = dayjs(flight.date).format('DD-MM-YYYY');
    return { ...flight, date };
  });

  res.send(formattedFlights).status(httpStatus.OK);
}

const flightController = { create, readAll };
export default flightController;
