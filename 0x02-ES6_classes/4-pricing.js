import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = Pricing.validateNumber(amount, 'Amount');
    this._currency = currency || Currency('USD', 'Dollars');
  }

  get amount() {
    return this._amount;
  }

  set amount(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    this._ammount = value;
  }

  static validateNumber(value, attribute) {
    if (typeof value !== 'number') {
      throw new TypeError(`${attribute} must be a number`);
    }
    return value;
  }

  get currency() {
    return this._currency;
  }

  set currency(value) {
    if (typeof value === 'object' && value !== null && value.constructor === Object) {
      this._currency = value;
    } else {
      throw new TypeError('currency not an object literal');
    }
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }
}
