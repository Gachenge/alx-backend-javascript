interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "Nairobi"
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Doe",
  age: 22,
  location: "Nakuru"
};

const studentsList: Student[] = [student1, student2];
const table = document.getElementById("myTable") as HTMLTableElement;

studentsList.forEach(function(student) {
  const row = table.insertRow();
  const firstNameCell = row.insertCell();
  firstNameCell.innerHTML = student.firstName;

  const locationCell = row.insertCell();
  locationCell.innerHTML = student.location;
});
