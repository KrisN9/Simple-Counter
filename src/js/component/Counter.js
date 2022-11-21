import React from "react";
import { ProgressPlugin } from "webpack";

let counter = 0;

let Counter = () => {
    setInterval(function() {
        counter++;
        const one = Math.floor(counter/1);
        const two = Math.floor(counter/10);
        const three = Math.floor(counter/100);
        const four = Math.floor(counter/1000);
        const five = Math.floor(counter/10000);
        const six = Math.floor(counter/100000);
    }, 1000);
}

export default Counter