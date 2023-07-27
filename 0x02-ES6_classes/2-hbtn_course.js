// export default class HolbertonCourse {
//   constructor(name, length, students) {
//     this._name = HolbertonCourse.validateString(name, 'Name');
//     this._length = HolbertonCourse.validateNumber(length, 'Length');
//     this.students = HolbertonCourse.validateStudentsArray(students);
//   }

//   // Getter and Setter for 'name'
//   get name() {
//     return this._name;
//   }

//   set name(newName) {
//     if (typeof newName === 'string') {
//       this._name = newName;
//     } else {
//       throw new TypeError('Name must be a string');
//     }
//   }

//   // Getter and Setter for 'length'
//   get length() {
//     return this._length;
//   }

//   set length(newLength) {
//     if (typeof newLength === 'number') {
//       this._length = newLength;
//     } else {
//       throw new TypeError('Length must be a number');
//     }
//   }

//   // Getter and Setter for 'students'
//   get students() {
//     return this._students;
//   }

//   set students(newStudents) {
//     try {
//       // Call the static method directly
//       this._students = HolbertonCourse.validateStudentsArray(newStudents);
//     } catch (error) {
//       // Handle the error gracefully (optional)
//       console.error(error.message);
//       // You can choose to log the error and take appropriate action.
//     }
//   }

  // static validateString(value, attribute) {
  //   if (typeof value !== 'string') {
  //     throw new TypeError(`${attribute} must be a string`);
  //   }
  //   return value;
  // }

  // static validateNumber(value, attribute) {
  //   if (typeof value !== 'number') {
  //     throw new TypeError(`${attribute} must be a number`);
  //   }
  //   return value;
  // }

//   // Static class method for validating the 'students' array
//   static validateStudentsArray(students) {
//     if (!Array.isArray(students)) {
//       throw new TypeError('Students must be an array');
//     }

//     for (const student of students) {
//       if (typeof student !== 'string') {
//         throw new TypeError('Each student must be a string');
//       }
//     }
//     return students;
//   }
// }

export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = HolbertonCourse.validateString(name, 'Name');
    this._length = HolbertonCourse.validateNumber(length, 'Length');
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
    return this._students;
  }

  set students(newStudents) {
    HolbertonCourse.validateStudentsArray(newStudents);
    this._students = newStudents;
  }

  static validateString(value, attribute) {
    if (typeof value !== 'string') {
      throw new TypeError(`${attribute} must be a string`);
    }
    return value;
  }

  static validateNumber(value, attribute) {
    if (typeof value !== 'number') {
      throw new TypeError(`${attribute} must be a number`);
    }
    return value;
  }

  // Class method for validating the 'students' array
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
