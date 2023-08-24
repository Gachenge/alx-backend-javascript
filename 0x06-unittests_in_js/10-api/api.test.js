const { expect } = require('chai');
const request = require('request');
const { json } = require('body-parser');

describe('api tests', () => {
    it('should test get / returns the correct response', (done) => {
        request.get('http://localhost:7865', (_error, resp, body) => {
            expect(resp.statusCode).to.be.equal(200);
            expect(body).to.be.equal('Welcome to the payment system');
            done();
        })
    })
    it('validate if id is a number', (done) => {
        request.get('http://localhost:7865/cart/9', (_error, resp, body) => {
            expect(resp.statusCode).to.be.equal(200);
            expect(body).to.be.equal('Payment methods for cart 9');
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
        request.get('http://localhost:7865/cart/', (_error, resp, body) => {
            expect(resp.statusCode).to.be.equal(404);
            done();
        })
    })
    it('test login with betty', (done) => {
        request.post('http://localhost:7865/login', {json: {userName: 'Betty'}},
        (_error, resp, body) => {
            expect(resp.statusCode).to.be.equal(200);
            expect(body).to.be.equal('Welcome Betty');
            done();
        })
    })
    it('test available payments endpoint', (done) => {
        request.get('http://localhost:7865/available_payments', (_error, resp, body) => {
            expect(resp.statusCode).to.be.equal(200);
            expect(JSON.parse(body)).to.be.deep.equal
            ({payment_methods: {credit_cards: true, paypal: false}})
            done();
        })
    })
})
