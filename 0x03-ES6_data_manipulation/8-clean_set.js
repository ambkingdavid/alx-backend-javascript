export default function cleanSet(set, startString) {
  let newString = '';
  if (startString === '' || startString === undefined) {
    return newString;
  }
  const regex = new RegExp(`^${startString.trim()}`, 'i');
  const filteredValues = [...set].filter((value) => regex.test(value));
  const cleanedValues = filteredValues.map((value) => value.slice(startString
    .trim().length).trim());
  newString = cleanedValues.join('-');
  return newString;
}
