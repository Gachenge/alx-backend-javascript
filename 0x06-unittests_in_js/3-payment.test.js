const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('use calculateNumber method of Utils to calculate payments', () => {
    const bond = sinon.spy(Utils);

    sendPaymentRequestToApi(100, 20);
    expect(bond.calculateNumber.calledWith('SUM', 100, 20)).to.be.equal;
    expect(bond.calculateNumber.calledOnce).to.be.true;
    bond.calculateNumber.restore();
  });
});
