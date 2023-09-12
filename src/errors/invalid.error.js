export default function invalidError(resource) {
  return {
    type: 'invalid',
    message: `${resource} is invalid!`,
  };
}
