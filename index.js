let min = array => {
    if (array && array.length) {
        let minEl = array[0]-0;
        for (let i = 0; i < array.length; i++) {
            let current = array[i]-0;
            if (current < minEl) {
                minEl = current;
            }
        }
        return minEl;
    }
    return undefined;
}

let max = array => {
    if (array && array.length) {
        let maxEl = array[0]-0;
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

let sum = array => {
    if (array && array.length) {
        let sum = 0;
        for (let i = 0; i < array.length; i++) {
            sum += array[i]-0;
        }
        return sum;
    }
    return 0;
}

let ceil = number => {
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

let floor = number => {
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