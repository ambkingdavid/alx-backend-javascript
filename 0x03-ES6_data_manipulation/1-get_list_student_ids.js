const getListStudentsIds = (students) => {
  const idArray = [];
  for (const student of students) {
    if (student.id) {
      idArray.push(student.id);
    }
  }
  return idArray;
};

export default getListStudentsIds;
