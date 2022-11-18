import React from "react";

//create your first component
const Home = (props) => {
	return (
		<>
		<div className="container bg-dark text-light d-flex justify-content-center">
			<div className="row">
				<p><i className="bi bi-clock"></i></p>
			</div>
			<div id="six-digit">{props.sixDigit}</div>
			<div id="five-digit">{props.fiveDigit}</div>
			<div id="four-digit">{props.fourDigit}</div>
			<div id="three-digit">{props.threeDigit}</div>
			<div id="two-digit">{props.twoDigit}</div>
			<div id="one-digit">{props.oneDigit}</div>
		</div>
		</>
	);
};

export default Home;
