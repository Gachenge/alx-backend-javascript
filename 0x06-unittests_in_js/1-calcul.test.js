const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function() {
    it('sum should work properly using type', function() {
        const result = calculateNumber('SUM', 1.4, 4.5);
        assert.strictEqual(result, 6);
    });
    it('type subtract should return the difference', function() {
        const result = calculateNumber('SUBTRACT', 1.4, 4.5);
        assert.strictEqual(result, -4);
    });
    it('type divide returns the division', function() {
        const result = calculateNumber('DIVIDE', 1.4, 4.5);
        assert.strictEqual(result, 0.2);
    });
    it('division by zero returns an error', function() {
        const result = calculateNumber('DIVIDE', 1.4, 0);
        assert.strictEqual(result, 'Error');
    })
})
