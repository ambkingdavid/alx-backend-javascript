function calculateNumber(type, a, b) {
  if (type === 'SUM')
    return Math.round(a) + Math.round(b);
  if (type === 'SUBTRACT')
    return Math.round(a) - Math.round(b);
  if (type === 'DIVIDE')
    return Math.round(a) / Math.round(b);
  return null
}

console.log(calculateNumber('SUB', -1, -3));
module.exports = calculateNumber;
