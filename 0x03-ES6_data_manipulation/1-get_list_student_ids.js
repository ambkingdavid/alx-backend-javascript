/* eslint-disable no-unused-vars */
import getListStudents from './0-get_list_students';

const getListStudentsIds = (getListStudents) => {
  if (!Array.isArray(getListStudents)) {
    return [];
  }
  const idArray = [];
  for (const student of getListStudents) {
    idArray.push(student.id);
  }
  return idArray;
};

export default getListStudentsIds;
