/* eslint-disable no-param-reassign */
/* eslint-disable no-prototype-builtins */

export default function updateStudentGradeByCity(students, city, newGrades) {
  const filtered = students.filter((student) => student.location === city);
  filtered.map((student) => {
    newGrades.map((grade) => {
      if (grade.studentId === student.id) {
        student.grade = grade.grade;
      }
      if (!student.hasOwnProperty('grade')) {
        student.grade = 'N/A';
      }
      return student;
    });
    return student;
  });
  return filtered;
}
