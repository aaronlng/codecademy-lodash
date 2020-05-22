const _ = {
    clamp(number, lower, upper) {
        let lowerClampedValue = Math.max(lower, number);
        let clampedValue = Math.min(upper, lowerClampedValue);
        return clampedValue;
    }
};




// Do not write or modify code below this line.
module.exports = _;