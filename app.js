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
    },
    words(string) {
        let words = string.split(' ');
        return words;
    },
    pad(string, length) {
        if (length <= string.length) {
            return string;
        }
        let startPaddingLength = Math.floor((length - string.length) / 2);
        let endPaddingLength = length - string.length - startPaddingLength;
        let paddedString = ' '.repeat(startPaddingLength) + string + ' '.repeat(endPaddingLength);
        return paddedString;
    },
    has(object, key) {
        let hasValue = object[key];
        if (hasValue != undefined) {
            return true;
        } else {
            return false;
        }
        return hasValue;
    },
    invert(object) {
        let invertedObject = {};
        for (key in object) {
            let originalValue = object[key];
            invertedObject.originalValue = key;
        }
        return invertedObject;
    },
    findKey(object, predicate) {
        for (key in object) {
            let value = object[key];
            let predicateReturnValue = predicate(value);
            if (predicateReturnValue) {
                return key;
            }
        }
        return undefined;
    }
};

// Do not write or modify code below this line.
module.exports = _;