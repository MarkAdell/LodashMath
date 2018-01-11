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
        for (var i = 0; i < 1000; i++) {
            randomsNumbers.push(_.random(...params));
        }
        let minRandom = _.min(randomsNumbers);
        let maxRandom = _.max(randomsNumbers);
        return {
            minRandom,
            maxRandom
        }
    }
    describe('no patameters passed', () => {
        let result = getUniqRandGenNums(0);
        let minRandom = result.minRandom;
        let maxRandom = result.maxRandom;
        it('should generate different numbers', () => {
            expect(minRandom).to.be.lessThan(maxRandom);
        });
        it('should not generate a number below the lower bound', () => {
            expect(minRandom).to.be.within(0, 1);
        });
        it('should not generate a number above the upper bound', () => {
            expect(maxRandom).to.be.within(0, 1);
        });
    });
    describe('one patameter passed', () => {
        let result = getUniqRandGenNums(1);
        let minRandom = result.minRandom;
        let maxRandom = result.maxRandom;
        it('should generate different numbers', () => {
            expect(minRandom).to.be.lessThan(maxRandom);
        });
        it('should not generate a number below the lower bound', () => {
            expect(minRandom).to.be.within(0, 5);
        });
        it('should not generate a number above the upper bound', () => {
            expect(maxRandom).to.be.within(0, 5);
        });
    });
    describe('two patameters passed', () => {
        let result = getUniqRandGenNums(2);
        let minRandom = result.minRandom;
        let maxRandom = result.maxRandom;
        it('should generate different numbers', () => {
            expect(minRandom).to.be.lessThan(maxRandom);
        });
        it('should not generate a number below the lower bound', () => {
            expect(minRandom).to.be.within(1, 10);
        });
        it('should not generate a number above the upper bound', () => {
            expect(maxRandom).to.be.within(1, 10);
        });
    });
});

describe('mean function', () => {
    it('should return the mean of an array', () => {
        expect(_.mean([1, 2])).to.be.equal(1.5);
        expect(_.mean([1, 2, 3, 4, 5])).to.be.equal(3);
    });
    it('should return the undefined if the array is empty', () => {
        expect(_.mean([])).to.be.equal(undefined);
    });
    it('should return the undefined if called with no parameters', () => {
        expect(_.mean()).to.be.equal(undefined);
    });
});