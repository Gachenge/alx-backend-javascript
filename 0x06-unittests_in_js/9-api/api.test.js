const { expect } = require('chai');
const request = require('request');

describe('api tests', () => {
    it('should test get / returns the correct response', (done) => {
        request.get('http://localhost:7865', (_error, resp, body) => {
            expect(resp.statusCode).to.be.equal(200);
            expect(body).to.be.equal('Welcome to the payment system');
            done();
        })
    })
    it('validate if id is a number', (done) => {
        request.get('http://localhost:7865/cart/12', (_error, resp, body) => {
            expect(resp.statusCode).to.be.equal(200);
            expect(body).to.be.equal('Payment methods for cart 12');
            done();
        })
    })
    it("invalid id should return a 404", (done) => {
        request.get('http://localhost:7865/cart/cow', (_error, resp, body) => {
            expect(resp.statusCode).to.be.equal(404);
            done();
        })
    })
    it('no cart id should return 404', (done) => {
        request.get('http://localhost:7865/cart/', (error, resp, body) => {
            expect(resp.statusCode).to.be.equal(404);
            done();
        })
    })
    it('test with large cart id number', (done) => {
        request.get('http://localhost:7865/cart/53', (error, resp, body) => {
            expect(resp.statusCode).to.be.equal(200);
            expect(body).to.be.equal('Payment methods for cart 53');
            done();
        })
    })
    it('test to get with negative cart id', (done) => {
        request.get('http://localhost:7865/cart/-45', (error, resp, body) => {
            expect(resp.statusCode).to.be.equal(404);
            done();
        })
    })
})
