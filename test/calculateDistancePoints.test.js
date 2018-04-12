const assert = require('assert');
const calculateDistancePoints = require('../calculateDistancePoints');

// distance, hillSize, kPoint

describe('Distance Points', () => {
    describe('Type of hillSize', () => {
        it('Should return ', () => {
            const actual = calculateDistancePoints(111, 'normal', 98);

            const expected = 86;

            assert.equal(actual, expected);
        });
        it('Should return ', () => {
            const actual = calculateDistancePoints(80, 'normal', 98);

            const expected = 24;

            assert.equal(actual, expected);
        });
        it('Should return ', () => {
            const actual = calculateDistancePoints(134, 'big', 120);

            const expected = 85.2;

            assert.equal(actual, expected);
        });
        it('Should return ', () => {
            const actual = calculateDistancePoints(107.5, 'big', 120);

            const expected = 37.5;

            assert.equal(actual, expected);
        });
        it('Should return ', () => {
            const actual = calculateDistancePoints(227.5, 'giant', 200);

            const expected = 153;

            assert.equal(actual, expected);
        });
        it('Should return ', () => {
            const actual = calculateDistancePoints(144, 'giant', 200);

            const expected = 52.8;

            assert.equal(actual, expected);
        });
    });
    describe('Type of data', () => {
        it('Should return ', () => {
            const actual = calculateDistancePoints("123", 'giant', 200);

            const expected = 'Wrong type of data';

            assert.equal(actual, expected);
        });
        it('Should return ', () => {
            const actual = calculateDistancePoints(123, 111.5, 200);

            const expected = 'Wrong type of data';

            assert.equal(actual, expected);
        });

        it('Should return ', () => {
            const actual = calculateDistancePoints(123, 'giant', '200');

            const expected = 'Wrong type of data';

            assert.equal(actual, expected);
        });

    });
});        
