// Define the interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students
const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "New York",
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 22,
  location: "Los Angeles",
};

// Create an array of students
const studentsList: Student[] = [student1, student2];

// Function to render the table
function renderTable(): void {
  const table = document.createElement("table");
  const headerRow = table.insertRow();
  headerRow.innerHTML = "<th>First Name</th><th>Location</th>";

  for (const student of studentsList) {
    const row = table.insertRow();
    row.innerHTML = `<td>${student.firstName}</td><td>${student.location}</td>`;
  }

  document.body.appendChild(table);
}

// Call the renderTable function to display the table
renderTable();
