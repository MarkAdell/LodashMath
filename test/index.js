const expect = require('chai').expect;
const _ = require('../');

describe('min function', () => {
    it('should return the minumum element of an array', () => {
        expect(_.min([5, 4, 3, 2, 1])).to.be.equal(1);
    });
    it('should work if the array contains string numbers', () => {
        expect(_.min(['5', 4, 3, 2, 1])).to.be.equal(1);
    });
    it('should return undefined if the array is empty', () => {
        expect(_.min([])).to.be.equal(undefined);
    });
    it('should return undefined if no parameters were passed', () => {
        expect(_.min()).to.be.equal(undefined);
    });
});

describe('max function', () => {
    it('should return the maximum element of an array', () => {
        expect(_.max([1, 2, 3, 4, 5])).to.be.equal(5);
    });
    it('should work if the array contains string numbers', () => {
        expect(_.max([1, 2, 3, 4, '5'])).to.be.equal(5);
    });
    it('should return undefined if the array is empty', () => {
        expect(_.max([])).to.be.equal(undefined);
    });
    it('should return undefined if no parameters were passed', () => {
        expect(_.max()).to.be.equal(undefined);
    });
});

describe('sum function', () => {
    it('should return the sum of array elements', () => {
        expect(_.sum([1, 2, 3, 4, 5])).to.be.equal(15);
    });
    it('should return 0 if the array is empty', () => {
        expect(_.sum([])).to.be.equal(0);
    });
    it('should return 0 if no parameters were passed', () => {
        expect(_.sum()).to.be.equal(0);
    });
});

describe('ceil function', () => {
    it('should return the ceil of a positive decimal', () => {
        expect(_.ceil(2.5)).to.be.equal(3);
    });
    it('should return the ceil of a negative decimal', () => {
        expect(_.ceil(-2.5)).to.be.equal(-2);
    });
    it('should return zero if the passed parameter is zero', () => {
        expect(_.ceil(0)).to.be.equal(0);
    });
    it('should work if the string after coercion is a number', () => {
        expect(_.ceil(2.5)).to.be.equal(3);
    });
    it('should return undefined if the passed parameter is not a number', () => {
        expect(_.ceil("string")).to.be.equal(undefined);
    });
});

describe('floor function', () => {
    it('should return the floor of a positive decimal', () => {
        expect(_.floor(2.5)).to.be.equal(2);
    });
    it('should return the floor of a negative decimal', () => {
        expect(_.floor(-2.5)).to.be.equal(-3);
    });
    it('should return zero if the passed parameter is zero', () => {
        expect(_.floor(0)).to.be.equal(0);
    });
    it('should work if the string after coercion is a number', () => {
        expect(_.floor(2.5)).to.be.equal(2);
    });
    it('should return undefined if the passed parameter is not a number', () => {
        expect(_.floor("string")).to.be.equal(undefined);
    });
});

describe('random function', () => {
    let getUniqRandGenNums = numOfPars => {
        let randomsNumbers = [];
        let params = [[], [5], [1, 10]][numOfPars];
        for (var i = 0; i < 10000; i++) {
            randomsNumbers.push(_.random(...params));
        }
        randomsNumbers = [...new Set(randomsNumbers)];
        let minRandom = _.min(randomsNumbers);
        let maxRandom = _.max(randomsNumbers);
        return {
            randomsNumbers,
            minRandom,
            maxRandom
        }
    }
    describe('no patameters passed', () => {
        let minRandom = getUniqRandGenNums(0).minRandom;
        let maxRandom = getUniqRandGenNums(0).maxRandom;
        let randomsNumbers = getUniqRandGenNums(0).randomsNumbers;
        it('should return a random number in a range', () => {
            expect(randomsNumbers.length).to.be.above(1);
        });
        it('should not generate a number below the lower bound', () => {
            expect(minRandom).to.be.within(0, 1);
        });
        it('should not generate a number above the upper bound', () => {
            expect(maxRandom).to.be.within(0, 1);
        });
    });
    describe('one patameter passed', () => {
        let minRandom = getUniqRandGenNums(1).minRandom;
        let maxRandom = getUniqRandGenNums(1).maxRandom;
        let randomsNumbers = getUniqRandGenNums(1).randomsNumbers;
        it('should return a random number in a range', () => {
            expect(randomsNumbers.length).to.be.above(1);
        });
        it('should not generate a number below the lower bound', () => {
            expect(minRandom).to.be.within(0, 5);
        });
        it('should not generate a number above the upper bound', () => {
            expect(maxRandom).to.be.within(0, 5);
        });
    });
    describe('two patameter passed', () => {
        let minRandom = getUniqRandGenNums(2).minRandom;
        let maxRandom = getUniqRandGenNums(2).maxRandom;
        let randomsNumbers = getUniqRandGenNums(2).randomsNumbers;
        it('should return a random number in a range', () => {
            expect(randomsNumbers.length).to.be.above(1);
        });
        it('should not generate a number below the lower bound', () => {
            expect(minRandom).to.be.within(1, 10);
        });
        it('should not generate a number above the upper bound', () => {
            expect(maxRandom).to.be.within(1, 10);
        });
    });
});