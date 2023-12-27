export default class NumberSchema {
  validators = [(value) => typeof value === 'number' && !Number.isNaN(value)];

  isValid(value) {
    return this.validators.every((validator) => validator(value));
  }
}
