const { expect } = require('chai');
const request = require('request');
const { response } = require('./api');

describe('api tests', () => {
    it('should test get / returns the correct response', (done) => {
        request.get('http://localhost:7865', (error, response, body) => {
            expect(response.statusCode).to.be.equal(200);
            expect(body).to.be.equal('Welcome to the payment system');
            done();
        })
    })
    it('validate if id is a number', (done) => {
        request.get('http://localhost:7865/cart/9', (error, response, body) => {
            expect(response.statusCode).to.be.equal(200);
            expect(body).to.be.equal('Payment methods for cart 9');
            done();
        })
    })
    it("invalid id should return a 404", (done) => {
        request.get('http://localhost:7865/cart/cow', (error, response, body) => {
            expect(response.statusCode).to.be.equal(404);
            done();
        })
    })
    it('no cart id should return 404', (done) => {
        request.get('http://localhost:7865/cart/', (error, response, body) => {
            expect(response.statusCode).to.be.equal(404);
            done();
        })
    })
})
