/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
/* eslint-disable import/named */

import { Currency } from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = this.verifyNumber(amount);
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(newAmount) {
    this._amount = this.verifyNumber(newAmount);
  }

  get currency() {
    return this._currency;
  }

  set currency(newCurrency) {
    this._currency = newCurrency;
  }

  verifyNumber(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    return value;
  }

  displayFullPrice() {
    return (`${this.amount} ${this.currency._name} (${this.currency._code})`);
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
