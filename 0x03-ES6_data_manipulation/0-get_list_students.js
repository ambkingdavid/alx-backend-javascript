export default function getListStudents(id, firstName, location) {
  /* eslint-disable */
  const student1 = { id: 1, firstName: 'Guillaume', location: 'San Francisco' };
  const student2 = { id: 2, firstName: 'James', location: 'Columbia' };
  const student3 = { id: 5, firstName: 'Serena', location: 'San Francisco' };
  const newarr = [];
  newarr.push(student1, student2, student3);
  /* eslint-enable */
  return newarr;
}
