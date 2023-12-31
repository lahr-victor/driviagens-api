import httpStatus from 'http-status';

export default function errorHandler(error, req, res, next) {
  if (error.type === 'duplicate') {
    return res.status(httpStatus.CONFLICT).send(error.message);
  }

  if (error.type === 'incompatible') {
    return res.status(httpStatus.CONFLICT).send(error.message);
  }

  if (error.type === 'incomplete') {
    return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(error.message);
  }

  if (error.type === 'invalid') {
    return res.status(httpStatus.BAD_REQUEST).send(error.message);
  }

  if (error.type === 'notFound') {
    return res.status(httpStatus.NOT_FOUND).send(error.message);
  }

  if (error.type === 'overflow') {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error.message);
  }

  if (error.type === 'unprocessable') {
    return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(error.message);
  }

  return res.status(httpStatus.INTERNAL_SERVER_ERROR).send('Sorry, something went wrong! 😓');
}
