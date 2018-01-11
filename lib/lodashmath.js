module.exports.min = array => {
    if (array && array.length) {
        let minEl = array[0] - 0;
        for (let i = 0; i < array.length; i++) {
            let current = array[i] - 0;
            if (current < minEl) {
                minEl = current;
            }
        }
        return minEl;
    }
    return undefined;
}

module.exports.max = array => {
    if (array && array.length) {
        let maxEl = array[0] - 0;
        for (let i = 0; i < array.length; i++) {
            let current = array[i] - 0;
            if (current > maxEl) {
                maxEl = current;
            }
        }
        return maxEl;
    }
    return undefined;
}

module.exports.sum = array => {
    if (array && array.length) {
        let sum = 0;
        for (let i = 0; i < array.length; i++) {
            sum += array[i] - 0;
        }
        return sum;
    }
    return 0;
}

module.exports.ceil = number => {
    number = parseFloat(number);
    if (!isNaN(number) && typeof number === 'number') {
        if (number > 0) {
            return parseInt(number + 1);
        } else {
            return parseInt(number);
        }
    }
    return undefined;
}

module.exports.floor = number => {
    number = parseFloat(number);
    if (!isNaN(number) && typeof number === 'number') {
        if (number >= 0) {
            return parseInt(number);
        } else {
            return parseInt(number - 1);
        }
    }
    return undefined;
}

module.exports.mean = array => {
    if (array && array.length) {
        let sum = 0, len = array.length;
        for (let i = 0; i < len; i++) {
            sum += array[i] - 0;
        }
        return sum / len;
    }
    return undefined;
}

module.exports.random = (min, max) => {
    if (min === undefined && max === undefined) {
        return Math.random();
    }
    // if one parameter is passed
    let lonelyPar = min === undefined? max : max === undefined? min : undefined;
    if (lonelyPar) {
        min = 0, max = lonelyPar;
    }
    if (min > max) {
        let temp = min;
        min = max;
        max = temp;
    }
    return this.floor(Math.random() * (max - min + 1) + min);
}