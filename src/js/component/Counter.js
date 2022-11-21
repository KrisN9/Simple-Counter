import React from "react";

let counter = 0;

let Counter = () => {
    setInterval(function() {
        counter++;
        oneDigit= Math.floor(counter/1);
        twoDigit= Math.floor(counter/10);
        threeDigit= Math.floor(counter/100);
        fourDigit= Math.floor(counter/1000);
        fiveDigit= Math.floor(counter/10000);
        sixDigit= Math.floor(counter/100000);
    }, 1000);
}


export default Counter