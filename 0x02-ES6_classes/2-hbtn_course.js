/* eslint-disable class-methods-use-this */
/* eslint-disable no-return-assign */

export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = this.verifyString(name);
    this._length = this.verifyNumber(length);
    this._students = this.verifyArray(students);
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    return this._name = this.verifyString(newName);
  }

  get length() {
    return this._length;
  }

  set length(newLength) {
    return this._length = this.verifyNumber(newLength);
  }

  get students() {
    return this._students;
  }

  set students(newStudents) {
    return this._students = this.verifyArray(newStudents);
  }

  verifyArray(value) {
    if (!Array.isArray(value)) {
      throw TypeError('Students should be an array of strings');
    }
    return value;
  }

  verifyNumber(value) {
    if (typeof (value) !== 'number') {
      throw TypeError('Length must be a number');
    }
    return value;
  }

  verifyString(value) {
    if (typeof (value) !== 'string') {
      throw TypeError('Name must be a string');
    }
    return value;
  }
}
