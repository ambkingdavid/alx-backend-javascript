const getStudentIdsSum = (studentList) => {
  const newList = studentList.reduce((acc, student) => acc + student.id, 0);
  return newList;
};

export default getStudentIdsSum;
