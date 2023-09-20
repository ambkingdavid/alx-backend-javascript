function calculateNumber(type, a, b) {
  if (type === 'ADD')
    return Math.round(a) + Math.round(b);
  if (type === 'SUBTRACT')
    return Math.round(a) - Math.round(b);
  if (type === 'DIVIDE')
    return Math.round(a) / Math.round(b);
}

console.log(calculateNumber('SUBTRACT', -1, -3));
module.exports = calculateNumber;
