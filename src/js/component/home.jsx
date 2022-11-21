import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Counter from "./Counter";

const Home = (props) => {
	const [counter, setCounter] = useState(0)
	useEffect(() => {
		const setIntervalCounter = setInterval (() => {
			setCounter(counter+1)
		}, 1000)
		return () => clearInterval (setIntervalCounter)
	})

    const one = Math.floor(counter/1);
    const two = Math.floor(counter/10);
    const three = Math.floor(counter/100);
    const four = Math.floor(counter/1000);
    const five = Math.floor(counter/10000);
    const six = Math.floor(counter/100000);
    /* oneDigit = {one};
    twoDigit = {two};
    threeDigit = {three};
    fourDigit = {four};
    fiveDigit = {five};
    sixDigit = {six}; */
    return (<Counter oneDigit = {one} twoDigit = {two} threeDigit = {three} fourDigit = {four} fiveDigit = {five} sixDigit = {six} />);
}

export default Home