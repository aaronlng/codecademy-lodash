const _ = {
    clamp(number, lower, upper) {
        let lowerClampedValue = Math.max(lower, number);
        let clampedValue = Math.min(upper, lowerClampedValue);
        return clampedValue;
    },
    inRange(number, start, end) {
        if (end === undefined) {
            end = start;
            start = 0;
        }
        if (start > end) {
            let temp = end;
            end = start;
            start = temp;
        }
        let isInRange = Boolean(number >= start && number < end)
        return isInRange;
    }
};




// Do not write or modify code below this line.
module.exports = _;