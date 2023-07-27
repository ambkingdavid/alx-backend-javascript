export default class Building {
  constructor(sqft) {
    if (this.constructor !== Building) {
      if (this.evacuationWarningMessage === undefined) {
        throw new TypeError('Class extending Building must override evacuationWarningMessage.');
      }
    }
    this._sqft = Building.validateNumber(sqft);
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Not a number');
    }
    this._sqft = value;
  }

  static validateNumber(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Not a number');
    }
    return value;
  }
}
