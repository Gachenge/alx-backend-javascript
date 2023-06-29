/* eslint-disable class-methods-use-this */

export default class Currency {
  constructor(code, name) {
    this._code = this.verifyString(code);
    this._name = this.verifyString(name);
  }

  get code() {
    return this._code;
  }

  get name() {
    return this._name;
  }

  set code(newCode) {
    this._code = this.verifyString(newCode);
  }

  set name(newName) {
    this._name = this.verifyString(newName);
  }

  verifyString(value) {
    if (typeof (value) !== 'string') {
      throw TypeError('Name must be a string');
    }
    return value;
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
