const getStudentIdsSum = (studentList) => {
  const newList = studentList.reduce((acc, student) => acc + student.id);
  return newList;
};

export default getStudentIdsSum;
