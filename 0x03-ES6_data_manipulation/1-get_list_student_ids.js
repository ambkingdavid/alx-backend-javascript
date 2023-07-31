function getListStudentIds(students) {
  // Check if 'students' is an array
  if (!Array.isArray(students)) {
    return [];
  }

  // Use map() to extract the 'id' property from each object
  const idArray = students.map((student) => student.id);

  return idArray;
}

export default getListStudentIds;
