const getStudentIdsSum = (studentList) => {
  // Using reduce to calculate the sum of all the student ids.
  return studentList.reduce((acc, student) => acc + student.id, 0);
};

export default getStudentIdsSum;
