export default function duplicateError(resource) {
  return {
    type: 'duplicate',
    message: `${resource} already exists!`,
  };
}
