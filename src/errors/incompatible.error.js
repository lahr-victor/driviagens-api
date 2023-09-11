export default function incompatibleError(resource) {
  return {
    type: 'incompatible',
    message: `${resource} are incompatible!`,
  };
}
