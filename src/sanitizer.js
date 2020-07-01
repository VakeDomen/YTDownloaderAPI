
const conf = require("./config");

module.exports.checkQualityInput = (input) => {
    if (conf.qualities.includes(input)) {
        return input;
    }
}

module.exports.checkTypeInput = (input) => {
    if (conf.types.includes(input)) {
        return input;
    }
}