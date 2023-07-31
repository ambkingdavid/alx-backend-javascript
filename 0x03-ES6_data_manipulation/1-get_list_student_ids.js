const getListStudentsIds = (students) => {
  if (!(Array.isArray(students))) {
    return [];
  }
  const idArray = [];
  for (const student of students) {
    idArray.push(student.id);
  }
  return idArray;
};

export default getListStudentsIds;
