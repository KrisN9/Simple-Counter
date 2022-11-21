import React from "react";
import PropTypes from "prop-types";

let counter = 0;

let Counter = setInterval(() => {
    counter++;
    const one = Math.floor(counter/1);
    const two = Math.floor(counter/10);
    const three = Math.floor(counter/100);
    const four = Math.floor(counter/1000);
    const five = Math.floor(counter/10000);
    const six = Math.floor(counter/100000);
    oneDigit = {one};
    twoDigit = {two};
    threeDigit = {three};
    fourDigit = {four};
    fiveDigit = {five};
    sixDigit = {six};
}, 1000)

Counter.propTypes = {
    oneDigit: PropTypes.number,
    twoDigit: PropTypes.number,
    threeDigit: PropTypes.number,
    fourDigit: PropTypes.number,
    fiveDigit: PropTypes.number,
    sixDigit: PropTypes.number,
};

export default Counter