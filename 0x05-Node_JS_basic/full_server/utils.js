const fs = require('fs');

function readDatabase(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, (error, data) => {
            if (error){
                reject(error)
            }
            else {
                const lines = data.toString().split('\n');
                const studentField = {
                    CS: [],
                    SWE: []
                };
                for (const line of lines) {
                    const parts = line.split(',');
                    const firstName = parts[0];
                    const field = parts[3];

                    if (field === 'CS'){
                        studentField.CS.push(firstName);
                    }
                    else if (field === 'SWE') {
                        studentField.SWE.push(firstName);
                    }
                }
                resolve(studentField);
            }
        })
    })
}

module.exports = readDatabase
