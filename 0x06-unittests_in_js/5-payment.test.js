const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
    let bond;
    
    beforeEach(function () {
        if(!bond){
            bond = sinon.spy(console);
        }
    });

    afterEach(function () {
        bond.log.resetHistory();
    });

    it('verify console is logging the string The total is: 120', () => {
        sendPaymentRequestToApi(100, 20);
        expect(bond.log.calledWith("The total is: 120")).to.be.true;
        expect(bond.log.callCount).to.be.equal(1);
    });
    it('verify console is logging the string The total is: 20', () => {
        sendPaymentRequestToApi(10, 10);
        expect(bond.log.calledWith("The total is: 20")).to.be.true;
        expect(bond.log.callCount).to.be.equal(1);
    })
})
