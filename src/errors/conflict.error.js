export default function conflict(resource) {
  return {
    type: 'conflict',
    message: `${resource} already exists!`,
  };
}
