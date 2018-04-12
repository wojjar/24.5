const assert = require('assert');
const calculateTotalPoints = require('../calculateTotalPoints');

describe('Total Result', () => {
    describe('Sum of points', () => {
        it('Should return', () => {
            const actual = calculateTotalPoints(111, 'normal', 98, [19.0, 19.5, 19.0, 19.0, 19.0], 3.2, -14.4);

            const expected = 131.8;

            assert.equal(actual, expected);
        });

        it('Should return', () => {
            const actual = calculateTotalPoints(134, 'big', 120, [19.0, 20.0, 19.5, 19.0, 18.5], 0, -5.4);

            const expected = 137.3;

            assert.equal(actual, expected);
        });

        it('Should return', () => {
            const actual = calculateTotalPoints(227.5, 'giant', 200, [18.0, 18.5, 17.5, 18.5, 18.5], 8.7, -8.4);

            const expected = 208.3;

            assert.equal(actual, expected);
        });
    })
    describe('Value of factor', () => {
        it('Should return', () => {
            const actual = calculateTotalPoints(111, 'normal', 98, [19.0, 19.5, 19.0, 19.0, 19.0], '3.2', -14.4);

            const expected = "Wrong value of factor";

            assert.equal(actual, expected);
        });
        it('Should return', () => {
            const actual = calculateTotalPoints(111, 'normal', 98, [19.0, 19.5, 19.0, 19.0, 19.0], 3.2, '10');

            const expected = "Wrong value of factor";

            assert.equal(actual, expected);
        });
    })

})