const expect = require('chai').expect;
const _ = require('../');

describe('min function', () => {
    it('should return the minumum element of an array', () => {
        expect(_.min([5, 4, 3, 2, 1])).to.be.equal(1);
    });
    it('should return 0 if the array is empty', () => {
        expect(_.min([])).to.be.equal(0);
    });
    it('should return 0 if no arguments were passed', () => {
        expect(_.min()).to.be.equal(0);
    });
});

describe('max function', () => {
    it('should return the maximum element of an array', () => {
        expect(_.max([1, 2, 3, 4, 5])).to.be.equal(5);
    });
    it('should return 0 if the array is empty', () => {
        expect(_.max([])).to.be.equal(0);
    });
    it('should return 0 if no arguments were passed', () => {
        expect(_.max()).to.be.equal(0);
    });
});

describe('sum function', () => {
    it('should return the sum of array elements', () => {
        expect(_.sum([1, 2, 3, 4, 5])).to.be.equal(15);
    });
    it('should return 0 if the array is empty', () => {
        expect(_.sum([])).to.be.equal(0);
    });
    it('should return 0 if no arguments were passed', () => {
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
    it('should return zero if the passed number is zero', () => {
        expect(_.ceil(0)).to.be.equal(0);
    });
});

describe('floor function', () => {
    it('should return the floor of a positive decimal', () => {
        expect(_.floor(2.5)).to.be.equal(2);
    });
    it('should return the floor of a negative decimal', () => {
        expect(_.floor(-2.5)).to.be.equal(-3);
    });
    it('should return zero if the passed number is zero', () => {
        expect(_.floor(0)).to.be.equal(0);
    });
});

describe('random function', () => {
    let randomsNumbers = [];
    for (var i = 0; i < 10000; i++) {
        randomsNumbers.push(_.random(1, 10));
    }
    let uniqueElements = [...new Set(randomsNumbers)];
    it('should return a random number in a range', () => {
        expect(uniqueElements.length).to.be.above(1);
    });
    it('should not generate a number below the lower bound', () => {
        let minRandom = _.min(randomsNumbers);
        expect(minRandom).to.not.be.below(1);
    });
    it('should not generate a number above the upper bound', () => {
        let maxRandom = _.max(randomsNumbers);
        expect(maxRandom).to.not.be.above(10);
    });
});