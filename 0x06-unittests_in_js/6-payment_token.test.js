const { expect } = require("chai");
const getPaymentTokenAPI = require("./6-payment_token")

describe('test a promise using async', () => {
    it('should return the successful promise resolved', (done) => {
        getPaymentTokenAPI(true)
        .then(token => {
            expect(token).to.deep.equal({data: 'Successful response from the API'});
            done();
        })
        .catch(error => done(error));
    });
})
