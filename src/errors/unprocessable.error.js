export default function unprocessableError(resource) {
  return {
    type: 'unprocessable',
    message: `Could not be processed due to following content error: ${resource}!`,
  };
}
