const Utils = require('./utils');

function sendPaymentRequestToApi(totalAmount, totalShipping){
    const tots = Utils.calculateNumber('SUM', totalAmount, totalShipping);
    console.log(`The total is: ${tots}`)
}

module.exports = sendPaymentRequestToApi
