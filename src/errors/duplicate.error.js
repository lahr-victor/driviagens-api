export default function duplicate(resource) {
  return {
    type: 'duplicate',
    message: `${resource} already exists!`,
  };
}
