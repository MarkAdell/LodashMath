let min = array => {
    if (array !== undefined && array.length) {
        let minEl = array[0];
        for (let i = 0; i < array.length; i++) {
            if (array[i] < minEl) {
                minEl = array[i];
            }
        }
        return minEl;
    }
    return 0;
}

let max = array => {
    if (array !== undefined && array.length) {
        let maxEl = array[0];
        for (let i = 0; i < array.length; i++) {
            if (array[i] > maxEl) {
                maxEl = array[i];
            }
        }
        return maxEl;
    }
    return 0;
}

let sum = array => {
    if (array !== undefined && array.length) {
        let sum = 0;
        for (let i = 0; i < array.length; i++) {
            sum += array[i];
        }
        return sum;
    }
    return 0;
}

let ceil = number => {
    if (number > 0) {
        return parseInt(number + 1);
    } else {
        return parseInt(number);
    }
}

let floor = number => {
    if (number >= 0) {
        return parseInt(number);
    } else {
        return parseInt(number - 1);
    }
}

let random = (min, max) => {
    if (min > max) {
        let temp = min;
        min = max;
        max = temp;
    }
    let random = floor(Math.random() * (max - min + 1) + min);
    return random;
}

module.exports = {
    min,
    max,
    sum,
    floor,
    ceil,
    random
}