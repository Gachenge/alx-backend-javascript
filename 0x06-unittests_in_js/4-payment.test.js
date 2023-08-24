const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
    it('spy on console to see what method sends. use stub to see how called', () => {
        const bond = sinon.spy(console);
        const stubby = sinon.stub(Utils, 'calculateNumber');

        stubby.returns(10);
        sendPaymentRequestToApi(100, 20);
        expect(stubby.calledWith('SUM', 100, 20)).to.be.true;
        expect(bond.log.calledWith("The total is: 10")).to.be.true;
        stubby.restore();
        bond.log.restore();
    })
})
