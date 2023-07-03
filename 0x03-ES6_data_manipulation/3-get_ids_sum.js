export default function getStudentIdsSum(students) {
  return students.reduce((total, item) => total + item.id, 0);
}
