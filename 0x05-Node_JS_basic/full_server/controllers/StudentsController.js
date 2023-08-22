import readDatabase from '../utils';

export default class StudentsController {
  static async getAllStudents(request, response) {
    try {
      const students = await readDatabase(process.argv[2]);
      let output = 'This is the list of our students\n';

      const fields = ['CS', 'SWE'];
      for (const field of fields) {
        const studentsInField = students[field];
        const sorted = studentsInField.sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }));

        output += `Number of students in ${field}: ${sorted.length}. List: ${sorted.join(', ')}\n`;
      }
      response.status(200).send(output);
    } catch (error) {
      response.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }
    try {
      const students = await readDatabase(process.argv[2]);
      const studentsMajor = students[major];
      res.status(200).send(`List: ${studentsMajor.join(', ')}`);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
}
