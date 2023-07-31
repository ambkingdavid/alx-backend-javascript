export default function updateStudentGradeByCity(studentList, city, newGrades) {
  let cityStudents = studentList.filter((student) => student.location === city);

  cityStudents = cityStudents.map((student) => {
    for (const grade of newGrades) {
      if (student.id === grade.studentId) {
        return {...student, grade: grade.grade};
      }
    }
    return {...student, grade: 'N/A'}
  });

  return cityStudents;
}