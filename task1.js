const stringLength = (string) => {
    return string.length;
}

const stringLength2 = (string) => {
    if (string.length >= 1 && string.length <= 10) {
        return string.length;
    }
    else {
        return "string must not be less than 1 or greater than 10";
    }
}

module.exports = { stringLength, stringLength2 };