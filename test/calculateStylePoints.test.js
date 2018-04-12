const assert = require('assert');
const calculateStylePoints = require('../calculateStylePoints');

describe('Style points', () => {
    describe('Array length', ()=> {
        it('Should return', () =>{
            const actual = calculateStylePoints([16, 17,17, 16.5, 16, 18]);

            const expected = "You need five Judge's marks";

            assert.equal(actual, expected);
        });
        it('Should return', () =>{
            const actual = calculateStylePoints([16, 16.5, 16, 18]);

            const expected = "You need five Judge's marks";

            assert.equal(actual, expected);
        });
    })

    describe('Sum of points', ()=> {
       
        it('Should return', () =>{
            const actual = calculateStylePoints([16, 17, 16.5, 16, 18]);

            const expected = 49.5;

            assert.equal(actual, expected);
        });

        it('Should return', () =>{
            const actual = calculateStylePoints([18, 18.5, 17.5, 18.5, 18.5]);

            const expected = 55;

            assert.equal(actual, expected);
        });
        it('Should return', () =>{
            const actual = calculateStylePoints([0,0,0,0,0]);

            const expected = 0;

            assert.equal(actual, expected);
        });
        it('Should return', () =>{
            const actual = calculateStylePoints([20,0,0,0,0]);

            const expected = 0;

            assert.equal(actual, expected);
        });

        it('Should return', () =>{
            const actual = calculateStylePoints([16.0, 15.5, 14.5, 16.0, 16.0]);

            const expected = 47.5;

            assert.equal(actual, expected);
        });
    });
})