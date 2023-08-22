const valid = ['CS', 'SWE'];
const readDatabase = require("../utils");

export default class StudentsController{
    static getAllStudents(request, response) {
        const path = process.argv[2];
        readDatabase(path)
        .then(data => {
            const respond = "This is the list of our students\n";
            response.status(200).send(data)
        })
    .catch((error) => {
        response.status(500).send(error instanceof Error ? error.message : error.toString())
    })
}
    static getAllStudentsByMajor(request, response) {
        const path = process.argv[2];
        const { major } = request.params;
        readDatabase(path)
        .then (data => {
            if (!valid.includes(major)) {
                response.status(500).send('Major parameter must be CS or SWE')
                return;
            }
            readDatabase(path)
            .then((data) => {
                response.status(200).send(data)
            })
        .catch((error) => {
            response.status(500).send(error instanceof Error ? error.message : error.toString())
        })
        })
    }
}
