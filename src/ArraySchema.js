export default class ArraySchema {
  validators = [(value) => Array.isArray(value)];

  isValid(value) {
    return this.validators.every((validator) => validator(value));
  }

  allIntegers() {
    const validator = (array) => array.every((item) => Number.isInteger(item));
    this.validators.push(validator);
    return this;
  }

  custom(func) {
    const validator = (array) => array.every(func);
    this.validators.push(validator);
    return this;
  }
}
