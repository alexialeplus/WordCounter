const wordCounter = require('../src/wordCounter');
const samples = require('./_samples');


describe('wordCounter', () => {
    describe('with french', () => {
        const inventory = wordCounter(samples.french.input, 2);
        expect(inventory).toEqual(samples.french.expect);
    })

    describe('with russian', () => {
        const inventory = wordCounter(samples.russian.input, 2);
        expect(inventory).toEqual(samples.russian.expect);
    })

    describe('with swedish', () => {
        const inventory = wordCounter(samples.swedish.input, 2);
        expect(inventory).toEqual(samples.swedish.expect);
    })

    // feel free to add more tests
});
