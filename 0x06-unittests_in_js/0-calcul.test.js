const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function() {
    it('should round and sum two numbers correctly', function(){
        const result = calculateNumber(1, 3);
        assert.strictEqual(result, 4);
    });
    it('should handle addition where one is a decimal', function() {
        const result = calculateNumber(1, 3.7);
        assert.strictEqual(result, 5);
    });
    it('should handle where both numbers have fractions', function() {
        const result = calculateNumber(1.2, 3.7);
        assert.strictEqual(result, 5);
    });
    it('should round both numbers up', function() {
        const result = calculateNumber(1.5, 3.7);
        assert.strictEqual(result, 6);
    });
    it('should be able to handle one negative number', function() {
        const result = calculateNumber(-4, 1.2);
        assert.strictEqual(result, -3);
    });
    it('should add two negative numbers', function() {
        const result = calculateNumber(-6.4, -7.3);
        assert.strictEqual(result, -13);
    });
})
