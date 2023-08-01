export default function cleanSet(set, startString) {
  if (startString !== '') {
    const filteredValues = [...set].filter((value) => value.startsWith(startString));
    const cleanedValues = filteredValues.map((value) => value.slice(startString.length));
    return cleanedValues.join('-');
  }
  return ' ';
}
