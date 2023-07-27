export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this.students = students; // Use the setter to perform validation
  }

  // Getter and Setter for 'name'
  get name() {
    return this._name;
  }

  set name(newName) {
    if (typeof newName === 'string') {
      this._name = newName;
    } else {
      throw new TypeError('Name must be a string.');
    }
  }

  // Getter and Setter for 'length'
  get length() {
    return this._length;
  }

  set length(newLength) {
    if (typeof newLength === 'number') {
      this._length = newLength;
    } else {
      throw new TypeError('Length must be a number.');
    }
  }

  // Getter and Setter for 'students'
  get students() {
    return this._studentsArray;
  }

  set students(newStudents) {
    HolbertonCourse.validateStudentsArray(newStudents); // Call the static method to validate
    this._studentsArray = newStudents;
  }

  // Static class method for validating the 'students' array
  static validateStudentsArray(students) {
    if (!Array.isArray(students)) {
      throw new TypeError('Students must be an array.');
    }

    for (const student of students) {
      if (typeof student !== 'string') {
        throw new TypeError('Each student must be a string.');
      }
    }
  }
}
