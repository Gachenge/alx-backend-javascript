const { expect } = require('chai');
const request = require('request');

describe('api tests', () => {
    it('should test get / returns the correct response', (done) => {
        request.get('http://localhost:7865', (error, response, body) => {
            expect(response.statusCode).to.be.equal(200);
            expect(body).to.be.equal('Welcome to the payment system');
            done();
        })
    })
})
