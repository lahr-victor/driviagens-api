export default function notFoundError(resource) {
  return {
    type: 'notFound',
    message: `${resource} has not been found!`,
  };
}
