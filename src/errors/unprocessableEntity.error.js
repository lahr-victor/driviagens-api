export default function unprocessableEntity(resource) {
  return {
    type: 'unprocessableEntity',
    message: `Could not be processed due to following content error: ${resource}`,
  };
}
