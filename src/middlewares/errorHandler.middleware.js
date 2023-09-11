import httpStatus from 'http-status';

export default function errorHandler(error, req, res, next) {
  if (error.type === 'conflict') {
    return res.status(httpStatus.CONFLICT).send(error.message);
  }

  if (error.type === 'unprocessableEntity') {
    return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(error.message);
  }

  return res.status(httpStatus.INTERNAL_SERVER_ERROR).send('Sorry, something went wrong! 😓');
}
