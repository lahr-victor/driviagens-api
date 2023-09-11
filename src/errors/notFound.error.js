export default function notFound(resource) {
  return {
    type: 'notFound',
    message: `${resource} has not been found!`,
  };
}