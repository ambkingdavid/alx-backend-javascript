export default class HolbertonCourse {
  constructor(name, length, students) {
    self._name = name;
    self._length = length;
    self._students = this._validateStudentsArray(students);
  }

  get name() {
    return self._name;
  }

  set name(new_name) {
      if (typeof new_name !== 'string') {
        throw new TypeError('Name must be a string');
      } else {
        self._name = new_name;
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
    return this._students;
  }

  set students(newStudents) {
    this._students = this._validateStudentsArray(newStudents);
  }

  // Private helper method to validate 'students' array during object creation and updates
  _validateStudentsArray(students) {
    if (!Array.isArray(students)) {
      throw new TypeError('Students must be an array.');
    }

    for (const student of students) {
      if (typeof student !== 'string') {
        throw new TypeError('Each student must be a string.');
      }
    }

    return students;
  }
}
