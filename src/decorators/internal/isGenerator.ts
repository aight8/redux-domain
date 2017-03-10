export default function isGenerator(variable: {}) {
  return variable.constructor.name === 'GeneratorFunction';
}
