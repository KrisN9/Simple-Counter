import React from "react";
import Counter from "./Counter";

//create your first component
const Home = (props) => {
	return (
		<>
		<Counter oneDigit = {one} />
		<div className="container bg-dark text-light d-flex justify-content-center">
			<div className="row">
				<p><i className="bi bi-clock"></i></p>
			</div>
			<div id="six-digit">{props.sixDigit % 10}</div>
			<div id="five-digit">{props.fiveDigit % 10}</div>
			<div id="four-digit">{props.fourDigit % 10}</div>
			<div id="three-digit">{props.threeDigit % 10}</div>
			<div id="two-digit">{props.twoDigit % 10}</div>
			<div id="one-digit">{props.oneDigit % 10}</div>
		</div>
		</>
	);
};

export default Home;
