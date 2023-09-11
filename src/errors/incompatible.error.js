export default function incompatible(resource) {
  return {
    type: 'incompatible',
    message: `${resource} are incompatible!`,
  };
}