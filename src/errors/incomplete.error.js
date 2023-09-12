export default function incompleteError(resource) {
  return {
    type: 'incomplete',
    message: `${resource} is incomplete!`,
  };
}
