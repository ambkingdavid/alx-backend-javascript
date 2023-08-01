export default function cleanSet(set, startString) {
  let newString = ''
  if (startString !== '') {
    const regex = new RegExp(`^${startString}`, 'i');
    const filteredValues = [...set].filter((value) => regex.test(value));
    const cleanedValues = filteredValues.map((value) => value.slice(startString.length));
    newString = cleanedValues.join('-');
    return newString;
  }
  return newString;
}
