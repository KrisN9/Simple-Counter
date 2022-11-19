import React from "react";

let counter = 0;

let CounterInterval = () => {
    setInterval(function() {
        const six = Math.floor(counter/100000);
        const five = Math.floor(counter/10000);
        const four = Math.floor(counter/1000);
        const three = Math.floor(counter/100);
        const two = Math.floor(counter/10);
        const one = Math.floor(counter/1);
        counter++;
        oneDigit={one};
        twoDigit={two};
        threeDigit={three};
        fourDigit={four};
        fiveDigit={five};
        sixDigit={six};
    }, 1000);
}


export default CounterInterval